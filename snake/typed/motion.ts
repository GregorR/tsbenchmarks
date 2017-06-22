// this is equivalent to motion.rkt

var gen = require('random-seed');
var pls;

var reset = function(): void {
	pls = new gen( 1324);
}


var world_to_world = function( w: World): World {
	if ( is_eating( w)) {
		return snake_eat( w);
	} else {
		return new World( snake_slither( w.snake), w.food));
	}
}

// is the snake eating the food in the world?
var is_eating = function( w: World): boolean {
	return (w.food).equals( w.snake.segs.x);
}

// change the direction of the snake
var snake_change_direction = function( snk: Snake, dir: Dir): Snake {
	return new Snake( dir, snk.segs);
}

// change the direction of the world
var world_change_direction = function( w: World, dir: Dir): World {
	return new World( snake_change_direction( w.snake, dir), w.food);
}

// eat the food and generate a new one
var snake_eat = function( w: World): World {
	var i: number = Math.floor( pls.random() * GameConsts.BOARD_WIDTH);
	var j: number = Math.floor( pls.random() * GameConsts.BOARD_HEIGHT);

	return new World( snake_grow( w.snake), new Posn( i, j));
}
