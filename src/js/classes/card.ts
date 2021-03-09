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

        const card_background = document.createElement("DIV");
        card_background.classList.add("card_background")
        card_background.style.width = `${this.width}px`;
        card_background.style.height = `${this.height}px`;
        card_background.style.backgroundImage = `background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%);
        `;

        const card = document.createElement("DIV");
        card.classList.add("card")
        card.style.width = `100%`;
        card.style.height = `100%`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        
        card_background.appendChild(card);
        gameCards.appendChild(card_background)

    }   
}