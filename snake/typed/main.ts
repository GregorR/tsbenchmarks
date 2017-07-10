// this is equivalent to main.rkt

/// <reference path='handlers.ts'/>
/// <reference path='motion.ts'/>
/// <reference path='DataClasses.ts'/>

import gc = require('./GameConsts');

import * as Mo from './motion';
import * as Ha from './handlers';
import * as DC from './DataClasses';

var replay = function( w0: DC.World, Thist: any[]): void {
	Mo.reset();
	var hist: any[] = Thist.slice();

	while ( hist.length > 0) {

		// console.log( w0.snake.segs.y.length);

		var curCom: string = hist[ hist.length - 1];

		switch( curCom) {
			case( "(on-tick)"):
				w0 = Mo.world_to_world( w0);
				break;
			case( "(stop-when)"):
				var b: boolean = Ha.is_game_over( w0);
				if( b) {
					// console.log("YOOO");
					return;
				}
				break;
			default: // this should be on-key
				// the string is (on-key "k")
				// the key is the 10th letter
				var theKey: string = curCom[ 9] + "";
				w0 = Ha.handle_key( w0, theKey);
				// console.log(theKey);
		}

		hist = hist.splice( 0, hist.length - 1);
	}
}

var main = function() {

	var g: gc.GameConsts = new gc.GameConsts();

	var w0: DC.World = gc.GameConsts.WORLD;	
	var raw_hist: string[] = gc.GameConsts.plsAr;

	//console.log("HOLY BOI");
	for( var i: number = 0; i < 100; i ++) {
		// console.log(raw_hist.length);
		//console.log( "Here!");
		//console.log( raw_hist.length);
		replay( w0, raw_hist); // don't need to reverse bc read backwards in loop
		//console.log( w0);
	}
}

main();
