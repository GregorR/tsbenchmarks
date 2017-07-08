

export class BigInt {

    value: number;
    arrayValue: number[] = [];
    sign: number;

    constructor( v) {
        
        if( v < 0) {
            this.sign = -1;
        } else {
            this.sign = 1;
        }

        this.value = v*this.sign;
        v = v*this.sign;

        var numDigs: number = ("" + v).length;
        for( var i = 0; i < numDigs; i ++) {
            var curDig = v % 10;
            v = Math.floor( v / 10);

            this.arrayValue.push( curDig);
        }

        this.arrayValue = this.arrayValue.reverse();
    }

    // this might be wrong due to overflow RIP
    public getValue(): number {
        var toRet: number = 0;
        for( var i = 0; i < this.arrayValue.length; i ++) {
            toRet += this.arrayValue[ (this.arrayValue.length - 1) - i] * (10**i);
            // console.log( toRet);
        }
        return toRet*this.sign;
    }

    public printable(): string {
        var toRet: string = "";
        for( var i = 0; i < this.arrayValue.length; i ++) {
            toRet += this.arrayValue[ i];
        }
        return toRet;
    }

    public add( bi: BigInt): BigInt {
        var toRet: BigInt = new BigInt( 0);

        var theDiff: number = Math.abs( this.arrayValue.length - bi.arrayValue.length);
        var theMin: number = Math.min( this.arrayValue.length, bi.arrayValue.length);
        for( var i = 0; i < theMin; i ++) {
            toRet.arrayValue.push( this.arrayValue[ (this.arrayValue.length - 1) - i]*this.sign + bi.arrayValue[ (bi.arrayValue.length - 1) - i]*bi.sign);
        }
        toRet.trimZeros();

        var theMaxAr: number[] = theMin == this.arrayValue.length ? bi.arrayValue : this.arrayValue;
        var theMaxSign: number = theMin == this.arrayValue.length ? bi.sign : this.sign;
        for( i = theMin; i < theMin + theDiff; i ++) {
            toRet.arrayValue.push( theMaxAr[ (theMaxAr.length - 1) - i]*theMaxSign);
        }

        toRet.trimZeros();

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
        toRet.trimZeros();

        // now, get rid of the extra 10's
        toRet.getRidOf10s();
        toRet.trimZeros();
        // console.log( toRet.arrayValue);

        toRet.arrayValue = toRet.arrayValue.reverse(); 
        toRet.value = toRet.getValue();
        return toRet;
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
        while( this.arrayValue[ i] == 0) {
            i ++;
        }

        for( var j = i; j < this.arrayValue.length; j ++) {
            newAr.push( this.arrayValue[ j]);
        }

        this.arrayValue = newAr;
    }

    private getRidOf10s(): void { 
        for ( var i = 0; i < this.arrayValue.length - 1; i ++) {
            if( this.arrayValue[ i] >= 10) {
                this.arrayValue[ i] -= 10;
                this.arrayValue[ i + 1] += 1;
            }
        }
        if( this.arrayValue[ this.arrayValue.length - 1] >= 10) {
            this.arrayValue[ this.arrayValue.length - 1] -= 10;
            this.arrayValue.push( 1);
        }
    }

};

// function main() {
//     var a: BigInt = new BigInt( -1078932425);
//     var b: BigInt = new BigInt( -21783924);

//     console.log( a);
//     console.log( b);
//     console.log( a.sub( b));
// }

// main();