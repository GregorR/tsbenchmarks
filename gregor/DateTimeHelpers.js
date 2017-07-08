"use strict";
// this is equivalent to date.rkt
// i'm fully aware that these should be member functions in the Date class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
exports.__esModule = true;
var D = require("./CoreClasses");
var DH = require("./DateHelpers");
var C = require("./HMSN");
var T = require("./TimeHelpers");
function datetime_equal_proc(d1, d2) {
    return ((d1.jd.num == d2.jd.num) && (d1.jd.denom == d2.jd.denom)); // this assumes all the fractions are fully reduced (this happens in ExactRational constructor)
}
exports.datetime_equal_proc = datetime_equal_proc;
function datetime_hash_proc(x, fn) {
    return fn(x.jd);
}
exports.datetime_hash_proc = datetime_hash_proc;
// this is temporary, and probably needs to take an output channel
// to better match the racket and to actually make sense
function datetime_write_proc(d) {
    console.log("<datetime " + datetime_to_iso8601(d) + ">");
}
exports.datetime_write_proc = datetime_write_proc;
function isDateTime(d) {
    return (d instanceof D.DateTime);
}
exports.isDateTime = isDateTime;
function dateTime_to_date(d) {
    return d.date;
}
exports.dateTime_to_date = dateTime_to_date;
function dateTime_to_time(d) {
    return d.time;
}
exports.dateTime_to_time = dateTime_to_time;
function dateTime_to_jd(d) {
    if (isDateTime(d)) {
        return d.jd;
    }
    else
        return new D.ExactRational(-1, 1); // this means error
}
exports.dateTime_to_jd = dateTime_to_jd;
function dateTime_to_posix(d) {
    return jd_to_posix(d.jd);
}
exports.dateTime_to_posix = dateTime_to_posix;
function jd_to_datetime(jd) {
    var ejd = round(jd.ieEval());
    var p = jd_to_date_and_time(new D.ExactRational(ejd, 1));
    return date_and_time_to_dateTime(p.x, p.y);
}
exports.jd_to_datetime = jd_to_datetime;
function posix_to_dateTime(p) {
    return jd_to_datetime(posix_to_jd(new D.ExactRational(round(p.ieEval()), 1)));
}
exports.posix_to_dateTime = posix_to_dateTime;
function date_and_time_to_dateTime(d, t) {
    return new D.DateTime(d, t, date_and_time_to_jd(d, t));
}
exports.date_and_time_to_dateTime = date_and_time_to_dateTime;
function jd_to_dateTime(jd) {
    var ejd = round(jd);
    var d_t = jd_to_date_and_time(new D.ExactRational(ejd, 1));
    return date_and_time_to_dateTime(d_t.x, d_t.y);
}
exports.jd_to_dateTime = jd_to_dateTime;
function datetime(year, month, day, hour, minute, second, nano) {
    if (month === void 0) { month = D.Month.jan; }
    if (day === void 0) { day = 1; }
    if (hour === void 0) { hour = 0; }
    if (minute === void 0) { minute = 0; }
    if (second === void 0) { second = 0; }
    if (nano === void 0) { nano = 0; }
    var date = DH.date(year, month, day);
    var time = new D.Time(new D.HMSN(hour, minute, second, nano), nano);
    return date_and_time_to_dateTime(date, time);
}
exports.datetime = datetime;
function datetime_to_iso8601(d) {
    var di = DH.date_to_iso8601(dateTime_to_date(d));
    var ti = T.time_to_iso8601(dateTime_to_time(d));
    return (di + "T" + ti);
}
exports.datetime_to_iso8601 = datetime_to_iso8601;
function date_and_time_to_jd(d, t) {
    var jdn = new D.ExactRational(d.jdn, 1);
    var consts = new C.Consts();
    var day_ns = new D.ExactRational(consts.hmns_to_day_ns(t.hmsn), 1);
    var toRet = (jdn.add(new D.ExactRational(-1, 2))).add(day_ns.divide(new D.ExactRational(consts.NS_DAY, 1)));
    // console.log( "KILL ME");
    // // console.log( day_ns.divide(new D.ExactRational( consts.NS_DAY, 1)));
    // console.log( toRet);
    // console.log( "I EMBRACE DEATH");
    return toRet;
}
exports.date_and_time_to_jd = date_and_time_to_jd;
function jd_to_date_and_time(jd) {
    var jdn = jd_to_jdn(jd).ieEval();
    var d = DH.jdn_to_date(jdn);
    var day_ns = jd_to_day_ns(jd);
    var t = T.day_ns_to_time(day_ns);
    return new D.Pair(d, t);
}
exports.jd_to_date_and_time = jd_to_date_and_time;
function jd_to_jdn(jd) {
    var lo = Math.floor(jd.ieEval());
    if ((jd.ieEval() - lo) >= 0.5) {
        lo++;
    }
    return new D.ExactRational(lo, 1);
}
exports.jd_to_jdn = jd_to_jdn;
function round(n) {
    var s = n < 0 ? -1 : 1;
    var f = Math.floor(Math.abs(n));
    var diff = Math.abs(n) - f;
    if (diff >= 0.5)
        f++;
    return f * s;
}
exports.round = round;
function jd_to_day_ns(jd) {
    var base = jd.add(new D.ExactRational(-1, 2));
    var frac = base.add(new D.ExactRational(Math.floor(base.ieEval()), 1));
    var r = round(frac.ieEval() * (new C.Consts()).NS_DAY);
    return r;
}
exports.jd_to_day_ns = jd_to_day_ns;
function jd_to_posix(jd) {
    return (jd.add((new D.ExactRational(-2440587, 1)).add(new D.ExactRational(-1, 2)))).mul(new D.ExactRational(86400, 1));
}
exports.jd_to_posix = jd_to_posix;
function posix_to_jd(posix) {
    return (posix.divide(new D.ExactRational(86400, 1))).add((new D.ExactRational(2440587, 1)).add(new D.ExactRational(1, 2)));
}
exports.posix_to_jd = posix_to_jd;
function dateTime_add_nanoseconds(dt, n) {
    return jd_to_dateTime(((dateTime_to_jd(dt)).add((new D.ExactRational(n, 1)).divide(new D.ExactRational((new C.Consts()).NS_DAY, 1)))).ieEval());
}
exports.dateTime_add_nanoseconds = dateTime_add_nanoseconds;
function dateTime_add_seconds(dt, n) {
    return dateTime_add_nanoseconds(dt, (new C.Consts()).NS_DAY * n);
}
exports.dateTime_add_seconds = dateTime_add_seconds;
