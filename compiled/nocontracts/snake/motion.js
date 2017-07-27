// this is equivalent to motion.rkt
"use strict";
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
/// <reference path='motion_helpers.ts'/>
var GameConsts_1 = require("./GameConsts");
var motion_helpers_1 = require("./motion_helpers");
var DataClasses_1 = require("./DataClasses");
var Motion;
(function (Motion) {
    var pls; // random number generator
    /**
     * Modified from from https://gist.github.com/blixt/f17b47c62508be59987b
     *
     *
     * Creates a pseudo-random value generator. The seed must be an integer.
     *
     * Uses an optimized version of the Park-Miller PRNG.
     * http://www.firstpr.com.au/dsp/rand31/
     */
    var RandGen = (function () {
        function RandGen(s) {
            this.setSeed(s);
        }
        RandGen.prototype.setSeed = function (s) {
            this.seed = s % 2147483647;
            if (this.seed <= 0) {
                this.seed += 2147483646;
            }
            this.random();
        };
        /**
         * Returns a pseudo-random value in range [0, 1).
         */
        RandGen.prototype.random = function () {
            this.seed = (this.seed * 16807) % 2147483647;
            return ((this.seed - 1.0) / 2147483646.0);
        };
        return RandGen;
    }());
    ;
    // back to my code
    function reset() {
        pls = new RandGen(1324);
        // pls = new gen(1324);
    }
    Motion.reset = reset;
    function world_to_world(w) {
        if (is_eating(w)) {
            return snake_eat(w);
        }
        else {
            return new DataClasses_1.DataClasses.World(motion_helpers_1.MotionHelpers.snake_slither(w.snake), w.food);
        }
    }
    Motion.world_to_world = world_to_world;
    // is the snake eating the food in the world?
    function is_eating(w) {
        return (w.food).equals(w.snake.segs.x);
    }
    Motion.is_eating = is_eating;
    // change the direction of the snake
    function snake_change_direction(snk, dir) {
        return new DataClasses_1.DataClasses.Snake(dir, snk.segs);
    }
    Motion.snake_change_direction = snake_change_direction;
    // change the direction of the world
    function world_change_direction(w, dir) {
        return new DataClasses_1.DataClasses.World(snake_change_direction(w.snake, dir), w.food);
    }
    Motion.world_change_direction = world_change_direction;
    // eat the food and generate a new one
    function snake_eat(w) {
        var i = Math.floor(pls.random() * GameConsts_1.GameConsts.GameConsts.BOARD_WIDTH);
        var j = Math.floor(pls.random() * GameConsts_1.GameConsts.GameConsts.BOARD_HEIGHT);
        return new DataClasses_1.DataClasses.World(motion_helpers_1.MotionHelpers.snake_grow(w.snake), new DataClasses_1.DataClasses.Posn(i, j));
    }
    Motion.snake_eat = snake_eat;
})(Motion = exports.Motion || (exports.Motion = {}));
