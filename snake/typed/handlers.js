// this is equivalent to handlers.rkt
/// <reference path='DataClasses.ts'/>
/// <reference path='collide.ts'/>
var handle_key = function (w, ke) {
    switch (ke) {
        case ("w"):
            return world_change_direction(w, Dir.up);
        case ("s"):
            return world_change_direction(w, Dir.down);
        case ("a"):
            return world_change_direction(w, Dir.left);
        case ("d"):
            return world_change_direction(w, Dir.right);
        default:
            return w;
    }
};
var is_game_over = function (w) {
    return ((is_snake_wall_collide(w.snake)) || (is_snake_self_collide(w.snake)));
};
