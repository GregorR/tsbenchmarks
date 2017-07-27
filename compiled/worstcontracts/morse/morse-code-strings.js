"use strict";
exports.__esModule = true;
var c151a835ceacdb11090d1960ae92771fe;
if (typeof c151a835ceacdb11090d1960ae92771fe === "undefined")
    c151a835ceacdb11090d1960ae92771fe = $ir_contract_for("number");
$ir_obj_def_const(this, "c151a835ceacdb11090d1960ae92771fec", c151a835ceacdb11090d1960ae92771fe, true);
var c39c6844c921cf69656adaa2a8e4aea0c;
if (typeof c39c6844c921cf69656adaa2a8e4aea0c === "undefined")
    c39c6844c921cf69656adaa2a8e4aea0c = $ir_contract_for("string");
$ir_obj_def_const(this, "c39c6844c921cf69656adaa2a8e4aea0cc", c39c6844c921cf69656adaa2a8e4aea0c, true);
function c662ea7dc8a9f859acf376aa67873938ff() {
    "Array";
    if (typeof c662ea7dc8a9f859acf376aa67873938f !== "undefined")
        return c662ea7dc8a9f859acf376aa67873938f;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "length", co);
    c = $ir_contract_oblige_array(c, co);
    c662ea7dc8a9f859acf376aa67873938f = c;
    $ir_contract_oblige_member(c, "length", c151a835ceacdb11090d1960ae92771fe);
    c = $ir_contract_oblige_array(c, c39c6844c921cf69656adaa2a8e4aea0c);
    return c;
}
var c662ea7dc8a9f859acf376aa67873938f;
if (typeof c662ea7dc8a9f859acf376aa67873938f === "undefined")
    c662ea7dc8a9f859acf376aa67873938f = c662ea7dc8a9f859acf376aa67873938ff();
$ir_obj_def_const(this, "c662ea7dc8a9f859acf376aa67873938fc", c662ea7dc8a9f859acf376aa67873938f, true);
// get the charTable from the relevant module
var morse_code_table_1 = require("./morse-code-table");
var MorseCodeStrings;
(function (MorseCodeStrings) {
    var charTable = morse_code_table_1.MorseCodeTable.charTable;
    // lookup in charTable
    function charToDitDahString(theLetter) {
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
