export interface interfaceCard {
    width: number;
    height: number;
    index: number;
    character: string,
    create(): void
}
export class Card implements interfaceCard{
    constructor(
        readonly width: number,
        readonly height: number,
        readonly index: number,
        readonly character: string,
    ){};
    create(){
        
        const gameCards = document.querySelector("#game_cards") as HTMLDivElement;

        const card = document.createElement("DIV");
        card.classList.add("card")
        card.style.width = `${this.width}px`;
        card.style.height = `${this.height}px`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        
        gameCards.appendChild(card)
    }   
}