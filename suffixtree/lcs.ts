import {Label, SuffixTree, STNode} from "./data"
import * as labelLib from "./label"
import {suffixTreeAddBang} from "./ukkonen"

// this import is for hashing


function pathLabel( node: STNode) : Label {

  let vectorBlitBang = function( srcLabel: Label, dstVector: string[], destOffset: number) : void {
    for ( var i : number = 0; i < srcLabel.length(); i++) {
      let index : number = i + destOffset;
      if ( i < srcLabel.length()) { // which it is...
        dstVector[ index] = srcLabel.labelRef( i);
        // loop
      }
    }
  }

  let buildNewLabel = function( labels: Label[], totalLength: number) : Label {
    let v : string[] = [];

    // very safe
    let i : number = 0;
    while( true) {
      if ( i >= labels.length) {
        return labelLib.vectorToLabel( v);
      } else {
        vectorBlitBang( labels[i], v, i);
        i += labels[i].length();
      }
    }
  }

  let collectLoop = function( currentNode: STNode, collectedLabels: Label[], totalLength: number) : Label {
    if ( currentNode) { // if its not undefined
      collectedLabels.push( currentNode.upLabel);
      return collectLoop( currentNode.parent, collectedLabels, totalLength + currentNode.upLabel.length());
    } else {
      return buildNewLabel( collectedLabels, totalLength);
    }
  }

  return collectLoop( node, [], 0); // TODO: do
}

function longestCommonSublabel( label1: Label, label2: Label) : Label {
  let label1Marks = {};
  let label2Marks = {};

  let deepestNode : STNode = new STNode( new Label( "no lcs"), undefined, [], undefined);
  let deepestDepth : number = 0;

  let absorbChildrenMarks = function( node: STNode, depth: number) {
    for ( var i : number = 0; i < node.children.length; i++) {
      let child : STNode = node.children[ i];
      // console.log( "label1Marks[ child.spID]: " + label1Marks[ child.spID])
      if ( label1Marks[ child.spID]) { // if its marked
        label1Marks[ node.spID] = true;
      }
      if ( label2Marks[ child.spID]) {
        label2Marks[ node.spID] = true;
      }
    }
    if ( (label1Marks[ node.spID] && label2Marks[ node.spID]) &&
         (depth > deepestDepth)) {
      //
      deepestDepth = depth;
      deepestNode = node;
    }
  }

  let markUpInnerNodesBang = function( node: STNode, depth: number) : void {
    console.log("..............hello?")
    console.log("node.children: ");
    console.log(node.children);
    if ( node.children.length == 0) {
      console.log("48712947892173490128309128301283 PLS")
      if ( node.upLabel.isSourceEqual( label1)) {
        label1Marks[ node.spID] = true;
      }
      if ( node.upLabel.isSourceEqual( label2)) {
        label2Marks[ node.spID] = true;
      }
    } else {
      for ( var i : number = 0; i < node.children.length; i++) {
        let child : STNode = node.children[ i];
        let k : number = depth + child.upLabel.length();
        markUpInnerNodesBang( child, k);
      }
      absorbChildrenMarks( node, depth);

    }
  }

  var main = function() : Label {
    let tree : SuffixTree = new SuffixTree();
    console.log(" -----------------------------------------------------------------");
    console.log("label1: " + label1);
    console.log("label2: " + label2);
    console.log("                                          BEFORE  1 !!!!!")
    suffixTreeAddBang( tree, label1);

    console.log("+++++ After first label added: ")
    tree.printComplete();

    console.log("                                          BETWEEN 1 and 2")
    suffixTreeAddBang( tree, label2);

    console.log("+++++ After second label added: ")
    tree.printComplete();

    console.log("                                          AFTER   2 !!!!!")
    console.log("Logging tree...:")
    tree.printComplete();
    markUpInnerNodesBang( tree.root, 0);
    return pathLabel( deepestNode);
  }

  if ( (label1.length() == 0) || (label2.length() == 0)) {
    return labelLib.stringToLabel("");
  } else {
    let ret: Label = main();
    console.log("\n\n\n\n\nthe dicts: ");
    console.log( label1Marks);
    console.log( label2Marks);
    console.log("..........................................");
    return ret;
  }
}

export function longestCommonSubstring( s1: string, s2: string) : string {
  return longestCommonSublabel( labelLib.stringToLabelWithSentinel( s1),
                                labelLib.stringToLabelWithSentinel( s2)).toString();
  // return longestCommonSublabel( labelLib.stringToLabel( s1),
  //                               labelLib.stringToLabel( s2)).toString();
}
