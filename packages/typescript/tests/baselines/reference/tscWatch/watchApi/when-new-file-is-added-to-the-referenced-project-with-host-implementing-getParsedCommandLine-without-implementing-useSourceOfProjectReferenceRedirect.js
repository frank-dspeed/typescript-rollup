Input::
//// [/user/username/projects/myproject/projects/project1/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"exclude":["temp"]}

//// [/user/username/projects/myproject/projects/project1/class1.ts]
class class1 {}

//// [/user/username/projects/myproject/projects/project1/class1.d.ts]
declare class class1 {}

//// [/user/username/projects/myproject/projects/project2/tsconfig.json]
{"compilerOptions":{"module":"none","composite":true},"references":[{"path":"../project1"}]}

//// [/user/username/projects/myproject/projects/project2/class2.ts]
class class2 {}

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


/a/lib/tsc.js --w -p /user/username/projects/myproject/projects/project2/tsconfig.json --extendedDiagnostics
Output::

12:00:33 AM - Starting compilation in watch mode...

Current directory: / CaseSensitiveFileNames: false
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/tsconfig.json 2000 undefined Config file
Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
Loading config file: /user/username/projects/myproject/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/tsconfig.json 2000 undefined Config file of referened project
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class1.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/class2.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 250 undefined Source file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/node_modules/@types 1 undefined Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Type roots

12:00:40 AM - Found 0 errors. Watching for file changes.
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2 1 undefined Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project2 1 undefined Wild card directory


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (used version)

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js]
var class2 = /** @class */ (function () {
    function class2() {
    }
    return class2;
}());


//// [/user/username/projects/myproject/projects/project2/class2.d.ts]
declare class class2 {
}


//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","affectsGlobalScope":true}],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3]},"version":"FakeTSVersion"}


Change:: Add class3 to project1

Input::
//// [/user/username/projects/myproject/projects/project1/class3.ts]
class class3 {}


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Scheduling update
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project

12:00:43 AM - File change detected. Starting incremental compilation...

Synchronizing program
Loading config file: /user/username/projects/myproject/projects/project1/tsconfig.json
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
error TS6053: File '/user/username/projects/myproject/projects/project1/class3.d.ts' not found.
  The file is in the program because:
    Output from referenced project '/user/username/projects/myproject/projects/project1/tsconfig.json' included because '--module' is specified as 'none'

12:00:44 AM - Found 1 error. Watching for file changes.


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::

No shapes updated in the builder::

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class3.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined


Change:: Add class3 output to project1

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts]
declare class class3 {}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project

12:00:47 AM - File change detected. Starting incremental compilation...

Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file

12:00:57 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class3.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class3.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/class2.d.ts] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","../project1/class3.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"-3469165364-declare class class3 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}


Change:: Add excluded file to project1

Input::
//// [/user/username/projects/myproject/projects/project1/temp/file.d.ts]
declare class file {}


Output::
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projects/project1/temp
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected excluded file: /user/username/projects/myproject/projects/project1/temp/file.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/temp/file.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project


Program: Same as old program

BuilderProgram: Same as old builder program

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class3.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined


Change:: Delete output of class3

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts] deleted

Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 2:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 2:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project

12:01:03 AM - File change detected. Starting incremental compilation...

Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
error TS6053: File '/user/username/projects/myproject/projects/project1/class3.d.ts' not found.
  The file is in the program because:
    Output from referenced project '/user/username/projects/myproject/projects/project1/tsconfig.json' included because '--module' is specified as 'none'

12:01:13 AM - Found 1 error. Watching for file changes.


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class3.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/class2.d.ts] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1]},"version":"FakeTSVersion"}


Change:: Add output of class3

Input::
//// [/user/username/projects/myproject/projects/project1/class3.d.ts]
declare class class3 {}


Output::
FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
Scheduling update
Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts 0:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 500 undefined Missing file
DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project
Project: /user/username/projects/myproject/projects/project1/tsconfig.json Detected output file: /user/username/projects/myproject/projects/project1/class3.d.ts
Elapsed:: *ms DirectoryWatcher:: Triggered with /user/username/projects/myproject/projects/project1/class3.d.ts :: WatchInfo: /user/username/projects/myproject/projects/project1 1 undefined Wild card directory of referenced project

12:01:16 AM - File change detected. Starting incremental compilation...

Synchronizing program
CreatingProgramWith::
  roots: ["/user/username/projects/myproject/projects/project2/class2.ts"]
  options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
  projectReferences: [{"path":"/user/username/projects/myproject/projects/project1","originalPath":"../project1"}]
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/projects/project1/class3.d.ts 250 undefined Source file

12:01:26 AM - Found 0 errors. Watching for file changes.


Program root files: ["/user/username/projects/myproject/projects/project2/class2.ts"]
Program options: {"module":0,"composite":true,"extendedDiagnostics":true,"configFilePath":"/user/username/projects/myproject/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/projects/project1/class1.d.ts
/user/username/projects/myproject/projects/project1/class3.d.ts
/user/username/projects/myproject/projects/project2/class2.ts

Shape signatures in builder refreshed for::
/user/username/projects/myproject/projects/project1/class3.d.ts (used version)
/user/username/projects/myproject/projects/project1/class1.d.ts (used version)
/user/username/projects/myproject/projects/project2/class2.ts (computed .d.ts)

WatchedFiles::
/user/username/projects/myproject/projects/project2/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project2/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/tsconfig.json:
  {"fileName":"/user/username/projects/myproject/projects/project1/tsconfig.json","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class1.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class1.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project2/class2.ts:
  {"fileName":"/user/username/projects/myproject/projects/project2/class2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/user/username/projects/myproject/projects/project1/class3.d.ts:
  {"fileName":"/user/username/projects/myproject/projects/project1/class3.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/user/username/projects/myproject/projects/project1:
  {"directoryName":"/user/username/projects/myproject/projects/project1","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/project2/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/projects/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/node_modules/@types:
  {"directoryName":"/user/username/projects/myproject/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/user/username/projects/myproject/projects/project2:
  {"directoryName":"/user/username/projects/myproject/projects/project2","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/projects/project2/class2.js] file written with same contents
//// [/user/username/projects/myproject/projects/project2/class2.d.ts] file written with same contents
//// [/user/username/projects/myproject/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../../../../../../a/lib/lib.d.ts","../project1/class1.d.ts","../project1/class3.d.ts","./class2.ts"],"fileInfos":[{"version":"-7698705165-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }","affectsGlobalScope":true},{"version":"-3469237238-declare class class1 {}","affectsGlobalScope":true},{"version":"-3469165364-declare class class3 {}","affectsGlobalScope":true},{"version":"777969115-class class2 {}","signature":"-2684084705-declare class class2 {\n}\n","affectsGlobalScope":true}],"options":{"composite":true,"module":0},"semanticDiagnosticsPerFile":[1,2,3,4]},"version":"FakeTSVersion"}

