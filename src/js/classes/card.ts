export interface interfaceCard {
    size: number;
    size_mobile_screen_landscape: number;
    size_mobile_screen_portrait: number;
    index: number;
    character: string,
    create(): void
}
export class Card implements interfaceCard{
    constructor(
        readonly size: number,
        readonly size_mobile_screen_landscape: number,
        readonly size_mobile_screen_portrait: number,
        readonly index: number,
        readonly character: string,
    ){};
    create():void{
        
        const gameCards = document.querySelector("#game_cards") as HTMLDivElement;

        const card_background = document.createElement("DIV");
        card_background.classList.add("card_background")
        card_background.style.backgroundImage = `background-image: repeating-linear-gradient(150deg, rgb(227, 228, 228) 5%, rgb(1, 79, 197) 10%);
        `;

        this.changeCardsSize(card_background)

        window.addEventListener("resize", ():void=>{
            this.changeCardsSize(card_background)
        })
        
        const card = document.createElement("DIV");
        card.classList.add("card")
        card.style.width = `100%`;
        card.style.height = `100%`;
        card.style.backgroundImage = `url(./images/cards/HTFLogo.png)`;
        card.style.backgroundSize = `cover`;
        
        card_background.appendChild(card);
        gameCards.appendChild(card_background)

    }   
    changeCardsSize(card_background: any):void{
        if(window.screen.width < 700){
            card_background.style.width = `${this.size_mobile_screen_portrait}px`;
            card_background.style.height = `${this.size_mobile_screen_portrait}px`;
        }
        else if(window.screen.width >= 700 && window.screen.width < 1000){
            card_background.style.width = `${this.size_mobile_screen_landscape}px`;
            card_background.style.height = `${this.size_mobile_screen_landscape}px`;
        }
        else{
            card_background.style.width = `${this.size}px`;
            card_background.style.height = `${this.size}px`;
        }
    }
}