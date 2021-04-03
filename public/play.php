<div id="game_board">
    <div id="game_cards"></div>
    <div id="timer">Time: <br> <span id="timeCounter"></span></div>
    <div id="score">Moves: <br><span id="scoreCounter">0</span></div>
</div>

<?php 

$gameCardsDiv = DOMDocument::getElementById ( "game_cards" );

class Card{
    function __construct($size, $size_mobile_screen_landscape, $size_mobile_screen_portrait, $index, $character){
        $this->size = $size;
        $this->size_mobile_screen_landscape = $size_mobile_screen_landscape;
        $this->size_mobile_screen_portrait = $size_mobile_screen_portrait;
        $this->index = $index;
        $this->character = $character;
    }
    
    function create(){
        
        $card_background = DOMDocument::createElement ( "div" , $value = "" );
        $card_background::setAttribute( "class", "card_background");
        $card_background::setAttribute( "style", "background-image: background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%)");

        $this -> changeCardsSize($card_background);

        
        // window.addEventListener("resize", ():void=>{
        //     this.changeCardsSize(card_background)
        // })

        $card = DOMDocument::createElement ( "div" , $value = "" );
        
        $card::setAttribute( "class", "card");
        $card::setAttribute( "style", "width: 100%");
        $card::setAttribute( "style", "height: 100%");
        $card::setAttribute( "style", "background-image: url(./images/cards/HTFLogo.png)");
        $card::setAttribute( "style", "background-size: cover");
        
        $card_background->appendChild($card);
        $gameCardsDiv->appendChild($card_background)

    }   

    changeCardsSize($card_background){
        // if(window.screen.width < 700){
        //     $card_background::setAttribute( "style", "width:" . this -> size_mobile_screen_portrait."px");
        //     $card_background::setAttribute( "style", "height:" . this -> size_mobile_screen_portrait."px");
        // }
        // elseif(window.screen.width >= 700 && window.screen.width < 1000){
        //     $card_background::setAttribute( "style", "width:" . this -> size_mobile_screen_landscape."px");
        //     $card_background::setAttribute( "style", "height:" . this -> size_mobile_screen_landscape."px");
        // }
        // else{
        //     $card_background::setAttribute( "style", "width:" . this -> size . "px");
        //     $card_background::setAttribute( "style", "height:" . this -> size . "px");
        // }
    }
}















// import { interfaceCard, Card } from "./../classes/card";
// import { readyOptions } from "../menu/options";
// import { gameCardsDiv } from "../variables";

// export const gameCards: string[] = []

// $originCards: string[];
// let size: number;
// let size_mobile_screen_landscape: number;
// let size_mobile_screen_portrait: number;

// function getCards(){
//     switch(readyOptions.cardsNumber){
//         case 16:{
//             originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky"];
//             size = 170;
//             size_mobile_screen_landscape = 95;
//             size_mobile_screen_portrait = 172;
//             break;
//         }
//         case 20:{
//             originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime"];
//             size = 140;
//             size_mobile_screen_landscape = 93;
//             size_mobile_screen_portrait = 155;
//             break;
//         }
//         case 24:{
//             originCards = ["lumpy", "toothy", "petunia", "giggles", "cuddles", "handy", "mole", "flaky", "lifty&shifty", "mime", "nutty", "ruffles"];
//             size = 117;
//             size_mobile_screen_landscape = 77;
//             size_mobile_screen_portrait = 140;
//             break;
//         }
//     }
// }

// export async function initGame():Promise<void>{

    
//     gameCardsDiv.innerHTML = "";

//     await getCards()


//     gameCards.splice(0,gameCards.length);


//     while (gameCards.length < originCards.length*2) {
    
//         const i: number = Math.floor(Math.random() * originCards.length);
//         const isThereTwoSuchCards: string[] = gameCards.filter(el => el === originCards[i]);
//         if (isThereTwoSuchCards.length == 2) {
//             continue
//         } else {
//             gameCards.push(originCards[i]);
//             const card: interfaceCard = new Card(size, size_mobile_screen_landscape, size_mobile_screen_portrait, 1, originCards[i]);
//             card.create();
//         }
    
//     }
// }

?>