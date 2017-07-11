// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
"use strict";
exports.__esModule = true;
var D = require("./CoreClasses");
var C = require("./HMSN");
// import * as Y from './YMD';
function time_hash_proc(x, fn) {
    return fn(x.ns);
}
exports.time_hash_proc = time_hash_proc;
// this is temporary, and probably needs to take an output channel
// to better match the racket and to actually make sense
function date_write_proc(d) {
    console.log("<time " + time_to_iso8601(d) + ">");
}
exports.date_write_proc = date_write_proc;
function time_to_hmsn(t) {
    return t.hmsn;
}
exports.time_to_hmsn = time_to_hmsn;
function time_to_ns(t) {
    if (t instanceof D.Time) {
        return t.ns;
    }
    return -1;
}
exports.time_to_ns = time_to_ns;
function hmsn_to_time(hmsn) {
    var c = new C.Consts();
    return new D.Time(hmsn, c.hmns_to_day_ns(hmsn));
}
exports.hmsn_to_time = hmsn_to_time;
function day_ns_to_time(ns) {
    var c = new C.Consts();
    return new D.Time(c.day_ns_to_hmsn(ns), ns);
}
exports.day_ns_to_time = day_ns_to_time;
function time(h, m, s, n) {
    if (m === void 0) { m = 0; }
    if (s === void 0) { s = 0; }
    if (n === void 0) { n = 0; }
    return hmsn_to_time(new D.HMSN(h, m, s, n));
}
exports.time = time;
function f(n, len) {
    var instr = n + "";
    var curLen = instr.length;
    for (var i = 0; i < (len - curLen); i++) {
        instr = "0" + instr;
    }
    return instr;
}
function time_to_iso8601(t) {
    var h = t.hmsn.h;
    var m = t.hmsn.m;
    var s = t.hmsn.s;
    var n = t.hmsn.n;
    var c = new C.Consts();
    var fsec = s + (n / c.NS_SECOND);
    var pad = s >= 0 ? "" : "0";
    return (f(h, 2) + ":" + f(m, 2) + ":" + pad + fsec);
}
exports.time_to_iso8601 = time_to_iso8601;
