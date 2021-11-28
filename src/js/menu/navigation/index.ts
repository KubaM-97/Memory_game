import { menuButtons } from "../index";
import { changeView } from "../door";
import { initGame } from "../../game/init_game";
import { mainGame } from "../../game/play";
import { startTimer } from  "../../game/timer"; 
import { gameStart } from  "../../variables";
import { ArrowDown, ArrowUp, Enter } from  "./key";

export async function play(): Promise<void>{
    await initGame(); 
    await mainGame();
    await changeView("game");
    await startTimer();
}

export function options(): void{
    changeView("options");
}

export function bestScores(): void{
    changeView("best_scores");
}


export function menuMouseNavigation(menuButton: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]):void{
    // console.log('yyyyyyyyy', menuButton, menuButton.classList);
    removeClassActive(menuButtons)
    menuButton?.classList.add("active")
}

export function removeClassActive(menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]):void{
    menuButtons.forEach(menuButton => {
        menuButton?.classList.remove("active")
    });
}


export function menuNavigationKeyboard(menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]):void{
    // const gameStart = document?.querySelector("#game_start") as HTMLDivElement
    // if(gameStart.style.display != "none"){
    console.log(event, menuButtons);
    const button = document?.querySelector(".menu_button.active") as HTMLButtonElement;
       console.log(button);
        switch(event.key){

            case "ArrowDown":
                ArrowDown(button, menuButtons)
                break;

            case "ArrowUp":
                ArrowUp(button, menuButtons)
                break;
            
            case "Enter":
                Enter(button, play, options, bestScores)
                break;
            
            default: null

        }
    // }
    
}