// the game file
import { Data as data } from "./data";
import { BSet as bset } from "./bset";
import { Tetras as tetras } from "./tetras";
import { Aux as aux } from "./aux";
import { Elim as elim } from "./elim";
import { Consts as consts } from "./consts";
export module World {
        // this changes w
        // add the current tetra's blocks onto the world's block list
        function touchdown(w: any): void {
            // pick a random tetra
            var randomTetra: data.Tetra = aux.listPickRandom(aux.tetraBlocks);
            w.tetra = randomTetra;
            var newBlocks: any = bset.blocksUnion(w.tetra.blocks, w.blocks);
            elim.eliminateFullRows(newBlocks);
            w.blocks = newBlocks;
        }
        // has the current tetra landed on any blocks?
        // need to make a tmp tetra for this
        function didLandedOnBlocks(w: data.World): boolean {
            var tmpTetra: data.Tetra = data.tetraCopy(w.tetra);
            tetras.tetraMove(0, 1, tmpTetra);
            return tetras.doesTetraOverlapsBlocks(tmpTetra, w.blocks);
        }
        function didLandedOnFloor(w: data.World): boolean {
            return bset.blocksMaxY(w.tetra.blocks) == (consts.boardHeight - 1);
        }
        function didLanded(w: data.World): boolean {
            return didLandedOnFloor(w) || didLandedOnBlocks(w);
        }
        // take current tetra and move it down until it lands
        function worldJumpDown(w: data.World): void {
            if (didLanded(w)) {
                // do nothing
            }
            else {
                // move tetra down, and go to town
                // i.e. move tetra down and continue
                tetras.tetraMove(0, 1, w.tetra);
                worldJumpDown(w);
            }
        }
        export function nextWorld(w: data.World): void {
            if (didLanded(w)) {
                touchdown(w);
            }
            else {
                tetras.tetraMove(0, 1, w.tetra);
            }
        }
        function tryNewTetra(w: any, newTetra: any): void {
            if (bset.blocksMinX(newTetra.blocks) < 0 ||
                bset.blocksMaxX(newTetra.blocks) >= consts.boardWidth ||
                tetras.doesTetraOverlapsBlocks(newTetra, w.blocks)) {
                // do nothing
            }
            else {
                // update world's tetra
                w.tetra = newTetra;
            }
        }
        // move w.tetra by dx, dy, but only if you can
        function worldMove(dx: any, dy: number, w: data.World): void {
            var tmpTetra: data.Tetra = data.tetraCopy(w.tetra);
            tetras.tetraMove(dx, dy, tmpTetra);
            tryNewTetra(w, tmpTetra);
        }
        // try to rotate ccw
        function worldRotateCCW(w: data.World): void {
            var tmpTetra: data.Tetra = data.tetraCopy(w.tetra);
            tetras.tetraRotateCCW(tmpTetra);
            tryNewTetra(w, tmpTetra);
        }
        function worldRotateCW(w: data.World): void {
            var tmpTetra: data.Tetra = data.tetraCopy(w.tetra);
            tetras.tetraRotateCW(tmpTetra);
            tryNewTetra(w, tmpTetra);
        }
        export function ghostBlocks(w: data.World): data.Tetra {
            var tmpTetra: data.Tetra = data.tetraCopy(w.tetra);
            tetras.tetraChangeColor(tmpTetra, { r: 1, g: 1, b: 1 });
            // ok. make a copy of the world, too, then move ghost
            // tetra down in it, snag it, and return it
            var tmpWorld: any = data.worldCopy(w);
            tmpWorld.tetra = tmpTetra;
            worldJumpDown(tmpWorld);
            return tmpWorld.tetra;
        }
        export function worldKeyMove(w: data.World, k: any): void {
            switch (k) {
                case "left": {
                    worldMove(aux.neg1, 0, w);
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
    }
