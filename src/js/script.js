"use strict";
exports.__esModule = true;
var card_1 = require("./classes/card");
var card1 = new card_1.Card(150, 250, 1, "lumpy");
console.log(card1.create());
// const aa: Card = {
//     width: 150,
//     height: 250,
//     index: 1,
//     character: "lumpy"
// } 
// console.log(aa)
// console.log(aa)
// console.log(aa)
// console.log(aa)
// console.log(aa)
// const gameCards: string[] = []
// let output: string = ""
// while (gameCards.length < 16) {
//     const index: number = Math.floor(Math.random() * 8)
//     const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[index])
//     if (isThereTwoSuchCards.length == 2) {
//         continue
//     } else {
//         gameCards.push(originCards[index])
//         output += `<div class="card"></div>`
//     }
// }
// const game: any = document.getElementById("game")
// game.innerHTML = output
// const card: any = document.querySelectorAll(".card")
// let pair: boolean = false
// let oneVisible: boolean = false
// let index1: any;
// let letRevealCard: boolean = true;
// let blockRevealMoreThanTwoCards: boolean = false
// let turnCounter: number = 0;
// let totalPairs: number = gameCards.length / 2
// interface ICard {
//     backgroundImage: string;
//     backgroundSize: string
// }
// for (let index2 = 0; index2 < card.length; index2++) {
//     card[index2].style.backgroundImage = "url(images/HTFlogo.png)"
//     card[index2].style.backgroundSize = "cover"
//     card[index2].addEventListener("click", function () {
//         if (this.style.opacity !== 0 && blockRevealMoreThanTwoCards == false) {
//             blockRevealMoreThanTwoCards = true
//             card[index2].style.backgroundImage = `url(images/${gameCards[index2]}.png)`
//             if (oneVisible == false) {
//                 index1 = index2
//                 oneVisible = true;
//                 blockRevealMoreThanTwoCards = false
//             } else {
//                 turnCounter++;
//                 document.getElementById("score").innerHTML = `Made moves: ${turnCounter}`
//                 if (gameCards[index1] == gameCards[index2] && index1 != index2) {
//                     setTimeout(() => {
//                         card[index1].style.opacity = 0
//                         card[index2].style.opacity = 0
//                         card[index1].style.cursor = "default"
//                         card[index2].style.cursor = "default"
//                     }, 500)
//                     blockRevealMoreThanTwoCards = false;
//                     totalPairs--
//                     if (totalPairs == 0) {
//                         setTimeout(()=>{
//                             alert("winner")
//                         }, 1000)
//                     }
//                 } else {
//                     setTimeout(() => {
//                         card[index1].style.backgroundImage = `url(images/HTFlogo.png)`
//                         card[index2].style.backgroundImage = `url(images/HTFlogo.png)`
//                         blockRevealMoreThanTwoCards = false
//                     }, 500)
//                 }
//                 oneVisible = false
//             }
//         }
//     })
// }
