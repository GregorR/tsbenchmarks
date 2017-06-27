"use strict";
// Eliminate Rows
exports.__esModule = true;
var consts = require("./consts");
var bset = require("./bset");
// helper for elimiateFullRows
function elimRow(bs, i, offset) {
    if (i < 0) {
        // do nothing
        // return []
    }
    else if (bset.isFullRow(bs, i)) {
        elimRow(bs, i - 1, offset + 1);
    }
    else {
        // TODO: i am terrified of this code
        elimRow(bs, i - 1, offset);
        bset.blocksMove(0, offset, bset.blocksRow(bs, i));
    }
}
// eliminate all full rows
function eliminateFullRows(bs) {
    elimRow(bs, consts.boardHeight, 0);
}
exports.eliminateFullRows = eliminateFullRows;
