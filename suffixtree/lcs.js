"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var labelLib = require("./label");
var ukkonen_1 = require("./ukkonen");
// this import is for hashing
function pathLabel(node) {
    var vectorBlitBang = function (srcLabel, dstVector, destOffset) {
        for (var i = 0; i < srcLabel.length(); i++) {
            var index = i + destOffset;
            if (i < srcLabel.length()) {
                dstVector[index] = srcLabel.labelRef(i);
                // loop
            }
        }
    };
    var buildNewLabel = function (labels, totalLength) {
        var v = [];
        // very safe
        var i = 0;
        while (true) {
            if (i >= labels.length) {
                return labelLib.vectorToLabel(v);
            }
            else {
                vectorBlitBang(labels[i], v, i);
                i += labels[i].length();
            }
        }
    };
    var collectLoop = function (currentNode, collectedLabels, totalLength) {
        if (currentNode) {
            collectedLabels.push(currentNode.upLabel);
            return collectLoop(currentNode.parent, collectedLabels, totalLength + currentNode.upLabel.length());
        }
        else {
            return buildNewLabel(collectedLabels, totalLength);
        }
    };
    return collectLoop(node, [], 0); // TODO: do
}
function longestCommonSublabel(label1, label2) {
    var label1Marks = {};
    var label2Marks = {};
    var deepestNode = new data_1.STNode(new data_1.Label("no lcs"), undefined, [], undefined);
    var deepestDepth = 0;
    var absorbChildrenMarks = function (node, depth) {
        for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];
            if (label1Marks[child.spID]) {
                label1Marks[node.spID] = true;
            }
            if (label2Marks[child.spID]) {
                label2Marks[node.spID] = true;
            }
        }
        if ((label1Marks[node.spID] && label2Marks[node.spID]) &&
            (depth > deepestDepth)) {
            //
            deepestDepth = depth;
            deepestNode = node;
        }
    };
    var markUpInnerNodesBang = function (node, depth) {
        if (node.children == []) {
            console.log("48712947892173490128309128301283 PLS");
            if (node.upLabel.isSourceEqual(label1)) {
                label1Marks[node.spID] = true;
            }
            if (node.upLabel.isSourceEqual(label2)) {
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
        }
    };
    var main = function () {
        var tree = new data_1.SuffixTree();
        console.log(" -----------------------------------------------------------------");
        console.log("label1: " + label1);
        console.log("label2: " + label2);
        console.log("                                          BEFORE  1 !!!!!");
        ukkonen_1.suffixTreeAddBang(tree, label1);
        console.log("                                          BETWEEN 1 and 2");
        ukkonen_1.suffixTreeAddBang(tree, label2);
        console.log("                                          AFTER   2 !!!!!");
        console.log("Logging tree...:");
        tree.printComplete();
        markUpInnerNodesBang(tree.root, 0);
        return pathLabel(deepestNode);
    };
    if ((label1.length() == 0) || (label2.length() == 0)) {
        return labelLib.stringToLabel("");
    }
    else {
        var ret = main();
        console.log("\n\n\n\n\nthe dicts: ");
        console.log(label1Marks);
        console.log(label2Marks);
        console.log("..........................................");
        return ret;
    }
}
function longestCommonSubstring(s1, s2) {
    return longestCommonSublabel(labelLib.stringToLabelWithSentinel(s1), labelLib.stringToLabelWithSentinel(s2)).toString();
}
exports.longestCommonSubstring = longestCommonSubstring;
