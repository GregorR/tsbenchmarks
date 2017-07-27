// this file is equivalent to difference.rkt
// this is the main file which uses the BigInt to avoid precision-based
// rounding errors
// note that there are still some rounding errors which occur in the division 
// at the precision specified; but this was a choice made to have a reasonable running 
// speed (at the precision necessary to produce the same results as the racket original,
// the division algorithm was unusably slow)
"use strict";
exports.__esModule = true;
var CoreClasses_1 = require("./CoreClasses");
var DateTimeHelpers_1 = require("./DateTimeHelpers");
var DateHelpers_1 = require("./DateHelpers");
var HMSN_1 = require("./HMSN");
var BigInteger_1 = require("./BigInteger");
var Difference;
(function (Difference) {
    function datetime_months_between(dt1, dt2) {
        if (dt2.lt(dt1)) {
            return (-1) * datetime_months_between(dt2, dt1);
        }
        var d1 = dt1.date;
        var d2 = dt2.date;
        var ymd1 = DateHelpers_1.DateHelpers.date_to_ymd(d1);
        var ymd2 = DateHelpers_1.DateHelpers.date_to_ymd(d2);
        var y1 = ymd1.y;
        var y2 = ymd2.y;
        var m1 = ymd1.m;
        var m2 = ymd2.m;
        var dd1 = ymd1.d;
        var dd2 = ymd2.d;
        var diff = (y2 - y1) * 12 + (m2 - m1);
        var start_dom = ((dd1 > dd2) && (days_in_month(y2, m2) == dd2)) ? dd2 : dd1;
        var dt1a = DateTimeHelpers_1.DateTimeHelpers.date_and_time_to_dateTime(DateHelpers_1.DateHelpers.date(y1, m1, start_dom), DateTimeHelpers_1.DateTimeHelpers.dateTime_to_time(dt1));
        var ts1 = DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt1a).add((new CoreClasses_1.CoreClasses.ExactRational(-1, 1)).mul(DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(DateTimeHelpers_1.DateTimeHelpers.datetime(y1, m1))));
        var ts2 = DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt2).add((new CoreClasses_1.CoreClasses.ExactRational(-1, 1)).mul(DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(DateTimeHelpers_1.DateTimeHelpers.datetime(y2, m2))));
        if (ts2 < ts1) {
            diff -= 1;
        }
        return diff;
    }
    Difference.datetime_months_between = datetime_months_between;
    function dateTime_days_between(dt1, dt2) {
        return Math.floor(DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt2).ieEval() - DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt1).ieEval());
    }
    Difference.dateTime_days_between = dateTime_days_between;
    function dateTime_nanoseconds_between(dt1, dt2) {
        // here there was some rounding error
        // so use the BigInt class 
        var bi1 = new BigInteger_1.BigInteger.BigInt(dateTime_to_jdns(dt1));
        var bi2 = new BigInteger_1.BigInteger.BigInt(dateTime_to_jdns(dt2));
        var toRet = bi2.sub(bi1);
        return toRet.getValue();
    }
    Difference.dateTime_nanoseconds_between = dateTime_nanoseconds_between;
    function dateTime_to_jdns(dt) {
        var c = new HMSN_1.HMSN.Consts();
        // also rounding errors were happening here
        var bNum = new BigInteger_1.BigInteger.BigInt(DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt).num);
        var bDenom = new BigInteger_1.BigInteger.BigInt(DateTimeHelpers_1.DateTimeHelpers.dateTime_to_jd(dt).denom);
        var intFrac = bNum.divide(bDenom);
        var end = intFrac.multiply(new BigInteger_1.BigInteger.BigInt(c.NS_DAY));
        return end.getValue();
    }
    Difference.dateTime_to_jdns = dateTime_to_jdns;
    function days_in_month(y, m) {
        // months with 31 days: jan=1, mar=3, may=5, jul=7, aug=8, oct=10, dec=12
        // months with 30 days: apr=4, jun=6, sep=9, nov=11
        // feb=2 depends on the year
        // if (year is not divisible by 4) then (it is a common year)
        // else if (year is not divisible by 100) then (it is a leap year)
        // else if (year is not divisible by 400) then (it is a common year)
        // else (it is a leap year)
        if (m < 1 || m > 12) {
            return -1; // error
        }
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            return 31;
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) {
            return 30;
        }
        else if (m == 2 && y % 4 != 0) {
            return 28;
        }
        else if (m == 2 && y % 100 != 0) {
            return 29;
        }
        else if (m == 2 && y % 400 != 0) {
            return 28;
        }
        else {
            return 29;
        }
    }
    Difference.days_in_month = days_in_month;
})(Difference = exports.Difference || (exports.Difference = {}));
