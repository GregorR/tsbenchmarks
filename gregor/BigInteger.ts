

export class BigInt {

    value: number;
    arrayValue: number[] = [];
    sign: number;
    howDecimal: number;

    constructor( v: number) {

        this.howDecimal = 0;
        
        if( v < 0) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }

        this.value = v*this.sign;
        v = v*this.sign;

        var numDigs: number = ("" + v).length;
        var theDigs: string = "" + v;

        // deal with scientific notation
        if( theDigs.length >= 2 && theDigs[ 1] == "." && theDigs.indexOf( "e") != -1) { // then it's scientific notation
            var exp: number = 0;
            var i = 2;
            while( theDigs.length > i && theDigs[ i] != "e") {
                i ++;
            }
            exp = Number( theDigs.substr( i + 2, theDigs.length));

            var postDotDigs: string = theDigs.substr( 2, i - 2);
            // console.log( postDotDigs);

            var newDigs: string = theDigs[ 0] + postDotDigs;

            // 3.1e4 = 3100 so the postDot should be == exp - 1
            if( postDotDigs.length < exp - 1) {
                var theDif: number = (exp - 1) - postDotDigs.length;
                for( var k = 0; k < theDif; k ++) {
                    newDigs += "0";
                }
            }

            theDigs = newDigs;
            numDigs = theDigs.length;
        }
        else if( theDigs.indexOf( ".") != -1) {
            var dotInd: number = theDigs.indexOf( ".");
            var diff: number = theDigs.length - dotInd;
            // console.log( diff);

            theDigs = theDigs.replace( ".", "");
            this.howDecimal = diff - 1;
            numDigs = theDigs.length;

            // console.log( theDigs);
        }

        for( var i = 0; i < numDigs; i ++) {
            // var curDig = v % 10;
            // v = Math.floor( v / 10);

            var curDig = Number( theDigs[ i]);
            this.arrayValue.push( curDig);
        }

        // this.arrayValue = this.arrayValue.reverse();
    }

    // this might be wrong due to overflow RIP
    public getValue(): number {
        var toRet: number = 0;
        for( var i = 0; i < this.arrayValue.length; i ++) {
            toRet += this.arrayValue[ (this.arrayValue.length - 1) - i] * (10**(i - this.howDecimal));
            // console.log( toRet);
        }
        return toRet*this.sign;
    }

    public printable(): string {
        var toRet = "";
        if( this.sign == -1) {
            toRet += "-";
        }
        var indexOfDot: number = (this.arrayValue.length - 1) - this.howDecimal;
        for( var i = 0; i < this.arrayValue.length; i ++) {
            if( i == indexOfDot && this.howDecimal > 0) {
                toRet += ".";
            }
            toRet += Math.abs( this.arrayValue[ i]);
        }

        return toRet;
    }

    public addWithOffset( bi: BigInt): BigInt {
        var offset: number = Math.max( this.howDecimal, bi.howDecimal);

        // pad the lesser array with trailing zeros
        // so the number of post-point values is the same
        var numToPadT: number = Math.abs( this.howDecimal - offset);
        var numToPadB: number = Math.abs( bi.howDecimal - offset);
        for( var i = 0; i < numToPadT; i ++) {
            this.arrayValue.push( 0);
        } 
        for( var i = 0; i < numToPadB; i ++) {
            bi.arrayValue.push( 0);
        }

        // console.log( "YME");
        // console.log( this.arrayValue);
        // console.log( bi.arrayValue);
        // console.log( "DMOWNDJW");

        var hdT: number = this.howDecimal;
        var hdB: number = bi.howDecimal;

        this.howDecimal = 0;
        bi.howDecimal = 0;

        var res: BigInt = this.add( bi);

        bi.howDecimal = hdB;
        this.howDecimal = hdB;
        res.howDecimal = offset;
        res.value = res.getValue();
        res.remTrailingZeros();

        return res;
    }

    public remTrailingZeros(): void {
        var numExtra: number = 0;

        // console.log( this.arrayValue);

        while( this.arrayValue[ this.arrayValue.length - 1] == 0 && numExtra < this.howDecimal) {
            numExtra ++;
            this.arrayValue.pop();
        }

        this.howDecimal -= numExtra;
        // console.log( this.arrayValue);
    }

    public add( bi: BigInt): BigInt {

        if( this.howDecimal > 0 || bi.howDecimal > 0) {
            return this.addWithOffset( bi);
        }

        var toRet: BigInt = new BigInt( 0);
        toRet.arrayValue = [];

        var theDiff: number = Math.abs( this.arrayValue.length - bi.arrayValue.length);
        var theMin: number = Math.min( this.arrayValue.length, bi.arrayValue.length);
        for( var i = 0; i < theMin; i ++) {
            toRet.arrayValue.push( this.arrayValue[ (this.arrayValue.length - 1) - i]*this.sign + bi.arrayValue[ (bi.arrayValue.length - 1) - i]*bi.sign);
        }
        // console.log( "WTF");
        // console.log( toRet);
        // toRet.trimZeros();

        var theMaxAr: number[] = theMin == this.arrayValue.length ? bi.arrayValue : this.arrayValue;
        var theMaxSign: number = theMin == this.arrayValue.length ? bi.sign : this.sign;
        for( i = theMin; i < theMin + theDiff; i ++) {
            toRet.arrayValue.push( theMaxAr[ (theMaxAr.length - 1) - i]*theMaxSign);
        }
        // console.log( "HALP");
        // console.log( toRet);

        // toRet.trimZeros();

        // deal with negatives
        // i think the last (nonzero) number should have the sign of the whole value
        toRet.sign = toRet.arrayValue[ toRet.arrayValue.length - 1] < 0 ? -1 : 1;
        for( i = 0; i < toRet.arrayValue.length; i ++) {
            toRet.arrayValue[ i] *= toRet.sign;
        }

        for( i = toRet.arrayValue.length - 1; i > 0; i -- ) {
            if( toRet.arrayValue[ i] > 0 && toRet.arrayValue[ i - 1] < 0) {
                toRet.arrayValue[ i] -= 1;
                toRet.arrayValue[ i - 1] += 10;
            }
        }

        // trim 0's
        // toRet.trimZeros();

        // now, get rid of the extra 10's
        toRet.getRidOf10s();
        // toRet.trimZeros();
        // console.log( toRet.arrayValue);

        toRet.arrayValue = toRet.arrayValue.reverse(); 
        toRet.trimZeros();
        toRet.value = toRet.getValue();
        return toRet;
    }

    public multiplyWithOffset( bi: BigInt): BigInt {
        
        var offset: number = this.howDecimal + bi.howDecimal;

        var hdT: number = this.howDecimal;
        var hdB: number = bi.howDecimal;

        this.howDecimal = 0;
        bi.howDecimal = 0;

        var res: BigInt = this.multiply( bi);

        bi.howDecimal = hdB;
        this.howDecimal = hdB;
        res.howDecimal = offset;
        res.value = res.getValue();
        res.remTrailingZeros();

        return res;     
    }

    public neg(): BigInt {

        var toRet: BigInt = new BigInt( this.getValue());
        toRet.sign = this.sign*(-1);

        toRet.arrayValue = [];
        for( var i = 0; i < this.arrayValue.length; i ++) {
            toRet.arrayValue.push( this.arrayValue[ i]);
        }

        toRet.howDecimal = this.howDecimal;
        // console.log( toRet.getValue());


        // console.log( this.arrayValue);
        // console.log( toRet.arrayValue);
        return toRet;
    }

    public divide( bi: BigInt): BigInt {
        // Goldschmidt's algorithm
        // first, divide repeatedly by 10 until the denom (bi) is between 0 and 1

        var sign: number = bi.sign * this.sign;
        // unsigned division for minimum errors hopefully
        var x: BigInt = this.multiply( new BigInt( this.sign));
        var d: BigInt = bi.multiply( new BigInt( bi.sign));
        x.remTrailingZeros();
        d.remTrailingZeros();


        // if 11.5, 
        var howToDiv: number = d.arrayValue.length - d.howDecimal;
        // console.log(  howToDiv + " ??");
        d.howDecimal += howToDiv;
        x.howDecimal += howToDiv;
        x.remTrailingZeros();
        d.remTrailingZeros();

        // console.log( d.getValue());
        // console.log( x.getValue());

        // console.log( x.arrayValue);
        // console.log( d.arrayValue);
        // console.log( "KILL ME");

        // console.log( "OMG");
        // console.log( d.neg());
        // console.log( x);

        // so now, ostensibly d should be between 0 and 1
        var curMult: BigInt = (new BigInt( 2)).add( d.neg());
        var intGarb: BigInt = curMult.multiply( d);

        curMult = curMult.multiply( x);
        // console.log( curMult.getValue());
        
        for( var i = 0; i < 6; i ++) { // choose arbitrary precision
            var intGarb2: BigInt = (new BigInt( 2)).add( intGarb.neg());
            // console.log( intGarb2.getValue());
            intGarb = intGarb2.multiply( intGarb);
            // console.log( intGarb.getValue());

            curMult = curMult.multiply( intGarb2);
            // console.log( curMult.getValue());
            // console.log( "why is this my life");

            // intGarb = intGarb2;
        }

        curMult.sign = sign;
        curMult.value = curMult.getValue();

        return curMult;

    }

    public multiply( bi: BigInt): BigInt {

        if( this.howDecimal > 0 || bi.howDecimal > 0) {
            return this.multiplyWithOffset( bi);
        }

        var sum: BigInt = new BigInt( 0);
        sum.sign = bi.sign * this.sign;
        for( var i = 0; i < this.arrayValue.length; i ++) {
            var curToAdd: BigInt = new BigInt( 0);
            curToAdd.arrayValue = [];

            for( var j = 0; j < i; j ++) {
                curToAdd.arrayValue.push( 0);
            }

            for( var j = bi.arrayValue.length - 1; j >= 0; j --) {
                curToAdd.arrayValue.push( Math.abs( this.arrayValue[ (this.arrayValue.length - 1) - i] * bi.arrayValue[ j]));
            }
            // console.log( curToAdd);

            curToAdd.sign = sum.sign;
            curToAdd.value = curToAdd.getValue();
            curToAdd.arrayValue = curToAdd.arrayValue.reverse();

            // console.log( "OMG");
            // console.log( curToAdd);

            sum = sum.add( curToAdd);
            // console.log( sum);
        }
        sum.sign = bi.sign * this.sign;
        sum.value = sum.getValue();

        return sum;
    }

    public sub( bi: BigInt): BigInt {
        var toRet = new BigInt( 0);
        for( var i = 0; i < bi.arrayValue.length; i ++) {
            toRet.arrayValue.push( bi.arrayValue[ i]);
        }

        toRet.sign = bi.sign*(-1);
        toRet.value = toRet.getValue();
        return this.add( toRet);
    }

    private trimZeros(): void {
        var newAr: number[] = [];
        var i: number = 0;
        while( this.arrayValue[ i] === 0 || this.arrayValue[ i] === -0) {
            i ++;
        }

        for( var j = i; j < this.arrayValue.length; j ++) { // for some reason it seems like there's always an extra 0 at the end idk why O .o
            newAr.push( this.arrayValue[ j]);
        }

        this.arrayValue = newAr;
    }

    private getRidOf10s(): void { 
        // console.log( this.arrayValue);
        for ( var i = 0; i < this.arrayValue.length - 1; i ++) {
            if( this.arrayValue[ i] >= 10) {
                var temp: number = Math.floor( this.arrayValue[ i] / 10);
                this.arrayValue[ i] -= temp * 10;
                this.arrayValue[ i + 1] += temp;
            }
        }
        if( this.arrayValue[ this.arrayValue.length - 1] >= 10) {
            var temp: number = Math.floor( this.arrayValue[ i] / 10);
            this.arrayValue[ this.arrayValue.length - 1] -= temp * 10;
            this.arrayValue.push( temp);
        }

        // console.log( this.arrayValue);
    }

};

// function main() {
//     // var a: BigInt = new BigInt( 211866958980000000000);
//     // var b: BigInt = new BigInt( 211866957960000000000);

//     // var a: BigInt = new BigInt( 27289147839111);
//     // var b: BigInt = new BigInt( -33429831743819642871641);

//     var a: BigInt = new BigInt( 35009967661000000001);
//     var b: BigInt = new BigInt( 14400000000000);


//     // console.log( a);
//     // console.log( b);
//     console.log( (a.divide( b)).multiply( new BigInt( 86400*1000000000)).getValue());
// }

// main();
