// big number library for avoiding precision errors with large number arithmetic operations
// contary to the name, it actually works over floating point numbers too, not just integers :P
// big number library for avoiding precision errors with large number arithmetic operations
export module BigInteger {
        export class BigInt {
            value: number;
            arrayValue: number[] = [];
            sign: number;
            howDecimal: number;
            constructor(v: any) {
                this.howDecimal = 0;
                if (v < 0) {
                    this.sign = -1;
                }
                else {
                    this.sign = 1;
                }
                this.value = v * this.sign;
                v = v * this.sign;
                var numDigs: number = ("" + v).length;
                var theDigs: string = "" + v;
                // deal with scientific notation
                if (theDigs.length >= 2 && theDigs[1] == "." && theDigs.indexOf("e") != -1) {
                    var exp: any = 0;
                    var i = 2;
                    while (theDigs.length > i && theDigs[i] != "e") {
                        i++;
                    }
                    exp = Number(theDigs.substr(i + 2, theDigs.length));
                    var postDotDigs: string = theDigs.substr(2, i - 2);
                    var newDigs: string = theDigs[0] + postDotDigs;
                    // 3.1e4 = 3100 so the postDot should be == exp - 1
                    if (postDotDigs.length < exp - 1) {
                        var theDif: number = (exp - 1) - postDotDigs.length;
                        for (var k = 0; k < theDif; k++) {
                            newDigs += "0";
                        }
                    }
                    theDigs = newDigs;
                    numDigs = theDigs.length;
                }
                else if (theDigs.indexOf(".") != -1) {
                    var dotInd: number = theDigs.indexOf(".");
                    var diff: number = theDigs.length - dotInd;
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
            public getValue(): number {
                var toRet: number = 0;
                for (var i = 0; i < this.arrayValue.length; i++) {
                    toRet += this.arrayValue[(this.arrayValue.length - 1) - i] * (10 ** (i - this.howDecimal));
                }
                return toRet * this.sign;
            }
            // print the number in string form (no overflow errors here)
            public printable(): any {
                var toRet = "";
                if (this.sign == -1) {
                    toRet += "-";
                }
                var indexOfDot: any = (this.arrayValue.length - 1) - this.howDecimal;
                for (var i = 0; i < this.arrayValue.length; i++) {
                    if (i == indexOfDot && this.howDecimal > 0) {
                        toRet += ".";
                    }
                    toRet += Math.abs(this.arrayValue[i]);
                }
                return toRet;
            }
            // add with different number of post-decimal-point values
            // the user would call add, and add would call this function if necessary 
            public addWithOffset(bi: BigInt): BigInt {
                var offset: number = Math.max(this.howDecimal, bi.howDecimal);
                // pad the lesser array with trailing zeros
                // so the number of post-point values is the same
                var numToPadT: number = Math.abs(this.howDecimal - offset);
                var numToPadB: number = Math.abs(bi.howDecimal - offset);
                for (var i = 0; i < numToPadT; i++) {
                    this.arrayValue.push(0);
                }
                for (var i = 0; i < numToPadB; i++) {
                    bi.arrayValue.push(0);
                }
                var hdT: number = this.howDecimal;
                var hdB: number = bi.howDecimal;
                this.howDecimal = 0;
                bi.howDecimal = 0;
                var res: BigInt = this.add(bi);
                bi.howDecimal = hdB;
                this.howDecimal = hdB;
                res.howDecimal = offset;
                res.value = res.getValue();
                res.remTrailingZeros();
                return res;
            }
            public remTrailingZeros(): void {
                var numExtra: number = 0;
                while (this.arrayValue[this.arrayValue.length - 1] == 0 && numExtra < this.howDecimal) {
                    numExtra++;
                    this.arrayValue.pop();
                }
                this.howDecimal -= numExtra;
            }
            public add(bi: BigInt): any {
                if (this.howDecimal > 0 || bi.howDecimal > 0) {
                    return this.addWithOffset(bi);
                }
                var toRet: any = new BigInt(0);
                toRet.arrayValue = [];
                var theDiff: any = Math.abs(this.arrayValue.length - bi.arrayValue.length);
                var theMin: number = Math.min(this.arrayValue.length, bi.arrayValue.length);
                for (var i = 0; i < theMin; i++) {
                    toRet.arrayValue.push(this.arrayValue[(this.arrayValue.length - 1) - i] * this.sign + bi.arrayValue[(bi.arrayValue.length - 1) - i] * bi.sign);
                }
                var theMaxAr: number[] = theMin == this.arrayValue.length ? bi.arrayValue : this.arrayValue;
                var theMaxSign: number = theMin == this.arrayValue.length ? bi.sign : this.sign;
                for (i = theMin; i < theMin + theDiff; i++) {
                    toRet.arrayValue.push(theMaxAr[(theMaxAr.length - 1) - i] * theMaxSign);
                }
                // deal with negatives
                // i think the last (nonzero) number should have the sign of the whole value
                toRet.sign = toRet.arrayValue[toRet.arrayValue.length - 1] < 0 ? -1 : 1;
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
            }
            public multiplyWithOffset(bi: BigInt): BigInt {
                var offset: number = this.howDecimal + bi.howDecimal;
                var hdT: number = this.howDecimal;
                var hdB: number = bi.howDecimal;
                this.howDecimal = 0;
                bi.howDecimal = 0;
                var res: BigInt = this.multiply(bi);
                bi.howDecimal = hdB;
                this.howDecimal = hdB;
                res.howDecimal = offset;
                res.value = res.getValue();
                res.remTrailingZeros();
                return res;
            }
            public neg(): BigInt {
                var toRet: BigInt = new BigInt(this.getValue());
                toRet.sign = this.sign * (-1);
                toRet.arrayValue = [];
                for (var i = 0; i < this.arrayValue.length; i++) {
                    toRet.arrayValue.push(this.arrayValue[i]);
                }
                toRet.howDecimal = this.howDecimal;
                return toRet;
            }
            public divide(bi: BigInt): BigInt {
                // Goldschmidt's algorithm
                // first, divide repeatedly by 10 until the denom (bi) is between 0 and 1
                var sign: number = bi.sign * this.sign;
                // unsigned division for minimum errors hopefully
                var x: BigInt = this.multiply(new BigInt(this.sign));
                var d: BigInt = bi.multiply(new BigInt(bi.sign));
                x.remTrailingZeros();
                d.remTrailingZeros();
                // if 11.5, 
                var howToDiv: number = d.arrayValue.length - d.howDecimal;
                // console.log(  howToDiv + " ??");
                d.howDecimal += howToDiv;
                x.howDecimal += howToDiv;
                x.remTrailingZeros();
                d.remTrailingZeros();
                // so now, ostensibly d should be between 0 and 1
                var curMult: BigInt = (new BigInt(2)).add(d.neg());
                var intGarb: BigInt = curMult.multiply(d);
                curMult = curMult.multiply(x);
                for (var i = 0; i < 6; i++) {
                    var intGarb2: BigInt = (new BigInt(2)).add(intGarb.neg());
                    intGarb = intGarb2.multiply(intGarb);
                    curMult = curMult.multiply(intGarb2);
                }
                curMult.sign = sign;
                curMult.value = curMult.getValue();
                return curMult;
            }
            public multiply(bi: BigInt): BigInt {
                if (this.howDecimal > 0 || bi.howDecimal > 0) {
                    return this.multiplyWithOffset(bi);
                }
                var sum: BigInt = new BigInt(0);
                sum.sign = bi.sign * this.sign;
                for (var i = 0; i < this.arrayValue.length; i++) {
                    var curToAdd: BigInt = new BigInt(0);
                    curToAdd.arrayValue = [];
                    for (var j = 0; j < i; j++) {
                        curToAdd.arrayValue.push(0);
                    }
                    for (var j: any = bi.arrayValue.length - 1; j >= 0; j--) {
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
            }
            public sub(bi: any): any {
                var toRet = new BigInt(0);
                for (var i = 0; i < bi.arrayValue.length; i++) {
                    toRet.arrayValue.push(bi.arrayValue[i]);
                }
                toRet.sign = bi.sign * (-1);
                toRet.value = toRet.getValue();
                return this.add(toRet);
            }
            private trimZeros(): void {
                var newAr: number[] = [];
                var i: number = 0;
                while (this.arrayValue[i] === 0 || this.arrayValue[i] === -0) {
                    i++;
                }
                for (var j = i; j < this.arrayValue.length; j++) {
                    newAr.push(this.arrayValue[j]);
                }
                this.arrayValue = newAr;
            }
            private getRidOf10s(): void {
                for (var i = 0; i < this.arrayValue.length - 1; i++) {
                    if (this.arrayValue[i] >= 10) {
                        var temp: number = Math.floor(this.arrayValue[i] / 10);
                        this.arrayValue[i] -= temp * 10;
                        this.arrayValue[i + 1] += temp;
                    }
                }
                if (this.arrayValue[this.arrayValue.length - 1] >= 10) {
                    var temp: number = Math.floor(this.arrayValue[i] / 10);
                    this.arrayValue[this.arrayValue.length - 1] -= temp * 10;
                    this.arrayValue.push(temp);
                }
            }
        }
        ;
    }
