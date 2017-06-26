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
// (struct tetra (center blocks))
var Tetra = (function () {
    function Tetra() {
    }
    return Tetra;
}());
exports.Tetra = Tetra;
// (struct world (tetra blocks))
var World = (function () {
    function World() {
    }
    return World;
}());
exports.World = World;
