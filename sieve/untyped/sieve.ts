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

var now = require("performance-now");

var t0 = now();

var out: number = eratosthenes(10000);

var t1 = now();
console.log(out);
console.log("Call took " + (t1 - t0).toFixed(3) + " milliseconds.");