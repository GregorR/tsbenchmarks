"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var labelLib = require("./label");
var ukkonen_1 = require("./ukkonen");
// this import is for hashing
function pathLabel(node) {
    // let vectorBlitBang = function( srcLabel: Label, dstVector: string[], destOffset: number) : void {
    //   for ( var i : number = 0; i < srcLabel.length(); i++) {
    //     let index : number = i + destOffset;
    //     if ( i < srcLabel.length()) { // which it is...
    //       dstVector[ index] = srcLabel.labelRef( i);
    //       // loop
    //     }
    //   }
    // }
    var buildNewLabel = function (labels, totalLength) {
        var v = [];
        // very safe
        // let i : number = 0;
        // while( true) {
        //   //// console.log("safety first")
        //   if ( i >= labels.length) {
        //     return labelLib.vectorToLabel( v);
        //   } else {
        //     vectorBlitBang( labels[i], v, i);
        //     i += labels[i].length();
        //   }
        // }
        var retStr = "";
        for (var i = labels.length - 1; i >= 0; i--) {
            var curLab = labels[i];
            // console.log( curLab);
            for (var j = 0; j < curLab.length(); j++) {
                retStr += curLab.labelRef(j);
            }
        }
        return new data_1.Label(retStr);
    };
    var collectLoop = function (currentNode, collectedLabels, totalLength) {
        if (currentNode) {
            collectedLabels.push(currentNode.upLabel);
            return collectLoop(currentNode.parent, collectedLabels, totalLength + currentNode.upLabel.length());
        }
        else {
            // // console.log("collected labels:");
            // // console.log(collectedLabels)
            // // console.log(totalLength)
            // // console.log( collectedLabels);
            return buildNewLabel(collectedLabels, totalLength);
        }
    };
    return collectLoop(node, [], 0);
}
function longestCommonSublabel(label1, label2) {
    var label1Marks = {};
    var label2Marks = {};
    var deepestNode = new data_1.STNode(new data_1.Label("no lcs"), undefined, [], undefined);
    var deepestDepth = 0;
    var absorbChildrenMarks = function (node, depth) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            // // // console.log( "label1Marks[ child.spID]: " + label1Marks[ child.spID])
            if (label1Marks[child.spID]) {
                label1Marks[node.spID] = true;
            }
            if (label2Marks[child.spID]) {
                label2Marks[node.spID] = true;
            }
        }
        // // console.log("BEG Logging in absorbChildrenMarks: ")
        // // console.log( label1Marks[ node.spID])
        // // console.log( label2Marks[ node.spID])
        // // console.log( "depth: " + depth);
        // // console.log( "deepestDepth: " + deepestDepth);
        // // console.log("END Logging in absorbChildrenMarks. ")
        if ((label1Marks[node.spID] && label2Marks[node.spID]) &&
            (depth > deepestDepth)) {
            //
            deepestDepth = depth;
            deepestNode = node;
        }
    };
    var markUpInnerNodesBang = function (node, depth) {
        // // console.log("..............hello?")
        // // console.log("node.children: ");
        // // console.log(node.children);
        if (node.children.length == 0) {
            // // // console.log("48712947892173490128309128301283 PLS")
            if (node.upLabel.isSourceEqual(label1)) {
                // // console.log( "marked 1");
                label1Marks[node.spID] = true;
            }
            if (node.upLabel.isSourceEqual(label2)) {
                // // console.log( "marked 2");
                label2Marks[node.spID] = true;
            }
        }
        else {
            for (var i = 0; i < node.children.length; i++) {
                var child = node.children[i];
                var k = depth + child.upLabel.length();
                markUpInnerNodesBang(child, k);
            }
            absorbChildrenMarks(node, depth);
            // // console.log("left absorbChildrenMarks");
        }
    };
    var main = function () {
        // console.log("longestCommonSublabel.main: in");
        var tree = new data_1.SuffixTree();
        // // console.log(" -----------------------------------------------------------------");
        // // console.log("label1: " + label1);
        // // console.log("label2: " + label2);
        // // console.log("                                          BEFORE  1 !!!!!")
        ukkonen_1.suffixTreeAddBang(tree, label1);
        // console.log("after suffixTreeAddBang( tree, label1), tree is:");
        tree.cutePrint();
        // console.log("\n\n\n\n\n"); // add some space between adds
        // // console.log(" ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
        // // console.log(" +++++ After first label added: ");
        //tree.printComplete();
        // tree.cutePrint();
        // // console.log("                                          BETWEEN 1 and 2")
        ukkonen_1.suffixTreeAddBang(tree, label2);
        // console.log("after suffixTreeAddBang( tree, label2), tree is:");
        tree.cutePrint();
        // console.log("\n\n\n\n\n"); // add some space between adds
        // // // console.log("+++++ After second label added: ")
        // tree.printComplete();
        // // console.log("                                          AFTER   2 !!!!!")
        // // // console.log("Logging tree...:")
        // tree.printComplete();
        // console.log("before markUp")
        markUpInnerNodesBang(tree.root, 0);
        // console.log("after markUp")
        // // console.log("pre return...")
        // console.log("\n\n\n\n\nthe dicts: ");
        // console.log( label1Marks);
        // console.log( label2Marks);
        // console.log("..........................................");
        return pathLabel(deepestNode);
    };
    if ((label1.length() == 0) || (label2.length() == 0)) {
        return labelLib.stringToLabel("");
    }
    else {
        var ret = main();
        return ret;
    }
}
function longestCommonSubstring(s1, s2) {
    // console.log("longestCommonSubstring: in");
    return longestCommonSublabel(labelLib.stringToLabelWithSentinel(s1), labelLib.stringToLabelWithSentinel(s2)).toString();
    // return longestCommonSublabel( labelLib.stringToLabel( s1),
    //                               labelLib.stringToLabel( s2)).toString();
}
exports.longestCommonSubstring = longestCommonSubstring;
