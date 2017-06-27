"use strict";
// this is equivalent to main.rkt
exports.__esModule = true;
/// <reference path='handlers.ts'/>
/// <reference path='motion.ts'/>
/// <reference path='DataClasses.ts'/>
var gc = require("./GameConsts");
var Mo = require("./motion");
var Ha = require("./handlers");
var replay = function (w0, Thist) {
    Mo.reset();
    var hist = Thist.slice();
    while (hist.length > 0) {
        // console.log( w0.snake.segs.y.length);
        var curCom = hist[hist.length - 1];
        switch (curCom) {
            case ("(on-tick)"):
                w0 = Mo.world_to_world(w0);
                break;
            case ("(stop-when)"):
                var b = Ha.is_game_over(w0);
                if (b) {
                    // console.log("YOOO");
                    return;
                }
                break;
            default:
                // the string is (on-key "k")
                // the key is the 10th letter
                var theKey = curCom[9] + "";
                w0 = Ha.handle_key(w0, theKey);
        }
        hist = hist.splice(0, hist.length - 1);
    }
};
var main = function () {
    var g = new gc.GameConsts();
    var w0 = gc.GameConsts.WORLD;
    var raw_hist = gc.GameConsts.plsAr;
    //console.log("HOLY BOI");
    for (var i = 0; i < 100; i++) {
        // console.log(raw_hist.length);
        //console.log( "Here!");
        //console.log( raw_hist.length);
        replay(w0, raw_hist); // don't need to reverse bc read backwards in loop
        //console.log( w0);
    }
};
var now = require("performance-now");
var t0 = now();
main();
var t1 = now();
console.log("Call took " + (t1 - t0).toFixed(3) + " milliseconds.");