import {Label, STNode, SuffixTree} from "./data"
import * as labelLib from "./label"

let dummyNode = new STNode( new Label("dummy"), undefined, [], undefined);

// function skipCountHelper( node: STNode, label: Label, k: number, N: number) : [STNode, number] {
//   if ( k >= N) {
//     return [node, node.upLabel.length()]
//   } else {
//
//     // implements the logic of the (loop node k) structure
//     // -- we have to update the node each iteration
//     while (k < N) {
//       node = node.findChild( label.labelRef( k)); // the child
//       let childLabel : Label = node.upLabel;
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

function skipCountHelper( node: STNode, label: Label, k: number, N: number) : [STNode, number] {
  let idiomaticRecursiveLoopFun = function( node: STNode, k: number) {
    console.log( label.labelRef( k))
    let child : STNode = node.findChild(label.labelRef( k));
    if ( child == undefined) {
      console.log("BAD")
    }
    let childLabel : Label = child.upLabel;
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

function skipCount( node : STNode, label : Label) : [STNode, number] {
  let ll : number = label.length();

  return skipCountHelper( node, label, 0, ll);
}



function jumpToSuffix( node : STNode) : [STNode, number | boolean] {
  let PARENT : STNode = node.parent;
  if (node.nodeRoot()) {
    return [node, false]
  } else if (node.suffixLink != undefined) { // if there is one
    let node2 : STNode = node.suffixLink;
    return [node2, 0]
  } else if (PARENT != undefined && PARENT.nodeRoot()) {
    return [PARENT, false]
  } else {
    let parent : STNode = node.parent; // why?
    let sl : STNode = parent.suffixLink;
    return [sl, node.upLabel.length()];
  }
}

function tryToSetSuffixEdgeBang( fromNode : STNode, toNode : STNode) {
  if ( fromNode.suffixLink == undefined) {
    fromNode.suffixLink = toNode;
  }
}

// this is probably the least idiomatic TS there is
function findNextExtensionPointAndAddSuffixLinkBang ( node: STNode,
                                                      label: Label,
                                                      initialI: number,
                                                      j: number) : [STNode | boolean, number | boolean, number | boolean] {
  //
  let fixedStart = function( suffixOffset : number | boolean) : number {
    let i : number;
    if ( typeof suffixOffset != "boolean") { // if its a bool, its false
      i = initialI - suffixOffset;
    } else {
      i = j;
    }
    return i
  }

  let tmp : [STNode, number | boolean] = jumpToSuffix( node);
  let suffixNode : STNode = tmp[ 0];
  let suffixOffset : number | boolean = tmp[ 1];

  let callVal : number | boolean = -1;
  if ( typeof suffixOffset == "number") {
    callVal = suffixOffset;
  } else if ( suffixOffset == true) {
    callVal = 1;
  } else if ( suffixOffset == false) {
    callVal = false;
  } else {
    console.log(" 21837298147981274 921847 98217 4982174 98217 498217 4987 ERROR: findNext")
  }

  let K : number = fixedStart( callVal);

  let N : number = label.length();

  let findExtensionInEdge = function( skippedNode: STNode, skipOffset: number, i: number) : [STNode | boolean, number | boolean, number | boolean] {
    if ( label.labelRef( i) == skippedNode.upLabel.labelRef( skipOffset)) {
      let n : number = i + 1;
      return loopRest( n);
    } else {
      return [skippedNode, skipOffset, i];
    }
  }

  let findExtensionAtEndBang = function( skippedNode: STNode, skipOffset: number, i: number) : [STNode | boolean, number | boolean, number | boolean] {
    if ( skippedNode.findChild( label.labelRef( i))) {
      let n : number = i + 1;
      return loopRest( n);
    } else {
      return [skippedNode, skipOffset, i];
    }
  }

  var loopGeneral = function( i : number, firstShot : (STNode, number)=>void) : [STNode | boolean, number | boolean, number | boolean]{
    if ( i >= N) {
      return [false, false, false];
    } else {
      let tmp : [STNode, number] = skipCountHelper( suffixNode, label, K, i);
      let skippedNode : STNode = tmp[ 0];
      let skippedOffset : number = tmp[ 1];
      firstShot( skippedNode, skippedOffset);
      if ( skippedNode.positionAtEnd( skippedOffset)) {
        return findExtensionAtEndBang( skippedNode, skippedOffset, i);
      } else {
        return findExtensionInEdge( skippedNode, skippedOffset, i);
      }
    }
  }

  var loopRest = function( i) : [STNode | boolean, number | boolean, number | boolean] {
    let theLambda = function( skippedNode: STNode, skipOffset: number) : void {
      // nothing
    }
    return loopGeneral( i, theLambda);
  }

  var loopFirst = function( i : number) : [STNode | boolean, number | boolean, number | boolean] {
    let theLambda = function( skippedNode : STNode, skipOffset: number) : void {
      if (skippedNode.positionAtEnd( skipOffset)) {
        tryToSetSuffixEdgeBang( node, skippedNode);
      }
    }
    return loopGeneral( i, theLambda);
  }

  return loopFirst( initialI);

}

function extendAtPointBang( node: STNode, offset: number, label: Label, i: number) : STNode {

  let spliceWithInternalNodeBang = function( node: STNode, offset: number, label: Label, i: number) : STNode {
    let tmp : [STNode, STNode] = node.upSpliceLeaf( offset, label.sublabel(i));
    let splitNode : STNode = tmp[ 0]
    let leaf : STNode = tmp[ 1];
    return splitNode;
  }

  let attachAsLeafBang = function( node: STNode, label: Label, i: number) : STNode {
    let leaf : STNode = node.addLeafBang( label.sublabel( i));
    return node;
  }

  let shouldExtendAsLeaf = function( node: STNode, offset: number) : boolean {
    return node.positionAtEnd( offset);
  }

  let mainLogic = function( node: STNode, offset: number, label: Label, i: number) : STNode {
    if (shouldExtendAsLeaf( node, offset)) {
      return attachAsLeafBang( node, label, i);
    } else {
      return spliceWithInternalNodeBang( node, offset, label, i);
    }
  }
  return mainLogic( node, offset, label, i);
}

export function suffixTreeAddBang( tree: SuffixTree, label: Label) : void {

  let reportImplicitTreeConstructed = function() : [STNode, number] {
    console.log("HELLO FROM reportImplicitTreeConstructed")
    return [dummyNode, 0];
  }

  let addRestSuffixesLoopBang = function( label: Label, N: number, i: number, j: number, activeNode: STNode) {
    if (j < N) {
      let tmp : [STNode | boolean, number | boolean, number | boolean] =
        findNextExtensionPointAndAddSuffixLinkBang( activeNode, label, i, j);
      let nextExtensionNode : STNode | boolean = tmp[ 0];
      let nextExtensionOffset : number | boolean = tmp[ 1];
      let iStar : number | boolean = tmp[ 2];
      if ( typeof iStar != "boolean") { // if it was bool, it would be false
        if ( (typeof nextExtensionNode != "boolean") &&
             (typeof nextExtensionOffset != "boolean")) {
          //
          let newActiveNode : STNode = extendAtPointBang( nextExtensionNode, nextExtensionOffset, label, iStar);
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

  let addRestSuffixesBang = function( label: Label, startingNode: STNode, startingOffset: number){
    addRestSuffixesLoopBang(
      label,
      label.length(),
      Math.max( startingOffset, 1),
      1,
      startingNode
    );
  }

  let addFirstSuffixBang = function( tree: SuffixTree, label: Label) : [STNode, number] {

    let matchedAtNode = function( node: STNode) : [STNode, number] {
      console.log("matchedAtNode");
      return reportImplicitTreeConstructed();
    }

    let matchedInNode = function( node: STNode, offset: number) : [STNode, number] {
      console.log("matchedInNode");
      return reportImplicitTreeConstructed();
    }

    let mismatchedAtNode = function( node: STNode, label: Label, labelOffset: number) : [STNode, number] {
      console.log("mismatchedAtNode");
      let leaf : STNode = node.addLeafBang( label.sublabel( labelOffset));
      return [node, labelOffset];
    }

    let mismatchedInNode = function( node: STNode, offset: number, label: Label, labelOffset: number) : [STNode, number] {
      console.log("mismatchedInNode");
      let tmp : [STNode, STNode] = node.upSpliceLeaf( offset, label.sublabel( labelOffset));
      let joint : STNode = tmp[ 0];
      let leaf : STNode = tmp[ 1];
      return [joint, labelOffset];
    }

    // console.log("before...")
    // console.log(tree.root); // DEBUG
    // console.log("after...")

    let res : [STNode, number] = tree.root.nodeFollowK( label, matchedAtNode, matchedInNode,
                                                        mismatchedAtNode, mismatchedInNode);
    return res;
  }

  let doConstructionBang = function( tree: SuffixTree, label: Label) {
    let pr : [STNode, number] = addFirstSuffixBang( tree, label);
    console.log( "pr: " + pr); // DEBUG
    console.log( "pr[0]: "); console.log( pr[0]); // DEBUG
    let startingNode : STNode = pr[ 0];
    let startingOffset : number = pr[ 1];
    return addRestSuffixesBang( label, startingNode, startingOffset);
  }

  doConstructionBang( tree, label);

}
