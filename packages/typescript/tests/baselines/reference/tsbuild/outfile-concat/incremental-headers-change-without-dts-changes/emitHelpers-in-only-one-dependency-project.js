Input::
//// [/src/first/first_PART1.ts]
interface TheFirst {
    none: any;
}

const s = "Hello, world";

interface NoJsForHereEither {
    none: any;
}

console.log(s);
function forfirstfirst_PART1Rest() {
const { b, ...rest } = { a: 10, b: 30, yy: 30 };
}



Output::
/lib/tsc --b /src/third --verbose
[[90m12:08:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:08:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because oldest output 'src/first/bin/first-output.js' is older than newest input 'src/first/first_PART1.ts'

[[90m12:08:00 AM[0m] Building project '/src/first/tsconfig.json'...

[[90m12:08:00 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than oldest output 'src/2/second-output.js'

[[90m12:08:00 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:08:00 AM[0m] Updating output of project '/src/third/tsconfig.json'...

[[90m12:08:00 AM[0m] Updating unchanged output timestamps of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts] file written with same contents
//// [/src/first/bin/first-output.d.ts.map]
{"version":3,"file":"first-output.d.ts","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AAGD,iBAAS,uBAAuB,SAE/B;AEbD,iBAAS,CAAC,WAET"}

//// [/src/first/bin/first-output.d.ts.map.baseline.txt]
===================================================================
JsFile: first-output.d.ts
mapUrl: first-output.d.ts.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
>>>declare function forfirstfirst_PART1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                        ^^^^^^^^^
1->
  >
  >console.log(s);
  >
2 >function 
3 >                 forfirstfirst_PART1Rest
4 >                                        () {
  >                                        const { b, ...rest } = { a: 10, b: 30, yy: 30 };
  >                                        }
1->Emitted(8, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(8, 18) Source(12, 10) + SourceIndex(0)
3 >Emitted(8, 41) Source(12, 33) + SourceIndex(0)
4 >Emitted(8, 50) Source(14, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.d.ts
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
5 >                             ^^^^^^^^^^^^->
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(9, 18) Source(1, 10) + SourceIndex(2)
3 >Emitted(9, 19) Source(1, 11) + SourceIndex(2)
4 >Emitted(9, 30) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.d.ts.map

//// [/src/first/bin/first-output.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":";;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB;IAChC,IAAM,KAAiB,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAvC,CAAC,OAAA,EAAK,IAAI,cAAZ,KAAc,CAA2B,CAAC;AAChD,CAAC;ACbD,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

//// [/src/first/bin/first-output.js.map.baseline.txt]
===================================================================
JsFile: first-output.js
mapUrl: first-output.js.map
sourceRoot: 
sources: ../first_PART1.ts,../first_part2.ts,../first_part3.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_PART1.ts
-------------------------------------------------------------------
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
>>>            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
>>>                t[p[i]] = s[p[i]];
>>>        }
>>>    return t;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(12, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(12, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(12, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(12, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(12, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(12, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(13, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(13, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(13, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(13, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(13, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(13, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(13, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(13, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
1->Emitted(14, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(14, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(14, 33) Source(12, 33) + SourceIndex(0)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^
4 >             ^^
5 >               ^
6 >                ^^
7 >                  ^^
8 >                    ^^
9 >                      ^
10>                       ^^
11>                         ^^
12>                           ^^
13>                             ^^
14>                               ^^
15>                                 ^^
16>                                   ^^
17>                                     ^^
18>                                       ^
19>                                        ^^^^^^^
20>                                               ^^
21>                                                 ^^^^
22>                                                     ^^^^^^^^^^^^^^
23>                                                                   ^^^^^
24>                                                                        ^
25>                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = 
4 >             { 
5 >               a
6 >                : 
7 >                  10
8 >                    , 
9 >                      b
10>                       : 
11>                         30
12>                           , 
13>                             yy
14>                               : 
15>                                 30
16>                                    }
17>                                     
18>                                       b
19>                                        
20>                                               , ...
21>                                                 rest
22>                                                     
23>                                                                   { b, ...rest }
24>                                                                         = { a: 10, b: 30, yy: 30 }
25>                                                                         ;
1->Emitted(15, 5) Source(13, 1) + SourceIndex(0)
2 >Emitted(15, 9) Source(13, 7) + SourceIndex(0)
3 >Emitted(15, 14) Source(13, 24) + SourceIndex(0)
4 >Emitted(15, 16) Source(13, 26) + SourceIndex(0)
5 >Emitted(15, 17) Source(13, 27) + SourceIndex(0)
6 >Emitted(15, 19) Source(13, 29) + SourceIndex(0)
7 >Emitted(15, 21) Source(13, 31) + SourceIndex(0)
8 >Emitted(15, 23) Source(13, 33) + SourceIndex(0)
9 >Emitted(15, 24) Source(13, 34) + SourceIndex(0)
10>Emitted(15, 26) Source(13, 36) + SourceIndex(0)
11>Emitted(15, 28) Source(13, 38) + SourceIndex(0)
12>Emitted(15, 30) Source(13, 40) + SourceIndex(0)
13>Emitted(15, 32) Source(13, 42) + SourceIndex(0)
14>Emitted(15, 34) Source(13, 44) + SourceIndex(0)
15>Emitted(15, 36) Source(13, 46) + SourceIndex(0)
16>Emitted(15, 38) Source(13, 48) + SourceIndex(0)
17>Emitted(15, 40) Source(13, 9) + SourceIndex(0)
18>Emitted(15, 41) Source(13, 10) + SourceIndex(0)
19>Emitted(15, 48) Source(13, 10) + SourceIndex(0)
20>Emitted(15, 50) Source(13, 15) + SourceIndex(0)
21>Emitted(15, 54) Source(13, 19) + SourceIndex(0)
22>Emitted(15, 68) Source(13, 7) + SourceIndex(0)
23>Emitted(15, 73) Source(13, 21) + SourceIndex(0)
24>Emitted(15, 74) Source(13, 48) + SourceIndex(0)
25>Emitted(15, 75) Source(13, 49) + SourceIndex(0)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(16, 1) Source(14, 1) + SourceIndex(0)
2 >Emitted(16, 2) Source(14, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(17, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(17, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(17, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(17, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(17, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(17, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(17, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(17, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(17, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/first/bin/first-output.js
sourceFile:../first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(18, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(18, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(18, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(19, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(19, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(19, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(19, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(20, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(20, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":500,"kind":"emitHelpers","data":"typescript:rest"},{"pos":502,"end":729,"kind":"text"}],"sources":{"helpers":["typescript:rest"]}},"dts":{"sections":[{"pos":0,"end":208,"kind":"text"}]}},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
emitHelpers: (0-500):: typescript:rest
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
----------------------------------------------------------------------
text: (502-729)
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-208)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function forfirstfirst_PART1Rest(): void;
declare function f(): string;

======================================================================

//// [/src/first/bin/first-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "..",
    "sourceFiles": [
      "../first_PART1.ts",
      "../first_part2.ts",
      "../first_part3.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 500,
          "kind": "emitHelpers",
          "data": "typescript:rest"
        },
        {
          "pos": 502,
          "end": 729,
          "kind": "text"
        }
      ],
      "sources": {
        "helpers": [
          "typescript:rest"
        ]
      }
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 208,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 362
}

//// [/src/third/thirdjs/output/third-output.d.ts.map]
{"version":3,"file":"third-output.d.ts","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAAA,UAAU,QAAQ;IACd,IAAI,EAAE,GAAG,CAAC;CACb;AAED,QAAA,MAAM,CAAC,iBAAiB,CAAC;AAEzB,UAAU,iBAAiB;IACvB,IAAI,EAAE,GAAG,CAAC;CACb;AAGD,iBAAS,uBAAuB,SAE/B;ACbD,iBAAS,CAAC,WAET;ACFD,kBAAU,CAAC,CAAC;CAEX;AAED,kBAAU,CAAC,CAAC;CAMX;AACD,iBAAS,yBAAyB,SAEjC;ACbD,cAAM,CAAC;IACH,WAAW;CAGd;ACJD,QAAA,IAAI,CAAC,GAAU,CAAC"}

//// [/src/third/thirdjs/output/third-output.d.ts.map.baseline.txt]
===================================================================
JsFile: third-output.d.ts
mapUrl: third-output.d.ts.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>interface TheFirst {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^
1 >
2 >interface 
3 >          TheFirst
1 >Emitted(1, 1) Source(1, 1) + SourceIndex(0)
2 >Emitted(1, 11) Source(1, 11) + SourceIndex(0)
3 >Emitted(1, 19) Source(1, 19) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(2, 5) Source(2, 5) + SourceIndex(0)
2 >Emitted(2, 9) Source(2, 9) + SourceIndex(0)
3 >Emitted(2, 11) Source(2, 11) + SourceIndex(0)
4 >Emitted(2, 14) Source(2, 14) + SourceIndex(0)
5 >Emitted(2, 15) Source(2, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(3, 2) Source(3, 2) + SourceIndex(0)
---
>>>declare const s = "Hello, world";
1->
2 >^^^^^^^^
3 >        ^^^^^^
4 >              ^
5 >               ^^^^^^^^^^^^^^^^^
6 >                                ^
1->
  >
  >
2 >
3 >        const 
4 >              s
5 >                = "Hello, world"
6 >                                ;
1->Emitted(4, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(4, 9) Source(5, 1) + SourceIndex(0)
3 >Emitted(4, 15) Source(5, 7) + SourceIndex(0)
4 >Emitted(4, 16) Source(5, 8) + SourceIndex(0)
5 >Emitted(4, 33) Source(5, 25) + SourceIndex(0)
6 >Emitted(4, 34) Source(5, 26) + SourceIndex(0)
---
>>>interface NoJsForHereEither {
1 >
2 >^^^^^^^^^^
3 >          ^^^^^^^^^^^^^^^^^
1 >
  >
  >
2 >interface 
3 >          NoJsForHereEither
1 >Emitted(5, 1) Source(7, 1) + SourceIndex(0)
2 >Emitted(5, 11) Source(7, 11) + SourceIndex(0)
3 >Emitted(5, 28) Source(7, 28) + SourceIndex(0)
---
>>>    none: any;
1 >^^^^
2 >    ^^^^
3 >        ^^
4 >          ^^^
5 >             ^
1 > {
  >    
2 >    none
3 >        : 
4 >          any
5 >             ;
1 >Emitted(6, 5) Source(8, 5) + SourceIndex(0)
2 >Emitted(6, 9) Source(8, 9) + SourceIndex(0)
3 >Emitted(6, 11) Source(8, 11) + SourceIndex(0)
4 >Emitted(6, 14) Source(8, 14) + SourceIndex(0)
5 >Emitted(6, 15) Source(8, 15) + SourceIndex(0)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >}
1 >Emitted(7, 2) Source(9, 2) + SourceIndex(0)
---
>>>declare function forfirstfirst_PART1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                        ^^^^^^^^^
1->
  >
  >console.log(s);
  >
2 >function 
3 >                 forfirstfirst_PART1Rest
4 >                                        () {
  >                                        const { b, ...rest } = { a: 10, b: 30, yy: 30 };
  >                                        }
1->Emitted(8, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(8, 18) Source(12, 10) + SourceIndex(0)
3 >Emitted(8, 41) Source(12, 33) + SourceIndex(0)
4 >Emitted(8, 50) Source(14, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>declare function f(): string;
1 >
2 >^^^^^^^^^^^^^^^^^
3 >                 ^
4 >                  ^^^^^^^^^^^
1 >
2 >function 
3 >                 f
4 >                  () {
  >                      return "JS does hoists";
  >                  }
1 >Emitted(9, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(9, 18) Source(1, 10) + SourceIndex(1)
3 >Emitted(9, 19) Source(1, 11) + SourceIndex(1)
4 >Emitted(9, 30) Source(3, 2) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>declare namespace N {
1 >
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1 >
2 >namespace 
3 >                  N
4 >                    
1 >Emitted(10, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(10, 19) Source(1, 11) + SourceIndex(2)
3 >Emitted(10, 20) Source(1, 12) + SourceIndex(2)
4 >Emitted(10, 21) Source(1, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    // Comment text
  >}
1 >Emitted(11, 2) Source(3, 2) + SourceIndex(2)
---
>>>declare namespace N {
1->
2 >^^^^^^^^^^^^^^^^^^
3 >                  ^
4 >                   ^
1->
  >
  >
2 >namespace 
3 >                  N
4 >                    
1->Emitted(12, 1) Source(5, 1) + SourceIndex(2)
2 >Emitted(12, 19) Source(5, 11) + SourceIndex(2)
3 >Emitted(12, 20) Source(5, 12) + SourceIndex(2)
4 >Emitted(12, 21) Source(5, 13) + SourceIndex(2)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >{
  >    function f() {
  >        console.log('testing');
  >    }
  >
  >    f();
  >}
1 >Emitted(13, 2) Source(11, 2) + SourceIndex(2)
---
>>>declare function forsecondsecond_part1Rest(): void;
1->
2 >^^^^^^^^^^^^^^^^^
3 >                 ^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                          ^^^^^^^^^
1->
  >
2 >function 
3 >                 forsecondsecond_part1Rest
4 >                                          () {
  >                                          const { b, ...rest } = { a: 10, b: 30, yy: 30 };
  >                                          }
1->Emitted(14, 1) Source(12, 1) + SourceIndex(2)
2 >Emitted(14, 18) Source(12, 10) + SourceIndex(2)
3 >Emitted(14, 43) Source(12, 35) + SourceIndex(2)
4 >Emitted(14, 52) Source(14, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>declare class C {
1 >
2 >^^^^^^^^^^^^^^
3 >              ^
4 >               ^^^^^^^^^^->
1 >
2 >class 
3 >              C
1 >Emitted(15, 1) Source(1, 1) + SourceIndex(3)
2 >Emitted(15, 15) Source(1, 7) + SourceIndex(3)
3 >Emitted(15, 16) Source(1, 8) + SourceIndex(3)
---
>>>    doSomething(): void;
1->^^^^
2 >    ^^^^^^^^^^^
1-> {
  >    
2 >    doSomething
1->Emitted(16, 5) Source(2, 5) + SourceIndex(3)
2 >Emitted(16, 16) Source(2, 16) + SourceIndex(3)
---
>>>}
1 >^
2 > ^^^^^^^^^^^^^^^^^->
1 >() {
  >        console.log("something got done");
  >    }
  >}
1 >Emitted(17, 2) Source(5, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.d.ts
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>declare var c: C;
1->
2 >^^^^^^^^
3 >        ^^^^
4 >            ^
5 >             ^^^
6 >                ^
7 >                 ^^^^^^^^^^^^^^^^^^^^^^^^->
1->
2 >
3 >        var 
4 >            c
5 >              = new C()
6 >                ;
1->Emitted(18, 1) Source(1, 1) + SourceIndex(4)
2 >Emitted(18, 9) Source(1, 1) + SourceIndex(4)
3 >Emitted(18, 13) Source(1, 5) + SourceIndex(4)
4 >Emitted(18, 14) Source(1, 6) + SourceIndex(4)
5 >Emitted(18, 17) Source(1, 16) + SourceIndex(4)
6 >Emitted(18, 18) Source(1, 17) + SourceIndex(4)
---
>>>//# sourceMappingURL=third-output.d.ts.map

//// [/src/third/thirdjs/output/third-output.js]
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(f());
function f() {
    return "JS does hoists";
}
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
function forsecondsecond_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());
var c = new C();
c.doSomething();
//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.js.map]
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":";;;;;;;;;;;AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,SAAS,uBAAuB;IAChC,IAAM,KAAiB,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAvC,CAAC,OAAA,EAAK,IAAI,cAAZ,KAAc,CAA2B,CAAC;AAChD,CAAC;ACbD,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;AACD,SAAS,yBAAyB;IAClC,IAAM,KAAiB,EAAE,CAAC,EAAE,EAAE,EAAE,CAAC,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAvC,CAAC,OAAA,EAAK,IAAI,cAAZ,KAAc,CAA2B,CAAC;AAChD,CAAC;ACbD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

//// [/src/third/thirdjs/output/third-output.js.map.baseline.txt]
===================================================================
JsFile: third-output.js
mapUrl: third-output.js.map
sourceRoot: 
sources: ../../../first/first_PART1.ts,../../../first/first_part2.ts,../../../first/first_part3.ts,../../../second/second_part1.ts,../../../second/second_part2.ts,../../third_part1.ts
===================================================================
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_PART1.ts
-------------------------------------------------------------------
>>>var __rest = (this && this.__rest) || function (s, e) {
>>>    var t = {};
>>>    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
>>>        t[p] = s[p];
>>>    if (s != null && typeof Object.getOwnPropertySymbols === "function")
>>>        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
>>>            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
>>>                t[p[i]] = s[p[i]];
>>>        }
>>>    return t;
>>>};
>>>var s = "Hello, world";
1 >
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^^^^^^^^^^^
6 >                      ^
1 >interface TheFirst {
  >    none: any;
  >}
  >
  >
2 >const 
3 >    s
4 >      = 
5 >        "Hello, world"
6 >                      ;
1 >Emitted(12, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(12, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(12, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(12, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(12, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(12, 24) Source(5, 26) + SourceIndex(0)
---
>>>console.log(s);
1 >
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
  >interface NoJsForHereEither {
  >    none: any;
  >}
  >
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1 >Emitted(13, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(13, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(13, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(13, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(13, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(13, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(13, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(13, 16) Source(11, 16) + SourceIndex(0)
---
>>>function forfirstfirst_PART1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^
4 >                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forfirstfirst_PART1Rest
1->Emitted(14, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(14, 10) Source(12, 10) + SourceIndex(0)
3 >Emitted(14, 33) Source(12, 33) + SourceIndex(0)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^
4 >             ^^
5 >               ^
6 >                ^^
7 >                  ^^
8 >                    ^^
9 >                      ^
10>                       ^^
11>                         ^^
12>                           ^^
13>                             ^^
14>                               ^^
15>                                 ^^
16>                                   ^^
17>                                     ^^
18>                                       ^
19>                                        ^^^^^^^
20>                                               ^^
21>                                                 ^^^^
22>                                                     ^^^^^^^^^^^^^^
23>                                                                   ^^^^^
24>                                                                        ^
25>                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = 
4 >             { 
5 >               a
6 >                : 
7 >                  10
8 >                    , 
9 >                      b
10>                       : 
11>                         30
12>                           , 
13>                             yy
14>                               : 
15>                                 30
16>                                    }
17>                                     
18>                                       b
19>                                        
20>                                               , ...
21>                                                 rest
22>                                                     
23>                                                                   { b, ...rest }
24>                                                                         = { a: 10, b: 30, yy: 30 }
25>                                                                         ;
1->Emitted(15, 5) Source(13, 1) + SourceIndex(0)
2 >Emitted(15, 9) Source(13, 7) + SourceIndex(0)
3 >Emitted(15, 14) Source(13, 24) + SourceIndex(0)
4 >Emitted(15, 16) Source(13, 26) + SourceIndex(0)
5 >Emitted(15, 17) Source(13, 27) + SourceIndex(0)
6 >Emitted(15, 19) Source(13, 29) + SourceIndex(0)
7 >Emitted(15, 21) Source(13, 31) + SourceIndex(0)
8 >Emitted(15, 23) Source(13, 33) + SourceIndex(0)
9 >Emitted(15, 24) Source(13, 34) + SourceIndex(0)
10>Emitted(15, 26) Source(13, 36) + SourceIndex(0)
11>Emitted(15, 28) Source(13, 38) + SourceIndex(0)
12>Emitted(15, 30) Source(13, 40) + SourceIndex(0)
13>Emitted(15, 32) Source(13, 42) + SourceIndex(0)
14>Emitted(15, 34) Source(13, 44) + SourceIndex(0)
15>Emitted(15, 36) Source(13, 46) + SourceIndex(0)
16>Emitted(15, 38) Source(13, 48) + SourceIndex(0)
17>Emitted(15, 40) Source(13, 9) + SourceIndex(0)
18>Emitted(15, 41) Source(13, 10) + SourceIndex(0)
19>Emitted(15, 48) Source(13, 10) + SourceIndex(0)
20>Emitted(15, 50) Source(13, 15) + SourceIndex(0)
21>Emitted(15, 54) Source(13, 19) + SourceIndex(0)
22>Emitted(15, 68) Source(13, 7) + SourceIndex(0)
23>Emitted(15, 73) Source(13, 21) + SourceIndex(0)
24>Emitted(15, 74) Source(13, 48) + SourceIndex(0)
25>Emitted(15, 75) Source(13, 49) + SourceIndex(0)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(16, 1) Source(14, 1) + SourceIndex(0)
2 >Emitted(16, 2) Source(14, 2) + SourceIndex(0)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part2.ts
-------------------------------------------------------------------
>>>console.log(f());
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^
1->
2 >console
3 >       .
4 >        log
5 >           (
6 >            f
7 >             ()
8 >               )
9 >                ;
1->Emitted(17, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(17, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(17, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(17, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(17, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(17, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(17, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(17, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(17, 18) Source(1, 18) + SourceIndex(1)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../first/first_part3.ts
-------------------------------------------------------------------
>>>function f() {
1 >
2 >^^^^^^^^^
3 >         ^
4 >          ^^^^^^^^^^^^^^^^^^^->
1 >
2 >function 
3 >         f
1 >Emitted(18, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(18, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(18, 11) Source(1, 11) + SourceIndex(2)
---
>>>    return "JS does hoists";
1->^^^^
2 >    ^^^^^^^
3 >           ^^^^^^^^^^^^^^^^
4 >                           ^
1->() {
  >    
2 >    return 
3 >           "JS does hoists"
4 >                           ;
1->Emitted(19, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(19, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(19, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(19, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(20, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(20, 2) Source(3, 2) + SourceIndex(2)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part1.ts
-------------------------------------------------------------------
>>>var N;
1->
2 >^^^^
3 >    ^
4 >     ^
5 >      ^^^^^^^^^^->
1->namespace N {
  >    // Comment text
  >}
  >
  >
2 >namespace 
3 >    N
4 >      {
  >         function f() {
  >             console.log('testing');
  >         }
  >     
  >         f();
  >     }
1->Emitted(21, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(21, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(21, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(21, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(22, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(22, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(22, 13) Source(5, 12) + SourceIndex(3)
---
>>>    function f() {
1->^^^^
2 >    ^^^^^^^^^
3 >             ^
4 >              ^^^^^^^^^^^^^^^^^^->
1-> {
  >    
2 >    function 
3 >             f
1->Emitted(23, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(23, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(23, 15) Source(6, 15) + SourceIndex(3)
---
>>>        console.log('testing');
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^
7 >                             ^
8 >                              ^
1->() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    'testing'
7 >                             )
8 >                              ;
1->Emitted(24, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(24, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(24, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(24, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(24, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(24, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(24, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(24, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(25, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(25, 6) Source(8, 6) + SourceIndex(3)
---
>>>    f();
1->^^^^
2 >    ^
3 >     ^^
4 >       ^
5 >        ^^^^^^^^^^^->
1->
  >
  >    
2 >    f
3 >     ()
4 >       ;
1->Emitted(26, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(26, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(26, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(26, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >}
3 > 
4 >   N
5 >    
6 >         N
7 >           {
  >              function f() {
  >                  console.log('testing');
  >              }
  >          
  >              f();
  >          }
1->Emitted(27, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(27, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(27, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(27, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(27, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(27, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(27, 19) Source(11, 2) + SourceIndex(3)
---
>>>function forsecondsecond_part1Rest() {
1->
2 >^^^^^^^^^
3 >         ^^^^^^^^^^^^^^^^^^^^^^^^^
4 >                                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >function 
3 >         forsecondsecond_part1Rest
1->Emitted(28, 1) Source(12, 1) + SourceIndex(3)
2 >Emitted(28, 10) Source(12, 10) + SourceIndex(3)
3 >Emitted(28, 35) Source(12, 35) + SourceIndex(3)
---
>>>    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
1->^^^^
2 >    ^^^^
3 >        ^^^^^
4 >             ^^
5 >               ^
6 >                ^^
7 >                  ^^
8 >                    ^^
9 >                      ^
10>                       ^^
11>                         ^^
12>                           ^^
13>                             ^^
14>                               ^^
15>                                 ^^
16>                                   ^^
17>                                     ^^
18>                                       ^
19>                                        ^^^^^^^
20>                                               ^^
21>                                                 ^^^^
22>                                                     ^^^^^^^^^^^^^^
23>                                                                   ^^^^^
24>                                                                        ^
25>                                                                         ^
1->() {
  >
2 >    const 
3 >        { b, ...rest } = 
4 >             { 
5 >               a
6 >                : 
7 >                  10
8 >                    , 
9 >                      b
10>                       : 
11>                         30
12>                           , 
13>                             yy
14>                               : 
15>                                 30
16>                                    }
17>                                     
18>                                       b
19>                                        
20>                                               , ...
21>                                                 rest
22>                                                     
23>                                                                   { b, ...rest }
24>                                                                         = { a: 10, b: 30, yy: 30 }
25>                                                                         ;
1->Emitted(29, 5) Source(13, 1) + SourceIndex(3)
2 >Emitted(29, 9) Source(13, 7) + SourceIndex(3)
3 >Emitted(29, 14) Source(13, 24) + SourceIndex(3)
4 >Emitted(29, 16) Source(13, 26) + SourceIndex(3)
5 >Emitted(29, 17) Source(13, 27) + SourceIndex(3)
6 >Emitted(29, 19) Source(13, 29) + SourceIndex(3)
7 >Emitted(29, 21) Source(13, 31) + SourceIndex(3)
8 >Emitted(29, 23) Source(13, 33) + SourceIndex(3)
9 >Emitted(29, 24) Source(13, 34) + SourceIndex(3)
10>Emitted(29, 26) Source(13, 36) + SourceIndex(3)
11>Emitted(29, 28) Source(13, 38) + SourceIndex(3)
12>Emitted(29, 30) Source(13, 40) + SourceIndex(3)
13>Emitted(29, 32) Source(13, 42) + SourceIndex(3)
14>Emitted(29, 34) Source(13, 44) + SourceIndex(3)
15>Emitted(29, 36) Source(13, 46) + SourceIndex(3)
16>Emitted(29, 38) Source(13, 48) + SourceIndex(3)
17>Emitted(29, 40) Source(13, 9) + SourceIndex(3)
18>Emitted(29, 41) Source(13, 10) + SourceIndex(3)
19>Emitted(29, 48) Source(13, 10) + SourceIndex(3)
20>Emitted(29, 50) Source(13, 15) + SourceIndex(3)
21>Emitted(29, 54) Source(13, 19) + SourceIndex(3)
22>Emitted(29, 68) Source(13, 7) + SourceIndex(3)
23>Emitted(29, 73) Source(13, 21) + SourceIndex(3)
24>Emitted(29, 74) Source(13, 48) + SourceIndex(3)
25>Emitted(29, 75) Source(13, 49) + SourceIndex(3)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(30, 1) Source(14, 1) + SourceIndex(3)
2 >Emitted(30, 2) Source(14, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(31, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(32, 5) Source(1, 1) + SourceIndex(4)
---
>>>    }
1->^^^^
2 >    ^
3 >     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1->class C {
  >    doSomething() {
  >        console.log("something got done");
  >    }
  >
2 >    }
1->Emitted(33, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(33, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(34, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(34, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(34, 31) Source(2, 5) + SourceIndex(4)
---
>>>        console.log("something got done");
1->^^^^^^^^
2 >        ^^^^^^^
3 >               ^
4 >                ^^^
5 >                   ^
6 >                    ^^^^^^^^^^^^^^^^^^^^
7 >                                        ^
8 >                                         ^
1->doSomething() {
  >        
2 >        console
3 >               .
4 >                log
5 >                   (
6 >                    "something got done"
7 >                                        )
8 >                                         ;
1->Emitted(35, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(35, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(35, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(35, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(35, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(35, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(35, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(35, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(36, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(36, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(37, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(37, 13) Source(5, 2) + SourceIndex(4)
---
>>>}());
1 >
2 >^
3 > 
4 > ^^^^
5 >     ^^^^^^^^^^^^->
1 >
2 >}
3 > 
4 > class C {
  >     doSomething() {
  >         console.log("something got done");
  >     }
  > }
1 >Emitted(38, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(38, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(38, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(38, 6) Source(5, 2) + SourceIndex(4)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../third_part1.ts
-------------------------------------------------------------------
>>>var c = new C();
1->
2 >^^^^
3 >    ^
4 >     ^^^
5 >        ^^^^
6 >            ^
7 >             ^^
8 >               ^
9 >                ^->
1->
2 >var 
3 >    c
4 >      = 
5 >        new 
6 >            C
7 >             ()
8 >               ;
1->Emitted(39, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(39, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(39, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(39, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(39, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(39, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(39, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(39, 17) Source(1, 17) + SourceIndex(5)
---
>>>c.doSomething();
1->
2 >^
3 > ^
4 >  ^^^^^^^^^^^
5 >             ^^
6 >               ^
7 >                ^^^^^^^^^^^^^^^^^^^^^^^->
1->
  >
2 >c
3 > .
4 >  doSomething
5 >             ()
6 >               ;
1->Emitted(40, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(40, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(40, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(40, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(40, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(40, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":500,"kind":"emitHelpers","data":"typescript:rest"},{"pos":502,"end":729,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":502,"end":729,"kind":"text"}]},{"pos":729,"end":1133,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":729,"end":1133,"kind":"text"}]},{"pos":1133,"end":1169,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":208,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":208,"kind":"text"}]},{"pos":208,"end":361,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":208,"end":361,"kind":"text"}]},{"pos":361,"end":380,"kind":"text"}]}},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
emitHelpers: (0-500):: typescript:rest
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
----------------------------------------------------------------------
prepend: (502-729):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (502-729)
var s = "Hello, world";
console.log(s);
function forfirstfirst_PART1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (729-1133):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (729-1133)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
function forsecondsecond_part1Rest() {
    var _a = { a: 10, b: 30, yy: 30 }, b = _a.b, rest = __rest(_a, ["b"]);
}
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (1133-1169)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-208):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-208)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function forfirstfirst_PART1Rest(): void;
declare function f(): string;

----------------------------------------------------------------------
prepend: (208-361):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (208-361)
declare namespace N {
}
declare namespace N {
}
declare function forsecondsecond_part1Rest(): void;
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (361-380)
declare var c: C;

======================================================================

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.readable.baseline.txt]
{
  "bundle": {
    "commonSourceDirectory": "../..",
    "sourceFiles": [
      "../../third_part1.ts"
    ],
    "js": {
      "sections": [
        {
          "pos": 0,
          "end": 500,
          "kind": "emitHelpers",
          "data": "typescript:rest"
        },
        {
          "pos": 502,
          "end": 729,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 502,
              "end": 729,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 729,
          "end": 1133,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 729,
              "end": 1133,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 1133,
          "end": 1169,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 208,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 208,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 208,
          "end": 361,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 208,
              "end": 361,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 361,
          "end": 380,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 794
}

