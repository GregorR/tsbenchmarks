"use strict";
exports.__esModule = true;
var data_1 = require("./data");
var Label;
(function (Label) {
    // all values are considered possible label elements
    function isLabelElement(x) {
        return true;
    }
    // use built in JS equality to test
    function isLabelElementEqual(x, y) {
        return x == y;
    }
    var sentinelFlag = false;
    // sentinels are # or $, they are inserted at the end of the strings
    function makeSentinel() {
        sentinelFlag = !sentinelFlag;
        if (sentinelFlag) {
            return "#";
        }
        else {
            return "$";
        }
    }
    function isSentinel(datum) {
        return (datum == "#") || (datum == "$");
    }
    function catenateStrings(inVals) {
        var ret = "";
        for (var i = 0; i < inVals.length; i++) {
            ret += inVals[i];
        }
        return ret;
    }
    function vectorToLabel(inVal) {
        var theDatum = catenateStrings(inVal);
        return new data_1.Data.Label(theDatum, 0, theDatum.length);
    }
    Label.vectorToLabel = vectorToLabel;
    // stick a sentinel on the end of the string
    function vectorToLabelWithSentinel(inVal) {
        var theDatum = catenateStrings(inVal);
        return new data_1.Data.Label(theDatum + makeSentinel(), 0, theDatum.length);
    }
    Label.vectorToLabelWithSentinel = vectorToLabelWithSentinel;
    function stringToLabel(inVal) {
        return new data_1.Data.Label(inVal, 0, inVal.length);
    }
    Label.stringToLabel = stringToLabel;
    function stringToLabelWithSentinel(inVal) {
        return new data_1.Data.Label(inVal + makeSentinel(), 0, inVal.length + 1);
    }
    Label.stringToLabelWithSentinel = stringToLabelWithSentinel;
})(Label = exports.Label || (exports.Label = {}));
