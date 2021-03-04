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
        var gameBoard = document.querySelector("#game_board");
        var card = document.createElement("DIV");
        card.classList.add("card");
        card.style.width = this.width + "px";
        card.style.height = this.height + "px";
        card.style.backgroundImage = "url(./img/HTFLogo.png)";
        card.style.backgroundSize = "cover";
        gameBoard.appendChild(card);
        // console.log(card)
    };
    return Card;
}());
exports.Card = Card;
