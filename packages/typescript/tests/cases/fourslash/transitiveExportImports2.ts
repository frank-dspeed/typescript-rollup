/// <reference path='fourslash.ts'/>

// @Filename: a.ts
////[|namespace [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 0 |}A|] {
////    export const x = 0;
////}|]

// @Filename: b.ts
////[|export import [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 2 |}B|] = [|A|];|]
////[|B|].x;

// @Filename: c.ts
////[|import { [|{| "isWriteAccess": true, "isDefinition": true, "contextRangeIndex": 6 |}B|] } from "./b";|]

verify.noErrors();

const [A0Def, A0, B0Def, B0, A1, B1, B2Def, B2] = test.ranges();
const aRanges = [A0, A1];
const bRanges = [B0, B1];
const cRanges = [B2];

const aGroup = { definition: "namespace A", ranges: aRanges };
const bGroup = { definition: "(alias) namespace B\nimport B = A", ranges: bRanges };
const cGroup = { definition: "(alias) namespace B\nimport B", ranges: cRanges };

verify.referenceGroups(aRanges, [aGroup, bGroup, cGroup]);
verify.referenceGroups(bRanges, [bGroup, cGroup]);
verify.referenceGroups(cRanges, [cGroup, bGroup]);

verify.rangesAreRenameLocations(aRanges);
verify.renameLocations([B0, B1], [...bRanges, ...cRanges]);
verify.renameLocations(B2, [{ range: B2, prefixText: "B as " }]);
