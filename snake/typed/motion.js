"use strict";
// this is equivalent to motion.rkt
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
/// <reference path='motion_helpers.ts'/>
// import mh = require('./motion_helpers');
var gc = require("./GameConsts");
var MH = require("./motion_helpers");
var DC = require("./DataClasses");
// declare var require: NodeRequire;
var gen = require("random-seed");
var pls;
function reset() {
    pls = new gen(1324);
}
exports.reset = reset;
function world_to_world(w) {
    if (is_eating(w)) {
        return snake_eat(w);
    }
    else {
        return new DC.World(MH.snake_slither(w.snake), w.food);
    }
}
exports.world_to_world = world_to_world;
// is the snake eating the food in the world?
function is_eating(w) {
    return (w.food).equals(w.snake.segs.x);
}
exports.is_eating = is_eating;
// change the direction of the snake
function snake_change_direction(snk, dir) {
    return new DC.Snake(dir, snk.segs);
}
exports.snake_change_direction = snake_change_direction;
// change the direction of the world
function world_change_direction(w, dir) {
    return new DC.World(snake_change_direction(w.snake, dir), w.food);
}
exports.world_change_direction = world_change_direction;
// eat the food and generate a new one
function snake_eat(w) {
    var i = Math.floor(pls.random() * gc.GameConsts.BOARD_WIDTH);
    var j = Math.floor(pls.random() * gc.GameConsts.BOARD_HEIGHT);
    return new DC.World(MH.snake_grow(w.snake), new DC.Posn(i, j));
}
exports.snake_eat = snake_eat;
