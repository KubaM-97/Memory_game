import { buttons } from "./index";
import { changeView } from "./door";
import { initGame } from "../game/init_game";
import { mainGame } from "../game/play";
import { startTimer } from  "./../game/timer"; 

export async function play(){
    await initGame(); 
    await mainGame();
    await changeView("game_start", "game_board");
    await startTimer();
}

export function options(){
    changeView("game_start", "game_options");
}

export function bestScores(){
    changeView("game_start", "game_bestScores");
}


export function windowMouseOver(button: HTMLButtonElement){
    removeClassActive()
    button.classList.add("active")
}

export function removeClassActive(){
    buttons.forEach(button => {
        button.classList.remove("active")
    });
}

export function windowKeyboard(e: KeyboardEvent){
    const button = document.querySelector(".main_button.active") as HTMLButtonElement;

    if(e.key == "ArrowDown") {
        removeClassActive();

        for(let i=0; i<buttons.length; i++){ 

            if(buttons[i] === button){
                i==2 ? buttons[0].classList.add("active") : buttons[i+1].classList.add("active")
            }

        }
    }
    else if(e.key == "ArrowUp") {
        removeClassActive();

        for(let i=buttons.length-1; i>=0; i--){

            if(buttons[i] === button){
                i==0 ? buttons[buttons.length-1].classList.add("active") : buttons[i-1].classList.add("active")
            }
        }

    }
}