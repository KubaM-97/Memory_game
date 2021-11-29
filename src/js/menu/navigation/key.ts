import { menuNavigationKeyboard, removeClassActive } from "./index";

export function arrowDown(button: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void{
    removeClassActive(menuButtons);
    
    for(let i=0; i<menuButtons.length; i++){ 
        if(menuButtons[i] === button){
            i==2 ? menuButtons[0].classList.add("active") : menuButtons[i+1].classList.add("active")
        }
    }
}
export function arrowUp(button: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void{

    removeClassActive(menuButtons);
    
    for(let i=menuButtons.length-1; i>=0; i--){
        if(menuButtons[i] === button){
            i==0 ? menuButtons[menuButtons.length-1].classList.add("active") : menuButtons[i-1].classList.add("active")
        }
    }
}

export function enter(menuButton: HTMLButtonElement, play: Function, options: Function, bestScores: Function): void{
    // window.removeEventListener("keydown", menuNavigationKeyboard);
    if(document.querySelector('#page_menu')){

        const id: string = menuButton.id.replace("menu_", "");
        eval(`${id}()`)
    }
}
