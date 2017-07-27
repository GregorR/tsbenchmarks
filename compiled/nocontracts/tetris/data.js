// File w Data Definitions
"use strict";
exports.__esModule = true;
var Data;
(function (Data) {
    // (struct posn (x y))
    var Posn = (function () {
        function Posn() {
        }
        return Posn;
    }());
    Data.Posn = Posn;
    function posnCopy(p) {
        return {
            x: p.x,
            y: p.y
        };
    }
    Data.posnCopy = posnCopy;
    function equalPosns(p1, p2) {
        return p1.x == p2.x && p1.y == p2.y;
    }
    Data.equalPosns = equalPosns;
    // (struct block (x y color))
    var Block = (function () {
        function Block() {
        }
        return Block;
    }());
    Data.Block = Block;
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
    Data.blockCopy = blockCopy;
    function blocksCopy(bs) {
        var newBlocks = [];
        for (var i = 0; i < bs.length; i++) {
            newBlocks.push(blockCopy(bs[i]));
        }
        return newBlocks;
    }
    Data.blocksCopy = blocksCopy;
    // (struct tetra (center blocks))
    var Tetra = (function () {
        function Tetra() {
        }
        return Tetra;
    }());
    Data.Tetra = Tetra;
    function tetraCopy(t) {
        return {
            center: posnCopy(t.center),
            blocks: blocksCopy(t.blocks)
        };
    }
    Data.tetraCopy = tetraCopy;
    // (struct world (tetra blocks))
    var World = (function () {
        function World() {
        }
        return World;
    }());
    Data.World = World;
    function worldCopy(w) {
        return {
            tetra: tetraCopy(w.tetra),
            blocks: blocksCopy(w.blocks)
        };
    }
    Data.worldCopy = worldCopy;
    var Color = (function () {
        function Color() {
        }
        return Color;
    }());
    Data.Color = Color;
    function colorCopy(c) {
        return {
            r: c.r,
            g: c.g,
            b: c.b
        };
    }
    Data.colorCopy = colorCopy;
})(Data = exports.Data || (exports.Data = {}));
