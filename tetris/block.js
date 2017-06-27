"use strict";
exports.__esModule = true;
function blocksEqual(b1, b2) {
    return b1.x == b2.x && b1.y == b2.y;
}
exports.blocksEqual = blocksEqual;
function blockMove(dx, dy, b) {
    return { x: b.x + dx,
        y: b.y + dy,
        color: b.color };
}
exports.blockMove = blockMove;
function blockRotateCCW(c, b) {
    return { x: c.x + (c.y - b.y),
        y: c.y + (b.x - c.x),
        color: b.color };
}
exports.blockRotateCCW = blockRotateCCW;
function blockRotateCW(c, b) {
    return blockRotateCCW(c, blockRotateCCW(c, blockRotateCCW(c, b)));
}
exports.blockRotateCW = blockRotateCW;
