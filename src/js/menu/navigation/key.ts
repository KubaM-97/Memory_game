import { buttons } from "../index";
import { removeClassActive } from "./index";

export function ArrowDown(button: HTMLButtonElement): void{

    removeClassActive();
    
    for(let i=0; i<buttons.length; i++){ 

        if(buttons[i] === button){
            i==2 ? buttons[0].classList.add("active") : buttons[i+1].classList.add("active")
        }

    }
}
export function ArrowUp(button: HTMLButtonElement): void{

    removeClassActive();
    
    for(let i=buttons.length-1; i>=0; i--){

        if(buttons[i] === button){
            i==0 ? buttons[buttons.length-1].classList.add("active") : buttons[i-1].classList.add("active")
        }
    }
}

export function Enter(button: HTMLButtonElement, play: any, options: any, bestScores: any): void{
    const id: string = button.id;
    eval(`${id}()`)
}
