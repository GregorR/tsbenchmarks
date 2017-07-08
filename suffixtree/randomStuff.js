"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var ukkonen_1 = require("./ukkonen");
// let a = []
//
// if ( a === []) {
//   console.log("hur");
// } else {
//   console.log("poop");
// }
//
// console.log( Math.max(1, 2))
//
// let l1 : Label = new Label( "jel");
// let l2 : Label = new Label( "jello");
//
// if ( l1.isPrefix( l2)) {
//   console.log("color me unsurprised")
// }
var tree = new data_1.SuffixTree();
ukkonen_1.suffixTreeAddBang(tree, new data_1.Label("boba#"));
console.log("\n\n\n\n\n\nFinal Tree Print:");
tree.printComplete();
