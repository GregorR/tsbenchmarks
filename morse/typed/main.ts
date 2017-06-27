// imports
declare function require(input:string)

var levDist = require( './levenshtein')
import { stringToMorse } from './morse-code-strings'
const fs = require( 'fs')

// parse the data files -- first, allwords
var freqFileUP : string = fs.readFileSync( '../data/frequency.rktd', 'utf8');

var regxFFUP : RegExp = new RegExp('[(|)|\"]', 'g') // to get rid of a lot of crap
var tmp1 : string = freqFileUP.replace(regxFFUP, "")    // ^
var freqFileSplit : string[] = tmp1.split(" ")

var allwords : [string, string][]= []
for ( var i : number = 0; i < freqFileSplit.length; i+=2) {
  allwords[i/2] = [freqFileSplit[i], freqFileSplit[i+1]]
}

// then, wordsSmall
freqFileUP = fs.readFileSync( '../data/frequency-small.rktd', 'utf8');

regxFFUP = new RegExp('[(|)|\"]', 'g') // to get rid of a lot of crap
tmp1 = freqFileUP.replace(regxFFUP, "")    // ^
freqFileSplit = tmp1.split(" ")

var wordsSmall : [string, string][]= []
for ( var i = 0; i < freqFileSplit.length; i+=2) {
  wordsSmall[i/2] = [freqFileSplit[i], freqFileSplit[i+1]]
}

// finally, the main EVENT
function main (words: [string, string][]) : void {
    for (var i : number = 0; i < words.length; i++) {
      for (var j : number = 0; j < words.length; j++) {
        var s2m1 : string = stringToMorse( words[i][0])
        var s2m2 : string = stringToMorse( words[j][0])
        var lev1t2 : number = levDist.getEditDistance( s2m1, s2m2)
        var lev2t1 : number = levDist.getEditDistance( s2m2, s2m1)
      }
    }
}

var now = require("performance-now");
var t0 = now();

main( wordsSmall)
// console.log("Done.")

var t1 = now();
console.log((t1 - t0).toFixed(6));
