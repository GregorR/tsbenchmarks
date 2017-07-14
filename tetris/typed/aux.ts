// auxiliary stuff
import {Data as data} from "./data"
import {Tetras as tetras} from "./tetras"

export module Aux {
// random number generator, seeded as in benchmarks
class RandGen {

	seed: number;

	constructor( s: number) {
		this.setSeed( s);
	}

	public setSeed(s: number): void {
		this.seed = s % 2147483647;

		if (this.seed <= 0) {
			this.seed += 2147483646;
		}

		this.random();
	}

	/**
	 * Returns a pseudo-random value in range [0, 1).
	 */
	public random(): number {
		this.seed = (this.seed * 16807) % 2147483647;
		return ((this.seed - 1.0) / 2147483646.0);
	}

}

export function listPickRandom( ls : data.Tetra[]) : data.Tetra {
  var randGen : RandGen = new RandGen( 43453)
  var index : number = Math.floor( randGen.random() * ls.length)
  return ls[ index]
}

export var neg1 : number = -1 // why

export var tetraBlocks : data.Tetra[] = [
  tetras.buildTetraBlocks({r:0, g: 0, b:0}, 1/2, -3/2, 0, -1, 0, -2, 1, -1, 1, -2),
  tetras.buildTetraBlocks({r:0, g: 0, b:1},   1,   -1, 0, -1, 1, -1, 2, -1, 3, -1),
  tetras.buildTetraBlocks({r:0, g: 1, b:0},   1,   -1, 0, -1, 1, -1, 2, -1, 2, -2),
  tetras.buildTetraBlocks({r:1, g: 0, b:0},   1,   -1, 0, -1, 1, -1, 2, -1, 0, -2),
  tetras.buildTetraBlocks({r:0, g: 1, b:1},   1,   -1, 0, -1, 1, -1, 2, -1, 1, -2),
  tetras.buildTetraBlocks({r:1, g: 1, b:0},   1,   -1, 0, -1, 1, -1, 1, -2, 2, -2),
  tetras.buildTetraBlocks({r:1, g: 0, b:1},   1,   -1, 0, -2, 1, -2, 1, -1, 2, -1)
]
}
