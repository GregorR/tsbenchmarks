"use strict";
// equivalent to the data.rkt file from the typed racket version
exports.__esModule = true;
var Pair = (function () {
    function Pair(tx, ty) {
        this.x = tx;
        this.y = ty;
    }
    return Pair;
}());
exports.Pair = Pair;
;
//type Posn = Pair<number, number>;
// type NEListof<A> = Pair<A, A[]>;
var Dir;
(function (Dir) {
    Dir[Dir["up"] = 1] = "up";
    Dir[Dir["down"] = 2] = "down";
    Dir[Dir["left"] = 3] = "left";
    Dir[Dir["right"] = 4] = "right";
})(Dir = exports.Dir || (exports.Dir = {}));
;
var Posn = (function () {
    function Posn(tx, ty) {
        this.x = tx;
        this.y = ty;
    }
    Posn.prototype.equals = function (p) {
        return ((this.x == p.x) && (this.y == p.y));
    };
    return Posn;
}());
exports.Posn = Posn;
var Snake = (function () {
    function Snake(d, s) {
        this.dir = d;
        this.segs = new Pair(new Posn(0, 0), []);
        this.segs.x = s.x;
        for (var i = 0; i < s.y.length; i++) {
            this.segs.y.push(s.y[i]);
        }
    }
    return Snake;
}());
exports.Snake = Snake;
;
var World = (function () {
    function World(s, f) {
        this.snake = s;
        this.food = f;
    }
    return World;
}());
exports.World = World;
