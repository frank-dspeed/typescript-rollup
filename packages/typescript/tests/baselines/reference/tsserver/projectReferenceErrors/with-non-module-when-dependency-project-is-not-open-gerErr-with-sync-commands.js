Provided types map file "/a/lib/typesMap.json" doesn't exist
request:{"seq":0,"type":"request","command":"open","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts"}}
Search path: /user/username/projects/myproject/usage
For info: /user/username/projects/myproject/usage/usage.ts :: Config file name: /user/username/projects/myproject/usage/tsconfig.json
Creating configuration project /user/username/projects/myproject/usage/tsconfig.json
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/usage/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Config file
Config: /user/username/projects/myproject/usage/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/usage/usage.ts"
 ],
 "options": {
  "composite": true,
  "outFile": "/user/username/projects/myproject/usage.js",
  "configFilePath": "/user/username/projects/myproject/usage/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/user/username/projects/myproject/dependency",
   "originalPath": "../dependency"
  }
 ]
}
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/usage 1 undefined Config: /user/username/projects/myproject/usage/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/usage 1 undefined Config: /user/username/projects/myproject/usage/tsconfig.json WatchType: Wild card directory
Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Starting updateGraphWorker: Project: /user/username/projects/myproject/usage/tsconfig.json
Config: /user/username/projects/myproject/dependency/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/dependency/fns.ts"
 ],
 "options": {
  "composite": true,
  "outFile": "/user/username/projects/myproject/dependency.js",
  "configFilePath": "/user/username/projects/myproject/dependency/tsconfig.json"
 }
}
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Config file
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency 1 undefined Config: /user/username/projects/myproject/dependency/tsconfig.json WatchType: Wild card directory
FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/dependency/fns.ts 500 undefined WatchType: Closed Script info
FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/usage/node_modules/@types 1 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/usage/node_modules/@types 1 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Type roots
DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Type roots
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/usage/tsconfig.json WatchType: Type roots
Finishing updateGraphWorker: Project: /user/username/projects/myproject/usage/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Project '/user/username/projects/myproject/usage/tsconfig.json' (Configured)
	Files (3)
	/a/lib/lib.d.ts
	/user/username/projects/myproject/dependency/fns.ts
	/user/username/projects/myproject/usage/usage.ts


	../../../../../a/lib/lib.d.ts
	  Default library
	../dependency/fns.ts
	  Source from referenced project '../dependency/tsconfig.json' included because '--outFile' specified
	usage.ts
	  Matched by include pattern '**/*' in 'tsconfig.json'

-----------------------------------------------
Search path: /user/username/projects/myproject/usage
For info: /user/username/projects/myproject/usage/tsconfig.json :: No config files found.
Project '/user/username/projects/myproject/usage/tsconfig.json' (Configured)
	Files (3)

-----------------------------------------------
Open files: 
	FileName: /user/username/projects/myproject/usage/usage.ts ProjectRootPath: undefined
		Projects: /user/username/projects/myproject/usage/tsconfig.json
response:{"responseRequired":false}
request:{"command":"syntacticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts"},"seq":1,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"semanticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts"},"seq":2,"type":"request"}
response:{"response":[{"start":{"line":3,"offset":1},"end":{"line":3,"offset":6},"text":"Cannot find name 'fnErr'.","code":2304,"category":"error"}],"responseRequired":true}
request:{"command":"suggestionDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts"},"seq":3,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"syntacticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts"},"seq":4,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"semanticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts"},"seq":5,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"suggestionDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts"},"seq":6,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"syntacticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":7,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"semanticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":8,"type":"request"}
response:{"response":[{"start":{"line":3,"offset":1},"end":{"line":3,"offset":6},"text":"Cannot find name 'fnErr'.","code":2304,"category":"error"}],"responseRequired":true}
request:{"command":"suggestionDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/usage/usage.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":9,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"syntacticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":10,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"semanticDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":11,"type":"request"}
response:{"response":[],"responseRequired":true}
request:{"command":"suggestionDiagnosticsSync","arguments":{"file":"/user/username/projects/myproject/dependency/fns.ts","projectFileName":"/user/username/projects/myproject/usage/tsconfig.json"},"seq":12,"type":"request"}
response:{"response":[],"responseRequired":true}