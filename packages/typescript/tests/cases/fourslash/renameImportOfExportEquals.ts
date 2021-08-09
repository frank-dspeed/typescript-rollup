/// <reference path='fourslash.ts' />

////[|declare namespace [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}N|] {
////    [|export var [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 2 |}x|]: number;|]
////}|]
////declare module "mod" {
////    [|export = [|{| "contextRangeIndex": 4 |}N|];|]
////}
////declare module "a" {
////    [|import * as [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 6 |}N|] from "mod";|]
////    [|export { [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 8 |}N|] };|] // Renaming N here would rename
////}
////declare module "b" {
////    [|import { [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 10 |}N|] } from "a";|]
////    export const y: typeof [|N|].[|x|];
////}

const [N0Def, N0, x0Def, x0, N1Def, N1, a0Def, a0, a1Def, a1, b0Def, b0, b1, x1] = test.ranges();
const nRanges = [N0, N1];
const aRanges = [a0, a1];
const bRanges = [b0, b1];
const xRanges = [x0, x1];

const nGroup = { definition: "namespace N", ranges: nRanges };
const aGroup = { definition: "(alias) namespace N\nimport N", ranges: aRanges };
const bGroup = { definition: "(alias) namespace N\nimport N", ranges: [b0, b1] };

verify.referenceGroups(nRanges, [nGroup, aGroup, bGroup]);
verify.referenceGroups([a0, a1], [aGroup, nGroup, bGroup]);
verify.referenceGroups(bRanges, [bGroup, aGroup, nGroup]);
verify.singleReferenceGroup("var N.x: number", xRanges);

verify.renameLocations(nRanges, [N0, N1, a0, { range: a1, suffixText: " as N" }]);
verify.renameLocations(a0, [a0, { range: a1, suffixText: " as N" }]);
verify.renameLocations(a1, [{ range: a1, prefixText: "N as " }, ...bRanges]);
verify.renameLocations(bRanges, [{ range: b0, prefixText: "N as " }, b1]);
verify.rangesAreRenameLocations(xRanges);