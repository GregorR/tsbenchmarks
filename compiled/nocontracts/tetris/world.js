// the game file
"use strict";
exports.__esModule = true;
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
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraMove(0, 1, tmpTetra);
        return tetras_1.Tetras.doesTetraOverlapsBlocks(tmpTetra, w.blocks);
    }
    function didLandedOnFloor(w) {
        return bset_1.BSet.blocksMaxY(w.tetra.blocks) == (consts_1.Consts.boardHeight - 1);
    }
    function didLanded(w) {
        return didLandedOnFloor(w) || didLandedOnBlocks(w);
    }
    // take current tetra and move it down until it lands
    function worldJumpDown(w) {
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
        if (didLanded(w)) {
            touchdown(w);
        }
        else {
            tetras_1.Tetras.tetraMove(0, 1, w.tetra);
        }
    }
    World.nextWorld = nextWorld;
    function tryNewTetra(w, newTetra) {
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
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraMove(dx, dy, tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    // try to rotate ccw
    function worldRotateCCW(w) {
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraRotateCCW(tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    function worldRotateCW(w) {
        var tmpTetra = data_1.Data.tetraCopy(w.tetra);
        tetras_1.Tetras.tetraRotateCW(tmpTetra);
        tryNewTetra(w, tmpTetra);
    }
    function ghostBlocks(w) {
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
