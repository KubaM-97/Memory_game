"use strict";
exports.__esModule = true; 
require("../css/style.css");
//hard, timer, moves_limit, 
var origin_js_1 = require("./origin.js");
var card_1 = require("./classes/card");
var gameCards = [];
var _loop_1 = function () {
    var i = Math.floor(Math.random() * 8);
    var isThereTwoSuchCards = gameCards.filter(function (el) { return el === origin_js_1.originCards[i]; });
    if (isThereTwoSuchCards.length == 2) {
        return "continue";
    }
    else {
        gameCards.push(origin_js_1.originCards[i]);
        var card = new card_1.Card(125, 125, 1, origin_js_1.originCards[i]);
        card.create();
    }
};
while (gameCards.length < 16) {
    _loop_1();
}
var oneVisible = false;
var blockRevealMoreThanTwoCards = false;
var turnCounter = 0;
var totalPairs = gameCards.length / 2;
var firstCardIndex = 0;
var playableCards = document.querySelectorAll(".card");
var score = document.getElementById("score");
playableCards.forEach(function (playableCard, index) {
    playableCard.addEventListener("click", function () {
        if (playableCard.style.opacity !== "0" && blockRevealMoreThanTwoCards == false) {
            blockRevealMoreThanTwoCards = true;
            playableCard.style.backgroundImage = "url(img/" + gameCards[index] + ".png)";
            if (oneVisible == false) {
                firstCardIndex = index;
                oneVisible = true;
                blockRevealMoreThanTwoCards = false;
            }
            else {
                turnCounter++;
                score.innerHTML = "Made moves: " + turnCounter;
                if (gameCards[firstCardIndex] == gameCards[index] && firstCardIndex != index) {
                    setTimeout(function () {
                        playableCard.style.opacity = "0";
                        playableCards[firstCardIndex].style.opacity = "0";
                        playableCard.style.cursor = "default";
                        playableCards[firstCardIndex].style.cursor = "default";
                    }, 500);
                    blockRevealMoreThanTwoCards = false;
                    totalPairs--;
                    if (totalPairs == 0) {
                        setTimeout(function () {
                            alert("win in " + turnCounter + " moves");
                        }, 1000);
                    }
                }
                else {
                    setTimeout(function () {
                        playableCard.style.backgroundImage = "url(img/HTFlogo.png)";
                        playableCards[firstCardIndex].style.backgroundImage = "url(img/HTFlogo.png)";
                        blockRevealMoreThanTwoCards = false;
                    }, 500);
                }
                oneVisible = false;
            }
        }
    });
});
console.log(score);
score.addEventListener("click", function (e) {
    alert(56);
    console.log(e.target.value);
    // if(e.key=="enter"){
    //     alert("ENTER")
    // }
});
