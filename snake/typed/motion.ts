// this is equivalent to motion.rkt

/// <reference path='DataClasses.ts'/>
/// <reference path='motion_helpers.ts'/>

import {GameConsts as gc} from './GameConsts';
import {MotionHelpers as MH} from './motion_helpers';
import {DataClasses as DC} from './DataClasses';

export module Motion {
var pls: RandGen; // random number generator

/**
 * Modified from from https://gist.github.com/blixt/f17b47c62508be59987b
 *
 *
 * Creates a pseudo-random value generator. The seed must be an integer.
 *
 * Uses an optimized version of the Park-Miller PRNG.
 * http://www.firstpr.com.au/dsp/rand31/
 */

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

};

// back to my code

export function reset(): void {
	pls = new RandGen( 1324);
	// pls = new gen(1324);
}


export function world_to_world( w: DC.World): DC.World {
	if ( is_eating( w)) {
		return snake_eat( w);
	} else {
		return new DC.World( MH.snake_slither( w.snake), w.food);
	}
}

// is the snake eating the food in the world?
export function is_eating( w: DC.World): boolean {
	return (w.food).equals( w.snake.segs.x);
}

// change the direction of the snake
export function snake_change_direction( snk: DC.Snake, dir: DC.Dir): DC.Snake {
	return new DC.Snake( dir, snk.segs);
}

// change the direction of the world
export function world_change_direction( w: DC.World, dir: DC.Dir): DC.World {
	return new DC.World( snake_change_direction( w.snake, dir), w.food);
}

// eat the food and generate a new one
export function snake_eat( w: DC.World): DC.World {
	var i: number = Math.floor( pls.random() * gc.GameConsts.BOARD_WIDTH);
	var j: number = Math.floor( pls.random() * gc.GameConsts.BOARD_HEIGHT);

	return new DC.World( MH.snake_grow( w.snake), new DC.Posn( i, j));
}
}
