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
// File w Data Definitions
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
        $rt_addContract(p, c04f0ab873211cfdea36376604bb18379c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(10,26)");
        return {
            x: p.x,
            y: p.y
        };
    }
    Data.posnCopy = posnCopy;
    function equalPosns(p1, p2) {
        $rt_addContract(p1, c04f0ab873211cfdea36376604bb18379c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(17,28)");
        $rt_addContract(p2, c04f0ab873211cfdea36376604bb18379c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(17,38)");
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
        $rt_addContract(b, c290d91851cfad63c36229d9ad9ba086bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(28,27)");
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
        $rt_addContract(bs, c3a34e082c24e6e1e3d6df2fbb131820bc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(40,28)");
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
        $rt_addContract(t, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(54,27)");
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
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(67,27)");
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
        $rt_addContract(c, c64668cd20c6065e4f7b603c86e86615cc, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/data.ts(80,27)");
        return {
            r: c.r,
            g: c.g,
            b: c.b
        };
    }
    Data.colorCopy = colorCopy;
})(Data = exports.Data || (exports.Data = {}));
