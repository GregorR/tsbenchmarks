// File w Data Definitions
// File w Data Definitions
export module Data {
        // (struct posn (x y))
        export class Posn {
            x: number;
            y: number;
        }
        export function posnCopy(p: any): Posn {
            return {
                x: p.x,
                y: p.y
            };
        }
        export function equalPosns(p1: any, p2: Posn): boolean {
            return p1.x == p2.x && p1.y == p2.y;
        }
        // (struct block (x y color))
        export class Block {
            x: number;
            y: number;
            color: Color;
        }
        export function blockCopy(b: Block): Block {
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
        export function blocksCopy(bs: Block[]): Block[] {
            var newBlocks: Block[] = [];
            for (var i: number = 0; i < bs.length; i++) {
                newBlocks.push(blockCopy(bs[i]));
            }
            return newBlocks;
        }
        // (struct tetra (center blocks))
        export class Tetra {
            center: Posn;
            blocks: Block[];
        }
        export function tetraCopy(t: Tetra): Tetra {
            return {
                center: posnCopy(t.center),
                blocks: blocksCopy(t.blocks)
            };
        }
        // (struct world (tetra blocks))
        export class World {
            tetra: Tetra;
            blocks: Block[];
        }
        export function worldCopy(w: World): World {
            return {
                tetra: tetraCopy(w.tetra),
                blocks: blocksCopy(w.blocks)
            };
        }
        export class Color {
            r: number;
            g: number;
            b: number;
        }
        export function colorCopy(c: any): Color {
            return {
                r: c.r,
                g: c.g,
                b: c.b
            };
        }
    }
