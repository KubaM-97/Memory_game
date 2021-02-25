import "../css/style.css";

//hard, timer, moves_limit, 
import { originCards } from "./origin.js"
import { interfaceCard, Card } from "./classes/card"


const gameCards: string[] = []

while (gameCards.length < 16) {

    const i: number = Math.floor(Math.random() * 8)
    const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[i])
    if (isThereTwoSuchCards.length == 2) {
        continue
    } else {
        gameCards.push(originCards[i])
        const card: interfaceCard = new Card(125, 125, 1, originCards[i])
        card.create()
    }

}


let oneVisible: boolean = false;
let blockRevealMoreThanTwoCards: boolean = false;
let turnCounter: number = 0;
let totalPairs: number = gameCards.length / 2;
let firstCardIndex: number = 0;

const playableCards: NodeListOf<Element> = document.querySelectorAll(".card")
const score = document.getElementById("score") as HTMLDivElement

playableCards.forEach( (playableCard, index) => {
    playableCard.addEventListener("click", function() {

        if ((playableCard as HTMLDivElement).style.opacity !== "0" && blockRevealMoreThanTwoCards == false) {
            blockRevealMoreThanTwoCards = true;
            (playableCard as HTMLDivElement).style.backgroundImage = `url(img/${gameCards[index]}.png)`
            if (oneVisible == false) {
                firstCardIndex = index;
                oneVisible = true;
                blockRevealMoreThanTwoCards = false
            }
            else {
                turnCounter++;
                score.innerHTML = `Made moves: ${turnCounter}`

                if (gameCards[firstCardIndex] == gameCards[index] && firstCardIndex != index) {
                    setTimeout(() => {
                        (playableCard as HTMLDivElement).style.opacity = "0";
                        (playableCards[firstCardIndex] as HTMLDivElement).style.opacity = "0";
                        (playableCard as HTMLDivElement).style.cursor = "default";
                        (playableCards[firstCardIndex] as HTMLDivElement).style.cursor = "default";
                    }, 500)
                    blockRevealMoreThanTwoCards = false;

                    totalPairs--

                    if (totalPairs == 0) {
                        setTimeout(()=>{
                            alert("win in "+ turnCounter +" moves")
                        }, 1000)
                    }
                } else {
                    setTimeout(() => {
                        (playableCard as HTMLDivElement).style.backgroundImage = `url(img/HTFlogo.png)`;
                        (playableCards[firstCardIndex] as HTMLDivElement).style.backgroundImage = `url(img/HTFlogo.png)`

                        blockRevealMoreThanTwoCards = false
                    }, 500)
                }
                oneVisible = false
            }
        }
    })
})
