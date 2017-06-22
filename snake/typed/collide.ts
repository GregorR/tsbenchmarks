// this is equivalent to collide.rkt

// is the snake colliding with any of the walls?

var is_snake_wall_collide() = function( snk: Snake): boolean {
	return is_head_collide( snk.segs.x);
}

var is_head_collide() = function( p: Posn): boolean {
	if ( p.x <= 0 || p.x >= GameConsts.BOARD_WIDTH){
		return true;
	}
	if ( p.y <= 0 || p.y >= GameConsts.BOARD_HEIGHT){
		return true;
	}
	return false;
}