"use strict";
// this is equivalent to motion-helpers.rkt
// i also put the cut-tail method (from cut-tail.rkt) in here too
// since there doesn't really seem to be much point of having it in its own file
exports.__esModule = true;
/// <reference path='DataClasses.ts'/>
var DC = require("./DataClasses");
// compute the next position for head
function next_head(seg, dir) {
    switch (dir) {
        case (DC.Dir.up):
            return new DC.Posn(seg.x, seg.y + 1);
        case (DC.Dir.down):
            return new DC.Posn(seg.x, seg.y - 1);
        case (DC.Dir.left):
            return new DC.Posn(seg.x - 1, seg.y);
        case (DC.Dir.right):
            return new DC.Posn(seg.x + 1, seg.y);
        default:
            return seg;
    }
}
exports.next_head = next_head;
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
exports.cut_tail = cut_tail;
// move the snake one step
function snake_slither(snk) {
    var d = snk.dir;
    var newPos = next_head(snk.segs.x, d);
    var newTail = cut_tail([snk.segs.x].concat(snk.segs.y));
    //console.log( newTail);
    return new DC.Snake(d, new DC.Pair(newPos, newTail));
}
exports.snake_slither = snake_slither;
// grow the snake one segment
function snake_grow(snk) {
    var d = snk.dir;
    var newPos = next_head(snk.segs.x, d);
    var newTail = [snk.segs.x].concat(snk.segs.y);
    var newSnk = new DC.Snake(d, new DC.Pair(newPos, newTail));
    // console.log( newSnk);
    return newSnk;
}
exports.snake_grow = snake_grow;
