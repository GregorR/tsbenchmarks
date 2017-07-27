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
var bset_1 = require("./bset");
var Tetras;
(function (Tetras) {
    // Tetra Move: move the tetra by the given x and y
    function tetraMove(dx, dy, t) {
        $rt_check(dy, "number");
        t = { center: { x: t.center.x + dx,
                y: t.center.y + dy },
            blocks: t.blocks };
        bset_1.BSet.blocksMove(dx, dy, t.blocks);
    }
    Tetras.tetraMove = tetraMove;
    // Rotate all blocks in tetra t ccw
    function tetraRotateCCW(t) {
        $rt_addContract(t, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(15,40)");
        bset_1.BSet.blocksRotateCCW(t.center, t.blocks);
    }
    Tetras.tetraRotateCCW = tetraRotateCCW;
    // Rotate all blocks in tetra t cw
    function tetraRotateCW(t) {
        $rt_addContract(t, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(19,39)");
        bset_1.BSet.blocksRotateCW(t.center, t.blocks);
    }
    Tetras.tetraRotateCW = tetraRotateCW;
    // Stub
    function doesTetraOverlapsBlocks(t, bs) {
        $rt_addContract(t, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(23,49)");
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(23,63)");
        return !bset_1.BSet.blocksIntersect(t.blocks, bs);
    }
    Tetras.doesTetraOverlapsBlocks = doesTetraOverlapsBlocks;
    // Stub
    function tetraChangeColor(t, c) {
        $rt_addContract(t, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(27,42)");
        $rt_addContract(c, c64668cd20c6065e4f7b603c86e86615cc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(27,56)");
        bset_1.BSet.blocksChangeColor(t.blocks, c);
    }
    Tetras.tetraChangeColor = tetraChangeColor;
    // Stub
    function buildTetraBlocks(color, xc, yc, x1, y1, x2, y2, x3, y3, x4, y4) {
        $rt_addContract(color, c64668cd20c6065e4f7b603c86e86615cc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/compiled/worstcontracts/tetris/tetras.ts(31,42)");
        $rt_check(x1, "number");
        $rt_check(x2, "number");
        $rt_check(y2, "number");
        $rt_check(x3, "number");
        $rt_check(y3, "number");
        $rt_check(x4, "number");
        $rt_check(y4, "number");
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
