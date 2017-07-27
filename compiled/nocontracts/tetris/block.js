"use strict";
exports.__esModule = true;
var Block;
(function (Block) {
    function blocksEqual(b1, b2) {
        return b1.x == b2.x && b1.y == b2.y;
    }
    Block.blocksEqual = blocksEqual;
    function blockMove(dx, dy, b) {
        return { x: b.x + dx,
            y: b.y + dy,
            color: b.color };
    }
    Block.blockMove = blockMove;
    function blockRotateCCW(c, b) {
        return { x: c.x + (c.y - b.y),
            y: c.y + (b.x - c.x),
            color: b.color };
    }
    Block.blockRotateCCW = blockRotateCCW;
    function blockRotateCW(c, b) {
        return blockRotateCCW(c, blockRotateCCW(c, blockRotateCCW(c, b)));
    }
    Block.blockRotateCW = blockRotateCW;
})(Block = exports.Block || (exports.Block = {}));
