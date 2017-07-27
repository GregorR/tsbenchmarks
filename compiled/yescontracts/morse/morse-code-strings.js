"use strict";
exports.__esModule = true;
// get the charTable from the relevant module
var morse_code_table_1 = require("./morse-code-table");
var MorseCodeStrings;
(function (MorseCodeStrings) {
    var charTable = morse_code_table_1.MorseCodeTable.charTable;
    // lookup in charTable
    function charToDitDahString(theLetter) {
        $rt_check(theLetter, "string");
        return charTable[theLetter.toUpperCase()];
    }
    // convert an entire string to morse
    // note: no spaces
    // ex:   aa -> .-.- and not .- .-
    function stringToMorse(theString) {
        $rt_check(theString, "string");
        var out = "";
        for (var i = 0; i < theString.length; i++) {
            out += charToDitDahString(theString[i]);
        }
        return out;
    }
    MorseCodeStrings.stringToMorse = stringToMorse;
})(MorseCodeStrings = exports.MorseCodeStrings || (exports.MorseCodeStrings = {}));
