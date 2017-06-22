// this is equivalent to main.rkt
/// <reference path='handlers.ts'/>
/// <reference path='motion.ts'/>
/// <reference path='DataClasses.ts'/>
var replay = function (w0, hist) {
    reset();
    while (hist.length > 0) {
        var curCom = hist[hist.length - 1];
        switch (curCom) {
            case ("(on-tick)"):
                w0 = world_to_world(w0);
                break;
            case ("(stop-when)"):
                var b = is_game_over(w0);
                if (b) {
                    return;
                }
                break;
            default:
                // the string is (on-key "k")
                // the key is the 10th letter
                var theKey = curCom[9] + "";
                w0 = handle_key(w0, theKey);
        }
        hist = hist.splice(0, hist.length - 1);
    }
};
var main = function () {
    var g = new GameConsts();
    var w0 = GameConsts.WORLD;
    var raw_hist = GameConsts.plsAr;
    for (var i = 0; i < 100; i++) {
        replay(w0, raw_hist); // don't need to reverse bc read backwards in loop
        console.log(w0);
    }
};
