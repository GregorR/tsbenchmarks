// this is equivalent to datetime.rkt
// i'm fully aware that these should be member functions in the DateTime class,
// but in the interest of keeping this as close to the racket original as possible
// i figured i'd do it this way
"use strict";
exports.__esModule = true;
var CoreClasses_1 = require("./CoreClasses");
var DateHelpers_1 = require("./DateHelpers");
var HMSN_1 = require("./HMSN");
var TimeHelpers_1 = require("./TimeHelpers");
var DateTimeHelpers;
(function (DateTimeHelpers) {
    function datetime_equal_proc(d1, d2) {
        return ((d1.jd.num == d2.jd.num) && (d1.jd.denom == d2.jd.denom)); // this assumes all the fractions are fully reduced (this happens in ExactRational constructor)
    }
    DateTimeHelpers.datetime_equal_proc = datetime_equal_proc;
    function datetime_hash_proc(x, fn) {
        return fn(x.jd);
    }
    DateTimeHelpers.datetime_hash_proc = datetime_hash_proc;
    // this is temporary, and probably needs to take an output channel
    // to better match the racket and to actually make sense
    function datetime_write_proc(d) {
        console.log("<datetime " + datetime_to_iso8601(d) + ">");
    }
    DateTimeHelpers.datetime_write_proc = datetime_write_proc;
    function isDateTime(d) {
        return (d instanceof CoreClasses_1.CoreClasses.DateTime);
    }
    DateTimeHelpers.isDateTime = isDateTime;
    function dateTime_to_date(d) {
        return d.date;
    }
    DateTimeHelpers.dateTime_to_date = dateTime_to_date;
    function dateTime_to_time(d) {
        return d.time;
    }
    DateTimeHelpers.dateTime_to_time = dateTime_to_time;
    function dateTime_to_jd(d) {
        if (isDateTime(d)) {
            return d.jd;
        }
        else
            return new CoreClasses_1.CoreClasses.ExactRational(-1, 1); // this means error (date should never be negative)
    }
    DateTimeHelpers.dateTime_to_jd = dateTime_to_jd;
    function dateTime_to_posix(d) {
        return jd_to_posix(d.jd);
    }
    DateTimeHelpers.dateTime_to_posix = dateTime_to_posix;
    function jd_to_datetime(jd) {
        var ejd = round(jd.ieEval());
        var p = jd_to_date_and_time(new CoreClasses_1.CoreClasses.ExactRational(ejd, 1));
        return date_and_time_to_dateTime(p.x, p.y);
    }
    DateTimeHelpers.jd_to_datetime = jd_to_datetime;
    function posix_to_dateTime(p) {
        return jd_to_datetime(posix_to_jd(new CoreClasses_1.CoreClasses.ExactRational(round(p.ieEval()), 1)));
    }
    DateTimeHelpers.posix_to_dateTime = posix_to_dateTime;
    function date_and_time_to_dateTime(d, t) {
        return new CoreClasses_1.CoreClasses.DateTime(d, t, date_and_time_to_jd(d, t));
    }
    DateTimeHelpers.date_and_time_to_dateTime = date_and_time_to_dateTime;
    function jd_to_dateTime(jd) {
        var ejd = round(jd);
        var d_t = jd_to_date_and_time(new CoreClasses_1.CoreClasses.ExactRational(ejd, 1));
        return date_and_time_to_dateTime(d_t.x, d_t.y);
    }
    DateTimeHelpers.jd_to_dateTime = jd_to_dateTime;
    function datetime(year, month, day, hour, minute, second, nano) {
        if (month === void 0) { month = CoreClasses_1.CoreClasses.Month.jan; }
        if (day === void 0) { day = 1; }
        if (hour === void 0) { hour = 0; }
        if (minute === void 0) { minute = 0; }
        if (second === void 0) { second = 0; }
        if (nano === void 0) { nano = 0; }
        var date = DateHelpers_1.DateHelpers.date(year, month, day);
        var time = new CoreClasses_1.CoreClasses.Time(new CoreClasses_1.CoreClasses.HMSN(hour, minute, second, nano), nano);
        return date_and_time_to_dateTime(date, time);
    }
    DateTimeHelpers.datetime = datetime;
    function datetime_to_iso8601(d) {
        var di = DateHelpers_1.DateHelpers.date_to_iso8601(dateTime_to_date(d));
        var ti = TimeHelpers_1.TimeHelpers.time_to_iso8601(dateTime_to_time(d));
        return (di + "T" + ti);
    }
    DateTimeHelpers.datetime_to_iso8601 = datetime_to_iso8601;
    function date_and_time_to_jd(d, t) {
        var jdn = new CoreClasses_1.CoreClasses.ExactRational(d.jdn, 1);
        var consts = new HMSN_1.HMSN.Consts();
        var day_ns = new CoreClasses_1.CoreClasses.ExactRational(consts.hmns_to_day_ns(t.hmsn), 1);
        var toRet = (jdn.add(new CoreClasses_1.CoreClasses.ExactRational(-1, 2))).add(day_ns.divide(new CoreClasses_1.CoreClasses.ExactRational(consts.NS_DAY, 1)));
        return toRet;
    }
    DateTimeHelpers.date_and_time_to_jd = date_and_time_to_jd;
    function jd_to_date_and_time(jd) {
        var jdn = jd_to_jdn(jd).ieEval();
        var d = DateHelpers_1.DateHelpers.jdn_to_date(jdn);
        var day_ns = jd_to_day_ns(jd);
        var t = TimeHelpers_1.TimeHelpers.day_ns_to_time(day_ns);
        return new CoreClasses_1.CoreClasses.Pair(d, t);
    }
    DateTimeHelpers.jd_to_date_and_time = jd_to_date_and_time;
    function jd_to_jdn(jd) {
        var lo = Math.floor(jd.ieEval());
        if ((jd.ieEval() - lo) >= 0.5) {
            lo++;
        }
        return new CoreClasses_1.CoreClasses.ExactRational(lo, 1);
    }
    DateTimeHelpers.jd_to_jdn = jd_to_jdn;
    function round(n) {
        var s = n < 0 ? -1 : 1;
        var f = Math.floor(Math.abs(n));
        var diff = Math.abs(n) - f;
        if (diff >= 0.5)
            f++;
        return f * s;
    }
    DateTimeHelpers.round = round;
    function jd_to_day_ns(jd) {
        var base = jd.add(new CoreClasses_1.CoreClasses.ExactRational(-1, 2));
        var frac = base.add(new CoreClasses_1.CoreClasses.ExactRational(Math.floor(base.ieEval()), 1));
        var r = round(frac.ieEval() * (new HMSN_1.HMSN.Consts()).NS_DAY);
        return r;
    }
    DateTimeHelpers.jd_to_day_ns = jd_to_day_ns;
    function jd_to_posix(jd) {
        return (jd.add((new CoreClasses_1.CoreClasses.ExactRational(-2440587, 1)).add(new CoreClasses_1.CoreClasses.ExactRational(-1, 2)))).mul(new CoreClasses_1.CoreClasses.ExactRational(86400, 1));
    }
    DateTimeHelpers.jd_to_posix = jd_to_posix;
    function posix_to_jd(posix) {
        return (posix.divide(new CoreClasses_1.CoreClasses.ExactRational(86400, 1))).add((new CoreClasses_1.CoreClasses.ExactRational(2440587, 1)).add(new CoreClasses_1.CoreClasses.ExactRational(1, 2)));
    }
    DateTimeHelpers.posix_to_jd = posix_to_jd;
    function dateTime_add_nanoseconds(dt, n) {
        return jd_to_dateTime(((dateTime_to_jd(dt)).add((new CoreClasses_1.CoreClasses.ExactRational(n, 1)).divide(new CoreClasses_1.CoreClasses.ExactRational((new HMSN_1.HMSN.Consts()).NS_DAY, 1)))).ieEval());
    }
    DateTimeHelpers.dateTime_add_nanoseconds = dateTime_add_nanoseconds;
    function dateTime_add_seconds(dt, n) {
        return dateTime_add_nanoseconds(dt, (new HMSN_1.HMSN.Consts()).NS_DAY * n);
    }
    DateTimeHelpers.dateTime_add_seconds = dateTime_add_seconds;
})(DateTimeHelpers = exports.DateTimeHelpers || (exports.DateTimeHelpers = {}));
