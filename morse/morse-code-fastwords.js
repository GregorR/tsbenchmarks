// adapted from John Clements' Racket implementation
// of the same name.
var fs = require("fs");
var HIGH_WPM = 30;
// class to mimic the freqList data definition
var FreqList = (function () {
    function FreqList() {
        this.theList = [];
    }
    return FreqList;
}());
var isFreqList = function (alist) {
    return alist instanceof FreqList;
};
var matchRegex = function (matchMe, theRegex) {
    var theReturnList = [];
    for (var i = 0; i < matchMe.theList.length; i++) {
        if (theRegex.test(matchMe.theList[i])) {
            theReturnList.push(matchMe.theList[i]);
        }
    }
    return theReturnList;
};
// parses the frequency.rktd file, and turns it into a
// frequency list (FreqList)
var fileToValue = function () {
    var fileName = "./morse-code-trainer-rkt/frequency.rktd";
    var theFile = fs.readFile(fileName, 'utf8', function (err, data) {
        if (err)
            throw err;
        // now, we parse the file to build the freqList
        // console.log(data);
        var re1 = new RegExp('[(|)|\"]', 'g');
        var myData = data.replace(re1, "");
        var myDataSplit = myData.split(" ");
        var freqList = new FreqList();
        for (var i = 0; i < myDataSplit.length; i += 2) {
            freqList.theList.push([myDataSplit[i], myDataSplit[i + 1]]);
        }
        console.log(freqList.theList);
        var quickRegex = new RegExp('a');
        var matchedRegex = matchRegex(freqList, quickRegex);
        console.log(matchedRegex);
    });
};
fileToValue();
