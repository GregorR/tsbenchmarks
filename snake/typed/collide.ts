// this is equivalent to collide.rkt

/// <reference path='DataClasses.ts'/>

import gc = require('./GameConsts');
import * as DC from './DataClasses';

// is the snake colliding with any of the walls?

export function is_snake_wall_collide( snk: DC.Snake): boolean {
	return is_head_collide( snk.segs.x);
}

export function is_head_collide( p: DC.Posn): boolean {
	if ( p.x <= 0 || p.x >= gc.GameConsts.BOARD_WIDTH){
		return true;
	}
	if ( p.y <= 0 || p.y >= gc.GameConsts.BOARD_HEIGHT){
		return true;
	}

	return false;
}

export function is_snake_self_collide( snk: DC.Snake): boolean {
	return is_segs_collide( snk.segs.x, snk.segs.y);
}

export function is_segs_collide( p: DC.Posn, lp: DC.Posn[]): boolean {
	if ( lp.length == 0) {
		return false;
	}

	return (p.equals( lp[ 0]) || is_segs_collide( p, lp.slice( 1, -1)));
}