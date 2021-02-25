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
        
        const gameBoard = document.querySelector("#game_board") as HTMLDivElement;

        const card = document.createElement("DIV");
        card.classList.add("card")
        card.style.width = `${this.width}px`;
        card.style.height = `${this.height}px`;
        card.style.backgroundImage = `url(./img/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        
        gameBoard.appendChild(card)
        // console.log(card)
    }   
}