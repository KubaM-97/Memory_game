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
    await changeView("game_start", "game_board");
    await startTimer();
}

export function options(): void{
    changeView("game_start", "game_options");
}

export function bestScores(): void{
    changeView("game_start", "game_bestScores");
}


export function windowMouseOver(menuButton: HTMLButtonElement):void{
    removeClassActive()
    menuButton.classList.add("active")
}

export function removeClassActive():void{
    menuButtons.forEach(menuButton => {
        menuButton.classList.remove("active")
    });
}


export function navigationKeyboard(e: KeyboardEvent):void{

    if( gameStart.style.display != "none"){

        const button = document.querySelector(".main_button.active") as HTMLButtonElement;
       
        switch(e.key){

            case "ArrowDown":
                ArrowDown(button)
                break;

            case "ArrowUp":
                ArrowUp(button)
                break;
            
            case "Enter":
                Enter(button, play, options, bestScores)
                break;
            
            default: null

        }
    }
    
}