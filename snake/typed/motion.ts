// this is equivalent to motion.rkt

/// <reference path='DataClasses.ts'/>
/// <reference path='motion_helpers.ts'/>

// import mh = require('./motion_helpers');
import gc = require('./GameConsts');
import * as MH from './motion_helpers';
import * as DC from './DataClasses';

// declare var require: NodeRequire;
import gen = require('random-seed');
var pls;

export function reset(): void {
	pls = new gen( 1324);
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
