// Eliminate Rows

import {Data as data} from "./data"
import {Consts as consts} from "./consts"
import {BSet as bset} from "./bset"

export module Elim {
// helper for elimiateFullRows
function elimRow( bs : data.Block[], i : number, offset : number) : void {
  if (i < 0) {
    // do nothing
    // return []
  }
  else if (bset.isFullRow( bs, i)) {
    elimRow( bs, i-1, offset+1)
  }
  else {
    // [else (blocks-union (elim-row bs (sub1 i) offset)
    //                     (blocks-move 0 offset (blocks-row
    //                                            bs i)))]
    elimRow( bs, i-1, offset)
    bset.blocksMove( 0, offset, bset.blocksRow( bs, i))
  }
}

// eliminate all full rows
export function eliminateFullRows( bs : data.Block[]) : void {
  // console.log("Here. eliminateFullRows") // DEBUG
  elimRow( bs, consts.boardHeight, 0)
}
}
