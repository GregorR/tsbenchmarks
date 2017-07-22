
import {Data as D} from "./data";
import {Label as labelLib} from "./label";
import {Ukkonen as U} from "./ukkonen";

export module LCS {
    const suffixTreeAddBang = U.suffixTreeAddBang;

function pathLabel( node: D.STNode) : D.Label {

  let buildNewLabel = function( labels: D.Label[], totalLength: number) : D.Label {
    let v : string[] = [];

    let retStr : string = "";

    for ( var i : number = labels.length - 1; i >= 0; i--) {
      let curLab : D.Label = labels[i];
      for ( var j : number = 0; j < curLab.length(); j++) {
        retStr += curLab.labelRef( j);
      }
    }

    return new D.Label(retStr)

  }

  let collectLoop = function( currentNode: D.STNode, collectedLabels: D.Label[], totalLength: number) : D.Label {
    if ( currentNode) { // if its not undefined
      collectedLabels.push( currentNode.upLabel);
      return collectLoop( currentNode.parent, collectedLabels, totalLength + currentNode.upLabel.length());
    } else {
      return buildNewLabel( collectedLabels, totalLength);
    }
  }

  return collectLoop( node, [], 0);
}

function longestCommonSublabel( label1: D.Label, label2: D.Label) : D.Label {
  let label1Marks : { [id: string] : boolean } = {}
  let label2Marks : { [id: string] : boolean } = {}

  let deepestNode : D.STNode = new D.STNode( new D.Label( "no lcs"), undefined, [], undefined);
  let deepestDepth : number = 0;

  let absorbChildrenMarks = function( node: D.STNode, depth: number) {
    for ( var i : number = 0; i < node.children.length; i++) {
      let child : D.STNode = node.children[ i];
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

  let markUpInnerNodesBang = function( node: D.STNode, depth: number) : void {
    if ( node.children.length == 0) {
      if ( node.upLabel.isSourceEqual( label1)) {
        label1Marks[ node.spID] = true;
      }
      if ( node.upLabel.isSourceEqual( label2)) {
        label2Marks[ node.spID] = true;
      }
    } else {
      for ( var i : number = 0; i < node.children.length; i++) {
        let child : D.STNode = node.children[ i];
        let k : number = depth + child.upLabel.length();
        markUpInnerNodesBang( child, k);
      }
      absorbChildrenMarks( node, depth);
    }
  }

  var main = function() : D.Label {
    let tree : D.SuffixTree = new D.SuffixTree();

    // add both words to the suffixtree
    suffixTreeAddBang( tree, label1);
    suffixTreeAddBang( tree, label2);

    markUpInnerNodesBang( tree.root, 0);

    return pathLabel( deepestNode);
  }

  if ( (label1.length() == 0) || (label2.length() == 0)) {
    return labelLib.stringToLabel("");
  } else {
    let ret: D.Label = main();
    return ret;
  }
}

export function longestCommonSubstring( s1: string, s2: string) : string {
  return longestCommonSublabel( labelLib.stringToLabelWithSentinel( s1),
                                labelLib.stringToLabelWithSentinel( s2)).toString();
}
}
