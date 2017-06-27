// auxiliary stuff
import * as data from "./data"
import * as tetras from "./tetras"

// make TS keep its mouth shut
declare function require(name:string)

// random number generator, seeded as in benchmarks
var seedrandom = require('seedrandom')
var rng = seedrandom(43453)

function listPickRandom( ls : data.Tetra[]) : data.Tetra {
  var index : number = Math.floor( rng() * ls.length)
  return ls[ index]
}

var neg1 : number = -1 // why

var tetraBlocks : data.Tetra[] = [
  tetras.buildTetraBlocks({r:0, g: 0, b:0}, 1/2, -3/2, 0, -1, 0, -2, 1, -1, 1, -2),
  tetras.buildTetraBlocks({r:0, g: 0, b:1},   1,   -1, 0, -1, 1, -1, 2, -1, 3, -1),
  tetras.buildTetraBlocks({r:0, g: 1, b:0},   1,   -1, 0, -1, 1, -1, 2, -1, 2, -2),
  tetras.buildTetraBlocks({r:1, g: 0, b:0},   1,   -1, 0, -1, 1, -1, 2, -1, 0, -2),
  tetras.buildTetraBlocks({r:0, g: 1, b:1},   1,   -1, 0, -1, 1, -1, 2, -1, 1, -2),
  tetras.buildTetraBlocks({r:1, g: 1, b:0},   1,   -1, 0, -1, 1, -1, 1, -2, 2, -2),
  tetras.buildTetraBlocks({r:1, g: 0, b:1},   1,   -1, 0, -2, 1, -2, 1, -1, 2, -1)
]

export { listPickRandom, neg1, tetraBlocks }
