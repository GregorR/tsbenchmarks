import {Label, SuffixTree, STNode} from "./data"
import {suffixTreeAddBang} from "./ukkonen"

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

let tree : SuffixTree = new SuffixTree();
suffixTreeAddBang( tree, new Label("boba#"))

console.log("\n\n\n\n\n\nFinal Tree Print:");
tree.printComplete();
