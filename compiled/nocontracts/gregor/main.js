// this file is similar to main.rkt
// runs the tests
// (but not all the tests equivalent to the original racket tests)
// differences: due to lack of tz library, only one of the 3 test runs from the original 
//				racket is implemented here (test_difference is implemented, but not test_clock or test_iso)
//				instead, this benchmark mainly tests the BigNumber operations that needed 
//				to be implemented bc of the rounding errors occurring (which wasn't a problem
//				in the racket)
"use strict";
exports.__esModule = true;
var DateTimeHelpers_1 = require("./DateTimeHelpers");
var Difference_1 = require("./Difference");
var main;
(function (main_1) {
    var HISTORIC_DATES;
    var RANDOM_DATES;
    function genDates() {
        HISTORIC_DATES = [
            DateTimeHelpers_1.DateTimeHelpers.datetime(2001, 9, 11, 8, 46),
            DateTimeHelpers_1.DateTimeHelpers.datetime(2001, 9, 11, 9, 3),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1944, 6, 6, 6, 6, 6, 6),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1984),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1963, 11, 22, 12, 30),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1865, 4, 14, 10),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1881, 7, 2),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1901, 9, 6),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1933, 2, 15),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1912, 10, 14),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1928, 11, 19),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1950, 11, 1),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1835, 1, 30),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1989, 11, 9),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1969, 7, 20, 20, 18),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1977, 8, 16),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1980, 12, 8),
            DateTimeHelpers_1.DateTimeHelpers.datetime(2013, 6, 18),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1998, 9, 28),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1991, 4, 29),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1922, 2, 2),
            DateTimeHelpers_1.DateTimeHelpers.datetime(12),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1030),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1898, 4),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1099, 7, 10) // el cid dies
        ];
        RANDOM_DATES = [
            DateTimeHelpers_1.DateTimeHelpers.datetime(324, 2, 1, 4, 32, 66, 23),
            DateTimeHelpers_1.DateTimeHelpers.datetime(6, 9, 2, 0, 55, 6, 8),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1111, 12, 30, 8, 48, 11, 44),
            DateTimeHelpers_1.DateTimeHelpers.datetime(32, 5, 8, 12, 2, 41, 39),
            DateTimeHelpers_1.DateTimeHelpers.datetime(6, 6, 6, 6, 6, 6, 6),
            DateTimeHelpers_1.DateTimeHelpers.datetime(8, 6, 7, 5, 3, 0, 9),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1251, 3, 18, 6),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1386, 2, 1, 0),
            DateTimeHelpers_1.DateTimeHelpers.datetime(123, 4, 5, 12, 53),
            DateTimeHelpers_1.DateTimeHelpers.datetime(2002, 11, 42, 32),
            DateTimeHelpers_1.DateTimeHelpers.datetime(777, 7, 77, 77, 77),
            DateTimeHelpers_1.DateTimeHelpers.datetime(1, 2, 3, 4, 5, 6, 7),
            DateTimeHelpers_1.DateTimeHelpers.datetime(9999, 12, 30, 30, 30, 30, 30)
        ];
    }
    function test_difference(dates) {
        for (var i = 0; i < dates.length; i++) {
            for (var j = 0; j < dates.length; j++) {
                var dt1 = dates[i];
                var dt2 = dates[j];
                dt1.lte(dt2);
                Difference_1.Difference.datetime_months_between(dt1, dt2);
                Difference_1.Difference.dateTime_days_between(dt1, dt2);
                Difference_1.Difference.dateTime_nanoseconds_between(dt1, dt2);
            }
        }
    }
    function setup() {
        genDates();
    }
    main_1.setup = setup;
    function main() {
        // Slices are to make this fast enough for simulated annealing
        test_difference(HISTORIC_DATES.slice(0, 2));
        // console.log( "Done historic " + i);
        test_difference(RANDOM_DATES.slice(0, 2));
        // console.log( "Done random " + i);
    }
    main_1.main = main;
    main_1.runs = 1;
})(main = exports.main || (exports.main = {}));
