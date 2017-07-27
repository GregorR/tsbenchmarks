/*

  Note: Treating a blockset, BSet (Block Set) as an array
        of blocks, keeping mind not to add duplicates. (*)
        It may be worthwhile to wrap it in a class, or
        there may be some JS stuff for sets already.

*/
"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var block_1 = require("./block");
var consts_1 = require("./consts");
var BSet;
(function (BSet) {
    // does blockset bs contain b?
    function blocksContains(bs, b) {
        for (var i = 0; i < blocksCount(bs); i++) {
            if (block_1.Block.blocksEqual(b, bs[i]))
                return true;
        }
        return false;
    }
    BSet.blocksContains = blocksContains;
    // is blockset bs1 a subset of blockset 2?
    function isBlocksSubset(bs1, bs2) {
        for (var i = 0; i < blocksCount(bs1); i++) {
            if (!blocksContains(bs2, bs1[i]))
                return false;
        }
        return true;
    }
    // are blocksets bs1 and bs2 equal?
    function blockSetsEqual(bs1, bs2) {
        return isBlocksSubset(bs1, bs2) && isBlocksSubset(bs2, bs1);
    }
    BSet.blockSetsEqual = blockSetsEqual;
    // return bs1 intersect bs2
    function blocksIntersect(bs1, bs2) {
        var r = [];
        for (var i = 0; i < blocksCount(bs1); i++) {
            if (blocksContains(bs2, bs1[i])) {
                r.push(bs1[i]);
            }
        }
        return r;
    }
    BSet.blocksIntersect = blocksIntersect;
    // how many blocks in blockset
    function blocksCount(bs) {
        return bs.length;
    }
    BSet.blocksCount = blocksCount;
    // move each block in blockset by diven displacement
    function blocksMove(dx, dy, bs) {
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockMove(dx, dy, bs[i]);
        }
    }
    BSet.blocksMove = blocksMove;
    // rotate all blocks ccw
    function blocksRotateCCW(c, bs) {
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockRotateCCW(c, bs[i]);
        }
    }
    BSet.blocksRotateCCW = blocksRotateCCW;
    // rotate all blocks cw
    function blocksRotateCW(c, bs) {
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockRotateCW(c, bs[i]);
        }
    }
    BSet.blocksRotateCW = blocksRotateCW;
    // change color of all blocks
    // c: Color, bs: BlockSet
    function blocksChangeColor(bs, c) {
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = { x: bs[i].x, y: bs[i].y, color: data_1.Data.colorCopy(c) };
        }
    }
    BSet.blocksChangeColor = blocksChangeColor;
    // return all blocks in a row
    function blocksRow(bs, i) {
        var r = [];
        for (var k = 0; k < blocksCount(bs); k++) {
            if (bs[k].x == i)
                r.push(bs[k]);
        }
        return r;
    }
    BSet.blocksRow = blocksRow;
    // produce true if there are boardWidth number of blocks
    // in a row
    function isFullRow(bs, i) {
        return blocksRow(bs, i).length == consts_1.Consts.boardWidth;
    }
    BSet.isFullRow = isFullRow;
    // are there blocks above the board?
    function isBlocksOverflow(bs) {
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].y <= 0)
                return true;
        }
        return false;
    }
    // union two block sets
    function blocksUnion(bs1, bs2) {
        var r = bs1;
        for (var i = 0; i < blocksCount(bs2); i++) {
            if (!blocksContains(r, bs2[i])) {
                r.push(bs2[i]);
            }
        }
        return r;
    }
    BSet.blocksUnion = blocksUnion;
    // return max y of board bs, or 0 if bs is empty
    function blocksMaxY(bs) {
        var maxY = blocksCount(bs) == 0 ? 0 : bs[0].y;
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].y > maxY)
                maxY = bs[i].y;
        }
        return maxY;
    }
    BSet.blocksMaxY = blocksMaxY;
    // return min x of board bs, or boardWidth if bs empty
    function blocksMinX(bs) {
        var minX = blocksCount(bs) == 0 ? consts_1.Consts.boardWidth : bs[0].x;
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].x < minX)
                minX = bs[i].x;
        }
        return minX;
    }
    BSet.blocksMinX = blocksMinX;
    // return max x of board bs, or 0 if bs is empty
    function blocksMaxX(bs) {
        var maxX = blocksCount(bs) == 0 ? 0 : bs[0].x;
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].x > maxX)
                maxX = bs[i].x;
        }
        return maxX;
    }
    BSet.blocksMaxX = blocksMaxX;
})(BSet = exports.BSet || (exports.BSet = {}));
