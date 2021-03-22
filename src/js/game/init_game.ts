import { interfaceCard, Card } from "./../classes/card";
import { readyOptions } from "../menu/options";
import { gameCardsDiv } from "../variables";

export const gameCards: string[] = []

let originCards: string[];
let size: number;
let size_mobile_screen_landscape: number;
let size_mobile_screen_portrait: number;
function getCards(){
    switch(readyOptions.cardsNumber){
        case 16:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
            size = 170;
            size_mobile_screen_landscape = 95;
            size_mobile_screen_portrait = 172;
            break;
        }
        case 20:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
            size = 140;
            size_mobile_screen_landscape = 93;
            size_mobile_screen_portrait = 155;
            break;
        }
        case 24:{
            originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
            size = 117;
            size_mobile_screen_landscape = 77;
            size_mobile_screen_portrait = 140;
            break;
        }
    }
}
export async function initGame():Promise<void>{

    
    gameCardsDiv.innerHTML = "";

    await getCards()


    gameCards.splice(0,gameCards.length);

    console.log(originCards)
    console.log("Przed initGame: Karty do gry: ",gameCards)

    while (gameCards.length < originCards.length*2) {
    
        const i: number = Math.floor(Math.random() * originCards.length);
        const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[i]);
        if (isThereTwoSuchCards.length == 2) {
            continue
        } else {
            gameCards.push(originCards[i]);
            const card: interfaceCard = new Card(size, size_mobile_screen_landscape, size_mobile_screen_portrait, 1, originCards[i]);
            card.create();
        }
    
    }
    console.log("Po initGame: Karty do gry: ",gameCards)
}