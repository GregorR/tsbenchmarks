// this is equivalent to motion-helpers.rkt
// i also put the cut-tail method (from cut-tail.rkt) in here too
// since there doesn't really seem to be much point of having it in its own file

/// <reference path='DataClasses.ts'/>

// compute the next position for head
var next_head = function( seg: Posn, dir: Dir): Posn {

	switch( dir) {
		case( Dir.up):
			return new Posn( seg.x, seg.y + 1);
		case( Dir.down):
			return new Posn( seg.x, seg.y - 1);
		case( Dir.left):
			return new Posn( seg.x - 1, seg.y);
		case( Dir.right):
			return new Posn( seg.x + 1, seg.y);
		default: // this should never run
			return seg;
	}
}

// the racket code for this is a hilarious abuse of types
// really, all it's doing (i think) is returning the list sans
// the last position
// but they use a recursive method so i should also use a recursive method
var cut_tail = function( segs: Posn[]): Posn[] {
	
	if (segs.length <= 2) {
		return [];
	} else {
		return [ segs[0]].concat( cut_tail( segs.splice(1, -1)));
	}
}

// move the snake one step
var snake_slither = function( snk: Snake): Snake {
	var d: Dir = snk.dir;

	var newPos: Posn = next_head( snk.segs.x, d);

	var newTail: Posn[] = cut_tail( [snk.segs.x].concat(snk.segs.y));

	return new Snake( d, new Pair<Posn, Posn[]>( newPos, newTail));
}

// grow the snake one segment
var snake_grow = function( snk: Snake): Snake {
	var d: Dir = snk.dir;

	var newPos: Posn = next_head( snk.segs.x, d);

	var newTail: Posn[] = [snk.segs.x].concat(snk.segs.y);

	return new Snake( d, new Pair<Posn, Posn[]>( newPos, newTail));
}

