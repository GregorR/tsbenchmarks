"use strict";
exports.__esModule = true;
// get the charTable from the relevant module
var morse_code_table_1 = require("./morse-code-table");
// lookup in charTable
var charToDitDahString = function (theLetter) {
    return morse_code_table_1.charTable[theLetter.toUpperCase()];
};
// convert an entire string to morse
// note: no spaces
// ex:   aa -> .-.- and not .- .-
var stringToMorse = function (theString) {
    var out = "";
    for (var index in theString) {
        out += charToDitDahString(theString[index]);
    }
    return out;
};
exports.stringToMorse = stringToMorse;
