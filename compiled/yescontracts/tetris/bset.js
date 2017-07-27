"use strict";
exports.__esModule = true;
var c151a835ceacdb11090d1960ae92771fe;
if (typeof c151a835ceacdb11090d1960ae92771fe === "undefined")
    c151a835ceacdb11090d1960ae92771fe = $ir_contract_for("number");
$ir_obj_def_const(this, "c151a835ceacdb11090d1960ae92771fec", c151a835ceacdb11090d1960ae92771fe, true);
function c04f0ab873211cfdea36376604bb18379f() {
    "Posn";
    if (typeof c04f0ab873211cfdea36376604bb18379 !== "undefined")
        return c04f0ab873211cfdea36376604bb18379;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "x", co);
    c = $ir_contract_oblige_member(c, "y", co);
    c04f0ab873211cfdea36376604bb18379 = c;
    $ir_contract_oblige_member(c, "x", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "y", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var c04f0ab873211cfdea36376604bb18379;
if (typeof c04f0ab873211cfdea36376604bb18379 === "undefined")
    c04f0ab873211cfdea36376604bb18379 = c04f0ab873211cfdea36376604bb18379f();
$ir_obj_def_const(this, "c04f0ab873211cfdea36376604bb18379c", c04f0ab873211cfdea36376604bb18379, true);
function c64668cd20c6065e4f7b603c86e86615cf() {
    "Color";
    if (typeof c64668cd20c6065e4f7b603c86e86615c !== "undefined")
        return c64668cd20c6065e4f7b603c86e86615c;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "r", co);
    c = $ir_contract_oblige_member(c, "g", co);
    c = $ir_contract_oblige_member(c, "b", co);
    c64668cd20c6065e4f7b603c86e86615c = c;
    $ir_contract_oblige_member(c, "r", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "g", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "b", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var c64668cd20c6065e4f7b603c86e86615c;
if (typeof c64668cd20c6065e4f7b603c86e86615c === "undefined")
    c64668cd20c6065e4f7b603c86e86615c = c64668cd20c6065e4f7b603c86e86615cf();
$ir_obj_def_const(this, "c64668cd20c6065e4f7b603c86e86615cc", c64668cd20c6065e4f7b603c86e86615c, true);
function c290d91851cfad63c36229d9ad9ba086bf() {
    "Block";
    if (typeof c290d91851cfad63c36229d9ad9ba086b !== "undefined")
        return c290d91851cfad63c36229d9ad9ba086b;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "x", co);
    c = $ir_contract_oblige_member(c, "y", co);
    c = $ir_contract_oblige_member(c, "color", co);
    c290d91851cfad63c36229d9ad9ba086b = c;
    $ir_contract_oblige_member(c, "x", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "y", c151a835ceacdb11090d1960ae92771fe);
    $ir_contract_oblige_member(c, "color", c64668cd20c6065e4f7b603c86e86615cf());
    return c;
}
var c290d91851cfad63c36229d9ad9ba086b;
if (typeof c290d91851cfad63c36229d9ad9ba086b === "undefined")
    c290d91851cfad63c36229d9ad9ba086b = c290d91851cfad63c36229d9ad9ba086bf();
$ir_obj_def_const(this, "c290d91851cfad63c36229d9ad9ba086bc", c290d91851cfad63c36229d9ad9ba086b, true);
function c3a34e082c24e6e1e3d6df2fbb131820bf() {
    "Array";
    if (typeof c3a34e082c24e6e1e3d6df2fbb131820b !== "undefined")
        return c3a34e082c24e6e1e3d6df2fbb131820b;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "length", co);
    c = $ir_contract_oblige_array(c, co);
    c3a34e082c24e6e1e3d6df2fbb131820b = c;
    $ir_contract_oblige_member(c, "length", c151a835ceacdb11090d1960ae92771fe);
    c = $ir_contract_oblige_array(c, c290d91851cfad63c36229d9ad9ba086bf());
    return c;
}
var c3a34e082c24e6e1e3d6df2fbb131820b;
if (typeof c3a34e082c24e6e1e3d6df2fbb131820b === "undefined")
    c3a34e082c24e6e1e3d6df2fbb131820b = c3a34e082c24e6e1e3d6df2fbb131820bf();
$ir_obj_def_const(this, "c3a34e082c24e6e1e3d6df2fbb131820bc", c3a34e082c24e6e1e3d6df2fbb131820b, true);
function c69ba9077056386ee23242c7218820fdef() {
    "Tetra";
    if (typeof c69ba9077056386ee23242c7218820fde !== "undefined")
        return c69ba9077056386ee23242c7218820fde;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "center", co);
    c = $ir_contract_oblige_member(c, "blocks", co);
    c69ba9077056386ee23242c7218820fde = c;
    $ir_contract_oblige_member(c, "center", c04f0ab873211cfdea36376604bb18379f());
    $ir_contract_oblige_member(c, "blocks", c3a34e082c24e6e1e3d6df2fbb131820bf());
    return c;
}
var c69ba9077056386ee23242c7218820fde;
if (typeof c69ba9077056386ee23242c7218820fde === "undefined")
    c69ba9077056386ee23242c7218820fde = c69ba9077056386ee23242c7218820fdef();
$ir_obj_def_const(this, "c69ba9077056386ee23242c7218820fdec", c69ba9077056386ee23242c7218820fde, true);
function c7773aab651f02141fc60153c16bd4560f() {
    "World";
    if (typeof c7773aab651f02141fc60153c16bd4560 !== "undefined")
        return c7773aab651f02141fc60153c16bd4560;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "tetra", co);
    c = $ir_contract_oblige_member(c, "blocks", co);
    c7773aab651f02141fc60153c16bd4560 = c;
    $ir_contract_oblige_member(c, "tetra", c69ba9077056386ee23242c7218820fdef());
    $ir_contract_oblige_member(c, "blocks", c3a34e082c24e6e1e3d6df2fbb131820bf());
    return c;
}
var c7773aab651f02141fc60153c16bd4560;
if (typeof c7773aab651f02141fc60153c16bd4560 === "undefined")
    c7773aab651f02141fc60153c16bd4560 = c7773aab651f02141fc60153c16bd4560f();
$ir_obj_def_const(this, "c7773aab651f02141fc60153c16bd4560c", c7773aab651f02141fc60153c16bd4560, true);
/*

  Note: Treating a blockset, BSet (Block Set) as an array
        of blocks, keeping mind not to add duplicates. (*)
        It may be worthwhile to wrap it in a class, or
        there may be some JS stuff for sets already.

*/
var data_1 = require("./data");
var block_1 = require("./block");
var consts_1 = require("./consts");
var BSet;
(function (BSet) {
    // does blockset bs contain b?
    function blocksContains(bs, b) {
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(16,32)");
        $rt_addContract(b, c290d91851cfad63c36229d9ad9ba086bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(16,51)");
        for (var i = 0; i < blocksCount(bs); i++) {
            if (block_1.Block.blocksEqual(b, bs[i]))
                return true;
        }
        return false;
    }
    BSet.blocksContains = blocksContains;
    // is blockset bs1 a subset of blockset 2?
    function isBlocksSubset(bs1, bs2) {
        $rt_addContract(bs1, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(25,25)");
        $rt_addContract(bs2, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(25,45)");
        for (var i = 0; i < blocksCount(bs1); i++) {
            if (!blocksContains(bs2, bs1[i]))
                return false;
        }
        return true;
    }
    // are blocksets bs1 and bs2 equal?
    function blockSetsEqual(bs1, bs2) {
        $rt_addContract(bs1, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(34,32)");
        $rt_addContract(bs2, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(34,52)");
        return isBlocksSubset(bs1, bs2) && isBlocksSubset(bs2, bs1);
    }
    BSet.blockSetsEqual = blockSetsEqual;
    // return bs1 intersect bs2
    function blocksIntersect(bs1, bs2) {
        $rt_addContract(bs1, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(39,33)");
        $rt_addContract(bs2, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(39,53)");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(50,29)");
        return bs.length;
    }
    BSet.blocksCount = blocksCount;
    // move each block in blockset by diven displacement
    function blocksMove(dx, dy, bs) {
        $rt_check(dx, "number");
        $rt_check(dy, "number");
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(55,54)");
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockMove(dx, dy, bs[i]);
        }
    }
    BSet.blocksMove = blocksMove;
    // rotate all blocks ccw
    function blocksRotateCCW(c, bs) {
        $rt_addContract(c, c04f0ab873211cfdea36376604bb18379c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(62,33)");
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(62,48)");
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockRotateCCW(c, bs[i]);
        }
    }
    BSet.blocksRotateCCW = blocksRotateCCW;
    // rotate all blocks cw
    function blocksRotateCW(c, bs) {
        $rt_addContract(c, c04f0ab873211cfdea36376604bb18379c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(69,32)");
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(69,47)");
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = block_1.Block.blockRotateCW(c, bs[i]);
        }
    }
    BSet.blocksRotateCW = blocksRotateCW;
    // change color of all blocks
    // c: Color, bs: BlockSet
    function blocksChangeColor(bs, c) {
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(77,35)");
        $rt_addContract(c, c64668cd20c6065e4f7b603c86e86615cc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(77,54)");
        for (var i = 0; i < blocksCount(bs); i++) {
            bs[i] = { x: bs[i].x, y: bs[i].y, color: data_1.Data.colorCopy(c) };
        }
    }
    BSet.blocksChangeColor = blocksChangeColor;
    // return all blocks in a row
    function blocksRow(bs, i) {
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(84,27)");
        $rt_check(i, "number");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(95,27)");
        $rt_check(i, "number");
        return blocksRow(bs, i).length == consts_1.Consts.boardWidth;
    }
    BSet.isFullRow = isFullRow;
    // are there blocks above the board?
    function isBlocksOverflow(bs) {
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(100,27)");
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].y <= 0)
                return true;
        }
        return false;
    }
    // union two block sets
    function blocksUnion(bs1, bs2) {
        $rt_addContract(bs1, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(109,29)");
        $rt_addContract(bs2, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(109,49)");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(120,28)");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(130,28)");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/bset.ts(140,28)");
        var maxX = blocksCount(bs) == 0 ? 0 : bs[0].x;
        for (var i = 0; i < blocksCount(bs); i++) {
            if (bs[i].x > maxX)
                maxX = bs[i].x;
        }
        return maxX;
    }
    BSet.blocksMaxX = blocksMaxX;
})(BSet = exports.BSet || (exports.BSet = {}));
