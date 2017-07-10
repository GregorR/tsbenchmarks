// this is equivalent to collide.rkt
"use strict";
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
var gc = require("./GameConsts");
// is the snake colliding with any of the walls?
function is_snake_wall_collide(snk) {
    return is_head_collide(snk.segs.x);
}
exports.is_snake_wall_collide = is_snake_wall_collide;
function is_head_collide(p) {
    if (p.x <= 0 || p.x >= gc.GameConsts.BOARD_WIDTH) {
        return true;
    }
    if (p.y <= 0 || p.y >= gc.GameConsts.BOARD_HEIGHT) {
        return true;
    }
    return false;
}
exports.is_head_collide = is_head_collide;
function is_snake_self_collide(snk) {
    return is_segs_collide(snk.segs.x, snk.segs.y);
}
exports.is_snake_self_collide = is_snake_self_collide;
function is_segs_collide(p, lp) {
    if (lp.length == 0) {
        return false;
    }
    return (p.equals(lp[0]) || is_segs_collide(p, lp.slice(1, -1)));
}
exports.is_segs_collide = is_segs_collide;
