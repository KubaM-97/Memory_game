import { scoreCounter, cardSound, winSound, winVideo, divVideo, end_screen_message, end_screen_buttons } from "../variables";
import { changeView } from "../menu/door";
import { gameCards } from "./init_game";

let oneVisible: boolean = false;
let blockRevealMoreThanTwoCards: boolean = false;
export let turnCounter: number = 0;
export let totalPairs: number = gameCards.length / 2;
let firstCardIndex: number = 0;

export function mainGame(){
    
    //catches all cards
    const playableCardsBackground: NodeListOf<Element> = document.querySelectorAll(".card_background");
    const playableCards: NodeListOf<Element> = document.querySelectorAll(".card");
    
    playableCards.forEach( (playableCard, index) => {
        
        playableCard.addEventListener("click", function(this: any) {
    
            if ((playableCard as HTMLDivElement).style.opacity !== "0" && blockRevealMoreThanTwoCards == false) {
    
                cardSound.play();
                blockRevealMoreThanTwoCards = true;
                (playableCard as HTMLDivElement).style.backgroundImage = `url(./images/cards/${gameCards[index]}.png)`
    
                if (oneVisible == false) {
                    firstCardIndex = index;
                    oneVisible = true;
                    blockRevealMoreThanTwoCards = false
                }
                else {
                    turnCounter++;
                    scoreCounter.innerHTML = `${turnCounter}`
    
                    if (gameCards[firstCardIndex] == gameCards[index] && firstCardIndex != index) {
    
                        setTimeout(() => { hitPair(playableCardsBackground[index] as HTMLDivElement, playableCardsBackground[firstCardIndex] as HTMLDivElement) }, 500);
                        
                        totalPairs--;
                       
                        if (totalPairs == 0) setTimeout( () => { endGame() }, 1000) 
    
                    } else  setTimeout( () => { missedPair(playableCard as HTMLDivElement, playableCards[firstCardIndex] as HTMLDivElement) }, 500); 
                    oneVisible = false
                }
            }
        })
    })
}

export function hitPair(card1: HTMLDivElement, card2: HTMLDivElement): void{
    
    blockRevealMoreThanTwoCards = false;
    
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

    blockRevealMoreThanTwoCards = false;
}
async function endGame(){
    await changeView("game_board", "game_end");



    end_screen_message.innerHTML = ``;
    end_screen_buttons.style.display = "none";

    divVideo.style.display = "block";
    divVideo.appendChild(winVideo);
    divVideo.style.animation = "show 2s";

    winVideo.play();
    winVideo.muted = true;
    winVideo.playbackRate = 0.7;

    
}

winVideo.addEventListener("ended", function(){
    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";
    setTimeout(()=>{

        end_screen_message.innerHTML = `You win in ${turnCounter} moves!!! Great job!!!`;
        end_screen_message.style.color = "rgb(57, 233, 57)"
        end_screen_message.style.animation = "show 2s";
        end_screen_message.style.animationFillMode = "forwards";

        end_screen_buttons.style.display = "flex";
        end_screen_buttons.style.animation = "show 2s";
        end_screen_buttons.style.animationFillMode = "forwards";
        
    },800)
})