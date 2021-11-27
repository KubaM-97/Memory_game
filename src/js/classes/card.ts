import { gameCards } from "../variables";

export interface interfaceCard {
    size: number;
    size_mobile_landscape: number;
    size_mobile_portrait: number;
    index: number;
    character: string,
    create(): void
}
export class Card implements interfaceCard{
    constructor(
        readonly size: number,
        readonly size_mobile_landscape: number,
        readonly size_mobile_portrait: number,
        readonly index: number,
        readonly character: string,
    ){};
    create():void{
        
        const card_reverse = document.createElement("DIV");
        card_reverse.classList.add("card_reverse")
        card_reverse.style.backgroundImage = `background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%);
        `;

        this.changeCardsSize(card_reverse)

        window.addEventListener("resize", ():void=>{
            this.changeCardsSize(card_reverse)
        })
        
        const card = document.createElement("DIV");
        card.classList.add("card")
        card.style.width = `100%`;
        card.style.height = `100%`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        
        card_reverse.appendChild(card);
        const gameCards = document?.querySelector("#game_cards") as HTMLDivElement
        gameCards.appendChild(card_reverse)

    }   
    changeCardsSize(card_reverse: any):void{
        if(window.screen.width < 700){
            card_reverse.style.width = `${this.size_mobile_portrait}px`;
            card_reverse.style.height = `${this.size_mobile_portrait}px`;
        }
        else if(window.screen.width >= 700 && window.screen.width < 1000){
            card_reverse.style.width = `${this.size_mobile_landscape}px`;
            card_reverse.style.height = `${this.size_mobile_landscape}px`;
        }
        else{
            card_reverse.style.width = `${this.size}px`;
            card_reverse.style.height = `${this.size}px`;
        }
    }
}