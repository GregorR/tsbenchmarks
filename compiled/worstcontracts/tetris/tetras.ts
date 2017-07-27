// Tetras
import { Data as data } from "./data";
import { Block as block } from "./block";
import { Consts as consts } from "./consts";
import { BSet as bset } from "./bset";
export module Tetras {
        // Tetra Move: move the tetra by the given x and y
        export function tetraMove(dx: any, dy: number, t: any): void {
            t = { center: { x: t.center.x + dx,
                    y: t.center.y + dy },
                blocks: t.blocks };
            bset.blocksMove(dx, dy, t.blocks);
        }
        // Rotate all blocks in tetra t ccw
        export function tetraRotateCCW(t: data.Tetra): void {
            bset.blocksRotateCCW(t.center, t.blocks);
        }
        // Rotate all blocks in tetra t cw
        export function tetraRotateCW(t: data.Tetra): void {
            bset.blocksRotateCW(t.center, t.blocks);
        }
        // Stub
        export function doesTetraOverlapsBlocks(t: data.Tetra, bs: data.Block[]): boolean {
            return !bset.blocksIntersect(t.blocks, bs);
        }
        // Stub
        export function tetraChangeColor(t: data.Tetra, c: data.Color): void {
            bset.blocksChangeColor(t.blocks, c);
        }
        // Stub
        export function buildTetraBlocks(color: data.Color, xc: any, yc: any, x1: number, y1: any, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): data.Tetra {
            var t: data.Tetra = { center: { x: xc, y: yc },
                blocks: [{ x: x1, y: y1, color: color },
                    { x: x2, y: y2, color: color },
                    { x: x3, y: y3, color: color },
                    { x: x4, y: y4, color: color }] };
            tetraMove(3, 0, t); //
            return t;
        }
    }
