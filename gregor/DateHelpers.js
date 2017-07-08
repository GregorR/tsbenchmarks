"use strict";
// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
exports.__esModule = true;
var D = require("./CoreClasses");
var Y = require("./YMD");
function date_hash_proc(x, fn) {
    return fn(x.jdn);
}
exports.date_hash_proc = date_hash_proc;
// this is temporary, and probably needs to take an output channel
// to better match the racket and to actually make sense
function date_write_proc(d) {
    console.log("<date " + date_to_iso8601(d) + ">");
}
exports.date_write_proc = date_write_proc;
function isDate(d) {
    return (d instanceof D.Date);
}
exports.isDate = isDate;
function date(y, m, d) {
    if (m === void 0) { m = D.Month.jan; }
    if (d === void 0) { d = 1; }
    var ymd = new D.YMD(y, m, d);
    return new D.Date(ymd, Y.ymd_to_jdn(ymd).ieEval());
}
exports.date = date;
function date_to_ymd(d) {
    return d.ymd;
}
exports.date_to_ymd = date_to_ymd;
function date_to_jdn(d) {
    return d.jdn;
}
exports.date_to_jdn = date_to_jdn;
function ymd_to_date(ymd) {
    return date(ymd.y, ymd.m, ymd.d);
}
exports.ymd_to_date = ymd_to_date;
function jdn_to_date(jdn) {
    return new D.Date(Y.jdn_to_ymd(new D.ExactRational(jdn, 1)), jdn);
}
exports.jdn_to_date = jdn_to_date;
function date_to_iso_week(d) {
    return date_to_iso_week_wyear(d).x;
}
exports.date_to_iso_week = date_to_iso_week;
function date_to_iso_wyear(d) {
    return date_to_iso_week_wyear(d).x;
}
exports.date_to_iso_wyear = date_to_iso_wyear;
function date_to_iso_week_wyear(d) {
    var ymd = date_to_ymd(d);
    var yday = Y.ymd_yday(ymd);
    var iso_yday = Y.jdn_to_iso_wday(date_to_jdn(d));
    var y = ymd.y;
    var w = Math.floor((yday + (-iso_yday) + 10) / 7.0);
    if (w == 0) {
        var y_1 = y - 1;
        return new D.Pair(Y.iso_weeks_in_year(y_1), y_1);
    }
    else if ((w == 53) && (w > Y.iso_weeks_in_year(y))) {
        return new D.Pair(1, y);
    }
    else {
        return new D.Pair(w, y);
    }
}
exports.date_to_iso_week_wyear = date_to_iso_week_wyear;
function f(n, len) {
    var instr = n + "";
    var curLen = instr.length;
    for (var i = 0; i < (len - curLen); i++) {
        instr = "0" + instr;
    }
    return instr;
}
function date_to_iso8601(d) {
    var yd = d.ymd.y;
    var md = d.ymd.m;
    var dd = d.ymd.d;
    return (f(yd, 4) + "-" + f(md, 2) + "-" + f(dd, 2));
}
exports.date_to_iso8601 = date_to_iso8601;
