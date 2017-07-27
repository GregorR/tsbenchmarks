// Tetras
"use strict";
exports.__esModule = true;
var bset_1 = require("./bset");
var Tetras;
(function (Tetras) {
    // Tetra Move: move the tetra by the given x and y
    function tetraMove(dx, dy, t) {
        t = { center: { x: t.center.x + dx,
                y: t.center.y + dy },
            blocks: t.blocks };
        bset_1.BSet.blocksMove(dx, dy, t.blocks);
    }
    Tetras.tetraMove = tetraMove;
    // Rotate all blocks in tetra t ccw
    function tetraRotateCCW(t) {
        bset_1.BSet.blocksRotateCCW(t.center, t.blocks);
    }
    Tetras.tetraRotateCCW = tetraRotateCCW;
    // Rotate all blocks in tetra t cw
    function tetraRotateCW(t) {
        bset_1.BSet.blocksRotateCW(t.center, t.blocks);
    }
    Tetras.tetraRotateCW = tetraRotateCW;
    // Stub
    function doesTetraOverlapsBlocks(t, bs) {
        return !bset_1.BSet.blocksIntersect(t.blocks, bs);
    }
    Tetras.doesTetraOverlapsBlocks = doesTetraOverlapsBlocks;
    // Stub
    function tetraChangeColor(t, c) {
        bset_1.BSet.blocksChangeColor(t.blocks, c);
    }
    Tetras.tetraChangeColor = tetraChangeColor;
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
    Tetras.buildTetraBlocks = buildTetraBlocks;
})(Tetras = exports.Tetras || (exports.Tetras = {}));
