#!/usr/bin/env node
var fs = require("fs");
var cp = require("child_process");
var shell = require("shelljs");

if (process.argv.length < 3) {
    console.error("Use: mkbad.js <process ct>");
    process.exit(1);
}

var procCt = +process.argv[2];
var annotations = JSON.parse(fs.readFileSync("annotations.json", "utf8"));
annotations.files = annotations.files.slice(0, annotations.files.length - 1);

// Count the annotations across all files
var annCt = 0;
for (var ai = 0; ai < annotations.files.length; ai++) {
    var file = annotations.files[ai];
    annCt += file.annotations;
}

function bitify(arr) {
    var oChars = [];
    for (var l = 0; l < arr.length; l += 4) {
        var ov = 0;
        for (var s = 0; s < 4; s++) {
            if (arr[l+s])
                ov |= (1<<s);
        }
        oChars.push(ov.toString(16));
    }
    return oChars.reverse().join("");
}

function mangle(anns, then) {
    var annsB = bitify(anns);

    try {
        fs.mkdirSync("tmp-" + annsB);

        // Symlink in runtime files for higgs
        fs.symlinkSync("../runtime", "tmp-" + annsB + "/runtime");
        fs.symlinkSync("../stdlib", "tmp-" + annsB + "/stdlib");
    } catch (ex) {}

    // First mangle the annotations
    var casDone = 0, annsPrefix = 0;
    var cas = new Array(annotations.files.length);
    for (var ai = 0; ai < annotations.files.length; ai++) {
        var file = annotations.files[ai];
        var annsPart = anns.slice(annsPrefix, annsPrefix + file.annotations);
        var annsPartB = bitify(annsPart);
        annsPrefix += file.annotations;
        cas[ai] = cp.spawn("tsc", [
            "--module", "amd", // Not actually used, but necessary for --outFile
            "--annotationMangler", annsPartB,
            "--outFile", "tmp-" + annsB + "/" + file.name,
            file.name]);
        cas[ai].on("close", mangleHandler);
        cas[ai].on("error", ()=>{});
    }

    function mangleHandler() {
        casDone++;
        if (casDone === cas.length) {
            // It's done mangling all of them, now compile them all
            var cbArgs = ["--generateContracts"];
            for (var ai = 0; ai < annotations.files.length; ai++)
                cbArgs.push(annotations.files[ai].name);
            var cb = cp.spawn("tsc", cbArgs, {"cwd": "tmp-" + annsB});
            cb.on("close", then);
            cb.on("error", ()=>{});
        }
    }
}

function run(anns, then) {
    var annsB = bitify(anns);

    // Run it
    var out = "";
    var ca = cp.spawn("higgs", ["../benchmark.js"], {"cwd": "tmp-" + annsB});
    ca.stdout.on("data", (chunk)=>{
        out += chunk.toString("utf8");
    });
    ca.on("close", ()=>{
        cp.spawn("rm", ["-rf", "tmp-" + annsB]).on("close", () => {
            then(+out);
        });
    });
    ca.on("error", ()=>{});
}

// Start with a random set
var curWorst = new Array(annCt);
for (var i = 0; i < annCt; i++)
    curWorst[i] = (Math.random()>0.5);
var curWorstTime = 0;
var lastWorst = curWorst;

function reportWorst(step) {
    console.log(step + ",\"" + bitify(curWorst) + "\"," + curWorstTime);
}

function init() {
    run(curWorst, (time) => {
        if (Number.isNaN(time)) {
            // Didn't work, try another random seed
            for (var i = 0; i < annCt; i++)
                curWorst[i] = (Math.random()>0.5);
            mangle(curWorst, init);

        } else {
            // Start the process
            curWorstTime = time;
            reportWorst(0);
            step(0);

        }
    });
}

mangle(curWorst, init);

// Now walk
function step(stepNo) {
    var nextStepCt = 11;
    var toChange = Math.ceil(Math.pow(0.9, stepNo) * (annCt / 2));
    if (toChange <= 0)
        toChange = 1;
    console.error("Will change " + toChange);

    // Reset our current worst so we never fail to take a step due to a hiccup
    curWorstTime = 0;

    // Generate all our next steps
    var next = new Array(nextStepCt);
    for (var i = 0; i < nextStepCt-1; i++) {
        next[i] = curWorst.slice(0);
        for (var j = 0; j < toChange; j++) {
            var flip = ~~(Math.random()*annCt);
            next[i][flip] = !next[i][flip];
        }
    }
    next[nextStepCt-1] = curWorst.slice(0);

    // Mangle them
    var started = new Array(nextStepCt);
    var finished = new Array(nextStepCt);
    var done = 0;
    for (var i = 0; i < procCt && i < nextStepCt; i++) {
        started[i] = true;
        (function(i) {
            mangle(next[i], ()=>{postMangle(i);});
        })(i);
    }

    function postMangle(i) {
        finished[i] = true;
        done++;

        if (done < nextStepCt) {
            // Still more to do
            for (var j = 0; j < nextStepCt; j++) {
                if (!started[j]) {
                    // This one!
                    started[j] = true;
                    mangle(next[j], ()=>{postMangle(j);});
                    return;
                }
            }
        } else {
            // Last one, do the actual runs
            subStep(0);
        }
    }

    // And run them
    function subStep(subStepNo) {
        run(next[subStepNo], (time) => {
            console.error(bitify(next[subStepNo]) + ": " + time);
            if (time > curWorstTime) {
                curWorstTime = time;
                curWorst = next[subStepNo];
            }

            subStepNo++;
            if (subStepNo < nextStepCt) {
                subStep(subStepNo);
            } else {
                // Report our worst from this step, then move on
                stepNo++;
                reportWorst(stepNo);
                if (stepNo < 100)
                    step(stepNo);
            }
        });
    }
}
