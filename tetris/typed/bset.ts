/*

  Note: Treating a blockset, BSet (Block Set) as an array
        of blocks, keeping mind not to add duplicates. (*)
        It may be worthwhile to wrap it in a class, or
        there may be some JS stuff for sets already.

*/

import {Data as data} from "./data"
import {Block as block} from "./block"
import {Consts as consts} from "./consts"

export module BSet {
// does blockset bs contain b?
export function blocksContains( bs : data.Block[], b : data.Block) : boolean {
  for (var i : number = 0; i < blocksCount( bs); i++) {
    if (block.blocksEqual( b, bs[i]))
      return true
  }
  return false
}

// is blockset bs1 a subset of blockset 2?
function isBlocksSubset( bs1 : data.Block[], bs2 : data.Block[]) : boolean {
  for (var i : number = 0; i < blocksCount( bs1); i++) {
    if (!blocksContains( bs2, bs1[i]))
      return false
  }
  return true
}

// are blocksets bs1 and bs2 equal?
export function blockSetsEqual( bs1 : data.Block[], bs2 : data.Block[]) : boolean {
  return isBlocksSubset( bs1, bs2) && isBlocksSubset( bs2, bs1)
}

// return bs1 intersect bs2
export function blocksIntersect( bs1 : data.Block[], bs2 : data.Block[]) : data.Block[] {
  let r : data.Block[] = []
  for (var i : number = 0; i < blocksCount( bs1); i++) {
    if( blocksContains( bs2, bs1[i])) {
      r.push( bs1[i])
    }
  }
  return r
}

// how many blocks in blockset
export function blocksCount( bs : data.Block[]) : number {
  return bs.length
}

// move each block in blockset by diven displacement
export function blocksMove( dx : number, dy : number, bs : data.Block[]) : void {
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    bs[i] = block.blockMove( dx, dy, bs[i])
  }
}

// rotate all blocks ccw
export function blocksRotateCCW( c : data.Posn, bs : data.Block[]) : void {
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    bs[i] = block.blockRotateCCW( c, bs[i])
  }
}

// rotate all blocks cw
export function blocksRotateCW( c : data.Posn, bs : data.Block[]) : void {
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    bs[i] = block.blockRotateCW( c, bs[i])
  }
}

// change color of all blocks
// c: Color, bs: BlockSet
export function blocksChangeColor( bs : data.Block[], c : data.Color) : void {
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    bs[i] = {x: bs[i].x, y: bs[i].y, color: data.colorCopy( c)}
  }
}

// return all blocks in a row
export function blocksRow( bs : data.Block[], i : number) : data.Block[] {
  var r : data.Block[] = []
  for ( var k : number = 0; k < blocksCount( bs); k++) {
    if ( bs[k].x == i)
      r.push( bs[k])
  }
  return r
}

// produce true if there are boardWidth number of blocks
// in a row
export function isFullRow( bs : data.Block[], i : number) : boolean {
  return blocksRow( bs, i).length == consts.boardWidth
}

// are there blocks above the board?
function isBlocksOverflow( bs : data.Block[]) : boolean {
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    if (bs[i].y <= 0)
      return true
  }
  return false
}

// union two block sets
export function blocksUnion( bs1 : data.Block[], bs2 : data.Block[]) : data.Block[] {
  var r : data.Block[] = bs1
  for ( var i : number = 0; i < blocksCount( bs2); i++) {
    if (!blocksContains( r, bs2[i])) {
      r.push( bs2[i])
    }
  }
  return r
}

// return max y of board bs, or 0 if bs is empty
export function blocksMaxY( bs : data.Block[]) : number {
  var maxY : number = blocksCount(bs) == 0 ? 0 : bs[0].y
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    if ( bs[i].y > maxY)
      maxY = bs[i].y
  }
  return maxY
}

// return min x of board bs, or boardWidth if bs empty
export function blocksMinX( bs : data.Block[]) : number {
  var minX : number = blocksCount(bs) == 0 ? consts.boardWidth : bs[0].x
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    if ( bs[i].x < minX)
      minX = bs[i].x
  }
  return minX
}

// return max x of board bs, or 0 if bs is empty
export function blocksMaxX( bs : data.Block[]) : number {
  var maxX : number= blocksCount(bs) == 0 ? 0 : bs[0].x
  for ( var i : number = 0; i < blocksCount( bs); i++) {
    if ( bs[i].x > maxX)
      maxX = bs[i].x
  }
  return maxX
}
}
