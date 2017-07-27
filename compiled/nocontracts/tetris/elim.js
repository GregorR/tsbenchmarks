// Eliminate Rows
"use strict";
exports.__esModule = true;
var consts_1 = require("./consts");
var bset_1 = require("./bset");
var Elim;
(function (Elim) {
    // helper for elimiateFullRows
    function elimRow(bs, i, offset) {
        if (i < 0) {
            // do nothing
        }
        else if (bset_1.BSet.isFullRow(bs, i)) {
            elimRow(bs, i - 1, offset + 1);
        }
        else {
            elimRow(bs, i - 1, offset);
            bset_1.BSet.blocksMove(0, offset, bset_1.BSet.blocksRow(bs, i));
        }
    }
    // eliminate all full rows
    function eliminateFullRows(bs) {
        elimRow(bs, consts_1.Consts.boardHeight, 0);
    }
    Elim.eliminateFullRows = eliminateFullRows;
})(Elim = exports.Elim || (exports.Elim = {}));
