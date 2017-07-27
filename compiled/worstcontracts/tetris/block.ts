import { Data as data } from "./data";
export module Block {
        export function blocksEqual(b1: any, b2: data.Block): boolean {
            return b1.x == b2.x && b1.y == b2.y;
        }
        export function blockMove(dx: number, dy: number, b: data.Block): any {
            return { x: b.x + dx,
                y: b.y + dy,
                color: b.color };
        }
        export function blockRotateCCW(c: data.Posn, b: data.Block): data.Block {
            return { x: c.x + (c.y - b.y),
                y: c.y + (b.x - c.x),
                color: b.color };
        }
        export function blockRotateCW(c: data.Posn, b: data.Block): data.Block {
            return blockRotateCCW(c, blockRotateCCW(c, blockRotateCCW(c, b)));
        }
    }
