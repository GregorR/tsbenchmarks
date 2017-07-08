"use strict";
exports.__esModule = true;
var data = require("./data");
// all values are considered possible label elements
function isLabelElement(x) {
    return true;
}
// use built in JS equality to test
function isLabelElementEqual(x, y) {
    return x == y;
}
var sentinelFlag = false;
// for now, # will be our sentinel character
function makeSentinel() {
    sentinelFlag = !sentinelFlag;
    if (sentinelFlag) {
        return "#";
    }
    else {
        return "$";
    }
}
// not sure what the point of this is
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
    return new data.Label(theDatum, 0, theDatum.length);
}
exports.vectorToLabel = vectorToLabel;
// stick a sentinel on the end of the character
function vectorToLabelWithSentinel(inVal) {
    var theDatum = catenateStrings(inVal);
    return new data.Label(theDatum + makeSentinel(), 0, theDatum.length + 1);
}
exports.vectorToLabelWithSentinel = vectorToLabelWithSentinel;
function stringToLabel(inVal) {
    return new data.Label(inVal, 0, inVal.length);
}
exports.stringToLabel = stringToLabel;
function stringToLabelWithSentinel(inVal) {
    return new data.Label(inVal + makeSentinel(), 0, inVal.length + 1);
}
exports.stringToLabelWithSentinel = stringToLabelWithSentinel;
