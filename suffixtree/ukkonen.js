"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var dummyNode = new data_1.STNode(new data_1.Label("dummy"), undefined, [], undefined);
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
function skipCountHelper(node, label, k, N) {
    var idiomaticRecursiveLoopFun = function (node, k) {
        // // console.log(" ---- ------------------------ ----")
        // // console.log( "looking for: " + label.labelRef( k))
        // // console.log("\nComplete print:\n")
        // node.printComplete();
        // // console.log("\nChildren print:\n")
        // for ( var i = 0; i < node.children.length; i++) {
        //   node.children[ i].printComplete();
        // }
        var child = node.findChild(label.labelRef(k));
        // if ( child == undefined) {
        //   // console.log("BAD")
        // }
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
        var parent_1 = node.parent; // why?
        var sl = parent_1.suffixLink;
        return [sl, node.upLabel.length()];
    }
}
function tryToSetSuffixEdgeBang(fromNode, toNode) {
    if (fromNode.suffixLink == undefined) {
        fromNode.suffixLink = toNode;
    }
}
// this is probably the least idiomatic TS there is
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
    console.log("\nsuffixNode: ");
    suffixNode.cutePrint("");
    console.log("suffixOffset: " + suffixOffset);
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
        // console.log(" 21837298147981274 921847 98217 4982174 98217 498217 4987 ERROR: findNext")
    }
    var K = fixedStart(callVal);
    var N = label.length();
    console.log("K: " + K + "\nN: " + N);
    var findExtensionInEdge = function (skippedNode, skipOffset, i) {
        // console.log(  "\n\n\t\t\t ===== \n\
        //              \t\t\t inEdge \n\
        //              \t\t\t =====\n\n");
        if (label.labelRef(i) == skippedNode.upLabel.labelRef(skipOffset)) {
            // console.log("[1]")
            var n = i + 1;
            return loopRest(n);
        }
        else {
            // console.log("[2]")
            return [skippedNode, skipOffset, i];
        }
    };
    var findExtensionAtEndBang = function (skippedNode, skipOffset, i) {
        // console.log(  "\n\n\t\t\t ===== \n\
        //              \t\t\t atEnd \n\
        //              \t\t\t =====\n\n");
        if (skippedNode.findChild(label.labelRef(i)) != undefined) {
            // console.log("[3]")
            var n = i + 1;
            return loopRest(n);
        }
        else {
            // console.log("[4]")
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
            // console.log( "\n\nskippedNode: ");
            // skippedNode.cutePrint("");
            // console.log( "skippedOffset: " + skippedOffset);
            firstShot(skippedNode, skippedOffset);
            if (skippedNode.positionAtEnd(skippedOffset)) {
                // yup
                return findExtensionAtEndBang(skippedNode, skippedOffset, i);
            }
            else {
                // yup
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
        console.log("\n\nspliceWithInternalNodeBang: splitNode is....");
        // console.log( splitNode);
        splitNode.cutePrint("");
        console.log("spliceWithInternalNodeBang: and leaf is....");
        // console.log( leaf);
        leaf.cutePrint("");
        console.log("\n\n");
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
            console.log(" attaching as leaf...");
            return attachAsLeafBang(node, label, i);
        }
        else {
            console.log(" splicing....");
            return spliceWithInternalNodeBang(node, offset, label, i);
        }
    };
    return mainLogic(anode, aoffset, alabel, ai);
}
function suffixTreeAddBang(tree, label) {
    var reportImplicitTreeConstructed = function () {
        // console.log("HELLO FROM reportImplicitTreeConstructed")
        return [dummyNode, 0];
    };
    var addRestSuffixesLoopBang = function (label, N, i, j, activeNode) {
        // console.log("in addRestSuffixesLoopBang -- activeNode.cutePrint():");
        // activeNode.cutePrint("");
        console.log("1");
        // checked, right
        // console.log("\n\n\t\t\tSome numbers -- j: " + j + ", N: " + N + "\n\n");
        if (j < N) {
            var tmp = findNextExtensionPointAndAddSuffixLinkBang(activeNode, label, i, j);
            var nextExtensionNode = tmp[0];
            var nextExtensionOffset = tmp[1];
            var iStar = tmp[2];
            // ok
            if (!(typeof iStar == "boolean" || typeof nextExtensionNode == "boolean"
                || typeof nextExtensionOffset == "boolean")) {
                console.log("tmp stuff: ");
                console.log("nextExtensionNode: ");
                // nextExtensionNode.cutePrint("");
                console.log(nextExtensionNode);
                console.log("nextExtensionOffset: " + nextExtensionOffset);
                console.log("i*: " + iStar);
            }
            if (typeof iStar != "boolean") {
                if ((typeof nextExtensionNode != "boolean") &&
                    (typeof nextExtensionOffset != "boolean")) {
                    // so if the data is valid
                    // console.log('================================\n************************\n================================')
                    // console.log(nextExtensionNode)
                    // console.log(nextExtensionOffset)
                    // console.log(label)
                    // console.log(iStar)
                    // console.log('================================\n************************\n================================')
                    var newActiveNode = extendAtPointBang(nextExtensionNode, nextExtensionOffset, label, iStar);
                    console.log('================================\n      newActiveNode     \n================================');
                    // console.log( newActiveNode);
                    newActiveNode.cutePrint("");
                    console.log('================================\n   endNewActiveNode     \n================================');
                    tryToSetSuffixEdgeBang(activeNode, newActiveNode);
                    addRestSuffixesLoopBang(label, N, Math.max(iStar, j + 1), j + 1, newActiveNode);
                }
            }
            else {
                reportImplicitTreeConstructed(); // this is pointless
            }
        }
    };
    var addRestSuffixesBang = function (label, startingNode, startingOffset) {
        console.log("---------------------------------------");
        console.log("  addRestSuffixedBang: begin");
        addRestSuffixesLoopBang(label, label.length(), Math.max(startingOffset, 1), 1, startingNode);
        console.log("  addRestSuffixedBang: end");
        console.log("---------------------------------------");
    };
    var addFirstSuffixBang = function (tree, label) {
        var matchedAtNode = function (node) {
            // console.log("matchedAtNode");
            return reportImplicitTreeConstructed();
        };
        var matchedInNode = function (node, offset) {
            // console.log("matchedInNode");
            return reportImplicitTreeConstructed();
        };
        var mismatchedAtNode = function (node, label, labelOffset) {
            // console.log("mismatchedAtNode");
            var leaf = node.addLeafBang(label.sublabel(labelOffset));
            return [node, labelOffset];
        };
        var mismatchedInNode = function (node, offset, label, labelOffset) {
            // console.log("mismatchedInNode");
            var tmp = node.upSpliceLeaf(offset, label.sublabel(labelOffset));
            var joint = tmp[0];
            var leaf = tmp[1];
            return [joint, labelOffset];
        };
        // // console.log("before...")
        // // console.log(tree.root); // DEBUG
        // // console.log("after...")
        var res = tree.root.nodeFollowK(label, matchedAtNode, matchedInNode, mismatchedAtNode, mismatchedInNode);
        // console.log("tree after firstSuffixBangarang:")
        // tree.cutePrint();
        return res;
    };
    var doConstructionBang = function (tree, label) {
        console.log("suffixTreeAddBang.doConstructionBang: in");
        var pr = addFirstSuffixBang(tree, label);
        // // console.log( "pr: " + pr); // DEBUG
        // // console.log( "pr[0]: "); // console.log( pr[0]); // DEBUG
        var startingNode = pr[0];
        console.log("\nthe startingNode after first: ");
        startingNode.cutePrint("");
        var startingOffset = pr[1];
        console.log("startingOffset:" + startingOffset);
        addRestSuffixesBang(label, startingNode, startingOffset);
        console.log("\nthe startingNode after rest: ");
        startingNode.cutePrint("");
    };
    doConstructionBang(tree, label);
}
exports.suffixTreeAddBang = suffixTreeAddBang;
