"use strict";
// this file is equivalent to main.rkt
exports.__esModule = true;
var DTH = require("./DateTimeHelpers");
var DF = require("./Difference");
var HISTORIC_DATES;
var RANDOM_DATES;
function genDates() {
    HISTORIC_DATES = [
        DTH.datetime(2001, 9, 11, 8, 46),
        DTH.datetime(2001, 9, 11, 9, 3),
        DTH.datetime(1944, 6, 6, 6, 6, 6, 6),
        DTH.datetime(1984),
        DTH.datetime(1963, 11, 22, 12, 30),
        DTH.datetime(1865, 4, 14, 10),
        DTH.datetime(1881, 7, 2),
        DTH.datetime(1901, 9, 6),
        DTH.datetime(1933, 2, 15),
        DTH.datetime(1912, 10, 14),
        DTH.datetime(1928, 11, 19),
        DTH.datetime(1950, 11, 1),
        DTH.datetime(1835, 1, 30),
        DTH.datetime(1989, 11, 9),
        DTH.datetime(1969, 7, 20, 20, 18),
        DTH.datetime(1977, 8, 16),
        DTH.datetime(1980, 12, 8),
        DTH.datetime(2013, 6, 18),
        DTH.datetime(1998, 9, 28),
        DTH.datetime(1991, 4, 29),
        DTH.datetime(1922, 2, 2),
        DTH.datetime(12),
        DTH.datetime(1030),
        DTH.datetime(1898, 4),
        DTH.datetime(1099, 7, 10) // el cid dies
    ];
    RANDOM_DATES = [
        DTH.datetime(324, 2, 1, 4, 32, 66, 23),
        DTH.datetime(6, 9, 2, 0, 55, 6, 8),
        DTH.datetime(1111, 12, 30, 8, 48, 11, 44),
        DTH.datetime(32, 5, 8, 12, 2, 41, 39),
        DTH.datetime(6, 6, 6, 6, 6, 6, 6),
        DTH.datetime(8, 6, 7, 5, 3, 0, 9),
        DTH.datetime(1251, 3, 18, 6),
        DTH.datetime(1386, 2, 1, 0),
        DTH.datetime(123, 4, 5, 12, 53),
        DTH.datetime(2002, 11, 42, 32),
        DTH.datetime(777, 7, 77, 77, 77),
        DTH.datetime(1, 2, 3, 4, 5, 6, 7),
        DTH.datetime(9999, 12, 30, 30, 30, 30, 30)
    ];
}
function test_difference(dates) {
    for (var i = 0; i < dates.length; i++) {
        for (var j = 0; j < dates.length; j++) {
            var dt1 = dates[i];
            var dt2 = dates[j];
            // console.log( dt1.lte( dt2));
            // console.log( DF.datetime_months_between( dt1, dt2));
            // console.log( DF.dateTime_days_between( dt1, dt2));
            // console.log( DF.dateTime_nanoseconds_between( dt1, dt2));
            dt1.lte(dt2);
            DF.datetime_months_between(dt1, dt2);
            DF.dateTime_days_between(dt1, dt2);
            DF.dateTime_nanoseconds_between(dt1, dt2);
        }
    }
}
var main = function (n) {
    genDates();
    for (var i = 0; i < n; i++) {
        test_difference(HISTORIC_DATES);
        console.log("Done historic " + i);
        test_difference(RANDOM_DATES);
        console.log("Done random " + i);
    }
};
main(10);
