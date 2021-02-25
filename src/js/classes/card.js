"use strict";
exports.__esModule = true;
exports.Card = void 0;
var Card = /** @class */ (function () {
    function Card(width, height, index, character) {
        this.width = width;
        this.height = height;
        this.index = index;
        this.character = character;
    }
    ;
    Card.prototype.create = function () {
        console.log("created");
    };
    return Card;
}());
exports.Card = Card;
