"use strict";
exports.__esModule = true;
// many functions defined in label.rkt were included
// here as members of the Label class.
var Data;
(function (Data) {
    var Label = (function () {
        // label.rkt - make-label: label-element -> label handled here
        function Label(thing, iIn, jIn) {
            if (iIn === void 0) { iIn = 0; }
            if (jIn === void 0) { jIn = -1; }
            this.datum = thing;
            this.i = iIn;
            if (jIn == -1) {
                this.j = thing.length;
            }
            else {
                this.j = jIn;
            }
        }
        Label.prototype.simpleToString = function () {
            return this.datum.substring(this.i, this.j);
        };
        Label.prototype.actualToString = function () {
            return '['
                + ' datum: ' + this.datum
                + ', i: ' + this.i
                + ', j: ' + this.j
                + ']';
        };
        Label.prototype.length = function () {
            return this.j - this.i;
        };
        Label.prototype.labelRef = function (k) {
            return this.datum[k + this.i];
        };
        // no check rn if its a valid sublabel
        Label.prototype.sublabel = function (start, end) {
            if (end === void 0) { end = undefined; }
            if (end == undefined) {
                return this.sublabel(start, this.length());
            }
            else {
                if (!(start <= end)) {
                    // do nothing, there's a problem.
                }
                return new Label(this.datum, start + this.i, end + this.i);
            }
        };
        Label.prototype.sublabelBang = function (start, end) {
            if (end === void 0) { end = undefined; }
            if (end == undefined) {
                this.sublabelBang(start, this.length());
            }
            else {
                this.j = end + this.i;
                this.i = start + this.i;
            }
        };
        Label.prototype.isPrefix = function (otherLabel) {
            var m = this.length();
            var n = otherLabel.length();
            if (m > n) {
                return false;
            }
            else {
                for (var i = 0; i < m; i++) {
                    if (!(this.labelRef(i) == otherLabel.labelRef(i))) {
                        return false;
                    }
                }
                return true;
            }
        };
        Label.prototype.equal = function (otherLabel) {
            return (this.length() == otherLabel.length()) &&
                (this.isPrefix(otherLabel));
        };
        Label.prototype.isEmpty = function () {
            return this.i >= this.j;
        };
        Label.prototype.toString = function () {
            return this.datum.substr(this.i, this.j);
        };
        Label.prototype.toStringRemovingSentinel = function () {
            return this.datum.substr(this.i, Math.min(this.j, this.datum.length - 1));
        };
        Label.prototype.copy = function () {
            return new Label(this.datum, this.i, this.j);
        };
        Label.prototype.labelRefAtEnd = function (offset) {
            return this.length() == offset;
        };
        Label.prototype.isSourceEqual = function (otherLabel) {
            return this.datum == otherLabel.datum;
        };
        return Label;
    }());
    Data.Label = Label;
    var SuffixTree = (function () {
        function SuffixTree() {
            // The root node has no label, no parent, an empty list of
            // children.  Its suffix link is invalid, but we set it to #f.
            this.root = new STNode(new Label("", 0, 0), undefined, [], undefined);
        }
        return SuffixTree;
    }());
    Data.SuffixTree = SuffixTree;
    function deepCopyLabelSTNodeArray(a) {
        var ret = [];
        for (var i = 0; i < a.length; i++) {
            var curNode = a[i];
            ret.push(curNode); // copy curNode
        }
        return ret;
    }
    var nodeID = 0;
    var STNode = (function () {
        function STNode(iUpLabel, iParent, iChildren, iSuffixLink) {
            //
            this.upLabel = iUpLabel;
            this.parent = iParent;
            this.children = iChildren;
            this.suffixLink = iSuffixLink;
            this.spID = nodeID;
            nodeID++;
        }
        STNode.prototype.simpleStr = function () {
            return '{ upLabel: ' + this.upLabel.simpleToString() + ', spID: ' + this.spID + '}';
        };
        // the root node is the node w/o a parent
        STNode.prototype.nodeRoot = function () {
            return this.parent == undefined;
        };
        // returns the leaf
        STNode.prototype.addLeafBang = function (iLabel) {
            var leaf = new STNode(iLabel, this, [], undefined);
            this.addChildBang(leaf);
            return leaf;
        };
        STNode.prototype.addChildBang = function (iNode) {
            this.children.push(iNode);
        };
        STNode.prototype.removeChildBang = function (iChild) {
            var theIndex = this.children.indexOf(iChild);
            this.children.splice(theIndex, 1);
        };
        STNode.prototype.isLeaf = function () {
            return this.children.length == 0;
        };
        // produces undefined if nothing can be found
        STNode.prototype.findChild = function (toFind) {
            if (toFind instanceof Label) {
                for (var i = 0; i < this.children.length; i++) {
                    var tmpLabel = this.children[i].upLabel;
                    if (tmpLabel.labelRef(0) == toFind.labelRef(0)) {
                        return this.children[i];
                    }
                }
                return undefined;
            }
            else if (typeof toFind == "string") {
                for (var i = 0; i < this.children.length; i++) {
                    var tmpLabel = this.children[i].upLabel;
                    if (tmpLabel.labelRef(0) == toFind) {
                        return this.children[i];
                    }
                }
                return undefined;
            }
        };
        // returns the inserted node
        STNode.prototype.upSplit = function (offset) {
            var label = this.upLabel;
            var preLabel = label.sublabel(0, offset);
            var postLabel = label.sublabel(offset);
            var parent = this.parent;
            var newNode = new STNode(preLabel, parent, [this], undefined);
            this.upLabel = postLabel;
            parent.removeChildBang(this);
            this.parent = newNode;
            parent.addChildBang(newNode);
            return newNode;
        };
        // return both nodes
        STNode.prototype.upSpliceLeaf = function (offset, leafLabel) {
            var splitNode = this.upSplit(offset);
            var leaf = splitNode.addLeafBang(leafLabel);
            return [splitNode, leaf];
        };
        STNode.prototype.nodeFollowK = function (originalLabel, matnK, mateK, misnK, miseK) {
            var EDGEk = function (theNode, label, labelOffset) {
                var upLabel = theNode.upLabel;
                for (var k = 0;; k++) {
                    var kLabelOffset = k + labelOffset;
                    if (k == upLabel.length()) {
                        return NODEk(theNode, label, kLabelOffset);
                    }
                    else if (kLabelOffset == label.length()) {
                        return mateK(theNode, k);
                    }
                    else if (upLabel.labelRef(k) == label.labelRef(kLabelOffset)) {
                        // continue
                    }
                    else {
                        return miseK(theNode, k, label, kLabelOffset);
                    }
                }
            };
            var NODEk = function (theNode, label, labelOffset) {
                if (label.length() == labelOffset) {
                    return matnK(theNode);
                }
                else {
                    var child = theNode.findChild(label.labelRef(labelOffset));
                    // if child != undefined
                    if (child) {
                        return EDGEk(child, label, labelOffset);
                    }
                    else {
                        return misnK(theNode, label, labelOffset);
                    }
                }
            };
            return NODEk(this, originalLabel.copy(), 0); // copy originalLabel
        };
        STNode.prototype.positionAtEnd = function (offset) {
            return this.upLabel.labelRefAtEnd(offset);
        };
        return STNode;
    }());
    Data.STNode = STNode;
})(Data = exports.Data || (exports.Data = {}));
