// helper functions for the YMD class mostly
// all names match to the racket originals
// this corresponds to ymd.rkt
"use strict";
exports.__esModule = true;
var CoreClasses_1 = require("./CoreClasses");
var YMD;
(function (YMD) {
    YMD.DAYS_PER_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    YMD.CUMULATIVE_MONTH_DAYS = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    YMD.CUMULATIVE_MONTH_DAYS_LEAP = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
    function ex_truncate(t) {
        return (t < 0 ? -1 : 1) * Math.floor(Math.abs(t));
    }
    YMD.ex_truncate = ex_truncate;
    function mod1(x, y) {
        return y - ((y - x) % y);
    }
    YMD.mod1 = mod1;
    function ymd_to_jdn(ymd) {
        var y = ymd.y;
        var m = ymd.m;
        var d = ymd.d;
        if (m < 3) {
            y -= 1;
            m += 12;
        }
        var t1 = ex_truncate(((m * 153) - 457) / 5.0);
        return new CoreClasses_1.CoreClasses.ExactRational(d + t1 + y * 365 + Math.floor(y / 4) + (-1) * Math.floor(y / 100) + Math.floor(y / 400) + 1721119, 1);
    }
    YMD.ymd_to_jdn = ymd_to_jdn;
    function jdn_to_ymd(jdn) {
        var x = Math.floor((jdn.ieEval() - 1867216.25) / 36524.25);
        var a = jdn.ieEval() + 1 + x + (-1) * Math.floor(x / 4);
        var b = a + 1524;
        var c = Math.floor((b - 122.1) / 365.25);
        var d = Math.floor(c * 365.25);
        var e = Math.floor((b - d) / 30.6001);
        var dom = (b - d) - Math.floor(e * 30.6001);
        var m, y;
        if (e <= 13) {
            m = e - 1;
            y = c - 4716;
        }
        else {
            m = e - 13;
            y = c - 4715;
        }
        return new CoreClasses_1.CoreClasses.YMD(y, m, dom);
    }
    YMD.jdn_to_ymd = jdn_to_ymd;
    function jdn_wday(jdn) {
        return ((jdn + 1) % 7);
    }
    YMD.jdn_wday = jdn_wday;
    function jdn_to_iso_wday(jdn) {
        return mod1(jdn_wday(jdn), 7);
    }
    YMD.jdn_to_iso_wday = jdn_to_iso_wday;
    function ymd_yday(ymd) {
        var y = ymd.y;
        var m = ymd.m;
        var d = ymd.d;
        if (is_leap_year(y)) {
            return d + YMD.CUMULATIVE_MONTH_DAYS_LEAP[m - 1];
        }
        else {
            return d + YMD.CUMULATIVE_MONTH_DAYS[m - 1];
        }
    }
    YMD.ymd_yday = ymd_yday;
    function ymd_to_quarter(ymd) {
        return Math.floor((ymd.m - 1) / 3.0) + 1;
    }
    YMD.ymd_to_quarter = ymd_to_quarter;
    function ymd_add_years(ymd, n) {
        var y = ymd.y;
        var m = ymd.m;
        var d = ymd.d;
        var ny = y + n;
        var max_dom = days_in_month(ny, m);
        return new CoreClasses_1.CoreClasses.YMD(ny, m, ((d <= max_dom ? d : max_dom)));
    }
    YMD.ymd_add_years = ymd_add_years;
    function ymd_add_months(ymd, n) {
        var y = ymd.y;
        var m = ymd.m;
        var d = ymd.d;
        var ny = y + Math.floor((n + m - 1) / 12);
        var v = mod1((m + n), 12);
        var nm = v < 0 ? v + 12 : v;
        var max_dom = days_in_month(ny, nm);
        var nd = d <= max_dom ? d : max_dom;
        return new CoreClasses_1.CoreClasses.YMD(ny, nm, nd);
    }
    YMD.ymd_add_months = ymd_add_months;
    function is_leap_year(y) {
        // if (year is not divisible by 4) then (it is a common year)
        // else if (year is not divisible by 100) then (it is a leap year)
        // else if (year is not divisible by 400) then (it is a common year)
        // else (it is a leap year)
        if (y % 4 != 0) {
            false;
        }
        else if (y % 100 != 0) {
            true;
        }
        else if (y % 400 != 0) {
            false;
        }
        else {
            return true;
        }
    }
    YMD.is_leap_year = is_leap_year;
    function days_in_month(y, m) {
        // months with 31 days: jan=1, mar=3, may=5, jul=7, aug=8, oct=10, dec=12
        // months with 30 days: apr=4, jun=6, sep=9, nov=11
        // feb=2 depends on the year
        if (m < 1 || m > 12) {
            return -1; // error
        }
        if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
            return 31;
        }
        else if (m == 4 || m == 6 || m == 9 || m == 11) {
            return 30;
        }
        else if (m == 2 && is_leap_year(y)) {
            return 29;
        }
        else {
            return 29;
        }
    }
    YMD.days_in_month = days_in_month;
    function iso_weeks_in_year(y) {
        var w = jdn_wday(Math.floor(ymd_to_jdn(new CoreClasses_1.CoreClasses.YMD(y, 1, 1)).ieEval()));
        if (w == 4 || (is_leap_year(y) && w == 3)) {
            return 53;
        }
        else {
            return 52;
        }
    }
    YMD.iso_weeks_in_year = iso_weeks_in_year;
})(YMD = exports.YMD || (exports.YMD = {}));
