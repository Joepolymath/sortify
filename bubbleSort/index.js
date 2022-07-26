"use strict";
// bubble sort algorithm
exports.__esModule = true;
exports.Bubble = void 0;
var Bubble = /** @class */ (function () {
    function Bubble() {
    }
    Bubble.prototype.sort = function (array) {
        var noSwaps;
        for (var i = array.length; i > 0; i--) {
            noSwaps = true;
            for (var j = 0; j < i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // swapping
                    var temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                    noSwaps = false;
                }
            }
            if (noSwaps)
                break;
        }
        return array;
    };
    return Bubble;
}());
exports.Bubble = Bubble;
