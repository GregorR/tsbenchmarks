// this is equivalent to motion-helpers.rkt
// i also put the cut-tail method (from cut-tail.rkt) in here too
// since there doesn't really seem to be much point of having it in its own file
"use strict";
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
var DataClasses_1 = require("./DataClasses");
var MotionHelpers;
(function (MotionHelpers) {
    // compute the next position for head
    function next_head(seg, dir) {
        switch (dir) {
            case (DataClasses_1.DataClasses.Dir.up):
                return new DataClasses_1.DataClasses.Posn(seg.x, seg.y + 1);
            case (DataClasses_1.DataClasses.Dir.down):
                return new DataClasses_1.DataClasses.Posn(seg.x, seg.y - 1);
            case (DataClasses_1.DataClasses.Dir.left):
                return new DataClasses_1.DataClasses.Posn(seg.x - 1, seg.y);
            case (DataClasses_1.DataClasses.Dir.right):
                return new DataClasses_1.DataClasses.Posn(seg.x + 1, seg.y);
            default:
                return seg;
        }
    }
    MotionHelpers.next_head = next_head;
    // the racket code for this is a hilarious abuse of types
    // really, all it's doing (i think) is returning the list sans
    // the last position
    // but they use a recursive method so i should also use a recursive method
    function cut_tail(segs) {
        if (segs.length < 2) {
            return [];
        }
        else {
            return [segs[0]].concat(cut_tail(segs.splice(1, -1)));
        }
    }
    MotionHelpers.cut_tail = cut_tail;
    // move the snake one step
    function snake_slither(snk) {
        var d = snk.dir;
        var newPos = next_head(snk.segs.x, d);
        var newTail = cut_tail([snk.segs.x].concat(snk.segs.y));
        return new DataClasses_1.DataClasses.Snake(d, new DataClasses_1.DataClasses.Pair(newPos, newTail));
    }
    MotionHelpers.snake_slither = snake_slither;
    // grow the snake one segment
    function snake_grow(snk) {
        var d = snk.dir;
        var newPos = next_head(snk.segs.x, d);
        var newTail = [snk.segs.x].concat(snk.segs.y);
        var newSnk = new DataClasses_1.DataClasses.Snake(d, new DataClasses_1.DataClasses.Pair(newPos, newTail));
        return newSnk;
    }
    MotionHelpers.snake_grow = snake_grow;
})(MotionHelpers = exports.MotionHelpers || (exports.MotionHelpers = {}));
