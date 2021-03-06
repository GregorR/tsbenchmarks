import * as data from "./data";

function blocksEqual( b1, b2) {
  return b1.x == b2.x && b1.y == b2.y
}

function blockMove( dx, dy, b) {
  return {  x:b.x + dx,
            y:b.y + dy,
            color: b.color }
}

function blockRotateCCW( c, b) {
  return { x: c.x + (c.y - b.y),
           y: c.y + (b.x - c.x),
           color: b.color }
}

function blockRotateCW( c, b) {
  return blockRotateCCW( c, blockRotateCCW( c, blockRotateCCW(c, b)))
}

export { blocksEqual, blockMove, blockRotateCCW, blockRotateCW }
