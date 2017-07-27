//import {D.Label, D.STNode, D.SuffixTree} from "./data"
import { Data as D } from "./data";
import { Label as labelLib } from "./label";
export module Ukkonen {
        let dummyNode = new D.STNode(new D.Label("dummy"), undefined, [], undefined);
        function skipCountHelper(node: D.STNode, label: D.Label, k: number, N: number): any {
            let idiomaticRecursiveLoopFun = function (node: D.STNode, k: number): [D.STNode, number] {
                let child: D.STNode = node.findChild(label.labelRef(k));
                let childLabel: D.Label = child.upLabel;
                let childLabelLength: number = childLabel.length();
                let restOfCharsLeftToSkip: number = N - k;
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
        function skipCount(node: D.STNode, label: D.Label): [D.STNode, number] {
            let ll: any = label.length();
            return skipCountHelper(node, label, 0, ll);
        }
        function jumpToSuffix(node: D.STNode): [D.STNode, number | boolean] {
            let PARENT: any = node.parent;
            if (node.nodeRoot()) {
                return [node, false];
            }
            else if (node.suffixLink != undefined) {
                let node2: D.STNode = node.suffixLink;
                return [node2, 0];
            }
            else if (PARENT != undefined && PARENT.nodeRoot()) {
                return [PARENT, false];
            }
            else {
                let parent: D.STNode = node.parent; // keeping this line to be as
                // close to TypedRacket as possible
                let sl: D.STNode = parent.suffixLink;
                return [sl, node.upLabel.length()];
            }
        }
        function tryToSetSuffixEdgeBang(fromNode: D.STNode, toNode: D.STNode) {
            if (fromNode.suffixLink == undefined) {
                fromNode.suffixLink = toNode;
            }
        }
        function findNextExtensionPointAndAddSuffixLinkBang(node: D.STNode, label: D.Label, initialI: number, j: number): [D.STNode | boolean, number | boolean, number | boolean] {
            //
            let fixedStart = function (suffixOffset: number | boolean): number {
                let i: any;
                if (typeof suffixOffset != "boolean") {
                    i = initialI - suffixOffset;
                }
                else {
                    i = j;
                }
                return i;
            };
            let tmp: any = jumpToSuffix(node);
            let suffixNode: D.STNode = tmp[0];
            let suffixOffset: number | boolean = tmp[1];
            let callVal: number | boolean = -1;
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
            let K: number = fixedStart(callVal);
            let N: number = label.length();
            let findExtensionInEdge = function (skippedNode: D.STNode, skipOffset: number, i: number): [D.STNode | boolean, number | boolean, number | boolean] {
                if (label.labelRef(i) == skippedNode.upLabel.labelRef(skipOffset)) {
                    let n: number = i + 1;
                    return loopRest(n);
                }
                else {
                    return [skippedNode, skipOffset, i];
                }
            };
            let findExtensionAtEndBang = function (skippedNode: D.STNode, skipOffset: number, i: any): [D.STNode | boolean, number | boolean, number | boolean] {
                if (skippedNode.findChild(label.labelRef(i)) != undefined) {
                    let n: any = i + 1;
                    return loopRest(n);
                }
                else {
                    return [skippedNode, skipOffset, i];
                }
            };
            var loopGeneral = function (i: number, firstShot: (a: D.STNode, b: number) => void): [D.STNode | boolean, number | boolean, number | boolean] {
                if (i >= N) {
                    return [false, false, false];
                }
                else {
                    let tmp: [D.STNode, number] = skipCountHelper(suffixNode, label, K, i);
                    let skippedNode: D.STNode = tmp[0];
                    let skippedOffset: number = tmp[1];
                    firstShot(skippedNode, skippedOffset);
                    if (skippedNode.positionAtEnd(skippedOffset)) {
                        return findExtensionAtEndBang(skippedNode, skippedOffset, i);
                    }
                    else {
                        return findExtensionInEdge(skippedNode, skippedOffset, i);
                    }
                }
            };
            var loopRest = function (i: number): [D.STNode | boolean, number | boolean, number | boolean] {
                let theLambda = function (skippedNode: D.STNode, skipOffset: number): void {
                    // nothing
                };
                return loopGeneral(i, theLambda);
            };
            var loopFirst = function (i: number): [D.STNode | boolean, number | boolean, number | boolean] {
                let theLambda = function (skippedNode: D.STNode, skipOffset: any): void {
                    if (skippedNode.positionAtEnd(skipOffset)) {
                        tryToSetSuffixEdgeBang(node, skippedNode);
                    }
                };
                return loopGeneral(i, theLambda);
            };
            return loopFirst(initialI);
        }
        function extendAtPointBang(anode: any, aoffset: number, alabel: D.Label, ai: number): any {
            let spliceWithInternalNodeBang = function (node: D.STNode, offset: number, label: D.Label, i: number): D.STNode {
                let tmp: [D.STNode, D.STNode] = node.upSpliceLeaf(offset, label.sublabel(i));
                let splitNode: D.STNode = tmp[0];
                let leaf: D.STNode = tmp[1];
                return splitNode;
            };
            let attachAsLeafBang = function (node: D.STNode, label: any, i: number): D.STNode {
                let leaf: D.STNode = node.addLeafBang(label.sublabel(i));
                return node;
            };
            let shouldExtendAsLeaf = function (node: D.STNode, offset: number): boolean {
                return node.positionAtEnd(offset);
            };
            let mainLogic = function (node: D.STNode, offset: number, label: D.Label, i: number): D.STNode {
                if (shouldExtendAsLeaf(node, offset)) {
                    return attachAsLeafBang(node, label, i);
                }
                else {
                    return spliceWithInternalNodeBang(node, offset, label, i);
                }
            };
            return mainLogic(anode, aoffset, alabel, ai);
        }
        export function suffixTreeAddBang(tree: D.SuffixTree, label: D.Label): void {
            let reportImplicitTreeConstructed = function (): [D.STNode, number] {
                return [dummyNode, 0];
            };
            let addRestSuffixesLoopBang = function (label: D.Label, N: number, i: any, j: number, activeNode: D.STNode) {
                if (j < N) {
                    let tmp: [D.STNode | boolean, number | boolean, number | boolean] = findNextExtensionPointAndAddSuffixLinkBang(activeNode, label, i, j);
                    let nextExtensionNode: D.STNode | boolean = tmp[0];
                    let nextExtensionOffset: number | boolean = tmp[1];
                    let iStar: number | boolean = tmp[2];
                    if (typeof iStar != "boolean") {
                        if ((typeof nextExtensionNode != "boolean") &&
                            (typeof nextExtensionOffset != "boolean")) {
                            let newActiveNode: D.STNode = extendAtPointBang(nextExtensionNode, nextExtensionOffset, label, iStar);
                            tryToSetSuffixEdgeBang(activeNode, newActiveNode);
                            addRestSuffixesLoopBang(label, N, Math.max(iStar, j + 1), j + 1, newActiveNode);
                        }
                    }
                    else {
                        reportImplicitTreeConstructed();
                    }
                }
            };
            let addRestSuffixesBang = function (label: D.Label, startingNode: D.STNode, startingOffset: number) {
                addRestSuffixesLoopBang(label, label.length(), Math.max(startingOffset, 1), 1, startingNode);
            };
            let addFirstSuffixBang = function (tree: any, label: any): [D.STNode, number] {
                let matchedAtNode = function (node: D.STNode): [D.STNode, number] {
                    return reportImplicitTreeConstructed();
                };
                let matchedInNode = function (node: D.STNode, offset: number): [D.STNode, number] {
                    return reportImplicitTreeConstructed();
                };
                let mismatchedAtNode = function (node: D.STNode, label: D.Label, labelOffset: number): [D.STNode, number] {
                    let leaf: D.STNode = node.addLeafBang(label.sublabel(labelOffset));
                    return [node, labelOffset];
                };
                let mismatchedInNode = function (node: D.STNode, offset: number, label: D.Label, labelOffset: number): [D.STNode, number] {
                    let tmp: [D.STNode, D.STNode] = node.upSpliceLeaf(offset, label.sublabel(labelOffset));
                    let joint: any = tmp[0];
                    let leaf: any = tmp[1];
                    return [joint, labelOffset];
                };
                let res: [D.STNode, number] = tree.root.nodeFollowK(label, matchedAtNode, matchedInNode, mismatchedAtNode, mismatchedInNode);
                return res;
            };
            let doConstructionBang = function (tree: D.SuffixTree, label: D.Label) {
                let pr: [D.STNode, number] = addFirstSuffixBang(tree, label);
                let startingNode: D.STNode = pr[0];
                let startingOffset: number = pr[1];
                addRestSuffixesBang(label, startingNode, startingOffset);
            };
            doConstructionBang(tree, label);
        }
    }
