// File w Data Definitions

// (struct posn (x y))
class Posn {
  x: number
  y: number
}

function posnCopy( p : Posn) : Posn {
  return {
    x: p.x,
    y: p.y
  }
}

function equalPosns(p1 : Posn, p2 : Posn) : boolean {
  return p1.x == p2.x && p1.y == p2.y
}

// (struct block (x y color))
class Block {
  x: number
  y: number
  color: Color // TODO: not sure here, maybe a triple
}

function blockCopy( b : Block) : Block {
   return {
    x: b.x,
    y: b.y,
    color: {
      r: b.color.r,
      g: b.color.g,
      b: b.color.b
    }
  }
}

function blocksCopy( bs : Block[]) : Block[] {
  var newBlocks : Block[] = []
  for ( var i : number = 0; i < bs.length; i++) {
    newBlocks.push( blockCopy( bs[i]))
  }
  return newBlocks
}

// (struct tetra (center blocks))
class Tetra {
  center: Posn
  blocks: Block[]
}

function tetraCopy( t : Tetra) : Tetra {
  return {
    center: posnCopy( t.center),
    blocks: blocksCopy( t.blocks)
  }
}

// (struct world (tetra blocks))
class World {
  tetra: Tetra
  blocks: Block[]
}

function worldCopy( w : World) : World {
  return {
    tetra: tetraCopy( w.tetra),
    blocks: blocksCopy( w.blocks)
  }
}

// this is b/c I don't think JS has a color library
class Color {
  r: number
  g: number
  b: number
}

function colorCopy( c : Color) : Color {
  return {
    r: c.r,
    g: c.g,
    b: c.b
  }
}

export {  Posn, Block, Tetra, World, equalPosns, Color,
          colorCopy, worldCopy, tetraCopy, blocksCopy,
          blockCopy, posnCopy}
