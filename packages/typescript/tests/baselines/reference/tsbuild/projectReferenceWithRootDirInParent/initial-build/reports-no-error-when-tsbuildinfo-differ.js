Input::
//// [/lib/lib.d.ts]
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
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/src/main/a.ts]
import { b } from './b';
const a = b;

//// [/src/src/main/b.ts]
export const b = 0;


//// [/src/src/main/tsconfig.main.json]
{"compilerOptions":{"composite":true,"outDir":"../../dist/"},"references":[{"path":"../other/tsconfig.other.json"}]}

//// [/src/src/other/other.ts]
export const Other = 0;


//// [/src/src/other/tsconfig.other.json]
{"compilerOptions":{"composite":true,"outDir":"../../dist/"}}

//// [/src/tsconfig.base.json]




Output::
/lib/tsc --b /src/src/main/tsconfig.main.json --verbose
[[90m12:00:00 AM[0m] Projects in this build: 
    * src/src/other/tsconfig.other.json
    * src/src/main/tsconfig.main.json

[[90m12:00:00 AM[0m] Project 'src/src/other/tsconfig.other.json' is out of date because output file 'src/dist/other.js' does not exist

[[90m12:00:00 AM[0m] Building project '/src/src/other/tsconfig.other.json'...

[[90m12:00:00 AM[0m] Project 'src/src/main/tsconfig.main.json' is out of date because output file 'src/dist/a.js' does not exist

[[90m12:00:00 AM[0m] Building project '/src/src/main/tsconfig.main.json'...

exitCode:: ExitStatus.Success


//// [/src/dist/a.d.ts]
export {};


//// [/src/dist/a.js]
"use strict";
exports.__esModule = true;
var b_1 = require("./b");
var a = b_1.b;


//// [/src/dist/b.d.ts]
export declare const b = 0;


//// [/src/dist/b.js]
"use strict";
exports.__esModule = true;
exports.b = void 0;
exports.b = 0;


//// [/src/dist/other.d.ts]
export declare const Other = 0;


//// [/src/dist/other.js]
"use strict";
exports.__esModule = true;
exports.Other = void 0;
exports.Other = 0;


//// [/src/dist/tsconfig.main.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../src/main/b.ts","../src/main/a.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-11678562673-export const b = 0;\r\n","-17071184049-import { b } from './b';\r\nconst a = b;"],"options":{"composite":true,"outDir":"./"},"fileIdsList":[[2]],"referencedMap":[[3,1]],"exportedModulesMap":[[3,1]],"semanticDiagnosticsPerFile":[1,3,2]},"version":"FakeTSVersion"}

//// [/src/dist/tsconfig.main.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../src/main/b.ts",
      "../src/main/a.ts"
    ],
    "fileNamesList": [
      [
        "../src/main/b.ts"
      ]
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/main/b.ts": {
        "version": "-11678562673-export const b = 0;\r\n",
        "signature": "-11678562673-export const b = 0;\r\n"
      },
      "../src/main/a.ts": {
        "version": "-17071184049-import { b } from './b';\r\nconst a = b;",
        "signature": "-17071184049-import { b } from './b';\r\nconst a = b;"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {
      "../src/main/a.ts": [
        "../src/main/b.ts"
      ]
    },
    "exportedModulesMap": {
      "../src/main/a.ts": [
        "../src/main/b.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../src/main/a.ts",
      "../src/main/b.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 853
}

//// [/src/dist/tsconfig.other.tsbuildinfo]
{"program":{"fileNames":["../../lib/lib.d.ts","../src/other/other.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},"-2951227185-export const Other = 0;\r\n"],"options":{"composite":true,"outDir":"./"},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[1,2]},"version":"FakeTSVersion"}

//// [/src/dist/tsconfig.other.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../../lib/lib.d.ts",
      "../src/other/other.ts"
    ],
    "fileInfos": {
      "../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/other/other.ts": {
        "version": "-2951227185-export const Other = 0;\r\n",
        "signature": "-2951227185-export const Other = 0;\r\n"
      }
    },
    "options": {
      "composite": true,
      "outDir": "./"
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../../lib/lib.d.ts",
      "../src/other/other.ts"
    ]
  },
  "version": "FakeTSVersion",
  "size": 754
}

