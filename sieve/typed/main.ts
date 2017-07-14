
// probably the most inefficient sieve of eratosthenes to 
// grace the face of this planet
// the reasoning: try to get it closer to the racket implementation
// so as to better compare with the original benchmarks

export module main {
class InfiniteList {
    tList: number[];
    // bList: boolean[]; 

    constructor() { 
        this.tList = [2]; // start off with 2 as the first prime
    }

    // get the nth prime
    // compute iteratively, kind of like the racket code
    public sieveGetPrime(n: number): number {
        // check current length of list
        // if n < length, return list[ n - 1]
        // else, keep computing

        if (this.tList.length >= n) {
            return this.tList[ n - 1];
        }

        var oldLen: number = this.tList.length;
        var diff: number = n - oldLen;
        
        for (var i: number = 0; i < diff; ++i) {
            this.computeNextPrime();
        }
        return this.tList[ n -1];
    }

    // compute the next prime in the list
    private computeNextPrime(): void {

        var curVal: number = this.tList[ this.tList.length - 1];
        
        // check previous primes computed in the list; if not divisible by
        // any, then it also must be a prime
        // logic for being "faithful" to the sieve: it only checks if divisible by previous
        // primes, it doesn't check against all values between itself and 0
        while( true) {
            var isPrime: boolean = true;
            // go through each previous prime and check its mod
            for( var i: number = 0; i < this.tList.length; i ++) {
                if (curVal % this.tList[i] == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                break;
            }
            curVal ++;
        }
        this.tList.push(curVal);
    }

};

// this is the original code for the sieve, in a more traditional/normal implementation
// take from stackoverflow post
// used as a model for the the implementation above (kind of)
var eratosthenes = function(n: number): number {
    // Eratosthenes algorithm to find all primes under n
    var array: boolean[] = [];
    var upperLimit: number = n*Math.log(n*Math.log(n));
    var output: number[] = [];

    // Make an array from 2 to (n - 1)
    for (var i: number = 0; i < upperLimit; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i: number = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < upperLimit; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < upperLimit; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output[n - 1];
};

export function main() {
    var computeWith: InfiniteList = new InfiniteList();
    /* This is reduced from 10000 to 5000 to make it fast enough for simulated
     * annealing */
    var out: number = computeWith.sieveGetPrime(5000);
}

export var runs = 1;
}
