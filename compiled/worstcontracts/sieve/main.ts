// sieve of erastosthenes 
// based on the typed racket version
// sieve of erastosthenes 
export module main {
        class InfiniteList {
            tList: number[];
            constructor() {
                this.tList = [2]; // start off with 2 as the first prime
            }
            // get the nth prime
            // compute iteratively, kind of like the racket code
            public sieveGetPrime(n: any): any {
                // check current length of list
                // if n < length, return list[ n - 1]
                // else, keep computing
                if (this.tList.length >= n) {
                    return this.tList[n - 1];
                }
                var oldLen: any = this.tList.length;
                var diff: any = n - oldLen;
                for (var i: number = 0; i < diff; ++i) {
                    this.computeNextPrime();
                }
                return this.tList[n - 1];
            }
            // compute the next prime in the list
            private computeNextPrime(): void {
                var curVal: number = this.tList[this.tList.length - 1];
                // check previous primes computed in the list; if not divisible by
                // any, then it also must be a prime
                // logic for being "faithful" to the sieve: it only checks if divisible by previous
                // primes, it doesn't check against all values between itself and 0
                while (true) {
                    var isPrime: boolean = true;
                    // go through each previous prime and check its mod
                    for (var i: number = 0; i < this.tList.length; i++) {
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
            }
        }
        ;
        export function main() {
            var computeWith: InfiniteList = new InfiniteList();
            var out: number = computeWith.sieveGetPrime(10000);
        }
        export const runs = 4;
    }
