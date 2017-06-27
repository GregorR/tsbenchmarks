"use strict";
exports.__esModule = true;
// get the charTable from the relevant module
var morse_code_table_1 = require("./morse-code-table");
// lookup in charTable
function charToDitDahString(theLetter) {
    return morse_code_table_1.charTable[theLetter.toUpperCase()];
}
// convert an entire string to morse
// note: no spaces
// ex:   aa -> .-.- and not .- .-
function stringToMorse(theString) {
    var out = "";
    for (var i = 0; i < theString.length; i++) {
        out += charToDitDahString(theString[i]);
    }
    return out;
}
exports.stringToMorse = stringToMorse;
