/// <reference path='fourslash.ts'/>

// @allowJs: true
// @Filename: a.js
////[|class [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}A|] {
////    [|[|{| "contextRangeIndex": 2, "isDefinition": true |}constructor|]() { }|]
////}|]
////[|module.exports = [|{| "contextRangeIndex": 4 |}A|];|]

// @Filename: b.js
////[|const [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 6 |}A|] = require("./a");|]
////new [|A|];

const [r0Def, r0, r1Def, r1, r2Def, r2, r3Def, r3, r4] = test.ranges();
verify.referenceGroups([r0, r2], [
    { definition: "class A", ranges: [r0, r2] },
    { definition: "(alias) class A\nimport A", ranges: [r3, r4] }
]);

verify.referenceGroups(r1, [
    { definition: "class A", ranges: [r1] },
    { definition: "(alias) class A\nimport A", ranges: [r4] }
]);

verify.referenceGroups(r3, [
    { definition: "(alias) class A\nimport A", ranges: [r3, r4] }
]);
verify.referenceGroups(r4, [
    { definition: "(alias) class A\nimport A", ranges: [r3, r4] }
]);

