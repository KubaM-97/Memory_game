import { scoreCounter } from "../variables"
import { gameCards } from "./init_game"

let oneVisible: boolean = false;
let blockRevealMoreThanTwoCards: boolean = false;
let turnCounter: number = 0;
let totalPairs: number = gameCards.length / 2;
let firstCardIndex: number = 0;

//catches all cards
const playableCards: NodeListOf<Element> = document.querySelectorAll(".card")

playableCards.forEach( (playableCard, index) => {
    playableCard.addEventListener("click", function() {

        if ((playableCard as HTMLDivElement).style.opacity !== "0" && blockRevealMoreThanTwoCards == false) {

            blockRevealMoreThanTwoCards = true;
            (playableCard as HTMLDivElement).style.backgroundImage = `url(./images/cards/${gameCards[index]}.png)`

            if (oneVisible == false) {
                firstCardIndex = index;
                oneVisible = true;
                blockRevealMoreThanTwoCards = false
            }
            else {
                console.log(totalPairs)
                turnCounter++;
                scoreCounter.innerHTML = `${turnCounter}`

                if (gameCards[firstCardIndex] == gameCards[index] && firstCardIndex != index) {

                    setTimeout(() => { hitPair(playableCard as HTMLDivElement, playableCards[firstCardIndex] as HTMLDivElement) }, 500);
                    totalPairs--;
                   
                    if (totalPairs == 0) setTimeout( () => { endGame() }, 1000) 

                } else  setTimeout( () => { missedPair(playableCard as HTMLDivElement, playableCards[firstCardIndex] as HTMLDivElement) }, 500); 
                oneVisible = false
            }
        }
    })
})
function hitPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
    card1.style.opacity = "0";
    card2.style.opacity = "0";

    card1.style.cursor = "default";
    card2.style.cursor = "default"; 
    
    blockRevealMoreThanTwoCards = false;
}
function missedPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
    card1.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
    card2.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;

    blockRevealMoreThanTwoCards = false;
}
function endGame(): void{
    alert("win in "+ turnCounter +" moves")
}