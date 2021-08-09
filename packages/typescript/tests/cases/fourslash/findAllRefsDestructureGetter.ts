/// <reference path="fourslash.ts" />

////class Test {
////    [|get [|{| "isDefinition": true, "isWriteAccess": true, "contextRangeIndex": 0 |}x|]() { return 0; }|]
////
////    [|set [|{| "isDefinition": true, "isWriteAccess": true, "contextRangeIndex": 2 |}y|](a: number) {}|]
////}
////[|const { [|{| "isDefinition": true, "isWriteAccess": true, "contextRangeIndex": 4 |}x|], [|{| "isDefinition": true, "isWriteAccess": true, "contextRangeIndex": 4 |}y|] } = new Test();|]
////[|x|]; [|y|];

const [x0Def, x0, y0Def, y0, xy1Def, x1, y1, x2, y2] = test.ranges();
verify.referenceGroups(x0, [{ definition: "(property) Test.x: number", ranges: [x0, x1] }]);
verify.referenceGroups(x1, [
    { definition: "(property) Test.x: number", ranges: [x0] },
    { definition: "const x: number", ranges: [x1, x2] },
]);
verify.referenceGroups(x2, [{ definition: "const x: number", ranges: [x1, x2] }]);

verify.referenceGroups(y0, [{ definition: "(property) Test.y: number", ranges: [y0, y1] }]);
verify.referenceGroups(y1, [
    { definition: "(property) Test.y: number", ranges: [y0] },
    { definition: "const y: number", ranges: [y1, y2] },
]);
verify.referenceGroups(y2, [{ definition: "const y: number", ranges: [y1, y2] }]);
