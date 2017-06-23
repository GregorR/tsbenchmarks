// this is equivalent to handlers.rkt

/// <reference path='DataClasses.ts'/>
/// <reference path='collide.ts'/>
/// <reference path='motion.ts'/>

import * as Col from './collide';
import * as Mo from './motion';
import * as DC from './DataClasses';

export function handle_key( w: DC.World, ke: string): DC.World {
	switch( ke) {
		case( "w"):
			return Mo.world_change_direction( w, DC.Dir.up);
		case( "s"):
			return Mo.world_change_direction( w, DC.Dir.down);
		case( "a"):
			return Mo.world_change_direction( w, DC.Dir.left);
		case( "d"):
			return Mo.world_change_direction( w, DC.Dir.right);
		default:
			return w;
	}
}

export function is_game_over( w: DC.World): boolean {
	return (( Col.is_snake_wall_collide( w.snake)) || ( Col.is_snake_self_collide( w.snake)))
}