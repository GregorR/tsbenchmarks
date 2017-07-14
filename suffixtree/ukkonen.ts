//import {D.Label, D.STNode, D.SuffixTree} from "./data"
import {Data as D} from "./data";
import {Label as labelLib} from "./label";

export module Ukkonen {
let dummyNode = new D.STNode( new D.Label("dummy"), undefined, [], undefined);

// function skipCountHelper( node: D.STNode, label: D.Label, k: number, N: number) : [D.STNode, number] {
//   if ( k >= N) {
//     return [node, node.upLabel.length()]
//   } else {
//
//     // implements the logic of the (loop node k) structure
//     // -- we have to update the node each iteration
//     while (k < N) {
//       node = node.findChild( label.labelRef( k)); // the child
//       let childLabel : D.Label = node.upLabel;
//       let childLabelLength : number = childLabel.length();
//       let restOfCharsLeftToSkip : number = N - k;
//
//       if ( restOfCharsLeftToSkip > childLabelLength) {
//         k += childLabelLength;
//       } else {
//         return [node, restOfCharsLeftToSkip];
//       }
//     }
//   }
// }

function skipCountHelper( node: D.STNode, label: D.Label, k: number, N: number) : [D.STNode, number] {
  let idiomaticRecursiveLoopFun = function( node: D.STNode, k: number): [D.STNode, number] {
    // // // console.log(" ---- ------------------------ ----")
    // // // console.log( "looking for: " + label.labelRef( k))
    // // // console.log("\nComplete print:\n")
    // node.printComplete();
    // // // console.log("\nChildren print:\n")
    // for ( var i = 0; i < node.children.length; i++) {
    //   node.children[ i].printComplete();
    // }
    let child : D.STNode = node.findChild(label.labelRef( k));
    // if ( child == undefined) {
    //   // // console.log("BAD")
    // }
    let childLabel : D.Label = child.upLabel;
    let childLabelLength : number = childLabel.length();
    let restOfCharsLeftToSkip : number = N - k;
    if ( restOfCharsLeftToSkip > childLabelLength) {
      return idiomaticRecursiveLoopFun( child, k + childLabelLength);
    } else {
      return [child, restOfCharsLeftToSkip];
    }
  }

  if ( k >= N) {
    return [node, node.upLabel.length()]
  } else {
    return idiomaticRecursiveLoopFun( node, k);
  }
}

function skipCount( node : D.STNode, label : D.Label) : [D.STNode, number] {
  let ll : number = label.length();

  return skipCountHelper( node, label, 0, ll);
}



function jumpToSuffix( node : D.STNode) : [D.STNode, number | boolean] {
  let PARENT : D.STNode = node.parent;
  if (node.nodeRoot()) {
    return [node, false]
  } else if (node.suffixLink != undefined) { // if there is one
    let node2 : D.STNode = node.suffixLink;
    return [node2, 0]
  } else if (PARENT != undefined && PARENT.nodeRoot()) {
    return [PARENT, false]
  } else {
    let parent : D.STNode = node.parent; // why?
    let sl : D.STNode = parent.suffixLink;
    return [sl, node.upLabel.length()];
  }
}

function tryToSetSuffixEdgeBang( fromNode : D.STNode, toNode : D.STNode) {
  if ( fromNode.suffixLink == undefined) {
    fromNode.suffixLink = toNode;
  }
}

// this is probably the least idiomatic TS there is
function findNextExtensionPointAndAddSuffixLinkBang ( node: D.STNode,
                                                      label: D.Label,
                                                      initialI: number,
                                                      j: number) : [D.STNode | boolean, number | boolean, number | boolean] {
  //
  let fixedStart = function( suffixOffset : number | boolean) : number {
    let i : number;
    if ( typeof suffixOffset != "boolean") { // if its a bool, its false
      i = initialI - suffixOffset;
    } else {
      i = j;
    }
    return i;
  }

  let tmp : [D.STNode, number | boolean] = jumpToSuffix( node);
  let suffixNode : D.STNode = tmp[ 0];
  let suffixOffset : number | boolean = tmp[ 1];

  // console.log("\nsuffixNode: ")
  // suffixNode.cutePrint("")
  // console.log("suffixOffset: " + suffixOffset);

  let callVal : number | boolean = -1;
  if ( typeof suffixOffset == "number") {
    callVal = suffixOffset;
  } else if ( suffixOffset == true) {
    callVal = 1;
  } else if ( suffixOffset == false) {
    callVal = false;
  } else {
    // // console.log(" 21837298147981274 921847 98217 4982174 98217 498217 4987 ERROR: findNext")
  }

  let K : number = fixedStart( callVal);
  let N : number = label.length();

  // console.log("K: " + K + "\nN: " + N);

  let findExtensionInEdge = function( skippedNode: D.STNode, skipOffset: number, i: number) : [D.STNode | boolean, number | boolean, number | boolean] {
    // // console.log(  "\n\n\t\t\t ===== \n\
    //              \t\t\t inEdge \n\
    //              \t\t\t =====\n\n");
    if ( label.labelRef( i) == skippedNode.upLabel.labelRef( skipOffset)) {
      // // console.log("[1]")
      let n : number = i + 1;
      return loopRest( n);
    } else {
      // // console.log("[2]")
      return [skippedNode, skipOffset, i];
    }
  }

  let findExtensionAtEndBang = function( skippedNode: D.STNode, skipOffset: number, i: number) : [D.STNode | boolean, number | boolean, number | boolean] {
    // // console.log(  "\n\n\t\t\t ===== \n\
    //              \t\t\t atEnd \n\
    //              \t\t\t =====\n\n");
    if ( skippedNode.findChild( label.labelRef( i)) != undefined) { // if there is a child
      // // console.log("[3]")
      let n : number = i + 1;
      return loopRest( n);
    } else {
      // // console.log("[4]")
      return [skippedNode, skipOffset, i];
    }
  }

  var loopGeneral = function( i : number, firstShot : (a:D.STNode, b:number)=>void) : [D.STNode | boolean, number | boolean, number | boolean]{
    if ( i >= N) {
      return [false, false, false];
    } else {
      let tmp : [D.STNode, number] = skipCountHelper( suffixNode, label, K, i);
      let skippedNode : D.STNode = tmp[ 0];
      let skippedOffset : number = tmp[ 1];

      // // console.log( "\n\nskippedNode: ");
      // skippedNode.cutePrint("");
      // // console.log( "skippedOffset: " + skippedOffset);

      firstShot( skippedNode, skippedOffset);
      if ( skippedNode.positionAtEnd( skippedOffset)) {
        // yup
        return findExtensionAtEndBang( skippedNode, skippedOffset, i);
      } else {
        // yup
        return findExtensionInEdge( skippedNode, skippedOffset, i);
      }
    }
  }

  var loopRest = function( i: number) : [D.STNode | boolean, number | boolean, number | boolean] {
    let theLambda = function( skippedNode: D.STNode, skipOffset: number) : void {
      // nothing
    }
    return loopGeneral( i, theLambda);
  }

  var loopFirst = function( i : number) : [D.STNode | boolean, number | boolean, number | boolean] {
    let theLambda = function( skippedNode : D.STNode, skipOffset: number) : void {
      if (skippedNode.positionAtEnd( skipOffset)) {
        tryToSetSuffixEdgeBang( node, skippedNode);
      }
    }
    return loopGeneral( i, theLambda);
  }

  return loopFirst( initialI);

}

function extendAtPointBang( anode: D.STNode, aoffset: number, alabel: D.Label, ai: number) : D.STNode {

  let spliceWithInternalNodeBang = function( node: D.STNode, offset: number, label: D.Label, i: number) : D.STNode {
    let tmp : [D.STNode, D.STNode] = node.upSpliceLeaf( offset, label.sublabel(i));
    let splitNode : D.STNode = tmp[ 0];
    let leaf : D.STNode = tmp[ 1];
    // console.log("\n\nspliceWithInternalNodeBang: splitNode is....")
    // // console.log( splitNode);
    // splitNode.cutePrint("");
    // console.log("spliceWithInternalNodeBang: and leaf is....")
    // // console.log( leaf);
    // leaf.cutePrint("")
    // console.log("\n\n");
    return splitNode;
  }

  let attachAsLeafBang = function( node: D.STNode, label: D.Label, i: number) : D.STNode {
    let leaf : D.STNode = node.addLeafBang( label.sublabel( i));
    return node;
  }

  let shouldExtendAsLeaf = function( node: D.STNode, offset: number) : boolean {
    return node.positionAtEnd( offset);
  }

  let mainLogic = function( node: D.STNode, offset: number, label: D.Label, i: number) : D.STNode {
    if (shouldExtendAsLeaf( node, offset)) {
      // console.log(" attaching as leaf...")
      return attachAsLeafBang( node, label, i);
    } else {
      // console.log(" splicing....")
      return spliceWithInternalNodeBang( node, offset, label, i);
    }
  }
  return mainLogic( anode, aoffset, alabel, ai);
}

export function suffixTreeAddBang( tree: D.SuffixTree, label: D.Label) : void {

  let reportImplicitTreeConstructed = function() : [D.STNode, number] {
    // // console.log("HELLO FROM reportImplicitTreeConstructed")
    return [dummyNode, 0];
  }

  let addRestSuffixesLoopBang = function( label: D.Label, N: number, i: number, j: number, activeNode: D.STNode) {

    // // console.log("in addRestSuffixesLoopBang -- activeNode.cutePrint():");
    // activeNode.cutePrint("");
    // console.log("1");
    // checked, right
    // // console.log("\n\n\t\t\tSome numbers -- j: " + j + ", N: " + N + "\n\n");

    if (j < N) {
      let tmp : [D.STNode | boolean, number | boolean, number | boolean] =
        findNextExtensionPointAndAddSuffixLinkBang( activeNode, label, i, j);
      let nextExtensionNode : D.STNode | boolean = tmp[ 0];
      let nextExtensionOffset : number | boolean = tmp[ 1];
      let iStar : number | boolean = tmp[ 2];

      // ok
      if ( !(typeof iStar == "boolean" || typeof nextExtensionNode == "boolean"
           || typeof nextExtensionOffset == "boolean")) {
             // console.log("tmp stuff: ");
             // console.log("nextExtensionNode: ");
             // nextExtensionNode.cutePrint("");
             // console.log( nextExtensionNode);
             // console.log("nextExtensionOffset: " + nextExtensionOffset);
             // console.log("i*: " + iStar);
      }

      if ( typeof iStar != "boolean") { // if it was bool, it would be false
        if ( (typeof nextExtensionNode != "boolean") &&
             (typeof nextExtensionOffset != "boolean")) {
          // so if the data is valid
          // // console.log('================================\n************************\n================================')
          // // console.log(nextExtensionNode)
          // // console.log(nextExtensionOffset)
          // // console.log(label)
          // // console.log(iStar)
          // // console.log('================================\n************************\n================================')
          let newActiveNode : D.STNode = extendAtPointBang( nextExtensionNode, nextExtensionOffset, label, iStar);

          // console.log('================================\n      newActiveNode     \n================================')
          // // console.log( newActiveNode);
          // newActiveNode.cutePrint("");
          // console.log('================================\n   endNewActiveNode     \n================================')
          tryToSetSuffixEdgeBang( activeNode, newActiveNode);
          addRestSuffixesLoopBang(
            label,
            N,
            Math.max( iStar, j + 1),
            j + 1,
            newActiveNode
          );
        }
      } else {
        reportImplicitTreeConstructed(); // this is pointless
      }
    }
  }

  let addRestSuffixesBang = function( label: D.Label, startingNode: D.STNode, startingOffset: number){
    // console.log("---------------------------------------")
    // console.log("  addRestSuffixedBang: begin")
    addRestSuffixesLoopBang(
      label,
      label.length(),
      Math.max( startingOffset, 1),
      1,
      startingNode
    );
    // console.log("  addRestSuffixedBang: end")
    // console.log("---------------------------------------")
  }

  let addFirstSuffixBang = function( tree: D.SuffixTree, label: D.Label) : [D.STNode, number] {

    let matchedAtNode = function( node: D.STNode) : [D.STNode, number] {
      // // console.log("matchedAtNode");
      return reportImplicitTreeConstructed();
    }

    let matchedInNode = function( node: D.STNode, offset: number) : [D.STNode, number] {
      // // console.log("matchedInNode");
      return reportImplicitTreeConstructed();
    }

    let mismatchedAtNode = function( node: D.STNode, label: D.Label, labelOffset: number) : [D.STNode, number] {
      // // console.log("mismatchedAtNode");
      let leaf : D.STNode = node.addLeafBang( label.sublabel( labelOffset));
      return [node, labelOffset];
    }

    let mismatchedInNode = function( node: D.STNode, offset: number, label: D.Label, labelOffset: number) : [D.STNode, number] {
      // // console.log("mismatchedInNode");
      let tmp : [D.STNode, D.STNode] = node.upSpliceLeaf( offset, label.sublabel( labelOffset));
      let joint : D.STNode = tmp[ 0];
      let leaf : D.STNode = tmp[ 1];
      return [joint, labelOffset];
    }

    // // // console.log("before...")
    // // // console.log(tree.root); // DEBUG
    // // // console.log("after...")

    let res : [D.STNode, number] = tree.root.nodeFollowK( label, matchedAtNode, matchedInNode,
                                                        mismatchedAtNode, mismatchedInNode);

    // // console.log("tree after firstSuffixBangarang:")
    // tree.cutePrint();
    return res;
  }

  let doConstructionBang = function( tree: D.SuffixTree, label: D.Label) {
    // console.log("suffixTreeAddBang.doConstructionBang: in")

    let pr : [D.STNode, number] = addFirstSuffixBang( tree, label);
    // // // console.log( "pr: " + pr); // DEBUG
    // // // console.log( "pr[0]: "); // // console.log( pr[0]); // DEBUG
    let startingNode : D.STNode = pr[ 0];

    // console.log("\nthe startingNode after first: ");
    // startingNode.cutePrint("");

    let startingOffset : number = pr[ 1];
    // console.log("startingOffset:" + startingOffset);
    addRestSuffixesBang( label, startingNode, startingOffset);

    // console.log("\nthe startingNode after rest: ");
    // startingNode.cutePrint("");
  }

  doConstructionBang( tree, label);

}
}
