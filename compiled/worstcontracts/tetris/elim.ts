// Eliminate Rows
import { Data as data } from "./data";
import { Consts as consts } from "./consts";
import { BSet as bset } from "./bset";
export module Elim {
        // helper for elimiateFullRows
        function elimRow(bs: any, i: number, offset: any): void {
            if (i < 0) {
                // do nothing
            }
            else if (bset.isFullRow(bs, i)) {
                elimRow(bs, i - 1, offset + 1);
            }
            else {
                elimRow(bs, i - 1, offset);
                bset.blocksMove(0, offset, bset.blocksRow(bs, i));
            }
        }
        // eliminate all full rows
        export function eliminateFullRows(bs: data.Block[]): void {
            elimRow(bs, consts.boardHeight, 0);
        }
    }
