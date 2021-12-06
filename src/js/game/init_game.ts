import { interfaceCard, Card } from "./../classes/card";
import { selectedOptions } from "./menu/buttons/options";

export const allGameCards: string[] = []

let originCards: string[];
let size: number;
let size_mobile_landscape: number;
let size_mobile_portrait: number;

function getCards(){
    switch(selectedOptions.cardsNumber){
        case 16:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
            size = 170;
            // size_mobile_landscape = 100;
            size_mobile_portrait = 85;
            break;
        }
        case 20:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
            size = 140;
            // size_mobile_landscape = 93;
            size_mobile_portrait = 85;
            break;
        }
        case 24:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
            size = 117;
            // size_mobile_landscape = 77;
            size_mobile_portrait = 80;
            break;
        }
    }
}

export async function initGame():Promise<void>{

    const gameCards = document?.querySelector("#game_cards") as HTMLDivElement;
    
    gameCards.innerHTML = "";

    await getCards()

    allGameCards.splice(0,allGameCards.length);

    while (allGameCards.length < originCards.length*2) {
    
        const i: number = Math.floor(Math.random() * originCards.length);
        const isThereTwoSameCards: string[] = allGameCards.filter(el => el === originCards[i]);
        if (isThereTwoSameCards.length == 2) {
            continue
        } else {
            allGameCards.push(originCards[i]);
            const card: interfaceCard = new Card(size, size_mobile_landscape, size_mobile_portrait, 1, originCards[i]);
            card.create();
        }
    
    }
}