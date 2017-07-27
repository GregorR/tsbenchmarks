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
function c92ce9822a9992ffa5880a38deccd6e7df() {
    "RandGen";
    if (typeof c92ce9822a9992ffa5880a38deccd6e7d !== "undefined")
        return c92ce9822a9992ffa5880a38deccd6e7d;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "seed", co);
    c92ce9822a9992ffa5880a38deccd6e7d = c;
    $ir_contract_oblige_member(c, "seed", c151a835ceacdb11090d1960ae92771fe);
    return c;
}
var c92ce9822a9992ffa5880a38deccd6e7d;
if (typeof c92ce9822a9992ffa5880a38deccd6e7d === "undefined")
    c92ce9822a9992ffa5880a38deccd6e7d = c92ce9822a9992ffa5880a38deccd6e7df();
$ir_obj_def_const(this, "c92ce9822a9992ffa5880a38deccd6e7dc", c92ce9822a9992ffa5880a38deccd6e7d, true);
function cbc1575c98a59fba705e5c25273a47c41f() {
    "Array";
    if (typeof cbc1575c98a59fba705e5c25273a47c41 !== "undefined")
        return cbc1575c98a59fba705e5c25273a47c41;
    var co = $ir_contract_for("object");
    var c = co;
    c = $ir_contract_oblige_member(c, "length", co);
    c = $ir_contract_oblige_array(c, co);
    cbc1575c98a59fba705e5c25273a47c41 = c;
    $ir_contract_oblige_member(c, "length", c151a835ceacdb11090d1960ae92771fe);
    c = $ir_contract_oblige_array(c, c69ba9077056386ee23242c7218820fdef());
    return c;
}
var cbc1575c98a59fba705e5c25273a47c41;
if (typeof cbc1575c98a59fba705e5c25273a47c41 === "undefined")
    cbc1575c98a59fba705e5c25273a47c41 = cbc1575c98a59fba705e5c25273a47c41f();
$ir_obj_def_const(this, "cbc1575c98a59fba705e5c25273a47c41c", cbc1575c98a59fba705e5c25273a47c41, true);
// the game file
var data_1 = require("./data");
var bset_1 = require("./bset");
var tetras_1 = require("./tetras");
var aux_1 = require("./aux");
var elim_1 = require("./elim");
var consts_1 = require("./consts");
var World;
(function (World) {
    // this changes w
    // add the current tetra's blocks onto the world's block list
    function touchdown(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(13,20)");
        // pick a random tetra
        var randomTetra = aux_1.Aux.listPickRandom(aux_1.Aux.tetraBlocks);
        w.tetra = randomTetra;
        var newBlocks = bset_1.BSet.blocksUnion(w.tetra.blocks, w.blocks);
        elim_1.Elim.eliminateFullRows(newBlocks);
        w.blocks = newBlocks;
    }
    // has the current tetra landed on any blocks?
    // need to make a tmp tetra for this
    function didLandedOnBlocks(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(27,28)");
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraMove(0, 1, tmpTetra);
        return tetras_1.Tetras.doesTetraOverlapsBlocks(tmpTetra, w.blocks);
    }
    function didLandedOnFloor(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(33,27)");
        return bset_1.BSet.blocksMaxY(w.tetra.blocks) == (consts_1.Consts.boardHeight - 1);
    }
    function didLanded(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(37,20)");
        return didLandedOnFloor(w) || didLandedOnBlocks(w);
    }
    // take current tetra and move it down until it lands
    function worldJumpDown(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(42,24)");
        if (didLanded(w)) {
            // do nothing
        }
        else {
            // move tetra down, and go to town
            // i.e. move tetra down and continue
            tetras_1.Tetras.tetraMove(0, 1, w.tetra);
            worldJumpDown(w);
        }
    }
    function nextWorld(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(53,27)");
        if (didLanded(w)) {
            touchdown(w);
        }
        else {
            tetras_1.Tetras.tetraMove(0, 1, w.tetra);
        }
    }
    World.nextWorld = nextWorld;
    function tryNewTetra(w, newTetra) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(61,22)");
        $rt_addContract(newTetra, c69ba9077056386ee23242c7218820fdec, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(61,38)");
        if (bset_1.BSet.blocksMinX(newTetra.blocks) < 0 ||
            bset_1.BSet.blocksMaxX(newTetra.blocks) >= consts_1.Consts.boardWidth ||
            tetras_1.Tetras.doesTetraOverlapsBlocks(newTetra, w.blocks)) {
            // do nothing
        }
        else {
            // update world's tetra
            w.tetra = newTetra;
        }
    }
    // move w.tetra by dx, dy, but only if you can
    function worldMove(dx, dy, w) {
        $rt_check(dx, "number");
        $rt_check(dy, "number");
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(75,46)");
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraMove(dx, dy, tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    // try to rotate ccw
    function worldRotateCCW(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(82,25)");
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraRotateCCW(tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    function worldRotateCW(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(88,24)");
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraRotateCW(tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    function ghostBlocks(w) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(94,29)");
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraChangeColor(tmpTetra, { r: 1, g: 1, b: 1 });
        // ok. make a copy of the world, too, then move ghost
        // tetra down in it, snag it, and return it
        var tmpWorld = data_1.Data.worldCopy(w);
        tmpWorld.tetra = tmpTetra;
        worldJumpDown(tmpWorld);
        return tmpWorld.tetra;
    }
    World.ghostBlocks = ghostBlocks;
    function worldKeyMove(w, k) {
        $rt_addContract(w, c7773aab651f02141fc60153c16bd4560c, "/home/gkrichar/research/projects/ongoing/vm-gradual-typing/tsbenchmarks/tetris/typed/world.ts(107,30)");
        $rt_check(k, "string");
        switch (k) {
            case "left": {
                worldMove(aux_1.Aux.neg1, 0, w);
                break;
            }
            case "right": {
                worldMove(1, 0, w);
                break;
            }
            case "down": {
                worldJumpDown(w);
                break;
            }
            case "a": {
                worldRotateCCW(w);
                break;
            }
            case "s": {
                worldRotateCW(w);
                break;
            }
            default: {
                // do nothing
                break;
            }
        }
    }
    World.worldKeyMove = worldKeyMove;
})(World = exports.World || (exports.World = {}));
