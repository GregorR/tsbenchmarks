"use strict";
// Tetras
exports.__esModule = true;
var bset = require("./bset");
// Tetra Move: move the tetra by the given x and y
function tetraMove(dx, dy, t) {
    t = { center: { x: t.center.x + dx,
            y: t.center.y + dy },
        blocks: t.blocks };
    bset.blocksMove(dx, dy, t.blocks);
}
exports.tetraMove = tetraMove;
// Rotate all blocks in tetra t ccw
function tetraRotateCCW(t) {
    bset.blocksRotateCCW(t.center, t.blocks);
}
exports.tetraRotateCCW = tetraRotateCCW;
// Rotate all blocks in tetra t cw
function tetraRotateCW(t) {
    bset.blocksRotateCW(t.center, t.blocks);
}
exports.tetraRotateCW = tetraRotateCW;
// Stub
function doesTetraOverlapsBlocks(t, bs) {
    return !bset.blocksIntersect(t.blocks, bs);
}
exports.doesTetraOverlapsBlocks = doesTetraOverlapsBlocks;
// Stub
function tetraChangeColor(t, c) {
    bset.blocksChangeColor(t.blocks, c);
}
exports.tetraChangeColor = tetraChangeColor;
// Stub
function buildTetraBlocks(color, xc, yc, x1, y1, x2, y2, x3, y3, x4, y4) {
    var t = { center: { x: xc, y: yc },
        blocks: [{ x: x1, y: y1, color: color },
            { x: x2, y: y2, color: color },
            { x: x3, y: y3, color: color },
            { x: x4, y: y4, color: color }] };
    tetraMove(3, 0, t); //
    return t;
}
exports.buildTetraBlocks = buildTetraBlocks;
