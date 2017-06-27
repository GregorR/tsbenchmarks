"use strict";
// File w Data Definitions
exports.__esModule = true;
// (struct posn (x y))
var Posn = (function () {
    function Posn() {
    }
    return Posn;
}());
exports.Posn = Posn;
function posnCopy(p) {
    return {
        x: p.x,
        y: p.y
    };
}
exports.posnCopy = posnCopy;
function equalPosns(p1, p2) {
    return p1.x == p2.x && p1.y == p2.y;
}
exports.equalPosns = equalPosns;
// (struct block (x y color))
var Block = (function () {
    function Block() {
    }
    return Block;
}());
exports.Block = Block;
function blockCopy(b) {
    return {
        x: b.x,
        y: b.y,
        color: {
            r: b.color.r,
            g: b.color.g,
            b: b.color.b
        }
    };
}
exports.blockCopy = blockCopy;
function blocksCopy(bs) {
    var newBlocks = [];
    for (var i = 0; i < bs.length; i++) {
        newBlocks.push(blockCopy(bs[i]));
    }
    return newBlocks;
}
exports.blocksCopy = blocksCopy;
// (struct tetra (center blocks))
var Tetra = (function () {
    function Tetra() {
    }
    return Tetra;
}());
exports.Tetra = Tetra;
function tetraCopy(t) {
    return {
        center: posnCopy(t.center),
        blocks: blocksCopy(t.blocks)
    };
}
exports.tetraCopy = tetraCopy;
// (struct world (tetra blocks))
var World = (function () {
    function World() {
    }
    return World;
}());
exports.World = World;
function worldCopy(w) {
    return {
        tetra: tetraCopy(w.tetra),
        blocks: blocksCopy(w.blocks)
    };
}
exports.worldCopy = worldCopy;
// this is b/c I don't think JS has a color library
var Color = (function () {
    function Color() {
    }
    return Color;
}());
exports.Color = Color;
function colorCopy(c) {
    return {
        r: c.r,
        g: c.g,
        b: c.b
    };
}
exports.colorCopy = colorCopy;
