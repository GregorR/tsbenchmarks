// equivalent to the core_structs.rkt file from the racket version
// and also the gregor_structs.rkt
// and also the moment_base.rkt
// just a collection of most of the base objects and some of their member functions
"use strict";
exports.__esModule = true;
var DateTimeHelpers_1 = require("./DateTimeHelpers");
var CoreClasses;
(function (CoreClasses) {
    var Pair = (function () {
        function Pair(tx, ty) {
            this.x = tx;
            this.y = ty;
        }
        return Pair;
    }());
    CoreClasses.Pair = Pair;
    ;
    var ExactRational = (function () {
        function ExactRational(n, d) {
            // reduce the fraction -- first make them into integers (they should already be, but just to check)
            n = Math.floor(n);
            d = Math.floor(d);
            // make sure the fraction is in lowest terms
            var gcdd = this.gcd(n, d);
            this.num = n / gcdd;
            this.denom = d / gcdd;
        }
        ExactRational.prototype.reduce = function () {
            var gcdd = this.gcd(this.num, this.denom);
            this.num = this.num / gcdd;
            this.denom = this.denom / gcdd;
        };
        ExactRational.prototype.gcd = function (a, b) {
            return b ? this.gcd(b, a % b) : a;
        };
        ExactRational.prototype.ieEval = function () {
            return this.num / (this.denom + 0.0);
        };
        ExactRational.prototype.add = function (e) {
            var gcmDenoms = this.denom * e.denom;
            var tNum = this.num * e.denom + e.num * this.denom;
            return new ExactRational(tNum, gcmDenoms);
            ;
        };
        ExactRational.prototype.divide = function (e) {
            // a/b / c/d = ad / bc
            var newNum = this.num * e.denom;
            var newDenom = this.denom * e.num;
            return new ExactRational(newNum, newDenom);
        };
        ExactRational.prototype.mul = function (e) {
            return new ExactRational(this.num * e.num, this.denom * e.denom);
        };
        ExactRational.prototype.equals = function (e) {
            return (this.num == e.num && this.denom == e.denom);
        };
        ExactRational.prototype.lt = function (e) {
            return (this.ieEval() < e.ieEval());
        };
        ExactRational.prototype.lte = function (e) {
            return (this.equals(e) || this.lt(e));
        };
        return ExactRational;
    }());
    CoreClasses.ExactRational = ExactRational;
    ;
    var Month;
    (function (Month) {
        Month[Month["jan"] = 1] = "jan";
        Month[Month["feb"] = 2] = "feb";
        Month[Month["mar"] = 3] = "mar";
        Month[Month["apr"] = 4] = "apr";
        Month[Month["may"] = 5] = "may";
        Month[Month["jun"] = 6] = "jun";
        Month[Month["jul"] = 7] = "jul";
        Month[Month["aug"] = 8] = "aug";
        Month[Month["sep"] = 9] = "sep";
        Month[Month["oct"] = 10] = "oct";
        Month[Month["nov"] = 11] = "nov";
        Month[Month["dec"] = 12] = "dec";
    })(Month = CoreClasses.Month || (CoreClasses.Month = {}));
    ;
    var YMD = (function () {
        function YMD(ty, tm, td) {
            this.y = ty;
            this.m = tm;
            this.d = td;
        }
        return YMD;
    }());
    CoreClasses.YMD = YMD;
    ;
    var HMSN = (function () {
        function HMSN(ht, mt, st, nt) {
            this.h = ht;
            this.m = mt;
            this.s = st;
            this.n = nt;
        }
        return HMSN;
    }());
    CoreClasses.HMSN = HMSN;
    ;
    var Date = (function () {
        function Date(tymd, tdjn) {
            this.ymd = new YMD(tymd.y, tymd.m, tymd.d);
            this.jdn = tdjn;
        }
        Date.prototype.equals = function (d) {
            return (this.jdn == d.jdn);
        };
        Date.prototype.lte = function (d) {
            return (this.jdn <= d.jdn);
        };
        return Date;
    }());
    CoreClasses.Date = Date;
    ;
    var Time = (function () {
        function Time(h, n) {
            this.ns = n;
            this.hmsn = h;
        }
        Time.prototype.equals = function (t) {
            return (this.ns == t.ns);
        };
        Time.prototype.lte = function (t) {
            return (this.ns <= t.ns);
        };
        Time.prototype.lt = function (t) {
            return (this.ns < t.ns);
        };
        return Time;
    }());
    CoreClasses.Time = Time;
    ;
    var DateTime = (function () {
        function DateTime(d, t, j) {
            this.date = new Date(d.ymd, d.jdn);
            this.time = new Time(t.hmsn, t.ns);
            this.jd = new ExactRational(j.num, j.denom);
        }
        DateTime.prototype.equals = function (d) {
            return (this.jd.num == d.jd.num && this.jd.denom == d.jd.denom);
        };
        DateTime.prototype.lt = function (d) {
            return (this.jd.ieEval() < d.jd.ieEval());
        };
        DateTime.prototype.lte = function (d) {
            return (this.equals(d) || this.lt(d));
        };
        return DateTime;
    }());
    CoreClasses.DateTime = DateTime;
    ;
    var Moment = (function () {
        function Moment(dt, off, z) {
            this.dateTimeLocal = new DateTime(dt.date, dt.time, dt.jd);
            this.UTCOffset = off;
            this.zone = z;
        }
        Moment.prototype.moment_to_iso8601_tzid = function (m) {
            var iso = this.moment_to_iso8601(m);
            if (m.zone != "") {
                iso += "[" + m.zone + "]";
            }
            return iso;
        };
        Moment.prototype.moment_to_iso8601 = function (m) {
            if (m.UTCOffset == 0) {
                return DateTimeHelpers_1.DateTimeHelpers.datetime_to_iso8601(m.dateTimeLocal) + "Z";
            }
            var sign = m.UTCOffset < 0 ? "-" : "+";
            var sec = Math.abs(m.UTCOffset);
            var hrs = Math.floor(sec / 3600);
            var min = Math.floor((sec - (hrs * 3600)) / 60);
            return DateTimeHelpers_1.DateTimeHelpers.datetime_to_iso8601(m.dateTimeLocal) + sign + this.f(hrs, 2) + ":" + this.f(min, 2);
        };
        Moment.prototype.f = function (n, len) {
            var instr = n + "";
            var curLen = instr.length;
            for (var i = 0; i < (len - curLen); i++) {
                instr = "0" + instr;
            }
            return instr;
        };
        return Moment;
    }());
    CoreClasses.Moment = Moment;
    ;
})(CoreClasses = exports.CoreClasses || (exports.CoreClasses = {}));
