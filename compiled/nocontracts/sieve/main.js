// sieve of erastosthenes 
// based on the typed racket version
"use strict";
exports.__esModule = true;
var main;
(function (main_1) {
    var InfiniteList = (function () {
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
    function main() {
        var computeWith = new InfiniteList();
        var out = computeWith.sieveGetPrime(10000);
    }
    main_1.main = main;
    main_1.runs = 4;
})(main = exports.main || (exports.main = {}));
