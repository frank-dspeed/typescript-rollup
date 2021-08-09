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
console.log(s);



Output::
/lib/tsc --b /src/third --verbose --explainFiles
[[90m12:08:00 AM[0m] Projects in this build: 
    * src/first/tsconfig.json
    * src/second/tsconfig.json
    * src/third/tsconfig.json

[[90m12:08:00 AM[0m] Project 'src/first/tsconfig.json' is out of date because oldest output 'src/first/bin/first-output.js' is older than newest input 'src/first/first_PART1.ts'

[[90m12:08:00 AM[0m] Building project '/src/first/tsconfig.json'...

lib/lib.d.ts
  Default library for target 'es5'
src/first/first_PART1.ts
  Part of 'files' list in tsconfig.json
src/first/first_part2.ts
  Part of 'files' list in tsconfig.json
src/first/first_part3.ts
  Part of 'files' list in tsconfig.json
[[90m12:08:00 AM[0m] Project 'src/second/tsconfig.json' is up to date because newest input 'src/second/second_part1.ts' is older than oldest output 'src/2/second-output.js'

[[90m12:08:00 AM[0m] Project 'src/third/tsconfig.json' is out of date because output of its dependency 'src/first' has changed

[[90m12:08:00 AM[0m] Updating output of project '/src/third/tsconfig.json'...

[[90m12:08:00 AM[0m] Updating unchanged output timestamps of project '/src/third/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/first/bin/first-output.d.ts] file written with same contents
//// [/src/first/bin/first-output.d.ts.map] file written with same contents
//// [/src/first/bin/first-output.d.ts.map.baseline.txt] file written with same contents
//// [/src/first/bin/first-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}
//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.js.map]
{"version":3,"file":"first-output.js","sourceRoot":"","sources":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC"}

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
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
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
9 >               ^->
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
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
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
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
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
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
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
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
---
>>>//# sourceMappingURL=first-output.js.map

//// [/src/first/bin/first-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"..","sourceFiles":["../first_PART1.ts","../first_part2.ts","../first_part3.ts"],"js":{"sections":[{"pos":0,"end":127,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":157,"kind":"text"}]}},"version":"FakeTSVersion"}

//// [/src/first/bin/first-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/first/bin/first-output.js
----------------------------------------------------------------------
text: (0-127)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

======================================================================
======================================================================
File:: /src/first/bin/first-output.d.ts
----------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
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
          "end": 127,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 157,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 252
}

//// [/src/third/thirdjs/output/third-output.js]
var s = "Hello, world";
console.log(s);
console.log(s);
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
{"version":3,"file":"third-output.js","sourceRoot":"","sources":["../../../first/first_PART1.ts","../../../first/first_part2.ts","../../../first/first_part3.ts","../../../second/second_part1.ts","../../../second/second_part2.ts","../../third_part1.ts"],"names":[],"mappings":"AAIA,IAAM,CAAC,GAAG,cAAc,CAAC;AAMzB,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;AACf,OAAO,CAAC,GAAG,CAAC,CAAC,CAAC,CAAC;ACXf,OAAO,CAAC,GAAG,CAAC,CAAC,EAAE,CAAC,CAAC;ACAjB,SAAS,CAAC;IACN,OAAO,gBAAgB,CAAC;AAC5B,CAAC;ACED,IAAU,CAAC,CAMV;AAND,WAAU,CAAC;IACP,SAAS,CAAC;QACN,OAAO,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;IAC3B,CAAC;IAED,CAAC,EAAE,CAAC;AACR,CAAC,EANS,CAAC,KAAD,CAAC,QAMV;ACVD;IAAA;IAIA,CAAC;IAHG,uBAAW,GAAX;QACI,OAAO,CAAC,GAAG,CAAC,oBAAoB,CAAC,CAAC;IACtC,CAAC;IACL,QAAC;AAAD,CAAC,AAJD,IAIC;ACJD,IAAI,CAAC,GAAG,IAAI,CAAC,EAAE,CAAC;AAChB,CAAC,CAAC,WAAW,EAAE,CAAC"}

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
1 >Emitted(1, 1) Source(5, 1) + SourceIndex(0)
2 >Emitted(1, 5) Source(5, 7) + SourceIndex(0)
3 >Emitted(1, 6) Source(5, 8) + SourceIndex(0)
4 >Emitted(1, 9) Source(5, 11) + SourceIndex(0)
5 >Emitted(1, 23) Source(5, 25) + SourceIndex(0)
6 >Emitted(1, 24) Source(5, 26) + SourceIndex(0)
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
9 >               ^->
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
1 >Emitted(2, 1) Source(11, 1) + SourceIndex(0)
2 >Emitted(2, 8) Source(11, 8) + SourceIndex(0)
3 >Emitted(2, 9) Source(11, 9) + SourceIndex(0)
4 >Emitted(2, 12) Source(11, 12) + SourceIndex(0)
5 >Emitted(2, 13) Source(11, 13) + SourceIndex(0)
6 >Emitted(2, 14) Source(11, 14) + SourceIndex(0)
7 >Emitted(2, 15) Source(11, 15) + SourceIndex(0)
8 >Emitted(2, 16) Source(11, 16) + SourceIndex(0)
---
>>>console.log(s);
1->
2 >^^^^^^^
3 >       ^
4 >        ^^^
5 >           ^
6 >            ^
7 >             ^
8 >              ^
9 >               ^^^->
1->
  >
2 >console
3 >       .
4 >        log
5 >           (
6 >            s
7 >             )
8 >              ;
1->Emitted(3, 1) Source(12, 1) + SourceIndex(0)
2 >Emitted(3, 8) Source(12, 8) + SourceIndex(0)
3 >Emitted(3, 9) Source(12, 9) + SourceIndex(0)
4 >Emitted(3, 12) Source(12, 12) + SourceIndex(0)
5 >Emitted(3, 13) Source(12, 13) + SourceIndex(0)
6 >Emitted(3, 14) Source(12, 14) + SourceIndex(0)
7 >Emitted(3, 15) Source(12, 15) + SourceIndex(0)
8 >Emitted(3, 16) Source(12, 16) + SourceIndex(0)
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
1->Emitted(4, 1) Source(1, 1) + SourceIndex(1)
2 >Emitted(4, 8) Source(1, 8) + SourceIndex(1)
3 >Emitted(4, 9) Source(1, 9) + SourceIndex(1)
4 >Emitted(4, 12) Source(1, 12) + SourceIndex(1)
5 >Emitted(4, 13) Source(1, 13) + SourceIndex(1)
6 >Emitted(4, 14) Source(1, 14) + SourceIndex(1)
7 >Emitted(4, 16) Source(1, 16) + SourceIndex(1)
8 >Emitted(4, 17) Source(1, 17) + SourceIndex(1)
9 >Emitted(4, 18) Source(1, 18) + SourceIndex(1)
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
1 >Emitted(5, 1) Source(1, 1) + SourceIndex(2)
2 >Emitted(5, 10) Source(1, 10) + SourceIndex(2)
3 >Emitted(5, 11) Source(1, 11) + SourceIndex(2)
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
1->Emitted(6, 5) Source(2, 5) + SourceIndex(2)
2 >Emitted(6, 12) Source(2, 12) + SourceIndex(2)
3 >Emitted(6, 28) Source(2, 28) + SourceIndex(2)
4 >Emitted(6, 29) Source(2, 29) + SourceIndex(2)
---
>>>}
1 >
2 >^
3 > ^^^^^^->
1 >
  >
2 >}
1 >Emitted(7, 1) Source(3, 1) + SourceIndex(2)
2 >Emitted(7, 2) Source(3, 2) + SourceIndex(2)
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
1->Emitted(8, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(8, 5) Source(5, 11) + SourceIndex(3)
3 >Emitted(8, 6) Source(5, 12) + SourceIndex(3)
4 >Emitted(8, 7) Source(11, 2) + SourceIndex(3)
---
>>>(function (N) {
1->
2 >^^^^^^^^^^^
3 >           ^
4 >            ^^^^^^^->
1->
2 >namespace 
3 >           N
1->Emitted(9, 1) Source(5, 1) + SourceIndex(3)
2 >Emitted(9, 12) Source(5, 11) + SourceIndex(3)
3 >Emitted(9, 13) Source(5, 12) + SourceIndex(3)
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
1->Emitted(10, 5) Source(6, 5) + SourceIndex(3)
2 >Emitted(10, 14) Source(6, 14) + SourceIndex(3)
3 >Emitted(10, 15) Source(6, 15) + SourceIndex(3)
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
1->Emitted(11, 9) Source(7, 9) + SourceIndex(3)
2 >Emitted(11, 16) Source(7, 16) + SourceIndex(3)
3 >Emitted(11, 17) Source(7, 17) + SourceIndex(3)
4 >Emitted(11, 20) Source(7, 20) + SourceIndex(3)
5 >Emitted(11, 21) Source(7, 21) + SourceIndex(3)
6 >Emitted(11, 30) Source(7, 30) + SourceIndex(3)
7 >Emitted(11, 31) Source(7, 31) + SourceIndex(3)
8 >Emitted(11, 32) Source(7, 32) + SourceIndex(3)
---
>>>    }
1 >^^^^
2 >    ^
3 >     ^^^^->
1 >
  >    
2 >    }
1 >Emitted(12, 5) Source(8, 5) + SourceIndex(3)
2 >Emitted(12, 6) Source(8, 6) + SourceIndex(3)
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
1->Emitted(13, 5) Source(10, 5) + SourceIndex(3)
2 >Emitted(13, 6) Source(10, 6) + SourceIndex(3)
3 >Emitted(13, 8) Source(10, 8) + SourceIndex(3)
4 >Emitted(13, 9) Source(10, 9) + SourceIndex(3)
---
>>>})(N || (N = {}));
1->
2 >^
3 > ^^
4 >   ^
5 >    ^^^^^
6 >         ^
7 >          ^^^^^^^^
8 >                  ^^^^^->
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
1->Emitted(14, 1) Source(11, 1) + SourceIndex(3)
2 >Emitted(14, 2) Source(11, 2) + SourceIndex(3)
3 >Emitted(14, 4) Source(5, 11) + SourceIndex(3)
4 >Emitted(14, 5) Source(5, 12) + SourceIndex(3)
5 >Emitted(14, 10) Source(5, 11) + SourceIndex(3)
6 >Emitted(14, 11) Source(5, 12) + SourceIndex(3)
7 >Emitted(14, 19) Source(11, 2) + SourceIndex(3)
---
-------------------------------------------------------------------
emittedFile:/src/third/thirdjs/output/third-output.js
sourceFile:../../../second/second_part2.ts
-------------------------------------------------------------------
>>>var C = (function () {
1->
2 >^^^^^^^^^^^^^^^^^^^->
1->
1->Emitted(15, 1) Source(1, 1) + SourceIndex(4)
---
>>>    function C() {
1->^^^^
2 >    ^^->
1->
1->Emitted(16, 5) Source(1, 1) + SourceIndex(4)
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
1->Emitted(17, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(17, 6) Source(5, 2) + SourceIndex(4)
---
>>>    C.prototype.doSomething = function () {
1->^^^^
2 >    ^^^^^^^^^^^^^^^^^^^^^^^
3 >                           ^^^
4 >                              ^^^^^^^^^^^^^->
1->
2 >    doSomething
3 >                           
1->Emitted(18, 5) Source(2, 5) + SourceIndex(4)
2 >Emitted(18, 28) Source(2, 16) + SourceIndex(4)
3 >Emitted(18, 31) Source(2, 5) + SourceIndex(4)
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
1->Emitted(19, 9) Source(3, 9) + SourceIndex(4)
2 >Emitted(19, 16) Source(3, 16) + SourceIndex(4)
3 >Emitted(19, 17) Source(3, 17) + SourceIndex(4)
4 >Emitted(19, 20) Source(3, 20) + SourceIndex(4)
5 >Emitted(19, 21) Source(3, 21) + SourceIndex(4)
6 >Emitted(19, 41) Source(3, 41) + SourceIndex(4)
7 >Emitted(19, 42) Source(3, 42) + SourceIndex(4)
8 >Emitted(19, 43) Source(3, 43) + SourceIndex(4)
---
>>>    };
1 >^^^^
2 >    ^
3 >     ^^^^^^^^^->
1 >
  >    
2 >    }
1 >Emitted(20, 5) Source(4, 5) + SourceIndex(4)
2 >Emitted(20, 6) Source(4, 6) + SourceIndex(4)
---
>>>    return C;
1->^^^^
2 >    ^^^^^^^^
1->
  >
2 >    }
1->Emitted(21, 5) Source(5, 1) + SourceIndex(4)
2 >Emitted(21, 13) Source(5, 2) + SourceIndex(4)
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
1 >Emitted(22, 1) Source(5, 1) + SourceIndex(4)
2 >Emitted(22, 2) Source(5, 2) + SourceIndex(4)
3 >Emitted(22, 2) Source(1, 1) + SourceIndex(4)
4 >Emitted(22, 6) Source(5, 2) + SourceIndex(4)
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
1->Emitted(23, 1) Source(1, 1) + SourceIndex(5)
2 >Emitted(23, 5) Source(1, 5) + SourceIndex(5)
3 >Emitted(23, 6) Source(1, 6) + SourceIndex(5)
4 >Emitted(23, 9) Source(1, 9) + SourceIndex(5)
5 >Emitted(23, 13) Source(1, 13) + SourceIndex(5)
6 >Emitted(23, 14) Source(1, 14) + SourceIndex(5)
7 >Emitted(23, 16) Source(1, 16) + SourceIndex(5)
8 >Emitted(23, 17) Source(1, 17) + SourceIndex(5)
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
1->Emitted(24, 1) Source(2, 1) + SourceIndex(5)
2 >Emitted(24, 2) Source(2, 2) + SourceIndex(5)
3 >Emitted(24, 3) Source(2, 3) + SourceIndex(5)
4 >Emitted(24, 14) Source(2, 14) + SourceIndex(5)
5 >Emitted(24, 16) Source(2, 16) + SourceIndex(5)
6 >Emitted(24, 17) Source(2, 17) + SourceIndex(5)
---
>>>//# sourceMappingURL=third-output.js.map

//// [/src/third/thirdjs/output/third-output.tsbuildinfo]
{"bundle":{"commonSourceDirectory":"../..","sourceFiles":["../../third_part1.ts"],"js":{"sections":[{"pos":0,"end":127,"kind":"prepend","data":"../../../first/bin/first-output.js","texts":[{"pos":0,"end":127,"kind":"text"}]},{"pos":127,"end":412,"kind":"prepend","data":"../../../2/second-output.js","texts":[{"pos":127,"end":412,"kind":"text"}]},{"pos":412,"end":448,"kind":"text"}]},"dts":{"sections":[{"pos":0,"end":157,"kind":"prepend","data":"../../../first/bin/first-output.d.ts","texts":[{"pos":0,"end":157,"kind":"text"}]},{"pos":157,"end":257,"kind":"prepend","data":"../../../2/second-output.d.ts","texts":[{"pos":157,"end":257,"kind":"text"}]},{"pos":257,"end":276,"kind":"text"}]}},"version":"FakeTSVersion"}

//// [/src/third/thirdjs/output/third-output.tsbuildinfo.baseline.txt]
======================================================================
File:: /src/third/thirdjs/output/third-output.js
----------------------------------------------------------------------
prepend: (0-127):: ../../../first/bin/first-output.js texts:: 1
>>--------------------------------------------------------------------
text: (0-127)
var s = "Hello, world";
console.log(s);
console.log(s);
console.log(f());
function f() {
    return "JS does hoists";
}

----------------------------------------------------------------------
prepend: (127-412):: ../../../2/second-output.js texts:: 1
>>--------------------------------------------------------------------
text: (127-412)
var N;
(function (N) {
    function f() {
        console.log('testing');
    }
    f();
})(N || (N = {}));
var C = (function () {
    function C() {
    }
    C.prototype.doSomething = function () {
        console.log("something got done");
    };
    return C;
}());

----------------------------------------------------------------------
text: (412-448)
var c = new C();
c.doSomething();

======================================================================
======================================================================
File:: /src/third/thirdjs/output/third-output.d.ts
----------------------------------------------------------------------
prepend: (0-157):: ../../../first/bin/first-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (0-157)
interface TheFirst {
    none: any;
}
declare const s = "Hello, world";
interface NoJsForHereEither {
    none: any;
}
declare function f(): string;

----------------------------------------------------------------------
prepend: (157-257):: ../../../2/second-output.d.ts texts:: 1
>>--------------------------------------------------------------------
text: (157-257)
declare namespace N {
}
declare namespace N {
}
declare class C {
    doSomething(): void;
}

----------------------------------------------------------------------
text: (257-276)
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
          "end": 127,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.js",
          "texts": [
            {
              "pos": 0,
              "end": 127,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 127,
          "end": 412,
          "kind": "prepend",
          "data": "../../../2/second-output.js",
          "texts": [
            {
              "pos": 127,
              "end": 412,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 412,
          "end": 448,
          "kind": "text"
        }
      ]
    },
    "dts": {
      "sections": [
        {
          "pos": 0,
          "end": 157,
          "kind": "prepend",
          "data": "../../../first/bin/first-output.d.ts",
          "texts": [
            {
              "pos": 0,
              "end": 157,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 157,
          "end": 257,
          "kind": "prepend",
          "data": "../../../2/second-output.d.ts",
          "texts": [
            {
              "pos": 157,
              "end": 257,
              "kind": "text"
            }
          ]
        },
        {
          "pos": 257,
          "end": 276,
          "kind": "text"
        }
      ]
    }
  },
  "version": "FakeTSVersion",
  "size": 720
}

