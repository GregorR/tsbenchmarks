"use strict";
exports.__esModule = true;
var c151a835ceacdb11090d1960ae92771fe;
if (typeof c151a835ceacdb11090d1960ae92771fe === "undefined")
    c151a835ceacdb11090d1960ae92771fe = $ir_contract_for("number");
$ir_obj_def_const(this, "c151a835ceacdb11090d1960ae92771fec", c151a835ceacdb11090d1960ae92771fe, true);
function c9deb2b0cfd31e008a148d99a841154baf() {
    "Array";
    if (typeof c9deb2b0cfd31e008a148d99a841154ba !== "undefined")
        return c9deb2b0cfd31e008a148d99a841154ba;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "length", co);
    c = $ir_contract_oblige_array(c, co);
    c9deb2b0cfd31e008a148d99a841154ba = c;
    $ir_contract_oblige_member(c, "length", c151a835ceacdb11090d1960ae92771fe);
    c = $ir_contract_oblige_array(c, c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var c9deb2b0cfd31e008a148d99a841154ba;
if (typeof c9deb2b0cfd31e008a148d99a841154ba === "undefined")
    c9deb2b0cfd31e008a148d99a841154ba = c9deb2b0cfd31e008a148d99a841154baf();
$ir_obj_def_const(this, "c9deb2b0cfd31e008a148d99a841154bac", c9deb2b0cfd31e008a148d99a841154ba, true);
function cba231f20fb6fc388eee39c06308fe87ef() {
    "BigInt";
    if (typeof cba231f20fb6fc388eee39c06308fe87e !== "undefined")
        return cba231f20fb6fc388eee39c06308fe87e;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "value", co);
    c = $ir_contract_oblige_member(c, "arrayValue", co);
    c = $ir_contract_oblige_member(c, "sign", co);
    c = $ir_contract_oblige_member(c, "howDecimal", co);
    cba231f20fb6fc388eee39c06308fe87e = c;
    $ir_contract_oblige_member(c, "value", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "arrayValue", c9deb2b0cfd31e008a148d99a841154baf());
    $ir_contract_oblige_member(c, "sign", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "howDecimal", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var cba231f20fb6fc388eee39c06308fe87e;
if (typeof cba231f20fb6fc388eee39c06308fe87e === "undefined")
    cba231f20fb6fc388eee39c06308fe87e = cba231f20fb6fc388eee39c06308fe87ef();
$ir_obj_def_const(this, "cba231f20fb6fc388eee39c06308fe87ec", cba231f20fb6fc388eee39c06308fe87e, true);
// big number library for avoiding precision errors with large number arithmetic operations
// contary to the name, it actually works over floating point numbers too, not just integers :P
(function (BigInteger) {
    var BigInt = (function () {
        function BigInt(v) {
            this.arrayValue = [];
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(11,24)");
            $rt_check(v, "number");
            this.howDecimal = 0;
            if (v < 0) {
                this.sign = -1;
            }
            else {
                this.sign = 1;
            }
            this.value = v * this.sign;
            v = v * this.sign;
            var numDigs = ("" + v).length;
            var theDigs = "" + v;
            // deal with scientific notation
            if (theDigs.length >= 2 && theDigs[1] == "." && theDigs.indexOf("e") != -1) {
                var exp = 0;
                var i = 2;
                while (theDigs.length > i && theDigs[i] != "e") {
                    i++;
                }
                exp = Number(theDigs.substr(i + 2, theDigs.length));
                var postDotDigs = theDigs.substr(2, i - 2);
                var newDigs = theDigs[0] + postDotDigs;
                // 3.1e4 = 3100 so the postDot should be == exp - 1
                if (postDotDigs.length < exp - 1) {
                    var theDif = (exp - 1) - postDotDigs.length;
                    for (var k = 0; k < theDif; k++) {
                        newDigs += "0";
                    }
                }
                theDigs = newDigs;
                numDigs = theDigs.length;
            }
            else if (theDigs.indexOf(".") != -1) {
                var dotInd = theDigs.indexOf(".");
                var diff = theDigs.length - dotInd;
                theDigs = theDigs.replace(".", "");
                this.howDecimal = diff - 1;
                numDigs = theDigs.length;
            }
            for (var i = 0; i < numDigs; i++) {
                var curDig = Number(theDigs[i]);
                this.arrayValue.push(curDig);
            }
        }
        // this might be wrong due to overflow RIP
        BigInt.prototype.getValue = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(69,6)");
            var toRet = 0;
            for (var i = 0; i < this.arrayValue.length; i++) {
                toRet += this.arrayValue[(this.arrayValue.length - 1) - i] * (Math.pow(10, (i - this.howDecimal)));
            }
            return toRet * this.sign;
        };
        // print the number in string form (no overflow errors here)
        BigInt.prototype.printable = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(78,6)");
            var toRet = "";
            if (this.sign == -1) {
                toRet += "-";
            }
            var indexOfDot = (this.arrayValue.length - 1) - this.howDecimal;
            for (var i = 0; i < this.arrayValue.length; i++) {
                if (i == indexOfDot && this.howDecimal > 0) {
                    toRet += ".";
                }
                toRet += Math.abs(this.arrayValue[i]);
            }
            return toRet;
        };
        // add with different number of post-decimal-point values
        // the user would call add, and add would call this function if necessary 
        BigInt.prototype.addWithOffset = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(95,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(99,26)");
            var offset = Math.max(this.howDecimal, bi.howDecimal);
            // pad the lesser array with trailing zeros
            // so the number of post-point values is the same
            var numToPadT = Math.abs(this.howDecimal - offset);
            var numToPadB = Math.abs(bi.howDecimal - offset);
            for (var i = 0; i < numToPadT; i++) {
                this.arrayValue.push(0);
            }
            for (var i = 0; i < numToPadB; i++) {
                bi.arrayValue.push(0);
            }
            var hdT = this.howDecimal;
            var hdB = bi.howDecimal;
            this.howDecimal = 0;
            bi.howDecimal = 0;
            var res = this.add(bi);
            bi.howDecimal = hdB;
            this.howDecimal = hdB;
            res.howDecimal = offset;
            res.value = res.getValue();
            res.remTrailingZeros();
            return res;
        };
        BigInt.prototype.remTrailingZeros = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(128,6)");
            var numExtra = 0;
            while (this.arrayValue[this.arrayValue.length - 1] == 0 && numExtra < this.howDecimal) {
                numExtra++;
                this.arrayValue.pop();
            }
            this.howDecimal -= numExtra;
        };
        BigInt.prototype.add = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(139,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(141,16)");
            if (this.howDecimal > 0 || bi.howDecimal > 0) {
                return this.addWithOffset(bi);
            }
            var toRet = new BigInt(0);
            toRet.arrayValue = [];
            var theDiff = Math.abs(this.arrayValue.length - bi.arrayValue.length);
            var theMin = Math.min(this.arrayValue.length, bi.arrayValue.length);
            for (var i = 0; i < theMin; i++) {
                toRet.arrayValue.push(this.arrayValue[(this.arrayValue.length - 1) - i] * this.sign + bi.arrayValue[(bi.arrayValue.length - 1) - i] * bi.sign);
            }
            var theMaxAr = theMin == this.arrayValue.length ? bi.arrayValue : this.arrayValue;
            var theMaxSign = theMin == this.arrayValue.length ? bi.sign : this.sign;
            for (i = theMin; i < theMin + theDiff; i++) {
                toRet.arrayValue.push(theMaxAr[(theMaxAr.length - 1) - i] * theMaxSign);
            }
            // deal with negatives
            // i think the last (nonzero) number should have the sign of the whole value
            $rt_check(toRet.sign = toRet.arrayValue[toRet.arrayValue.length - 1] < 0 ? -1 : 1, "number");
            for (i = 0; i < toRet.arrayValue.length; i++) {
                toRet.arrayValue[i] *= toRet.sign;
            }
            for (i = toRet.arrayValue.length - 1; i > 0; i--) {
                if (toRet.arrayValue[i] > 0 && toRet.arrayValue[i - 1] < 0) {
                    toRet.arrayValue[i] -= 1;
                    toRet.arrayValue[i - 1] += 10;
                }
            }
            // now, get rid of the extra 10's
            toRet.getRidOf10s();
            toRet.arrayValue = toRet.arrayValue.reverse();
            toRet.trimZeros();
            toRet.value = toRet.getValue();
            return toRet;
        };
        BigInt.prototype.multiplyWithOffset = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(183,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(185,31)");
            var offset = this.howDecimal + bi.howDecimal;
            var hdT = this.howDecimal;
            var hdB = bi.howDecimal;
            this.howDecimal = 0;
            bi.howDecimal = 0;
            var res = this.multiply(bi);
            bi.howDecimal = hdB;
            this.howDecimal = hdB;
            res.howDecimal = offset;
            res.value = res.getValue();
            res.remTrailingZeros();
            return res;
        };
        BigInt.prototype.neg = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(204,6)");
            var toRet = new BigInt(this.getValue());
            toRet.sign = this.sign * (-1);
            toRet.arrayValue = [];
            for (var i = 0; i < this.arrayValue.length; i++) {
                toRet.arrayValue.push(this.arrayValue[i]);
            }
            toRet.howDecimal = this.howDecimal;
            return toRet;
        };
        BigInt.prototype.divide = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(219,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(221,19)");
            // Goldschmidt's algorithm
            // first, divide repeatedly by 10 until the denom (bi) is between 0 and 1
            var sign = bi.sign * this.sign;
            // unsigned division for minimum errors hopefully
            var x = this.multiply(new BigInt(this.sign));
            var d = bi.multiply(new BigInt(bi.sign));
            x.remTrailingZeros();
            d.remTrailingZeros();
            // if 11.5, 
            var howToDiv = d.arrayValue.length - d.howDecimal;
            // console.log(  howToDiv + " ??");
            d.howDecimal += howToDiv;
            x.howDecimal += howToDiv;
            x.remTrailingZeros();
            d.remTrailingZeros();
            // so now, ostensibly d should be between 0 and 1
            var curMult = (new BigInt(2)).add(d.neg());
            var intGarb = curMult.multiply(d);
            curMult = curMult.multiply(x);
            for (var i = 0; i < 6; i++) {
                var intGarb2 = (new BigInt(2)).add(intGarb.neg());
                intGarb = intGarb2.multiply(intGarb);
                curMult = curMult.multiply(intGarb2);
            }
            curMult.sign = sign;
            curMult.value = curMult.getValue();
            return curMult;
        };
        BigInt.prototype.multiply = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(260,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(262,21)");
            if (this.howDecimal > 0 || bi.howDecimal > 0) {
                return this.multiplyWithOffset(bi);
            }
            var sum = new BigInt(0);
            sum.sign = bi.sign * this.sign;
            for (var i = 0; i < this.arrayValue.length; i++) {
                var curToAdd = new BigInt(0);
                curToAdd.arrayValue = [];
                for (var j = 0; j < i; j++) {
                    curToAdd.arrayValue.push(0);
                }
                for (var j = bi.arrayValue.length - 1; j >= 0; j--) {
                    curToAdd.arrayValue.push(Math.abs(this.arrayValue[(this.arrayValue.length - 1) - i] * bi.arrayValue[j]));
                }
                curToAdd.sign = sum.sign;
                curToAdd.value = curToAdd.getValue();
                curToAdd.arrayValue = curToAdd.arrayValue.reverse();
                sum = sum.add(curToAdd);
            }
            sum.sign = bi.sign * this.sign;
            sum.value = sum.getValue();
            return sum;
        };
        BigInt.prototype.sub = function (bi) {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(292,6)");
            $rt_addContract(bi, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(294,16)");
            var toRet = new BigInt(0);
            for (var i = 0; i < bi.arrayValue.length; i++) {
                toRet.arrayValue.push(bi.arrayValue[i]);
            }
            toRet.sign = bi.sign * (-1);
            toRet.value = toRet.getValue();
            return this.add(toRet);
        };
        BigInt.prototype.trimZeros = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(303,6)");
            var newAr = [];
            var i = 0;
            while (this.arrayValue[i] === 0 || this.arrayValue[i] === -0) {
                i++;
            }
            for (var j = i; j < this.arrayValue.length; j++) {
                newAr.push(this.arrayValue[j]);
            }
            this.arrayValue = newAr;
        };
        BigInt.prototype.getRidOf10s = function () {
            $rt_addContract(this, cba231f20fb6fc388eee39c06308fe87ec, "BigInteger.ts(317,6)");
            for (var i = 0; i < this.arrayValue.length - 1; i++) {
                if (this.arrayValue[i] >= 10) {
                    var temp = Math.floor(this.arrayValue[i] / 10);
                    this.arrayValue[i] -= temp * 10;
                    this.arrayValue[i + 1] += temp;
                }
            }
            if (this.arrayValue[this.arrayValue.length - 1] >= 10) {
                var temp = Math.floor(this.arrayValue[i] / 10);
                this.arrayValue[this.arrayValue.length - 1] -= temp * 10;
                this.arrayValue.push(temp);
            }
        };
        return BigInt;
    }());
    BigInteger.BigInt = BigInt;
    ;
})(BigInteger = exports.BigInteger || (exports.BigInteger = {}));
