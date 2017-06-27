// the main runner

import * as data from "./data"
import * as bset from "./bset"
import * as aux from "./aux"
import * as world from "./world"

// shhh, its ok, it exists
declare function require(name:string)

// for parsing
const fs = require("fs")
var largeTestFN : string = "./data/tetris-hist-large.rktd"
var smallTestFN : string = "./data/tetris-hist-small.rktd"

function parseFile( fn : string) : string[] {
  var contents : string = fs.readFileSync( fn, 'utf8');
  var regxFFUP : RegExp = new RegExp('[(|)|\"]', 'g')  // to get rid of a lot of crap
  contents = contents.replace(regxFFUP, "") // ^
  var splitContents : string[] = contents.split(new RegExp("[\n|\ ]", 'g'))
  return splitContents
}

// first, need to parse the rktd files

function world0() : data.World {
  return {
    tetra: aux.listPickRandom( aux.tetraBlocks),
    blocks: []
  }
}

function replay( w0 : data.World, hist: string[]) : void {
  for ( var i : number = 0; i < hist.length; i++) {
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
  var w0 : data.World = world0()
  var raw : string[] = parseFile( fileName)

  replay( w0, raw)
}

var now = require("performance-now");
var t0 = now();

main( largeTestFN)
// main( smallTestFN)

var t1 = now();
console.log((t1 - t0).toFixed(6));
