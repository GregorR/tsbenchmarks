// this is equivalent to collide.rkt

/// <reference path='DataClasses.ts'/>
/// <reference path='GameConsts.ts'/>

// is the snake colliding with any of the walls?

var is_snake_wall_collide = function( snk: Snake): boolean {
	return is_head_collide( snk.segs.x);
}

var is_head_collide = function( p: Posn): boolean {
	if ( p.x <= 0 || p.x >= GameConsts.BOARD_WIDTH){
		return true;
	}
	if ( p.y <= 0 || p.y >= GameConsts.BOARD_HEIGHT){
		return true;
	}

	return false;
}

var is_snake_self_collide = function( snk: Snake): boolean {
	return is_segs_collide( snk.segs.x, snk.segs.y);
}

var is_segs_collide = function( p: Posn, lp: Posn[]): boolean {
	if ( lp.length == 0) {
		return false;
	}

	return (p.equals( lp[ 0]) || is_segs_collide( p, lp.slice( 1, -1)));
}