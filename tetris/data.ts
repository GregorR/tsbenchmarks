// File w Data Definitions

// (struct posn (x y))
class Posn {
  x: number
  y: number
}

function equalPosns(p1, p2) {
  return p1.x == p2.x && p1.y == p2.y
}

// (struct block (x y color))
class Block {
  x: number
  y: number
  color: number[] // TODO: not sure here, maybe a triple
}

// (struct tetra (center blocks))
class Tetra {
  center: Posn
  blocks: Block[]
}

// (struct world (tetra blocks))
class World {
  tetra: Tetra
  blocks: Block[]
}

// this is b/c I don't think JS has a color library
class Color {
  r: number
  g: number
  b: number

  setColor = function(rn, gn, bn) {
    this.r = rn
    this.g = gn
    this.b = bn
  }

  getColor = function() {
    return [this.r, this.b, this.g]
  }
}

export { Posn, Block, Tetra, World, equalPosns, Color }
