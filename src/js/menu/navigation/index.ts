import { buttons } from "../index";
import { changeView } from "../door";
import { initGame } from "../../game/init_game";
import { mainGame } from "../../game/play";
import { startTimer } from  "../../game/timer"; 
import { gameStart } from  "../../variables";
import { ArrowDown, ArrowUp, Enter } from  "./key";

export async function play(): Promise<void>{
    // await initGame(); 
    // await mainGame();
    await changeView("play.php");
    // await startTimer();
}

export function options(): void{
    changeView("options.php");
}

export function bestScores(): void{
    changeView("bestscores.php");
}


export function windowMouseOver(button: HTMLButtonElement):void{
    removeClassActive()
    button.classList.add("active")
}

export function removeClassActive():void{
    buttons.forEach(button => {
        button.classList.remove("active")
    });
}


export function windowKeyboard(e: KeyboardEvent):void{

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