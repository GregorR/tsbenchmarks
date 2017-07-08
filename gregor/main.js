"use strict";
// this file is equivalent to main.rkt
exports.__esModule = true;
var DTH = require("./DateTimeHelpers");
var DF = require("./Difference");
var HISTORIC_DATES;
function genDates() {
    HISTORIC_DATES = [
        DTH.datetime(2001, 9, 11, 8, 46),
        DTH.datetime(2001, 9, 11, 9, 3),
    ];
}
function test_difference(dates) {
    for (var i = 0; i < dates.length; i++) {
        for (var j = 0; j < dates.length; j++) {
            var dt1 = dates[i];
            var dt2 = dates[j];
            console.log(dt1.lte(dt2));
            console.log(DF.datetime_months_between(dt1, dt2));
            console.log(DF.dateTime_days_between(dt1, dt2));
            console.log(DF.dateTime_nanoseconds_between(dt1, dt2));
        }
    }
}
var main = function () {
    genDates();
    test_difference(HISTORIC_DATES);
};
main();
