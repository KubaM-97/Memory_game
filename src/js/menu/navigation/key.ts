import { menuButtons } from "../index";
import { removeClassActive } from "./index";

export function ArrowDown(button: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void{
console.log('arrd', menuButtons.length, menuButtons[0]);
    removeClassActive(menuButtons);
    
    for(let i=0; i<menuButtons.length; i++){ 
        if(menuButtons[i] === button){
            i==2 ? menuButtons[0].classList.add("active") : menuButtons[i+1].classList.add("active")
        }
    }
}
export function ArrowUp(button: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void{

    removeClassActive(menuButtons);
    
    for(let i=menuButtons.length-1; i>=0; i--){
        if(menuButtons[i] === button){
            i==0 ? menuButtons[menuButtons.length-1].classList.add("active") : menuButtons[i-1].classList.add("active")
        }
    }
}

export function Enter(menuButton: HTMLButtonElement, play: any, options: any, bestScores: any): void{
    const id: string = menuButton.id.replace("menu_", "");
    eval(`${id}()`)
}
