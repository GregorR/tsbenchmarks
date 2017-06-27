// Tetras

import * as data from "./data"
import * as block from "./block"
import * as consts from "./consts"
import * as bset from "./bset"

// Tetra Move: move the tetra by the given x and y
function tetraMove( dx : number, dy : number, t : data.Tetra) : void {
  t = { center : { x : t.center.x + dx,
                   y : t.center.y + dy },
        blocks : t.blocks }
  bset.blocksMove( dx, dy, t.blocks)
}

// Rotate all blocks in tetra t ccw
function tetraRotateCCW( t : data.Tetra) : void {
  bset.blocksRotateCCW( t.center, t.blocks)
}

// Rotate all blocks in tetra t cw
function tetraRotateCW( t : data.Tetra) : void {
  bset.blocksRotateCW( t.center, t.blocks)
}

// Stub
function doesTetraOverlapsBlocks( t : data.Tetra, bs : data.Block[]) : boolean {
  return ! bset.blocksIntersect( t.blocks, bs)
}

// Stub
function tetraChangeColor( t : data.Tetra, c : data.Color) : void {
  bset.blocksChangeColor( t.blocks, c)
}

// Stub
function buildTetraBlocks(  color : data.Color, xc : number, yc : number,
                            x1 : number, y1 : number, x2 : number,
                            y2 : number, x3 : number, y3 : number,
                            x4 : number, y4 : number) : data.Tetra {
  var t : data.Tetra = { center: {x: xc, y: yc},
            blocks: [ {x: x1, y: y1, color: color},
                      {x: x2, y: y2, color: color},
                      {x: x3, y: y3, color: color},
                      {x: x4, y: y4, color: color} ] }

  tetraMove( 3, 0, t) //
  return t
}

export {  tetraMove, tetraRotateCW, tetraRotateCCW,
          doesTetraOverlapsBlocks, buildTetraBlocks,
          tetraChangeColor }
