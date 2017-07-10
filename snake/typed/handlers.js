// this is equivalent to handlers.rkt
"use strict";
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
/// <reference path='collide.ts'/>
/// <reference path='motion.ts'/>
var Col = require("./collide");
var Mo = require("./motion");
var DC = require("./DataClasses");
function handle_key(w, ke) {
    switch (ke) {
        case ("w"):
            return Mo.world_change_direction(w, DC.Dir.up);
        case ("s"):
            return Mo.world_change_direction(w, DC.Dir.down);
        case ("a"):
            return Mo.world_change_direction(w, DC.Dir.left);
        case ("d"):
            return Mo.world_change_direction(w, DC.Dir.right);
        default:
            return w;
    }
}
exports.handle_key = handle_key;
function is_game_over(w) {
    return ((Col.is_snake_wall_collide(w.snake)) || (Col.is_snake_self_collide(w.snake)));
}
exports.is_game_over = is_game_over;
