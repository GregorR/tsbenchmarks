// the main runner

import * as data from "./data"
import * as bset from "./bset"
import * as aux from "./aux"
import * as world from "./world"

// shhh, its ok, it exists
declare function require(name:string)

// for parsing
const fs = require("fs")
var largeTestFN = "./data/tetris-hist-large.rktd"
var smallTestFN = "./data/tetris-hist-small.rktd"

function parseFile( fn) {
  var contents = fs.readFileSync( fn, 'utf8');
  var regxFFUP = new RegExp('[(|)|\"]', 'g')  // to get rid of a lot of crap
  contents = contents.replace(regxFFUP, "") // ^
  var splitContents = contents.split(new RegExp("[\n|\ ]", 'g'))
  return splitContents
}

// first, need to parse the rktd files

function world0() {
  return {
    tetra: aux.listPickRandom( aux.tetraBlocks),
    blocks: []
  }
}

function replay( w0, hist) {
  for ( var i = 0; i < hist.length; i++) {
    switch (hist[i]) {
      case "on-tick": {
        world.nextWorld( w0)
        break
      }
      case "stop-when": {
        // do nothing
        break
      }
      default: {
        // deal w key
        world.worldKeyMove( w0, hist[i])
        break
      }
    }
  }
}

function main( fileName) {
  var w0 = world0()
  var raw = parseFile( fileName)

  replay( w0, raw)

}

main( largeTestFN)
// main( smallTestFN)
