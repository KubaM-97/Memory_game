import { scoreCounter, end_screen_message } from "../variables";
import { changeView } from "../menu/door";
import { gameCards } from "./init_game";

let oneVisible: boolean = false;
let blockRevealMoreThanTwoCards: boolean = false;
export let turnCounter: number = 0;
export let totalPairs: number = gameCards.length / 2;
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
export function hitPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
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
async function endGame(){
    await changeView("game_board", "game_end");
    end_screen_message.innerHTML = `You win in ${turnCounter} moves!!! Great job!!!`;
    end_screen_message.style.color = "rgb(57, 233, 57)"
}