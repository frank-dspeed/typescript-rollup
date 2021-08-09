Input::
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/user/username/projects/solution/app/fileWithError.ts]
export var myClassWithError = class {
        tags() { }
        
    };

//// [/user/username/projects/solution/app/fileWithoutError.ts]
export class myClass { }

//// [/user/username/projects/solution/app/tsconfig.json]
{"compilerOptions":{"composite":true}}


/a/lib/tsc.js -b -w app
Output::
>> Screen clear
[[90m12:00:25 AM[0m] Starting compilation in watch mode...

[[90m12:00:38 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/solution/app/fileWithError.ts","/user/username/projects/solution/app/fileWithoutError.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/user/username/projects/solution/app/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/solution/app/fileWithError.ts
/user/username/projects/solution/app/fileWithoutError.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/solution/app/fileWithError.ts
/user/username/projects/solution/app/fileWithoutError.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/solution/app/filewitherror.ts (used version)
/user/username/projects/solution/app/filewithouterror.ts (used version)

WatchedFiles::
/user/username/projects/solution/app/tsconfig.json:
  {"fileName":"/user/username/projects/solution/app/tsconfig.json","pollingInterval":250}
/user/username/projects/solution/app/filewitherror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithError.ts","pollingInterval":250}
/user/username/projects/solution/app/filewithouterror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithoutError.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/solution/app:
  {"directoryName":"/user/username/projects/solution/app","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/solution/app/fileWithError.js]
"use strict";
exports.__esModule = true;
exports.myClassWithError = void 0;
exports.myClassWithError = /** @class */ (function () {
    function myClassWithError() {
    }
    myClassWithError.prototype.tags = function () { };
    return myClassWithError;
}());


//// [/user/username/projects/solution/app/fileWithError.d.ts]
export declare var myClassWithError: {
    new (): {
        tags(): void;
    };
};


//// [/user/username/projects/solution/app/fileWithoutError.js]
"use strict";
exports.__esModule = true;
exports.myClass = void 0;
var myClass = /** @class */ (function () {
    function myClass() {
    }
    return myClass;
}());
exports.myClass = myClass;


//// [/user/username/projects/solution/app/fileWithoutError.d.ts]
export declare class myClass {
}


//// [/user/username/projects/solution/app/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./filewitherror.ts","./filewithouterror.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},"-8106435186-export var myClassWithError = class {\n        tags() { }\n        \n    };","-11785903855-export class myClass { }"],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}

//// [/user/username/projects/solution/app/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./filewitherror.ts",
      "./filewithouterror.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./filewitherror.ts": {
        "version": "-8106435186-export var myClassWithError = class {\n        tags() { }\n        \n    };",
        "signature": "-8106435186-export var myClassWithError = class {\n        tags() { }\n        \n    };"
      },
      "./filewithouterror.ts": {
        "version": "-11785903855-export class myClass { }",
        "signature": "-11785903855-export class myClass { }"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./filewitherror.ts",
      "./filewithouterror.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 782
}


Change:: Introduce error

Input::
//// [/user/username/projects/solution/app/fileWithError.ts]
export var myClassWithError = class {
        tags() { }
        private p = 12
    };


Output::
>> Screen clear
[[90m12:00:42 AM[0m] File change detected. Starting incremental compilation...

[96mapp/fileWithError.ts[0m:[93m1[0m:[93m12[0m - [91merror[0m[90m TS4094: [0mProperty 'p' of exported class expression may not be private or protected.

[7m1[0m export var myClassWithError = class {
[7m [0m [91m           ~~~~~~~~~~~~~~~~[0m

[[90m12:00:43 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/solution/app/fileWithError.ts","/user/username/projects/solution/app/fileWithoutError.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/user/username/projects/solution/app/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/solution/app/fileWithError.ts
/user/username/projects/solution/app/fileWithoutError.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/solution/app/fileWithError.ts

Shape signatures in builder refreshed for::
/user/username/projects/solution/app/filewitherror.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/solution/app/tsconfig.json:
  {"fileName":"/user/username/projects/solution/app/tsconfig.json","pollingInterval":250}
/user/username/projects/solution/app/filewitherror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithError.ts","pollingInterval":250}
/user/username/projects/solution/app/filewithouterror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithoutError.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/solution/app:
  {"directoryName":"/user/username/projects/solution/app","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined


Change:: Fix error in fileWithError

Input::
//// [/user/username/projects/solution/app/fileWithError.ts]
export var myClassWithError = class {
        tags() { }
        
    };


Output::
>> Screen clear
[[90m12:00:47 AM[0m] File change detected. Starting incremental compilation...

[[90m12:01:01 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/user/username/projects/solution/app/fileWithError.ts","/user/username/projects/solution/app/fileWithoutError.ts"]
Program options: {"composite":true,"watch":true,"configFilePath":"/user/username/projects/solution/app/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/solution/app/fileWithError.ts
/user/username/projects/solution/app/fileWithoutError.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/solution/app/fileWithError.ts

Shape signatures in builder refreshed for::
/user/username/projects/solution/app/filewitherror.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/solution/app/tsconfig.json:
  {"fileName":"/user/username/projects/solution/app/tsconfig.json","pollingInterval":250}
/user/username/projects/solution/app/filewitherror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithError.ts","pollingInterval":250}
/user/username/projects/solution/app/filewithouterror.ts:
  {"fileName":"/user/username/projects/solution/app/fileWithoutError.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/solution/app:
  {"directoryName":"/user/username/projects/solution/app","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/solution/app/fileWithError.js] file written with same contents
//// [/user/username/projects/solution/app/fileWithError.d.ts] file written with same contents
//// [/user/username/projects/solution/app/fileWithoutError.js] file changed its modified time
//// [/user/username/projects/solution/app/fileWithoutError.d.ts] file changed its modified time
//// [/user/username/projects/solution/app/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../a/lib/lib.d.ts","./filewitherror.ts","./filewithouterror.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-8106435186-export var myClassWithError = class {\n        tags() { }\n        \n    };","signature":"6892461904-export declare var myClassWithError: {\n    new (): {\n        tags(): void;\n    };\n};\n"},"-11785903855-export class myClass { }"],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}

//// [/user/username/projects/solution/app/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../../../../a/lib/lib.d.ts",
      "./filewitherror.ts",
      "./filewithouterror.ts"
    ],
    "fileInfos": {
      "../../../../../a/lib/lib.d.ts": {
        "version": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "signature": "-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }",
        "affectsGlobalScope": true
      },
      "./filewitherror.ts": {
        "version": "-8106435186-export var myClassWithError = class {\n        tags() { }\n        \n    };",
        "signature": "6892461904-export declare var myClassWithError: {\n    new (): {\n        tags(): void;\n    };\n};\n"
      },
      "./filewithouterror.ts": {
        "version": "-11785903855-export class myClass { }",
        "signature": "-11785903855-export class myClass { }"
      }
    },
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../../../../a/lib/lib.d.ts",
      "./filewitherror.ts",
      "./filewithouterror.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 910
}

