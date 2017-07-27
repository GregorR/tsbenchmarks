"use strict";
exports.__esModule = true;
var tetras_1 = require("./tetras");
var Aux;
(function (Aux) {
    // random number generator, seeded as in benchmarks
    var RandGen = (function () {
        function RandGen(s) {
            this.setSeed(s);
        }
        RandGen.prototype.setSeed = function (s) {
            this.seed = s % 2147483647;
            if (this.seed <= 0) {
                this.seed += 2147483646;
            }
            this.random();
        };
        /**
         * Returns a pseudo-random value in range [0, 1).
         */
        RandGen.prototype.random = function () {
            this.seed = (this.seed * 16807) % 2147483647;
            return ((this.seed - 1.0) / 2147483646.0);
        };
        return RandGen;
    }());
    function listPickRandom(ls) {
        var randGen = new RandGen(43453);
        var index = Math.floor(randGen.random() * ls.length);
        return ls[index];
    }
    Aux.listPickRandom = listPickRandom;
    // this is just to stay true to the TypedRacket implementation
    Aux.neg1 = -1;
    Aux.tetraBlocks = [
        tetras_1.Tetras.buildTetraBlocks({ r: 0, g: 0, b: 0 }, 1 / 2, -3 / 2, 0, -1, 0, -2, 1, -1, 1, -2),
        tetras_1.Tetras.buildTetraBlocks({ r: 0, g: 0, b: 1 }, 1, -1, 0, -1, 1, -1, 2, -1, 3, -1),
        tetras_1.Tetras.buildTetraBlocks({ r: 0, g: 1, b: 0 }, 1, -1, 0, -1, 1, -1, 2, -1, 2, -2),
        tetras_1.Tetras.buildTetraBlocks({ r: 1, g: 0, b: 0 }, 1, -1, 0, -1, 1, -1, 2, -1, 0, -2),
        tetras_1.Tetras.buildTetraBlocks({ r: 0, g: 1, b: 1 }, 1, -1, 0, -1, 1, -1, 2, -1, 1, -2),
        tetras_1.Tetras.buildTetraBlocks({ r: 1, g: 1, b: 0 }, 1, -1, 0, -1, 1, -1, 1, -2, 2, -2),
        tetras_1.Tetras.buildTetraBlocks({ r: 1, g: 0, b: 1 }, 1, -1, 0, -2, 1, -2, 1, -1, 2, -1)
    ];
})(Aux = exports.Aux || (exports.Aux = {}));
