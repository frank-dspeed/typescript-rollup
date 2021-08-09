/* @internal */
namespace ts.codefix {
    export const importFixName = "import";
    const importFixId = "fixMissingImport";
    const errorCodes: readonly number[] = [
        Diagnostics.Cannot_find_name_0.code,
        Diagnostics.Cannot_find_name_0_Did_you_mean_1.code,
        Diagnostics.Cannot_find_name_0_Did_you_mean_the_instance_member_this_0.code,
        Diagnostics.Cannot_find_name_0_Did_you_mean_the_static_member_1_0.code,
        Diagnostics.Cannot_find_namespace_0.code,
        Diagnostics._0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead.code,
        Diagnostics._0_only_refers_to_a_type_but_is_being_used_as_a_value_here.code,
        Diagnostics.No_value_exists_in_scope_for_the_shorthand_property_0_Either_declare_one_or_provide_an_initializer.code
    ];

    registerCodeFix({
        errorCodes,
        getCodeActions(context) {
            const { errorCode, preferences, sourceFile, span } = context;
            const info = getFixesInfo(context, errorCode, span.start, /*useAutoImportProvider*/ true);
            if (!info) return undefined;
            const { fixes, symbolName } = info;
            const quotePreference = getQuotePreference(sourceFile, preferences);
            return fixes.map(fix => codeActionForFix(context, sourceFile, symbolName, fix, quotePreference));
        },
        fixIds: [importFixId],
        getAllCodeActions: context => {
            const { sourceFile, program, preferences, host } = context;
            const importAdder = createImportAdderWorker(sourceFile, program, /*useAutoImportProvider*/ true, preferences, host);
            eachDiagnostic(context, errorCodes, diag => importAdder.addImportFromDiagnostic(diag, context));
            return createCombinedCodeActions(textChanges.ChangeTracker.with(context, importAdder.writeFixes));
        },
    });

    export interface ImportAdder {
        addImportFromDiagnostic: (diagnostic: DiagnosticWithLocation, context: CodeFixContextBase) => void;
        addImportFromExportedSymbol: (exportedSymbol: Symbol, usageIsTypeOnly?: boolean) => void;
        writeFixes: (changeTracker: textChanges.ChangeTracker) => void;
    }

    export function createImportAdder(sourceFile: SourceFile, program: Program, preferences: UserPreferences, host: LanguageServiceHost): ImportAdder {
        return createImportAdderWorker(sourceFile, program, /*useAutoImportProvider*/ false, preferences, host);
    }

    function createImportAdderWorker(sourceFile: SourceFile, program: Program, useAutoImportProvider: boolean, preferences: UserPreferences, host: LanguageServiceHost): ImportAdder {
        const compilerOptions = program.getCompilerOptions();
        // Namespace fixes don't conflict, so just build a list.
        const addToNamespace: FixUseNamespaceImport[] = [];
        const importType: FixUseImportType[] = [];
        // Keys are import clause node IDs.
        const addToExisting = new Map<string, { readonly importClauseOrBindingPattern: ImportClause | ObjectBindingPattern, defaultImport: string | undefined; readonly namedImports: string[], canUseTypeOnlyImport: boolean }>();
        const newImports = new Map<string, Mutable<ImportsCollection & { useRequire: boolean }>>();
        return { addImportFromDiagnostic, addImportFromExportedSymbol, writeFixes };

        function addImportFromDiagnostic(diagnostic: DiagnosticWithLocation, context: CodeFixContextBase) {
            const info = getFixesInfo(context, diagnostic.code, diagnostic.start, useAutoImportProvider);
            if (!info || !info.fixes.length) return;
            addImport(info);
        }

        function addImportFromExportedSymbol(exportedSymbol: Symbol, usageIsTypeOnly?: boolean) {
            const moduleSymbol = Debug.checkDefined(exportedSymbol.parent);
            const symbolName = getNameForExportedSymbol(exportedSymbol, getEmitScriptTarget(compilerOptions));
            const checker = program.getTypeChecker();
            const symbol = checker.getMergedSymbol(skipAlias(exportedSymbol, checker));
            const exportInfos = getAllReExportingModules(sourceFile, symbol, moduleSymbol, symbolName, host, program, preferences, useAutoImportProvider);
            const preferTypeOnlyImport = !!usageIsTypeOnly && compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error;
            const useRequire = shouldUseRequire(sourceFile, program);
            const fix = getImportFixForSymbol(sourceFile, exportInfos, moduleSymbol, symbolName, program, /*position*/ undefined, preferTypeOnlyImport, useRequire, host, preferences);
            if (fix) {
                addImport({ fixes: [fix], symbolName });
            }
        }

        function addImport(info: FixesInfo) {
            const { fixes, symbolName } = info;
            const fix = first(fixes);
            switch (fix.kind) {
                case ImportFixKind.UseNamespace:
                    addToNamespace.push(fix);
                    break;
                case ImportFixKind.ImportType:
                    importType.push(fix);
                    break;
                case ImportFixKind.AddToExisting: {
                    const { importClauseOrBindingPattern, importKind, canUseTypeOnlyImport } = fix;
                    const key = String(getNodeId(importClauseOrBindingPattern));
                    let entry = addToExisting.get(key);
                    if (!entry) {
                        addToExisting.set(key, entry = { importClauseOrBindingPattern, defaultImport: undefined, namedImports: [], canUseTypeOnlyImport });
                    }
                    if (importKind === ImportKind.Named) {
                        pushIfUnique(entry.namedImports, symbolName);
                    }
                    else {
                        Debug.assert(entry.defaultImport === undefined || entry.defaultImport === symbolName, "(Add to Existing) Default import should be missing or match symbolName");
                        entry.defaultImport = symbolName;
                    }
                    break;
                }
                case ImportFixKind.AddNew: {
                    const { moduleSpecifier, importKind, useRequire, typeOnly } = fix;
                    let entry = newImports.get(moduleSpecifier);
                    if (!entry) {
                        newImports.set(moduleSpecifier, entry = { namedImports: [], namespaceLikeImport: undefined, typeOnly, useRequire });
                    }
                    else {
                        // An import clause can only be type-only if every import fix contributing to it can be type-only.
                        entry.typeOnly = entry.typeOnly && typeOnly;
                    }
                    switch (importKind) {
                        case ImportKind.Default:
                            Debug.assert(entry.defaultImport === undefined || entry.defaultImport === symbolName, "(Add new) Default import should be missing or match symbolName");
                            entry.defaultImport = symbolName;
                            break;
                        case ImportKind.Named:
                            pushIfUnique(entry.namedImports || (entry.namedImports = []), symbolName);
                            break;
                        case ImportKind.CommonJS:
                        case ImportKind.Namespace:
                            Debug.assert(entry.namespaceLikeImport === undefined || entry.namespaceLikeImport.name === symbolName, "Namespacelike import shoudl be missing or match symbolName");
                            entry.namespaceLikeImport = { importKind, name: symbolName };
                            break;
                    }
                    break;
                }
                default:
                    Debug.assertNever(fix, `fix wasn't never - got kind ${(fix as ImportFix).kind}`);
            }
        }

        function writeFixes(changeTracker: textChanges.ChangeTracker) {
            const quotePreference = getQuotePreference(sourceFile, preferences);
            for (const fix of addToNamespace) {
                addNamespaceQualifier(changeTracker, sourceFile, fix);
            }
            for (const fix of importType) {
                addImportType(changeTracker, sourceFile, fix, quotePreference);
            }
            addToExisting.forEach(({ importClauseOrBindingPattern, defaultImport, namedImports, canUseTypeOnlyImport }) => {
                doAddExistingFix(changeTracker, sourceFile, importClauseOrBindingPattern, defaultImport, namedImports, canUseTypeOnlyImport);
            });

            let newDeclarations: AnyImportOrRequireStatement | readonly AnyImportOrRequireStatement[] | undefined;
            newImports.forEach(({ useRequire, ...imports }, moduleSpecifier) => {
                const getDeclarations = useRequire ? getNewRequires : getNewImports;
                newDeclarations = combine(newDeclarations, getDeclarations(moduleSpecifier, quotePreference, imports));
            });
            if (newDeclarations) {
                insertImports(changeTracker, sourceFile, newDeclarations, /*blankLineBetween*/ true);
            }
        }
    }

    // Sorted with the preferred fix coming first.
    const enum ImportFixKind { UseNamespace, ImportType, AddToExisting, AddNew }
    type ImportFix = FixUseNamespaceImport | FixUseImportType | FixAddToExistingImport | FixAddNewImport;
    interface FixUseNamespaceImport {
        readonly kind: ImportFixKind.UseNamespace;
        readonly namespacePrefix: string;
        readonly position: number;
        readonly moduleSpecifier: string;
    }
    interface FixUseImportType {
        readonly kind: ImportFixKind.ImportType;
        readonly moduleSpecifier: string;
        readonly position: number;
        readonly exportInfo: SymbolExportInfo;
    }
    interface FixAddToExistingImport {
        readonly kind: ImportFixKind.AddToExisting;
        readonly importClauseOrBindingPattern: ImportClause | ObjectBindingPattern;
        readonly moduleSpecifier: string;
        readonly importKind: ImportKind.Default | ImportKind.Named;
        readonly canUseTypeOnlyImport: boolean;
    }
    interface FixAddNewImport {
        readonly kind: ImportFixKind.AddNew;
        readonly moduleSpecifier: string;
        readonly importKind: ImportKind;
        readonly typeOnly: boolean;
        readonly useRequire: boolean;
        readonly exportInfo?: SymbolExportInfo;
    }

    /** Information needed to augment an existing import declaration. */
    interface FixAddToExistingImportInfo {
        readonly declaration: AnyImportOrRequire;
        readonly importKind: ImportKind;
    }

    export function getImportCompletionAction(
        exportedSymbol: Symbol,
        moduleSymbol: Symbol,
        sourceFile: SourceFile,
        symbolName: string,
        host: LanguageServiceHost,
        program: Program,
        formatContext: formatting.FormatContext,
        position: number,
        preferences: UserPreferences,
    ): { readonly moduleSpecifier: string, readonly codeAction: CodeAction } {
        const compilerOptions = program.getCompilerOptions();
        const exportInfos = pathIsBareSpecifier(stripQuotes(moduleSymbol.name))
            ? [getSymbolExportInfoForSymbol(exportedSymbol, moduleSymbol, program, host)]
            : getAllReExportingModules(sourceFile, exportedSymbol, moduleSymbol, symbolName, host, program, preferences, /*useAutoImportProvider*/ true);
        const useRequire = shouldUseRequire(sourceFile, program);
        const preferTypeOnlyImport = compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error && !isSourceFileJS(sourceFile) && isValidTypeOnlyAliasUseSite(getTokenAtPosition(sourceFile, position));
        const fix = Debug.checkDefined(getImportFixForSymbol(sourceFile, exportInfos, moduleSymbol, symbolName, program, position, preferTypeOnlyImport, useRequire, host, preferences));
        return { moduleSpecifier: fix.moduleSpecifier, codeAction: codeFixActionToCodeAction(codeActionForFix({ host, formatContext, preferences }, sourceFile, symbolName, fix, getQuotePreference(sourceFile, preferences))) };
    }

    function getImportFixForSymbol(sourceFile: SourceFile, exportInfos: readonly SymbolExportInfo[], moduleSymbol: Symbol, symbolName: string, program: Program, position: number | undefined, preferTypeOnlyImport: boolean, useRequire: boolean, host: LanguageServiceHost, preferences: UserPreferences) {
        Debug.assert(exportInfos.some(info => info.moduleSymbol === moduleSymbol || info.symbol.parent === moduleSymbol), "Some exportInfo should match the specified moduleSymbol");
        return getBestFix(getImportFixes(exportInfos, symbolName, position, preferTypeOnlyImport, useRequire, program, sourceFile, host, preferences), sourceFile, program, host, preferences);
    }

    function codeFixActionToCodeAction({ description, changes, commands }: CodeFixAction): CodeAction {
        return { description, changes, commands };
    }

    function getSymbolExportInfoForSymbol(symbol: Symbol, moduleSymbol: Symbol, program: Program, host: LanguageServiceHost): SymbolExportInfo {
        const compilerOptions = program.getCompilerOptions();
        const mainProgramInfo = getInfoWithChecker(program.getTypeChecker(), /*isFromPackageJson*/ false);
        if (mainProgramInfo) {
            return mainProgramInfo;
        }
        const autoImportProvider = host.getPackageJsonAutoImportProvider?.()?.getTypeChecker();
        return Debug.checkDefined(autoImportProvider && getInfoWithChecker(autoImportProvider, /*isFromPackageJson*/ true), `Could not find symbol in specified module for code actions`);

        function getInfoWithChecker(checker: TypeChecker, isFromPackageJson: boolean): SymbolExportInfo | undefined {
            const defaultInfo = getDefaultLikeExportInfo(moduleSymbol, checker, compilerOptions);
            if (defaultInfo && skipAlias(defaultInfo.symbol, checker) === symbol) {
                return { symbol: defaultInfo.symbol, moduleSymbol, moduleFileName: undefined, exportKind: defaultInfo.exportKind, targetFlags: skipAlias(symbol, checker).flags, isFromPackageJson };
            }
            const named = checker.tryGetMemberInModuleExportsAndProperties(symbol.name, moduleSymbol);
            if (named && skipAlias(named, checker) === symbol) {
                return { symbol: named, moduleSymbol, moduleFileName: undefined, exportKind: ExportKind.Named, targetFlags: skipAlias(symbol, checker).flags, isFromPackageJson };
            }
        }
    }

    function getAllReExportingModules(importingFile: SourceFile, exportedSymbol: Symbol, exportingModuleSymbol: Symbol, symbolName: string, host: LanguageServiceHost, program: Program, preferences: UserPreferences, useAutoImportProvider: boolean): readonly SymbolExportInfo[] {
        const result: SymbolExportInfo[] = [];
        const compilerOptions = program.getCompilerOptions();
        const getModuleSpecifierResolutionHost = memoizeOne((isFromPackageJson: boolean) => {
            return createModuleSpecifierResolutionHost(isFromPackageJson ? host.getPackageJsonAutoImportProvider!()! : program, host);
        });

        forEachExternalModuleToImportFrom(program, host, useAutoImportProvider, (moduleSymbol, moduleFile, program, isFromPackageJson) => {
            const checker = program.getTypeChecker();
            // Don't import from a re-export when looking "up" like to `./index` or `../index`.
            if (moduleFile && moduleSymbol !== exportingModuleSymbol && startsWith(importingFile.fileName, getDirectoryPath(moduleFile.fileName))) {
                return;
            }

            const defaultInfo = getDefaultLikeExportInfo(moduleSymbol, checker, compilerOptions);
            if (defaultInfo && (defaultInfo.name === symbolName || moduleSymbolToValidIdentifier(moduleSymbol, compilerOptions.target) === symbolName) && skipAlias(defaultInfo.symbol, checker) === exportedSymbol && isImportable(program, moduleFile, isFromPackageJson)) {
                result.push({ symbol: defaultInfo.symbol, moduleSymbol, moduleFileName: moduleFile?.fileName, exportKind: defaultInfo.exportKind, targetFlags: skipAlias(defaultInfo.symbol, checker).flags, isFromPackageJson });
            }

            for (const exported of checker.getExportsAndPropertiesOfModule(moduleSymbol)) {
                if (exported.name === symbolName && skipAlias(exported, checker) === exportedSymbol && isImportable(program, moduleFile, isFromPackageJson)) {
                    result.push({ symbol: exported, moduleSymbol, moduleFileName: moduleFile?.fileName, exportKind: ExportKind.Named, targetFlags: skipAlias(exported, checker).flags, isFromPackageJson });
                }
            }
        });
        return result;

        function isImportable(program: Program, moduleFile: SourceFile | undefined, isFromPackageJson: boolean) {
            return !moduleFile || isImportableFile(program, importingFile, moduleFile, preferences, /*packageJsonFilter*/ undefined, getModuleSpecifierResolutionHost(isFromPackageJson), host.getModuleSpecifierCache?.());
        }
    }

    export function getModuleSpecifierForBestExportInfo(
        exportInfo: readonly SymbolExportInfo[],
        importingFile: SourceFile,
        program: Program,
        host: LanguageServiceHost,
        preferences: UserPreferences,
        fromCacheOnly?: boolean,
    ): { exportInfo?: SymbolExportInfo, moduleSpecifier: string, computedWithoutCacheCount: number } | undefined {
        const { fixes, computedWithoutCacheCount } = getNewImportFixes(
            program,
            importingFile,
            /*position*/ undefined,
            /*preferTypeOnlyImport*/ false,
            /*useRequire*/ false,
            exportInfo,
            host,
            preferences,
            fromCacheOnly);
        const result = getBestFix(fixes, importingFile, program, host, preferences);
        return result && { ...result, computedWithoutCacheCount };
    }

    function isTypeOnlyPosition(sourceFile: SourceFile, position: number) {
        return isValidTypeOnlyAliasUseSite(getTokenAtPosition(sourceFile, position));
    }

    function getImportFixes(
        exportInfos: readonly SymbolExportInfo[],
        symbolName: string,
        /** undefined only for missing JSX namespace */
        position: number | undefined,
        preferTypeOnlyImport: boolean,
        useRequire: boolean,
        program: Program,
        sourceFile: SourceFile,
        host: LanguageServiceHost,
        preferences: UserPreferences,
    ): readonly ImportFix[] {
        const checker = program.getTypeChecker();
        const existingImports = flatMap(exportInfos, info => getExistingImportDeclarations(info, checker, sourceFile, program.getCompilerOptions()));
        const useNamespace = position === undefined ? undefined : tryUseExistingNamespaceImport(existingImports, symbolName, position, checker);
        const addToExisting = tryAddToExistingImport(existingImports, position !== undefined && isTypeOnlyPosition(sourceFile, position));
        // Don't bother providing an action to add a new import if we can add to an existing one.
        const addImport = addToExisting ? [addToExisting] : getFixesForAddImport(exportInfos, existingImports, program, sourceFile, position, preferTypeOnlyImport, useRequire, host, preferences);
        return [...(useNamespace ? [useNamespace] : emptyArray), ...addImport];
    }

    function tryUseExistingNamespaceImport(existingImports: readonly FixAddToExistingImportInfo[], symbolName: string, position: number, checker: TypeChecker): FixUseNamespaceImport | undefined {
        // It is possible that multiple import statements with the same specifier exist in the file.
        // e.g.
        //
        //     import * as ns from "foo";
        //     import { member1, member2 } from "foo";
        //
        //     member3/**/ <-- cusor here
        //
        // in this case we should provie 2 actions:
        //     1. change "member3" to "ns.member3"
        //     2. add "member3" to the second import statement's import list
        // and it is up to the user to decide which one fits best.
        return firstDefined(existingImports, ({ declaration }): FixUseNamespaceImport | undefined => {
            const namespacePrefix = getNamespaceLikeImportText(declaration);
            const moduleSpecifier = tryGetModuleSpecifierFromDeclaration(declaration);
            if (namespacePrefix && moduleSpecifier) {
                const moduleSymbol = getTargetModuleFromNamespaceLikeImport(declaration, checker);
                if (moduleSymbol && moduleSymbol.exports!.has(escapeLeadingUnderscores(symbolName))) {
                    return { kind: ImportFixKind.UseNamespace, namespacePrefix, position, moduleSpecifier };
                }
            }
        });
    }

    function getTargetModuleFromNamespaceLikeImport(declaration: AnyImportOrRequire, checker: TypeChecker) {
        switch (declaration.kind) {
            case SyntaxKind.VariableDeclaration:
                return checker.resolveExternalModuleName(declaration.initializer.arguments[0]);
            case SyntaxKind.ImportEqualsDeclaration:
                return checker.getAliasedSymbol(declaration.symbol);
            case SyntaxKind.ImportDeclaration:
                const namespaceImport = tryCast(declaration.importClause?.namedBindings, isNamespaceImport);
                return namespaceImport && checker.getAliasedSymbol(namespaceImport.symbol);
            default:
                return Debug.assertNever(declaration);
        }
    }

    function getNamespaceLikeImportText(declaration: AnyImportOrRequire) {
        switch (declaration.kind) {
            case SyntaxKind.VariableDeclaration:
                return tryCast(declaration.name, isIdentifier)?.text;
            case SyntaxKind.ImportEqualsDeclaration:
                return declaration.name.text;
            case SyntaxKind.ImportDeclaration:
                return tryCast(declaration.importClause?.namedBindings, isNamespaceImport)?.name.text;
            default:
                return Debug.assertNever(declaration);
        }
    }

    function tryAddToExistingImport(existingImports: readonly FixAddToExistingImportInfo[], canUseTypeOnlyImport: boolean): FixAddToExistingImport | undefined {
        return firstDefined(existingImports, ({ declaration, importKind }): FixAddToExistingImport | undefined => {
            if (declaration.kind === SyntaxKind.ImportEqualsDeclaration) return undefined;
            if (declaration.kind === SyntaxKind.VariableDeclaration) {
                return (importKind === ImportKind.Named || importKind === ImportKind.Default) && declaration.name.kind === SyntaxKind.ObjectBindingPattern
                    ? { kind: ImportFixKind.AddToExisting, importClauseOrBindingPattern: declaration.name, importKind, moduleSpecifier: declaration.initializer.arguments[0].text, canUseTypeOnlyImport: false }
                    : undefined;
            }
            const { importClause } = declaration;
            if (!importClause || !isStringLiteralLike(declaration.moduleSpecifier)) return undefined;
            const { name, namedBindings } = importClause;
            // A type-only import may not have both a default and named imports, so the only way a name can
            // be added to an existing type-only import is adding a named import to existing named bindings.
            if (importClause.isTypeOnly && !(importKind === ImportKind.Named && namedBindings)) return undefined;
            return importKind === ImportKind.Default && !name || importKind === ImportKind.Named && (!namedBindings || namedBindings.kind === SyntaxKind.NamedImports)
                ? { kind: ImportFixKind.AddToExisting, importClauseOrBindingPattern: importClause, importKind, moduleSpecifier: declaration.moduleSpecifier.text, canUseTypeOnlyImport }
                : undefined;
        });
    }

    function getExistingImportDeclarations({ moduleSymbol, exportKind, targetFlags }: SymbolExportInfo, checker: TypeChecker, importingFile: SourceFile, compilerOptions: CompilerOptions): readonly FixAddToExistingImportInfo[] {
        // Can't use an es6 import for a type in JS.
        if (!(targetFlags & SymbolFlags.Value) && isSourceFileJS(importingFile)) return emptyArray;
        const importKind = getImportKind(importingFile, exportKind, compilerOptions);
        return mapDefined(importingFile.imports, (moduleSpecifier): FixAddToExistingImportInfo | undefined => {
            const i = importFromModuleSpecifier(moduleSpecifier);
            if (isRequireVariableDeclaration(i.parent)) {
                return checker.resolveExternalModuleName(moduleSpecifier) === moduleSymbol ? { declaration: i.parent, importKind } : undefined;
            }
            if (i.kind === SyntaxKind.ImportDeclaration || i.kind === SyntaxKind.ImportEqualsDeclaration) {
                return checker.getSymbolAtLocation(moduleSpecifier) === moduleSymbol ? { declaration: i, importKind } : undefined;
            }
        });
    }

    function shouldUseRequire(sourceFile: SourceFile, program: Program): boolean {
        // 1. TypeScript files don't use require variable declarations
        if (!isSourceFileJS(sourceFile)) {
            return false;
        }

        // 2. If the current source file is unambiguously CJS or ESM, go with that
        if (sourceFile.commonJsModuleIndicator && !sourceFile.externalModuleIndicator) return true;
        if (sourceFile.externalModuleIndicator && !sourceFile.commonJsModuleIndicator) return false;

        // 3. If there's a tsconfig/jsconfig, use its module setting
        const compilerOptions = program.getCompilerOptions();
        if (compilerOptions.configFile) {
            return getEmitModuleKind(compilerOptions) < ModuleKind.ES2015;
        }

        // 4. Match the first other JS file in the program that's unambiguously CJS or ESM
        for (const otherFile of program.getSourceFiles()) {
            if (otherFile === sourceFile || !isSourceFileJS(otherFile) || program.isSourceFileFromExternalLibrary(otherFile)) continue;
            if (otherFile.commonJsModuleIndicator && !otherFile.externalModuleIndicator) return true;
            if (otherFile.externalModuleIndicator && !otherFile.commonJsModuleIndicator) return false;
        }

        // 5. Literally nothing to go on
        return true;
    }

    function getNewImportFixes(
        program: Program,
        sourceFile: SourceFile,
        position: number | undefined,
        preferTypeOnlyImport: boolean,
        useRequire: boolean,
        moduleSymbols: readonly SymbolExportInfo[],
        host: LanguageServiceHost,
        preferences: UserPreferences,
        fromCacheOnly?: boolean,
    ): { computedWithoutCacheCount: number, fixes: readonly (FixAddNewImport | FixUseImportType)[] } {
        const isJs = isSourceFileJS(sourceFile);
        const compilerOptions = program.getCompilerOptions();
        const moduleSpecifierResolutionHost = createModuleSpecifierResolutionHost(program, host);
        const checker = program.getTypeChecker();
        const getModuleSpecifiers = fromCacheOnly
            ? (moduleSymbol: Symbol) => ({ moduleSpecifiers: moduleSpecifiers.tryGetModuleSpecifiersFromCache(moduleSymbol, sourceFile, moduleSpecifierResolutionHost, preferences), computedWithoutCache: false })
            : (moduleSymbol: Symbol) => moduleSpecifiers.getModuleSpecifiersWithCacheInfo(moduleSymbol, checker, compilerOptions, sourceFile, moduleSpecifierResolutionHost, preferences);

        let computedWithoutCacheCount = 0;
        const fixes = flatMap(moduleSymbols, exportInfo => {
            const { computedWithoutCache, moduleSpecifiers } = getModuleSpecifiers(exportInfo.moduleSymbol);
            computedWithoutCacheCount += computedWithoutCache ? 1 : 0;
            return moduleSpecifiers?.map((moduleSpecifier): FixAddNewImport | FixUseImportType =>
                // `position` should only be undefined at a missing jsx namespace, in which case we shouldn't be looking for pure types.
                !(exportInfo.targetFlags & SymbolFlags.Value) && isJs && position !== undefined
                    ? { kind: ImportFixKind.ImportType, moduleSpecifier, position, exportInfo }
                    : {
                        kind: ImportFixKind.AddNew,
                        moduleSpecifier,
                        importKind: getImportKind(sourceFile, exportInfo.exportKind, compilerOptions),
                        useRequire,
                        typeOnly: preferTypeOnlyImport,
                        exportInfo,
                    }
            );
        });

        return { computedWithoutCacheCount, fixes };
    }

    function getFixesForAddImport(
        exportInfos: readonly SymbolExportInfo[],
        existingImports: readonly FixAddToExistingImportInfo[],
        program: Program,
        sourceFile: SourceFile,
        position: number | undefined,
        preferTypeOnlyImport: boolean,
        useRequire: boolean,
        host: LanguageServiceHost,
        preferences: UserPreferences,
    ): readonly (FixAddNewImport | FixUseImportType)[] {
        const existingDeclaration = firstDefined(existingImports, info => newImportInfoFromExistingSpecifier(info, preferTypeOnlyImport, useRequire));
        return existingDeclaration ? [existingDeclaration] : getNewImportFixes(program, sourceFile, position, preferTypeOnlyImport, useRequire, exportInfos, host, preferences).fixes;
    }

    function newImportInfoFromExistingSpecifier({ declaration, importKind }: FixAddToExistingImportInfo, preferTypeOnlyImport: boolean, useRequire: boolean): FixAddNewImport | undefined {
        const moduleSpecifier = tryGetModuleSpecifierFromDeclaration(declaration);
        return moduleSpecifier
            ? { kind: ImportFixKind.AddNew, moduleSpecifier, importKind, typeOnly: preferTypeOnlyImport, useRequire }
            : undefined;
    }

    interface FixesInfo { readonly fixes: readonly ImportFix[]; readonly symbolName: string; }
    function getFixesInfo(context: CodeFixContextBase, errorCode: number, pos: number, useAutoImportProvider: boolean): FixesInfo | undefined {
        const symbolToken = getTokenAtPosition(context.sourceFile, pos);
        const info = errorCode === Diagnostics._0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead.code
            ? getFixesInfoForUMDImport(context, symbolToken)
            : isIdentifier(symbolToken) ? getFixesInfoForNonUMDImport(context, symbolToken, useAutoImportProvider) : undefined;
        return info && { ...info, fixes: sortFixes(info.fixes, context.sourceFile, context.program, context.host, context.preferences) };
    }

    function sortFixes(fixes: readonly ImportFix[], sourceFile: SourceFile, program: Program, host: LanguageServiceHost, preferences: UserPreferences): readonly ImportFix[] {
        const { allowsImportingSpecifier } = createPackageJsonImportFilter(sourceFile, preferences, host);
        return sort(fixes, (a, b) => compareValues(a.kind, b.kind) || compareModuleSpecifiers(a, b, sourceFile, program, allowsImportingSpecifier));
    }

    function getBestFix<T extends ImportFix>(fixes: readonly T[], sourceFile: SourceFile, program: Program, host: LanguageServiceHost, preferences: UserPreferences): T | undefined {
        if (!some(fixes)) return;
        // These will always be placed first if available, and are better than other kinds
        if (fixes[0].kind === ImportFixKind.UseNamespace || fixes[0].kind === ImportFixKind.AddToExisting) {
            return fixes[0];
        }
        const { allowsImportingSpecifier } = createPackageJsonImportFilter(sourceFile, preferences, host);
        return fixes.reduce((best, fix) =>
            compareModuleSpecifiers(fix, best, sourceFile, program, allowsImportingSpecifier) === Comparison.LessThan ? fix : best
        );
    }

    function compareModuleSpecifiers(a: ImportFix, b: ImportFix, importingFile: SourceFile, program: Program, allowsImportingSpecifier: (specifier: string) => boolean): Comparison {
        if (a.kind !== ImportFixKind.UseNamespace && b.kind !== ImportFixKind.UseNamespace) {
            return compareBooleans(allowsImportingSpecifier(a.moduleSpecifier), allowsImportingSpecifier(b.moduleSpecifier))
                || compareNodeCoreModuleSpecifiers(a.moduleSpecifier, b.moduleSpecifier, importingFile, program)
                || compareNumberOfDirectorySeparators(a.moduleSpecifier, b.moduleSpecifier);
        }
        return Comparison.EqualTo;
    }

    function compareNodeCoreModuleSpecifiers(a: string, b: string, importingFile: SourceFile, program: Program): Comparison {
        if (startsWith(a, "node:") && !startsWith(b, "node:")) return shouldUseUriStyleNodeCoreModules(importingFile, program) ? Comparison.LessThan : Comparison.GreaterThan;
        if (startsWith(b, "node:") && !startsWith(a, "node:")) return shouldUseUriStyleNodeCoreModules(importingFile, program) ? Comparison.GreaterThan : Comparison.LessThan;
        return Comparison.EqualTo;
    }

    function getFixesInfoForUMDImport({ sourceFile, program, host, preferences }: CodeFixContextBase, token: Node): FixesInfo | undefined {
        const checker = program.getTypeChecker();
        const umdSymbol = getUmdSymbol(token, checker);
        if (!umdSymbol) return undefined;
        const symbol = checker.getAliasedSymbol(umdSymbol);
        const symbolName = umdSymbol.name;
        const exportInfos: readonly SymbolExportInfo[] = [{ symbol: umdSymbol, moduleSymbol: symbol, moduleFileName: undefined, exportKind: ExportKind.UMD, targetFlags: symbol.flags, isFromPackageJson: false }];
        const useRequire = shouldUseRequire(sourceFile, program);
        const fixes = getImportFixes(exportInfos, symbolName, isIdentifier(token) ? token.getStart(sourceFile) : undefined, /*preferTypeOnlyImport*/ false, useRequire, program, sourceFile, host, preferences);
        return { fixes, symbolName };
    }
    function getUmdSymbol(token: Node, checker: TypeChecker): Symbol | undefined {
        // try the identifier to see if it is the umd symbol
        const umdSymbol = isIdentifier(token) ? checker.getSymbolAtLocation(token) : undefined;
        if (isUMDExportSymbol(umdSymbol)) return umdSymbol;

        // The error wasn't for the symbolAtLocation, it was for the JSX tag itself, which needs access to e.g. `React`.
        const { parent } = token;
        return (isJsxOpeningLikeElement(parent) && parent.tagName === token) || isJsxOpeningFragment(parent)
            ? tryCast(checker.resolveName(checker.getJsxNamespace(parent), isJsxOpeningLikeElement(parent) ? token : parent, SymbolFlags.Value, /*excludeGlobals*/ false), isUMDExportSymbol)
            : undefined;
    }

    /**
     * @param forceImportKeyword Indicates that the user has already typed `import`, so the result must start with `import`.
     * (In other words, do not allow `const x = require("...")` for JS files.)
     */
    export function getImportKind(importingFile: SourceFile, exportKind: ExportKind, compilerOptions: CompilerOptions, forceImportKeyword?: boolean): ImportKind {
        switch (exportKind) {
            case ExportKind.Named: return ImportKind.Named;
            case ExportKind.Default: return ImportKind.Default;
            case ExportKind.ExportEquals: return getExportEqualsImportKind(importingFile, compilerOptions, !!forceImportKeyword);
            case ExportKind.UMD: return getUmdImportKind(importingFile, compilerOptions, !!forceImportKeyword);
            default: return Debug.assertNever(exportKind);
        }
    }

    function getUmdImportKind(importingFile: SourceFile, compilerOptions: CompilerOptions, forceImportKeyword: boolean): ImportKind {
        // Import a synthetic `default` if enabled.
        if (getAllowSyntheticDefaultImports(compilerOptions)) {
            return ImportKind.Default;
        }

        // When a synthetic `default` is unavailable, use `import..require` if the module kind supports it.
        const moduleKind = getEmitModuleKind(compilerOptions);
        switch (moduleKind) {
            case ModuleKind.AMD:
            case ModuleKind.CommonJS:
            case ModuleKind.UMD:
                if (isInJSFile(importingFile)) {
                    return isExternalModule(importingFile) || forceImportKeyword ? ImportKind.Namespace : ImportKind.CommonJS;
                }
                return ImportKind.CommonJS;
            case ModuleKind.System:
            case ModuleKind.ES2015:
            case ModuleKind.ES2020:
            case ModuleKind.ESNext:
            case ModuleKind.None:
                // Fall back to the `import * as ns` style import.
                return ImportKind.Namespace;
            default:
                return Debug.assertNever(moduleKind, `Unexpected moduleKind ${moduleKind}`);
        }
    }

    function getFixesInfoForNonUMDImport({ sourceFile, program, cancellationToken, host, preferences }: CodeFixContextBase, symbolToken: Identifier, useAutoImportProvider: boolean): FixesInfo | undefined {
        const checker = program.getTypeChecker();
        const compilerOptions = program.getCompilerOptions();
        const symbolName = getSymbolName(sourceFile, checker, symbolToken, compilerOptions);
        // "default" is a keyword and not a legal identifier for the import, so we don't expect it here
        Debug.assert(symbolName !== InternalSymbolName.Default, "'default' isn't a legal identifier and couldn't occur here");

        const preferTypeOnlyImport = compilerOptions.importsNotUsedAsValues === ImportsNotUsedAsValues.Error && isValidTypeOnlyAliasUseSite(symbolToken);
        const useRequire = shouldUseRequire(sourceFile, program);
        const exportInfos = getExportInfos(symbolName, getMeaningFromLocation(symbolToken), cancellationToken, sourceFile, program, useAutoImportProvider, host, preferences);
        const fixes = arrayFrom(flatMapIterator(exportInfos.entries(), ([_, exportInfos]) =>
            getImportFixes(exportInfos, symbolName, symbolToken.getStart(sourceFile), preferTypeOnlyImport, useRequire, program, sourceFile, host, preferences)));
        return { fixes, symbolName };
    }

    function getSymbolName(sourceFile: SourceFile, checker: TypeChecker, symbolToken: Identifier, compilerOptions: CompilerOptions): string {
        const parent = symbolToken.parent;
        if ((isJsxOpeningLikeElement(parent) || isJsxClosingElement(parent)) && parent.tagName === symbolToken && compilerOptions.jsx !== JsxEmit.ReactJSX && compilerOptions.jsx !== JsxEmit.ReactJSXDev) {
            const jsxNamespace = checker.getJsxNamespace(sourceFile);
            if (isIntrinsicJsxName(symbolToken.text) || !checker.resolveName(jsxNamespace, parent, SymbolFlags.Value, /*excludeGlobals*/ true)) {
                return jsxNamespace;
            }
        }
        return symbolToken.text;
    }

    // Returns a map from an exported symbol's ID to a list of every way it's (re-)exported.
    function getExportInfos(
        symbolName: string,
        currentTokenMeaning: SemanticMeaning,
        cancellationToken: CancellationToken,
        fromFile: SourceFile,
        program: Program,
        useAutoImportProvider: boolean,
        host: LanguageServiceHost,
        preferences: UserPreferences,
    ): ReadonlyESMap<string, readonly SymbolExportInfo[]> {
        // For each original symbol, keep all re-exports of that symbol together so we can call `getCodeActionsForImport` on the whole group at once.
        // Maps symbol id to info for modules providing that symbol (original export + re-exports).
        const originalSymbolToExportInfos = createMultiMap<SymbolExportInfo>();
        const packageJsonFilter = createPackageJsonImportFilter(fromFile, preferences, host);
        const moduleSpecifierCache = host.getModuleSpecifierCache?.();
        const getModuleSpecifierResolutionHost = memoizeOne((isFromPackageJson: boolean) => {
            return createModuleSpecifierResolutionHost(isFromPackageJson ? host.getPackageJsonAutoImportProvider!()! : program, host);
        });
        function addSymbol(moduleSymbol: Symbol, toFile: SourceFile | undefined, exportedSymbol: Symbol, exportKind: ExportKind, program: Program, isFromPackageJson: boolean): void {
            const moduleSpecifierResolutionHost = getModuleSpecifierResolutionHost(isFromPackageJson);
            if (toFile && isImportableFile(program, fromFile, toFile, preferences, packageJsonFilter, moduleSpecifierResolutionHost, moduleSpecifierCache) ||
                !toFile && packageJsonFilter.allowsImportingAmbientModule(moduleSymbol, moduleSpecifierResolutionHost)
            ) {
                const checker = program.getTypeChecker();
                originalSymbolToExportInfos.add(getUniqueSymbolId(exportedSymbol, checker).toString(), { symbol: exportedSymbol, moduleSymbol, moduleFileName: toFile?.fileName, exportKind, targetFlags: skipAlias(exportedSymbol, checker).flags, isFromPackageJson });
            }
        }
        forEachExternalModuleToImportFrom(program, host, useAutoImportProvider, (moduleSymbol, sourceFile, program, isFromPackageJson) => {
            const checker = program.getTypeChecker();
            cancellationToken.throwIfCancellationRequested();

            const compilerOptions = program.getCompilerOptions();
            const defaultInfo = getDefaultLikeExportInfo(moduleSymbol, checker, compilerOptions);
            if (defaultInfo && (defaultInfo.name === symbolName || moduleSymbolToValidIdentifier(moduleSymbol, compilerOptions.target) === symbolName) && symbolHasMeaning(defaultInfo.symbolForMeaning, currentTokenMeaning)) {
                addSymbol(moduleSymbol, sourceFile, defaultInfo.symbol, defaultInfo.exportKind, program, isFromPackageJson);
            }

            // check exports with the same name
            const exportSymbolWithIdenticalName = checker.tryGetMemberInModuleExportsAndProperties(symbolName, moduleSymbol);
            if (exportSymbolWithIdenticalName && symbolHasMeaning(exportSymbolWithIdenticalName, currentTokenMeaning)) {
                addSymbol(moduleSymbol, sourceFile, exportSymbolWithIdenticalName, ExportKind.Named, program, isFromPackageJson);
            }
        });
        return originalSymbolToExportInfos;
    }

    function getExportEqualsImportKind(importingFile: SourceFile, compilerOptions: CompilerOptions, forceImportKeyword: boolean): ImportKind {
        const allowSyntheticDefaults = getAllowSyntheticDefaultImports(compilerOptions);
        const isJS = isInJSFile(importingFile);
        // 1. 'import =' will not work in es2015+ TS files, so the decision is between a default
        //    and a namespace import, based on allowSyntheticDefaultImports/esModuleInterop.
        if (!isJS && getEmitModuleKind(compilerOptions) >= ModuleKind.ES2015) {
            return allowSyntheticDefaults ? ImportKind.Default : ImportKind.Namespace;
        }
        // 2. 'import =' will not work in JavaScript, so the decision is between a default import,
        //    a namespace import, and const/require.
        if (isJS) {
            return isExternalModule(importingFile) || forceImportKeyword
                ? allowSyntheticDefaults ? ImportKind.Default : ImportKind.Namespace
                : ImportKind.CommonJS;
        }
        // 3. At this point the most correct choice is probably 'import =', but people
        //    really hate that, so look to see if the importing file has any precedent
        //    on how to handle it.
        for (const statement of importingFile.statements) {
            // `import foo` parses as an ImportEqualsDeclaration even though it could be an ImportDeclaration
            if (isImportEqualsDeclaration(statement) && !nodeIsMissing(statement.moduleReference)) {
                return ImportKind.CommonJS;
            }
        }
        // 4. We have no precedent to go on, so just use a default import if
        //    allowSyntheticDefaultImports/esModuleInterop is enabled.
        return allowSyntheticDefaults ? ImportKind.Default : ImportKind.CommonJS;
    }

    function codeActionForFix(context: textChanges.TextChangesContext, sourceFile: SourceFile, symbolName: string, fix: ImportFix, quotePreference: QuotePreference): CodeFixAction {
        let diag!: DiagnosticAndArguments;
        const changes = textChanges.ChangeTracker.with(context, tracker => {
            diag = codeActionForFixWorker(tracker, sourceFile, symbolName, fix, quotePreference);
        });
        return createCodeFixAction(importFixName, changes, diag, importFixId, Diagnostics.Add_all_missing_imports);
    }
    function codeActionForFixWorker(changes: textChanges.ChangeTracker, sourceFile: SourceFile, symbolName: string, fix: ImportFix, quotePreference: QuotePreference): DiagnosticAndArguments {
        switch (fix.kind) {
            case ImportFixKind.UseNamespace:
                addNamespaceQualifier(changes, sourceFile, fix);
                return [Diagnostics.Change_0_to_1, symbolName, `${fix.namespacePrefix}.${symbolName}`];
            case ImportFixKind.ImportType:
                addImportType(changes, sourceFile, fix, quotePreference);
                return [Diagnostics.Change_0_to_1, symbolName, getImportTypePrefix(fix.moduleSpecifier, quotePreference) + symbolName];
            case ImportFixKind.AddToExisting: {
                const { importClauseOrBindingPattern, importKind, canUseTypeOnlyImport, moduleSpecifier } = fix;
                doAddExistingFix(changes, sourceFile, importClauseOrBindingPattern, importKind === ImportKind.Default ? symbolName : undefined, importKind === ImportKind.Named ? [symbolName] : emptyArray, canUseTypeOnlyImport);
                const moduleSpecifierWithoutQuotes = stripQuotes(moduleSpecifier);
                return [importKind === ImportKind.Default ? Diagnostics.Add_default_import_0_to_existing_import_declaration_from_1 : Diagnostics.Add_0_to_existing_import_declaration_from_1, symbolName, moduleSpecifierWithoutQuotes]; // you too!
            }
            case ImportFixKind.AddNew: {
                const { importKind, moduleSpecifier, typeOnly, useRequire } = fix;
                const getDeclarations = useRequire ? getNewRequires : getNewImports;
                const importsCollection = importKind === ImportKind.Default ? { defaultImport: symbolName, typeOnly } :
                    importKind === ImportKind.Named ? { namedImports: [symbolName], typeOnly } :
                    { namespaceLikeImport: { importKind, name: symbolName }, typeOnly };
                insertImports(changes, sourceFile, getDeclarations(moduleSpecifier, quotePreference, importsCollection), /*blankLineBetween*/ true);
                return [importKind === ImportKind.Default ? Diagnostics.Import_default_0_from_module_1 : Diagnostics.Import_0_from_module_1, symbolName, moduleSpecifier];
            }
            default:
                return Debug.assertNever(fix, `Unexpected fix kind ${(fix as ImportFix).kind}`);
        }
    }

    function doAddExistingFix(changes: textChanges.ChangeTracker, sourceFile: SourceFile, clause: ImportClause | ObjectBindingPattern, defaultImport: string | undefined, namedImports: readonly string[], canUseTypeOnlyImport: boolean): void {
        if (clause.kind === SyntaxKind.ObjectBindingPattern) {
            if (defaultImport) {
                addElementToBindingPattern(clause, defaultImport, "default");
            }
            for (const specifier of namedImports) {
                addElementToBindingPattern(clause, specifier, /*propertyName*/ undefined);
            }
            return;
        }

        const convertTypeOnlyToRegular = !canUseTypeOnlyImport && clause.isTypeOnly;
        if (defaultImport) {
            Debug.assert(!clause.name, "Cannot add a default import to an import clause that already has one");
            changes.insertNodeAt(sourceFile, clause.getStart(sourceFile), factory.createIdentifier(defaultImport), { suffix: ", " });
        }

        if (namedImports.length) {
            const existingSpecifiers = clause.namedBindings && cast(clause.namedBindings, isNamedImports).elements;
            const newSpecifiers = stableSort(
                namedImports.map(name => factory.createImportSpecifier(/*propertyName*/ undefined, factory.createIdentifier(name))),
                OrganizeImports.compareImportOrExportSpecifiers);

            if (existingSpecifiers?.length && OrganizeImports.importSpecifiersAreSorted(existingSpecifiers)) {
                for (const spec of newSpecifiers) {
                    const insertionIndex = OrganizeImports.getImportSpecifierInsertionIndex(existingSpecifiers, spec);
                    const prevSpecifier = (clause.namedBindings as NamedImports).elements[insertionIndex - 1];
                    if (prevSpecifier) {
                        changes.insertNodeInListAfter(sourceFile, prevSpecifier, spec);
                    }
                    else {
                        changes.insertNodeBefore(
                            sourceFile,
                            existingSpecifiers[0],
                            spec,
                            !positionsAreOnSameLine(existingSpecifiers[0].getStart(), clause.parent.getStart(), sourceFile));
                    }
                }
            }
            else if (existingSpecifiers?.length) {
                for (const spec of newSpecifiers) {
                    changes.insertNodeInListAfter(sourceFile, last(existingSpecifiers), spec, existingSpecifiers);
                }
            }
            else {
                if (newSpecifiers.length) {
                    const namedImports = factory.createNamedImports(newSpecifiers);
                    if (clause.namedBindings) {
                        changes.replaceNode(sourceFile, clause.namedBindings, namedImports);
                    }
                    else {
                        changes.insertNodeAfter(sourceFile, Debug.checkDefined(clause.name, "Import clause must have either named imports or a default import"), namedImports);
                    }
                }
            }
        }

        if (convertTypeOnlyToRegular) {
            changes.delete(sourceFile, getTypeKeywordOfTypeOnlyImport(clause, sourceFile));
        }

        function addElementToBindingPattern(bindingPattern: ObjectBindingPattern, name: string, propertyName: string | undefined) {
            const element = factory.createBindingElement(/*dotDotDotToken*/ undefined, propertyName, name);
            if (bindingPattern.elements.length) {
                changes.insertNodeInListAfter(sourceFile, last(bindingPattern.elements), element);
            }
            else {
                changes.replaceNode(sourceFile, bindingPattern, factory.createObjectBindingPattern([element]));
            }
        }
    }

    function addNamespaceQualifier(changes: textChanges.ChangeTracker, sourceFile: SourceFile, { namespacePrefix, position }: FixUseNamespaceImport): void {
        changes.insertText(sourceFile, position, namespacePrefix + ".");
    }

    function addImportType(changes: textChanges.ChangeTracker, sourceFile: SourceFile, { moduleSpecifier, position }: FixUseImportType, quotePreference: QuotePreference): void {
        changes.insertText(sourceFile, position, getImportTypePrefix(moduleSpecifier, quotePreference));
    }

    function getImportTypePrefix(moduleSpecifier: string, quotePreference: QuotePreference): string {
        const quote = getQuoteFromPreference(quotePreference);
        return `import(${quote}${moduleSpecifier}${quote}).`;
    }

    interface ImportsCollection {
        readonly typeOnly: boolean;
        readonly defaultImport?: string;
        readonly namedImports?: string[];
        readonly namespaceLikeImport?: {
            readonly importKind: ImportKind.CommonJS | ImportKind.Namespace;
            readonly name: string;
        };
    }
    function getNewImports(moduleSpecifier: string, quotePreference: QuotePreference, imports: ImportsCollection): AnyImportSyntax | readonly AnyImportSyntax[] {
        const quotedModuleSpecifier = makeStringLiteral(moduleSpecifier, quotePreference);
        let statements: AnyImportSyntax | readonly AnyImportSyntax[] | undefined;
        if (imports.defaultImport !== undefined || imports.namedImports?.length) {
            statements = combine(statements, makeImport(
                imports.defaultImport === undefined ? undefined : factory.createIdentifier(imports.defaultImport),
                imports.namedImports?.map(n => factory.createImportSpecifier(/*propertyName*/ undefined, factory.createIdentifier(n))), moduleSpecifier, quotePreference, imports.typeOnly));
        }
        const { namespaceLikeImport, typeOnly } = imports;
        if (namespaceLikeImport) {
            const declaration = namespaceLikeImport.importKind === ImportKind.CommonJS
                ? factory.createImportEqualsDeclaration(
                    /*decorators*/ undefined,
                    /*modifiers*/ undefined,
                    typeOnly,
                    factory.createIdentifier(namespaceLikeImport.name),
                    factory.createExternalModuleReference(quotedModuleSpecifier))
                : factory.createImportDeclaration(
                    /*decorators*/ undefined,
                    /*modifiers*/ undefined,
                    factory.createImportClause(
                        typeOnly,
                        /*name*/ undefined,
                        factory.createNamespaceImport(factory.createIdentifier(namespaceLikeImport.name))),
                    quotedModuleSpecifier);
            statements = combine(statements, declaration);
        }
        return Debug.checkDefined(statements);
    }

    function getNewRequires(moduleSpecifier: string, quotePreference: QuotePreference, imports: ImportsCollection): RequireVariableStatement | readonly RequireVariableStatement[] {
        const quotedModuleSpecifier = makeStringLiteral(moduleSpecifier, quotePreference);
        let statements: RequireVariableStatement | readonly RequireVariableStatement[] | undefined;
        // const { default: foo, bar, etc } = require('./mod');
        if (imports.defaultImport || imports.namedImports?.length) {
            const bindingElements = imports.namedImports?.map(name => factory.createBindingElement(/*dotDotDotToken*/ undefined, /*propertyName*/ undefined, name)) || [];
            if (imports.defaultImport) {
                bindingElements.unshift(factory.createBindingElement(/*dotDotDotToken*/ undefined, "default", imports.defaultImport));
            }
            const declaration = createConstEqualsRequireDeclaration(factory.createObjectBindingPattern(bindingElements), quotedModuleSpecifier);
            statements = combine(statements, declaration);
        }
        // const foo = require('./mod');
        if (imports.namespaceLikeImport) {
            const declaration = createConstEqualsRequireDeclaration(imports.namespaceLikeImport.name, quotedModuleSpecifier);
            statements = combine(statements, declaration);
        }
        return Debug.checkDefined(statements);
    }

    function createConstEqualsRequireDeclaration(name: string | ObjectBindingPattern, quotedModuleSpecifier: StringLiteral): RequireVariableStatement {
        return factory.createVariableStatement(
            /*modifiers*/ undefined,
            factory.createVariableDeclarationList([
                factory.createVariableDeclaration(
                    typeof name === "string" ? factory.createIdentifier(name) : name,
                    /*exclamationToken*/ undefined,
                    /*type*/ undefined,
                    factory.createCallExpression(factory.createIdentifier("require"), /*typeArguments*/ undefined, [quotedModuleSpecifier]))],
                NodeFlags.Const)) as RequireVariableStatement;
    }

    function symbolHasMeaning({ declarations }: Symbol, meaning: SemanticMeaning): boolean {
        return some(declarations, decl => !!(getMeaningFromDeclaration(decl) & meaning));
    }

    export function moduleSymbolToValidIdentifier(moduleSymbol: Symbol, target: ScriptTarget | undefined): string {
        return moduleSpecifierToValidIdentifier(removeFileExtension(stripQuotes(moduleSymbol.name)), target);
    }

    export function moduleSpecifierToValidIdentifier(moduleSpecifier: string, target: ScriptTarget | undefined): string {
        const baseName = getBaseFileName(removeSuffix(moduleSpecifier, "/index"));
        let res = "";
        let lastCharWasValid = true;
        const firstCharCode = baseName.charCodeAt(0);
        if (isIdentifierStart(firstCharCode, target)) {
            res += String.fromCharCode(firstCharCode);
        }
        else {
            lastCharWasValid = false;
        }
        for (let i = 1; i < baseName.length; i++) {
            const ch = baseName.charCodeAt(i);
            const isValid = isIdentifierPart(ch, target);
            if (isValid) {
                let char = String.fromCharCode(ch);
                if (!lastCharWasValid) {
                    char = char.toUpperCase();
                }
                res += char;
            }
            lastCharWasValid = isValid;
        }
        // Need `|| "_"` to ensure result isn't empty.
        return !isStringANonContextualKeyword(res) ? res || "_" : `_${res}`;
    }
}
