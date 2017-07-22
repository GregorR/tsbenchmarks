// this is equivalent to motion-helpers.rkt
// i also put the cut-tail method (from cut-tail.rkt) in here too
// since there doesn't really seem to be much point of having it in its own file

/// <reference path='DataClasses.ts'/>

import {DataClasses as DC} from './DataClasses';

export module MotionHelpers {
// compute the next position for head
export function next_head( seg: DC.Posn, dir: DC.Dir): DC.Posn {

	switch( dir) {
		case( DC.Dir.up):
			return new DC.Posn( seg.x, seg.y + 1);
		case( DC.Dir.down):
			return new DC.Posn( seg.x, seg.y - 1);
		case( DC.Dir.left):
			return new DC.Posn( seg.x - 1, seg.y);
		case( DC.Dir.right):
			return new DC.Posn( seg.x + 1, seg.y);
		default: // this should never run
			return seg;
	}
}

// the racket code for this is a hilarious abuse of types
// really, all it's doing (i think) is returning the list sans
// the last position
// but they use a recursive method so i should also use a recursive method
export function cut_tail( segs: DC.Posn[]): DC.Posn[] {
	
	if (segs.length < 2) {
		return [];
	} else {
		return [ segs[0]].concat( cut_tail( segs.splice(1, -1)));
	}
}

// move the snake one step
export function snake_slither( snk: DC.Snake): DC.Snake {
	var d: DC.Dir = snk.dir;

	var newPos: DC.Posn = next_head( snk.segs.x, d);

	var newTail: DC.Posn[] = cut_tail( [snk.segs.x].concat(snk.segs.y));

	return new DC.Snake( d, new DC.Pair<DC.Posn, DC.Posn[]>( newPos, newTail));
}

// grow the snake one segment
export function snake_grow( snk: DC.Snake): DC.Snake {
	var d: DC.Dir = snk.dir;

	var newPos: DC.Posn = next_head( snk.segs.x, d);

	var newTail: DC.Posn[] = [snk.segs.x].concat(snk.segs.y);

	var newSnk: DC.Snake = new DC.Snake( d, new DC.Pair<DC.Posn, DC.Posn[]>( newPos, newTail));

	return newSnk;
}
}
