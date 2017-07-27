// this is equivalent to main.rkt
"use strict";
exports.__esModule = true;
/// <reference path='handlers.ts'/>
/// <reference path='motion.ts'/>
/// <reference path='DataClasses.ts'/>
var GameConsts_1 = require("./GameConsts");
var motion_1 = require("./motion");
var handlers_1 = require("./handlers");
var main;
(function (main_1) {
    var replay = function (w0, Thist) {
        motion_1.Motion.reset();
        var hist = Thist.slice();
        while (hist.length > 0) {
            var curCom = hist[hist.length - 1];
            switch (curCom) {
                case ("(on-tick)"):
                    w0 = motion_1.Motion.world_to_world(w0);
                    break;
                case ("(stop-when)"):
                    var b = handlers_1.Handlers.is_game_over(w0);
                    if (b) {
                        return;
                    }
                    break;
                default:
                    // the string is (on-key "k")
                    // the key is the 10th letter
                    var theKey = curCom[9] + "";
                    w0 = handlers_1.Handlers.handle_key(w0, theKey);
            }
            hist = hist.splice(0, hist.length - 1);
        }
    };
    var g;
    function setup() {
        g = new GameConsts_1.GameConsts.GameConsts();
    }
    main_1.setup = setup;
    function main() {
        var w0 = GameConsts_1.GameConsts.GameConsts.WORLD;
        var raw_hist = GameConsts_1.GameConsts.GameConsts.plsAr;
        replay(w0, raw_hist); // don't need to reverse bc read backwards in loop
    }
    main_1.main = main;
    main_1.runs = 1;
})(main = exports.main || (exports.main = {}));
