"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var label_1 = require("./label");
var ukkonen_1 = require("./ukkonen");
var LCS;
(function (LCS) {
    var suffixTreeAddBang = ukkonen_1.Ukkonen.suffixTreeAddBang;
    function pathLabel(node) {
        var buildNewLabel = function (labels, totalLength) {
            var v = [];
            var retStr = "";
            for (var i = labels.length - 1; i >= 0; i--) {
                var curLab = labels[i];
                for (var j = 0; j < curLab.length(); j++) {
                    retStr += curLab.labelRef(j);
                }
            }
            return new data_1.Data.Label(retStr);
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
        return collectLoop(node, [], 0);
    }
    function longestCommonSublabel(label1, label2) {
        var label1Marks = {};
        var label2Marks = {};
        var deepestNode = new data_1.Data.STNode(new data_1.Data.Label("no lcs"), undefined, [], undefined);
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
            if (node.children.length == 0) {
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
            var tree = new data_1.Data.SuffixTree();
            // add both words to the suffixtree
            suffixTreeAddBang(tree, label1);
            suffixTreeAddBang(tree, label2);
            markUpInnerNodesBang(tree.root, 0);
            return pathLabel(deepestNode);
        };
        if ((label1.length() == 0) || (label2.length() == 0)) {
            return label_1.Label.stringToLabel("");
        }
        else {
            var ret = main();
            return ret;
        }
    }
    function longestCommonSubstring(s1, s2) {
        return longestCommonSublabel(label_1.Label.stringToLabelWithSentinel(s1), label_1.Label.stringToLabelWithSentinel(s2)).toString();
    }
    LCS.longestCommonSubstring = longestCommonSubstring;
})(LCS = exports.LCS || (exports.LCS = {}));
