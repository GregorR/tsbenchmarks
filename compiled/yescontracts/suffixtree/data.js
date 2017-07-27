"use strict";
exports.__esModule = true;
var c39c6844c921cf69656adaa2a8e4aea0c;
if (typeof c39c6844c921cf69656adaa2a8e4aea0c === "undefined")
    c39c6844c921cf69656adaa2a8e4aea0c = $ir_contract_for("string");
$ir_obj_def_const(this, "c39c6844c921cf69656adaa2a8e4aea0cc", c39c6844c921cf69656adaa2a8e4aea0c, true);
var c151a835ceacdb11090d1960ae92771fe;
if (typeof c151a835ceacdb11090d1960ae92771fe === "undefined")
    c151a835ceacdb11090d1960ae92771fe = $ir_contract_for("number");
$ir_obj_def_const(this, "c151a835ceacdb11090d1960ae92771fec", c151a835ceacdb11090d1960ae92771fe, true);
function cec88372874868d65bd05d6a88c713cddf() {
    "Label";
    if (typeof cec88372874868d65bd05d6a88c713cdd !== "undefined")
        return cec88372874868d65bd05d6a88c713cdd;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "datum", co);
    c = $ir_contract_oblige_member(c, "i", co);
    c = $ir_contract_oblige_member(c, "j", co);
    cec88372874868d65bd05d6a88c713cdd = c;
    $ir_contract_oblige_member(c, "datum", c39c6844c921cf69656adaa2a8e4aea0c);
    $ir_contract_oblige_member(c, "i", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "j", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var cec88372874868d65bd05d6a88c713cdd;
if (typeof cec88372874868d65bd05d6a88c713cdd === "undefined")
    cec88372874868d65bd05d6a88c713cdd = cec88372874868d65bd05d6a88c713cddf();
$ir_obj_def_const(this, "cec88372874868d65bd05d6a88c713cddc", cec88372874868d65bd05d6a88c713cdd, true);
function c84fb510a892c3bfcd3fbde636cfc1fdcf() {
    "Array";
    if (typeof c84fb510a892c3bfcd3fbde636cfc1fdc !== "undefined")
        return c84fb510a892c3bfcd3fbde636cfc1fdc;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "length", co);
    c = $ir_contract_oblige_array(c, co);
    c84fb510a892c3bfcd3fbde636cfc1fdc = c;
    $ir_contract_oblige_member(c, "length", c151a835ceacdb11090d1960ae92771fe);
    c = $ir_contract_oblige_array(c, c1919ec94bf6e77835438f19b15184bdbf());
    return c;
}
var c84fb510a892c3bfcd3fbde636cfc1fdc;
if (typeof c84fb510a892c3bfcd3fbde636cfc1fdc === "undefined")
    c84fb510a892c3bfcd3fbde636cfc1fdc = c84fb510a892c3bfcd3fbde636cfc1fdcf();
$ir_obj_def_const(this, "c84fb510a892c3bfcd3fbde636cfc1fdcc", c84fb510a892c3bfcd3fbde636cfc1fdc, true);
function c1919ec94bf6e77835438f19b15184bdbf() {
    "STNode";
    if (typeof c1919ec94bf6e77835438f19b15184bdb !== "undefined")
        return c1919ec94bf6e77835438f19b15184bdb;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "upLabel", co);
    c = $ir_contract_oblige_member(c, "parent", co);
    c = $ir_contract_oblige_member(c, "children", co);
    c = $ir_contract_oblige_member(c, "suffixLink", co);
    c = $ir_contract_oblige_member(c, "spID", co);
    c1919ec94bf6e77835438f19b15184bdb = c;
    $ir_contract_oblige_member(c, "upLabel", cec88372874868d65bd05d6a88c713cddf());
    $ir_contract_oblige_member(c, "parent", c1919ec94bf6e77835438f19b15184bdbf());
    $ir_contract_oblige_member(c, "children", c84fb510a892c3bfcd3fbde636cfc1fdcf());
    $ir_contract_oblige_member(c, "suffixLink", c1919ec94bf6e77835438f19b15184bdbf());
    $ir_contract_oblige_member(c, "spID", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var c1919ec94bf6e77835438f19b15184bdb;
if (typeof c1919ec94bf6e77835438f19b15184bdb === "undefined")
    c1919ec94bf6e77835438f19b15184bdb = c1919ec94bf6e77835438f19b15184bdbf();
$ir_obj_def_const(this, "c1919ec94bf6e77835438f19b15184bdbc", c1919ec94bf6e77835438f19b15184bdb, true);
function c039618a25fe49bc46e3571a10332d667f() {
    "SuffixTree";
    if (typeof c039618a25fe49bc46e3571a10332d667 !== "undefined")
        return c039618a25fe49bc46e3571a10332d667;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "root", co);
    c039618a25fe49bc46e3571a10332d667 = c;
    $ir_contract_oblige_member(c, "root", c1919ec94bf6e77835438f19b15184bdbf());
    return c;
}
var c039618a25fe49bc46e3571a10332d667;
if (typeof c039618a25fe49bc46e3571a10332d667 === "undefined")
    c039618a25fe49bc46e3571a10332d667 = c039618a25fe49bc46e3571a10332d667f();
$ir_obj_def_const(this, "c039618a25fe49bc46e3571a10332d667c", c039618a25fe49bc46e3571a10332d667, true);
// many functions defined in label.rkt were included
// here as members of the Label class.
var Data;
(function (Data) {
    var Label = (function () {
        // label.rkt - make-label: label-element -> label handled here
        function Label(thing, iIn, jIn) {
            if (iIn === void 0) { iIn = 0; }
            if (jIn === void 0) { jIn = -1; }
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(7,13)");
            $rt_check(thing, "string");
            $rt_check(iIn, "number");
            $rt_check(jIn, "number");
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
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(18,4)");
            return this.datum.substring(this.i, this.j);
        };
        Label.prototype.actualToString = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(22,4)");
            return '['
                + ' datum: ' + this.datum
                + ', i: ' + this.i
                + ', j: ' + this.j
                + ']';
        };
        Label.prototype.length = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(30,4)");
            return this.j - this.i;
        };
        Label.prototype.labelRef = function (k) {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(34,4)");
            $rt_check(k, "number");
            return this.datum[k + this.i];
        };
        // no check rn if its a valid sublabel
        Label.prototype.sublabel = function (start, end) {
            if (end === void 0) { end = undefined; }
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(38,4)");
            $rt_check(start, "number");
            $rt_check(end, "number");
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
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(50,4)");
            $rt_check(start, "number");
            $rt_check(end, "number");
            if (end == undefined) {
                this.sublabelBang(start, this.length());
            }
            else {
                this.j = end + this.i;
                this.i = start + this.i;
            }
        };
        Label.prototype.isPrefix = function (otherLabel) {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(59,4)");
            $rt_addContract(otherLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(61,12)");
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
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(74,4)");
            $rt_addContract(otherLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(76,9)");
            return (this.length() == otherLabel.length()) &&
                (this.isPrefix(otherLabel));
        };
        Label.prototype.isEmpty = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(79,4)");
            return this.i >= this.j;
        };
        Label.prototype.toString = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(83,4)");
            return this.datum.substr(this.i, this.j);
        };
        Label.prototype.toStringRemovingSentinel = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(87,4)");
            return this.datum.substr(this.i, Math.min(this.j, this.datum.length - 1));
        };
        Label.prototype.copy = function () {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(91,4)");
            return new Label(this.datum, this.i, this.j);
        };
        Label.prototype.labelRefAtEnd = function (offset) {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(95,4)");
            $rt_check(offset, "number");
            return this.length() == offset;
        };
        Label.prototype.isSourceEqual = function (otherLabel) {
            $rt_addContract(this, cec88372874868d65bd05d6a88c713cddc, "data.ts(99,4)");
            $rt_addContract(otherLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(101,17)");
            return this.datum == otherLabel.datum;
        };
        return Label;
    }());
    Data.Label = Label;
    var SuffixTree = (function () {
        function SuffixTree() {
            $rt_addContract(this, c039618a25fe49bc46e3571a10332d667c, "data.ts(108,16)");
            // The root node has no label, no parent, an empty list of
            // children.  Its suffix link is invalid, but we set it to #f.
            this.root = new STNode(new Label("", 0, 0), undefined, [], undefined);
        }
        return SuffixTree;
    }());
    Data.SuffixTree = SuffixTree;
    function deepCopyLabelSTNodeArray(a) {
        $rt_addContract(a, c84fb510a892c3bfcd3fbde636cfc1fdcc, "data.ts(120,35)");
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
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(138,16)");
            $rt_addContract(iUpLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(140,15)");
            $rt_addContract(iParent, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(140,37)");
            $rt_addContract(iChildren, c84fb510a892c3bfcd3fbde636cfc1fdcc, "data.ts(141,38)");
            $rt_addContract(iSuffixLink, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(142,40)");
            //
            this.upLabel = iUpLabel;
            this.parent = iParent;
            this.children = iChildren;
            this.suffixLink = iSuffixLink;
            this.spID = nodeID;
            nodeID++;
        }
        STNode.prototype.simpleStr = function () {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(151,4)");
            return '{ upLabel: ' + this.upLabel.simpleToString() + ', spID: ' + this.spID + '}';
        };
        // the root node is the node w/o a parent
        STNode.prototype.nodeRoot = function () {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(155,4)");
            return this.parent == undefined;
        };
        // returns the leaf
        STNode.prototype.addLeafBang = function (iLabel) {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(160,4)");
            $rt_addContract(iLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(163,15)");
            var leaf = new STNode(iLabel, this, [], undefined);
            this.addChildBang(leaf);
            return leaf;
        };
        STNode.prototype.addChildBang = function (iNode) {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(167,4)");
            $rt_addContract(iNode, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(169,16)");
            this.children.push(iNode);
        };
        STNode.prototype.removeChildBang = function (iChild) {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(171,4)");
            $rt_addContract(iChild, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(173,19)");
            var theIndex = this.children.indexOf(iChild);
            this.children.splice(theIndex, 1);
        };
        STNode.prototype.isLeaf = function () {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(176,4)");
            return this.children.length == 0;
        };
        // produces undefined if nothing can be found
        STNode.prototype.findChild = function (toFind) {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(180,4)");
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
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(201,4)");
            $rt_check(offset, "number");
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
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(219,4)");
            $rt_check(offset, "number");
            $rt_addContract(leafLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(222,33)");
            var splitNode = this.upSplit(offset);
            var leaf = splitNode.addLeafBang(leafLabel);
            return [splitNode, leaf];
        };
        STNode.prototype.nodeFollowK = function (originalLabel, matnK, mateK, misnK, miseK) {
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(227,4)");
            $rt_addContract(originalLabel, cec88372874868d65bd05d6a88c713cddc, "data.ts(229,15)");
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
            $rt_addContract(this, c1919ec94bf6e77835438f19b15184bdbc, "data.ts(269,4)");
            $rt_check(offset, "number");
            return this.upLabel.labelRefAtEnd(offset);
        };
        return STNode;
    }());
    Data.STNode = STNode;
})(Data = exports.Data || (exports.Data = {}));
