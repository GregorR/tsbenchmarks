// probably the most inefficient sieve of eratosthenes to 
// grace the face of this planet
// the reasoning: try to get it closer to the racket implementation
// so as to better compare with the original benchmarks
var InfiniteList = (function () {
    // bList: boolean[]; 
    function InfiniteList() {
        this.tList = [2]; // start off with 2 as the first prime
    }
    // get the nth prime
    // compute iteratively, kind of like the racket code
    InfiniteList.prototype.sieveGetPrime = function (n) {
        // check current length of list
        // if n < length, return list[ n - 1]
        // else, keep computing
        if (this.tList.length >= n) {
            return this.tList[n - 1];
        }
        var oldLen = this.tList.length;
        var diff = n - oldLen;
        for (var i = 0; i < diff; ++i) {
            this.computeNextPrime();
        }
        return this.tList[n - 1];
    };
    // compute the next prime in the list
    InfiniteList.prototype.computeNextPrime = function () {
        var curVal = this.tList[this.tList.length - 1];
        // check previous primes computed in the list; if not divisible by
        // any, then it also must be a prime
        // logic for being "faithful" to the sieve: it only checks if divisible by previous
        // primes, it doesn't check against all values between itself and 0
        while (true) {
            var isPrime = true;
            // go through each previous prime and check its mod
            for (var i = 0; i < this.tList.length; i++) {
                if (curVal % this.tList[i] == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                break;
            }
            curVal++;
        }
        this.tList.push(curVal);
    };
    return InfiniteList;
}());
;
// this is the original code for the sieve, in a more traditional/normal implementation
// take from stackoverflow post
// used as a model for the the implementation above (kind of)
var eratosthenes = function (n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [];
    var upperLimit = n * Math.log(n * Math.log(n));
    var output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < upperLimit; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < upperLimit; j += i) {
                array[j] = false;
            }
        }
    }
    // All array[i] set to true are primes
    for (var i = 2; i < upperLimit; i++) {
        if (array[i]) {
            output.push(i);
        }
    }
    return output[n - 1];
};
// compute 10000th prime and print time taken
var computeWith = new InfiniteList();
var out = computeWith.sieveGetPrime(10000);
// console.log(out);
// console.log("Call took " + (t1 - t0).toFixed(3) + " milliseconds.");
