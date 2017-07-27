// this is equivalent to handlers.rkt
"use strict";
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
/// <reference path='collide.ts'/>
/// <reference path='motion.ts'/>
var collide_1 = require("./collide");
var motion_1 = require("./motion");
var DataClasses_1 = require("./DataClasses");
var Handlers;
(function (Handlers) {
    function handle_key(w, ke) {
        switch (ke) {
            case ("w"):
                return motion_1.Motion.world_change_direction(w, DataClasses_1.DataClasses.Dir.up);
            case ("s"):
                return motion_1.Motion.world_change_direction(w, DataClasses_1.DataClasses.Dir.down);
            case ("a"):
                return motion_1.Motion.world_change_direction(w, DataClasses_1.DataClasses.Dir.left);
            case ("d"):
                return motion_1.Motion.world_change_direction(w, DataClasses_1.DataClasses.Dir.right);
            default:
                return w;
        }
    }
    Handlers.handle_key = handle_key;
    function is_game_over(w) {
        return ((collide_1.Collide.is_snake_wall_collide(w.snake)) || (collide_1.Collide.is_snake_self_collide(w.snake)));
    }
    Handlers.is_game_over = is_game_over;
})(Handlers = exports.Handlers || (exports.Handlers = {}));
