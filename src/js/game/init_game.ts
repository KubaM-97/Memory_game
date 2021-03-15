import { interfaceCard, Card } from "./../classes/card";
import { readyOptions } from "../menu/options";

export const gameCards: string[] = []

let originCards: string[];
function getCards(){
    switch(readyOptions.cardsNumber){
        case 16:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"]
            break;
        }
        case 20:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"]
            break;
        }
        case 24:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"]
            break;
        }
    }
}
export async function initGame():Promise<void>{

    await getCards()
        
    while (gameCards.length < originCards.length*2) {
    
        const i: number = Math.floor(Math.random() * originCards.length)
        const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[i])
        if (isThereTwoSuchCards.length == 2) {
            continue
        } else {
            gameCards.push(originCards[i])
            const card: interfaceCard = new Card(170, 170, 1, originCards[i])
            card.create()
        }
    
    }
    console.log(gameCards)
}