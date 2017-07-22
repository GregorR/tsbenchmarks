// this is equivalent to main.rkt

/// <reference path='handlers.ts'/>
/// <reference path='motion.ts'/>
/// <reference path='DataClasses.ts'/>

import {GameConsts as gc} from './GameConsts';

import {Motion as Mo} from './motion';
import {Handlers as Ha} from './handlers';
import {DataClasses as DC} from './DataClasses';

export module main {
var replay = function( w0: DC.World, Thist: any[]): void {
	Mo.reset();
	var hist: any[] = Thist.slice();

	while ( hist.length > 0) {

		var curCom: string = hist[ hist.length - 1];

		switch( curCom) {
			case( "(on-tick)"):
				w0 = Mo.world_to_world( w0);
				break;
			case( "(stop-when)"):
				var b: boolean = Ha.is_game_over( w0);
				if( b) {
					return;
				}
				break;
			default: // this should be on-key
				// the string is (on-key "k")
				// the key is the 10th letter
				var theKey: string = curCom[ 9] + "";
				w0 = Ha.handle_key( w0, theKey);
		}

		hist = hist.splice( 0, hist.length - 1);
	}
}

var g: gc.GameConsts;

export function setup() {
	g = new gc.GameConsts();
}

export function main() {
	var w0: DC.World = gc.GameConsts.WORLD;	
	var raw_hist: string[] = gc.GameConsts.plsAr;

	replay( w0, raw_hist); // don't need to reverse bc read backwards in loop
}

export const runs = 1;
}
