"use strict";
exports.__esModule = true;
//import {D.Label, D.STNode, D.SuffixTree} from "./data"
var data_1 = require("./data");
var Ukkonen;
(function (Ukkonen) {
    var dummyNode = new data_1.Data.STNode(new data_1.Data.Label("dummy"), undefined, [], undefined);
    function skipCountHelper(node, label, k, N) {
        var idiomaticRecursiveLoopFun = function (node, k) {
            var child = node.findChild(label.labelRef(k));
            var childLabel = child.upLabel;
            var childLabelLength = childLabel.length();
            var restOfCharsLeftToSkip = N - k;
            if (restOfCharsLeftToSkip > childLabelLength) {
                return idiomaticRecursiveLoopFun(child, k + childLabelLength);
            }
            else {
                return [child, restOfCharsLeftToSkip];
            }
        };
        if (k >= N) {
            return [node, node.upLabel.length()];
        }
        else {
            return idiomaticRecursiveLoopFun(node, k);
        }
    }
    function skipCount(node, label) {
        var ll = label.length();
        return skipCountHelper(node, label, 0, ll);
    }
    function jumpToSuffix(node) {
        var PARENT = node.parent;
        if (node.nodeRoot()) {
            return [node, false];
        }
        else if (node.suffixLink != undefined) {
            var node2 = node.suffixLink;
            return [node2, 0];
        }
        else if (PARENT != undefined && PARENT.nodeRoot()) {
            return [PARENT, false];
        }
        else {
            var parent_1 = node.parent; // keeping this line to be as
            // close to TypedRacket as possible
            var sl = parent_1.suffixLink;
            return [sl, node.upLabel.length()];
        }
    }
    function tryToSetSuffixEdgeBang(fromNode, toNode) {
        if (fromNode.suffixLink == undefined) {
            fromNode.suffixLink = toNode;
        }
    }
    function findNextExtensionPointAndAddSuffixLinkBang(node, label, initialI, j) {
        //
        var fixedStart = function (suffixOffset) {
            var i;
            if (typeof suffixOffset != "boolean") {
                i = initialI - suffixOffset;
            }
            else {
                i = j;
            }
            return i;
        };
        var tmp = jumpToSuffix(node);
        var suffixNode = tmp[0];
        var suffixOffset = tmp[1];
        var callVal = -1;
        if (typeof suffixOffset == "number") {
            callVal = suffixOffset;
        }
        else if (suffixOffset == true) {
            callVal = 1;
        }
        else if (suffixOffset == false) {
            callVal = false;
        }
        else {
            // error case, do nothing
        }
        var K = fixedStart(callVal);
        var N = label.length();
        var findExtensionInEdge = function (skippedNode, skipOffset, i) {
            if (label.labelRef(i) == skippedNode.upLabel.labelRef(skipOffset)) {
                var n = i + 1;
                return loopRest(n);
            }
            else {
                return [skippedNode, skipOffset, i];
            }
        };
        var findExtensionAtEndBang = function (skippedNode, skipOffset, i) {
            if (skippedNode.findChild(label.labelRef(i)) != undefined) {
                var n = i + 1;
                return loopRest(n);
            }
            else {
                return [skippedNode, skipOffset, i];
            }
        };
        var loopGeneral = function (i, firstShot) {
            if (i >= N) {
                return [false, false, false];
            }
            else {
                var tmp_1 = skipCountHelper(suffixNode, label, K, i);
                var skippedNode = tmp_1[0];
                var skippedOffset = tmp_1[1];
                firstShot(skippedNode, skippedOffset);
                if (skippedNode.positionAtEnd(skippedOffset)) {
                    return findExtensionAtEndBang(skippedNode, skippedOffset, i);
                }
                else {
                    return findExtensionInEdge(skippedNode, skippedOffset, i);
                }
            }
        };
        var loopRest = function (i) {
            var theLambda = function (skippedNode, skipOffset) {
                // nothing
            };
            return loopGeneral(i, theLambda);
        };
        var loopFirst = function (i) {
            var theLambda = function (skippedNode, skipOffset) {
                if (skippedNode.positionAtEnd(skipOffset)) {
                    tryToSetSuffixEdgeBang(node, skippedNode);
                }
            };
            return loopGeneral(i, theLambda);
        };
        return loopFirst(initialI);
    }
    function extendAtPointBang(anode, aoffset, alabel, ai) {
        var spliceWithInternalNodeBang = function (node, offset, label, i) {
            var tmp = node.upSpliceLeaf(offset, label.sublabel(i));
            var splitNode = tmp[0];
            var leaf = tmp[1];
            return splitNode;
        };
        var attachAsLeafBang = function (node, label, i) {
            var leaf = node.addLeafBang(label.sublabel(i));
            return node;
        };
        var shouldExtendAsLeaf = function (node, offset) {
            return node.positionAtEnd(offset);
        };
        var mainLogic = function (node, offset, label, i) {
            if (shouldExtendAsLeaf(node, offset)) {
                return attachAsLeafBang(node, label, i);
            }
            else {
                return spliceWithInternalNodeBang(node, offset, label, i);
            }
        };
        return mainLogic(anode, aoffset, alabel, ai);
    }
    function suffixTreeAddBang(tree, label) {
        var reportImplicitTreeConstructed = function () {
            return [dummyNode, 0];
        };
        var addRestSuffixesLoopBang = function (label, N, i, j, activeNode) {
            if (j < N) {
                var tmp = findNextExtensionPointAndAddSuffixLinkBang(activeNode, label, i, j);
                var nextExtensionNode = tmp[0];
                var nextExtensionOffset = tmp[1];
                var iStar = tmp[2];
                if (typeof iStar != "boolean") {
                    if ((typeof nextExtensionNode != "boolean") &&
                        (typeof nextExtensionOffset != "boolean")) {
                        var newActiveNode = extendAtPointBang(nextExtensionNode, nextExtensionOffset, label, iStar);
                        tryToSetSuffixEdgeBang(activeNode, newActiveNode);
                        addRestSuffixesLoopBang(label, N, Math.max(iStar, j + 1), j + 1, newActiveNode);
                    }
                }
                else {
                    reportImplicitTreeConstructed();
                }
            }
        };
        var addRestSuffixesBang = function (label, startingNode, startingOffset) {
            addRestSuffixesLoopBang(label, label.length(), Math.max(startingOffset, 1), 1, startingNode);
        };
        var addFirstSuffixBang = function (tree, label) {
            var matchedAtNode = function (node) {
                return reportImplicitTreeConstructed();
            };
            var matchedInNode = function (node, offset) {
                return reportImplicitTreeConstructed();
            };
            var mismatchedAtNode = function (node, label, labelOffset) {
                var leaf = node.addLeafBang(label.sublabel(labelOffset));
                return [node, labelOffset];
            };
            var mismatchedInNode = function (node, offset, label, labelOffset) {
                var tmp = node.upSpliceLeaf(offset, label.sublabel(labelOffset));
                var joint = tmp[0];
                var leaf = tmp[1];
                return [joint, labelOffset];
            };
            var res = tree.root.nodeFollowK(label, matchedAtNode, matchedInNode, mismatchedAtNode, mismatchedInNode);
            return res;
        };
        var doConstructionBang = function (tree, label) {
            var pr = addFirstSuffixBang(tree, label);
            var startingNode = pr[0];
            var startingOffset = pr[1];
            addRestSuffixesBang(label, startingNode, startingOffset);
        };
        doConstructionBang(tree, label);
    }
    Ukkonen.suffixTreeAddBang = suffixTreeAddBang;
})(Ukkonen = exports.Ukkonen || (exports.Ukkonen = {}));
