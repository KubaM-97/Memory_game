import { interfaceCard, Card } from "./../classes/card";
import { readyOptions } from "../menu/options";
import { gameCards } from "../variables";

export const allGameCards: string[] = []

let originCards: string[];
let size: number;
let size_mobile_landscape: number;
let size_mobile_portrait: number;

function getCards(){
    switch(readyOptions.cardsNumber){
        case 16:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
            size = 170;
            size_mobile_landscape = 95;
            size_mobile_portrait = 172;
            break;
        }
        case 20:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
            size = 140;
            size_mobile_landscape = 93;
            size_mobile_portrait = 155;
            break;
        }
        case 24:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
            size = 117;
            size_mobile_landscape = 77;
            size_mobile_portrait = 140;
            break;
        }
    }
}

export async function initGame():Promise<void>{

    
    gameCards.innerHTML = "";

    await getCards()

    allGameCards.splice(0,allGameCards.length);


    while (allGameCards.length < originCards.length*2) {
    
        const i: number = Math.floor(Math.random() * originCards.length);
        const isThereTwoSuchCards: string[] = allGameCards.filter(el => el === originCards[i]);
        if (isThereTwoSuchCards.length == 2) {
            continue
        } else {
            allGameCards.push(originCards[i]);
            const card: interfaceCard = new Card(size, size_mobile_landscape, size_mobile_portrait, 1, originCards[i]);
            card.create();
        }
    
    }
}