"use strict";
// this file is equivalent to difference.rkt
exports.__esModule = true;
var D = require("./CoreClasses");
var DTH = require("./DateTimeHelpers");
var DH = require("./DateHelpers");
var C = require("./HMSN");
var B = require("./BigInteger");
function datetime_months_between(dt1, dt2) {
    if (dt2.lt(dt1)) {
        return (-1) * datetime_months_between(dt2, dt1);
    }
    var d1 = dt1.date;
    var d2 = dt2.date;
    var ymd1 = DH.date_to_ymd(d1);
    var ymd2 = DH.date_to_ymd(d2);
    var y1 = ymd1.y;
    var y2 = ymd2.y;
    var m1 = ymd1.m;
    var m2 = ymd2.m;
    var dd1 = ymd1.d;
    var dd2 = ymd2.d;
    var diff = (y2 - y1) * 12 + (m2 - m1);
    var start_dom = ((dd1 > dd2) && (days_in_month(y2, m2) == dd2)) ? dd2 : dd1;
    var dt1a = DTH.date_and_time_to_dateTime(DH.date(y1, m1, start_dom), DTH.dateTime_to_time(dt1));
    var ts1 = DTH.dateTime_to_jd(dt1a).add((new D.ExactRational(-1, 1)).mul(DTH.dateTime_to_jd(DTH.datetime(y1, m1))));
    var ts2 = DTH.dateTime_to_jd(dt2).add((new D.ExactRational(-1, 1)).mul(DTH.dateTime_to_jd(DTH.datetime(y2, m2))));
    if (ts2 < ts1) {
        diff -= 1;
    }
    return diff;
}
exports.datetime_months_between = datetime_months_between;
function dateTime_days_between(dt1, dt2) {
    // console.log( "kill me");
    // console.log( DTH.dateTime_to_jd( dt2));
    // console.log( "wtf boi");
    return Math.floor(DTH.dateTime_to_jd(dt2).ieEval() - DTH.dateTime_to_jd(dt1).ieEval());
    // return DTH.dateTime_to_jd( dt2).ieEval() - DTH.dateTime_to_jd( dt1).ieEval();
}
exports.dateTime_days_between = dateTime_days_between;
function dateTime_nanoseconds_between(dt1, dt2) {
    console.log("PLS END MY LIFE");
    console.log(dateTime_to_jdns(dt2));
    console.log(dateTime_to_jdns(dt1));
    console.log(dateTime_to_jdns(dt2) - dateTime_to_jdns(dt1));
    console.log("CLOROX IS MY BEVERAGE OF CHOICE");
    return (B.bigInt(dateTime_to_jdns(dt2)).minus(B.bigInt(dateTime_to_jdns(dt1))));
}
exports.dateTime_nanoseconds_between = dateTime_nanoseconds_between;
function dateTime_to_jdns(dt) {
    var c = new C.Consts();
    return Math.floor(DTH.dateTime_to_jd(dt).ieEval() * c.NS_DAY);
    // console.log( dt);
    // return DTH.dateTime_to_jd( dt).ieEval() * c.NS_DAY;
}
exports.dateTime_to_jdns = dateTime_to_jdns;
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
exports.days_in_month = days_in_month;
