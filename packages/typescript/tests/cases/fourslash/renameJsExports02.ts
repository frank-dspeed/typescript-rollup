/// <reference path='fourslash.ts'/>

// @allowJs: true
// @Filename: a.js
////module.exports = [|class [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}A|] {}|]

// @Filename: b.js
////[|const [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 2 |}A|] = require("./a");|]

const [rDef, r0, r1Def, r1] = test.ranges();
verify.referenceGroups(r0, [
    { definition: "(local class) A", ranges: [r0] },
    { definition: "(alias) (local class) A\nimport A", ranges: [r1] }
]);

verify.singleReferenceGroup("(alias) (local class) A\nimport A", [r1]);
