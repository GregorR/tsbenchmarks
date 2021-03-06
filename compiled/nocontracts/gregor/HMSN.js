// equivalent to hmsn.rkt
// with some relevant helper functions included as class functions
"use strict";
exports.__esModule = true;
var CoreClasses_1 = require("./CoreClasses");
var HMSN_1 = require("./HMSN");
var HMSN;
(function (HMSN) {
    var Consts = (function () {
        function Consts() {
            this.NS_SECOND = 1000000000;
            this.NS_MILLI = 1000000;
            this.NS_MICRO = 1000;
            this.NS_MINUTE = this.NS_SECOND * 60;
            this.NS_HOUR = this.NS_MINUTE * 60;
            this.NS_DAY = this.NS_SECOND * 86400;
            this.MILLI_DAY = this.NS_DAY / this.NS_MILLI;
            this.DAYS_NS = new CoreClasses_1.CoreClasses.ExactRational(1, this.NS_DAY);
        }
        Consts.prototype.hmns_to_day_ns = function (hmsn) {
            var h = hmsn.h;
            var m = hmsn.m;
            var s = hmsn.s;
            var n = hmsn.n;
            var c = new HMSN_1.HMSN.Consts();
            return (c.NS_HOUR * h + c.NS_MINUTE * m + c.NS_SECOND * s + n);
        };
        Consts.prototype.day_ns_to_hmsn = function (ns) {
            var c = new HMSN_1.HMSN.Consts();
            var h = Math.floor(ns / c.NS_HOUR);
            ns -= h * c.NS_HOUR;
            var m = Math.floor(ns / c.NS_MINUTE);
            ns -= m * c.NS_MINUTE;
            var s = Math.floor(ns / c.NS_SECOND);
            ns -= s * c.NS_MINUTE;
            return new CoreClasses_1.CoreClasses.HMSN(h, m, s, ns);
        };
        return Consts;
    }());
    HMSN.Consts = Consts;
    ;
})(HMSN = exports.HMSN || (exports.HMSN = {}));
