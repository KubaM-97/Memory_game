import { cardSound } from "../variables";
import { allGameCards } from "./init_game";
import { winningProcedure } from "./end_game/win";

let oneVisible: boolean = false;
let blockRevealCard: boolean = false;
export let turnCounter: number = 0;
export let totalPairs: number;
let firstCardIndex: number = 0;

export function mainGame(){
    turnCounter = 0;
    const scoreCounter = document?.getElementById("scoreCounter") as HTMLDivElement

    scoreCounter.innerHTML = `${turnCounter}`
    
    totalPairs = allGameCards.length / 2

    // gets all cards
    const playableCardsBackground: NodeListOf<Element> = document.querySelectorAll(".card_reverse");
    const playableCards: NodeListOf<Element> = document.querySelectorAll(".card");
    
    playableCards.forEach( (playableCard, index) => {
        
        playableCard.addEventListener("click", function(this: any) {
    
            if ((playableCard as HTMLDivElement).style.opacity !== "0" && blockRevealCard == false) {
    
                cardSound.play();
                blockRevealCard = true;
                (playableCard as HTMLDivElement).style.backgroundImage = `url(./images/cards/${allGameCards[index]}.png)`
    
                if (oneVisible == false) {
                    firstCardIndex = index;
                    oneVisible = true;
                    blockRevealCard = false
                }
                else {
                    turnCounter++;
                    scoreCounter.innerHTML = `${turnCounter}`
    
                    if (allGameCards[firstCardIndex] == allGameCards[index] && firstCardIndex != index) {
    
                        setTimeout(() => { hitPair(playableCardsBackground[index] as HTMLDivElement, playableCardsBackground[firstCardIndex] as HTMLDivElement) }, 500);
                        
                        totalPairs--;
                        if (totalPairs == 0) setTimeout( () => { winningProcedure() }, 1000) 
    
                    } else  setTimeout( () => { missedPair(playableCard as HTMLDivElement, playableCards[firstCardIndex] as HTMLDivElement) }, 500); 
                    oneVisible = false
                }
            }
        })
    })
}

function hitPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
    
    blockRevealCard = false;
    
    card1.style.opacity = "0";
    card2.style.opacity = "0"; 

    (card1.children[0] as HTMLDivElement).style.opacity = "0";
    (card2.children[0] as HTMLDivElement).style.opacity = "0";

    card1.style.cursor = "default";
    card2.style.cursor = "default"; 
    
}
function missedPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
    card1.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
    card2.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;

    blockRevealCard = false;
}
