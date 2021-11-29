import { changeView } from "../gate";
import { initGame } from "../../game/init_game";
import { mainGame } from "../../game/play";
import { startTimer } from "../../game/timer";
import { arrowDown, arrowUp, enter } from "./key";

export async function play(): Promise<void> {
    await initGame();
    await mainGame();
    await changeView("game");
    await startTimer();
}

export function options(): void {
    changeView("options");
}

export function bestScores(): void {
    changeView("best_scores");
    // window.removeEventListener('keydown', menuNavigationKeyboard)
}


export function menuMouseNavigation(menuButton: HTMLButtonElement, menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void {
    removeClassActive(menuButtons)
    menuButton?.classList.add("active")
}

export function removeClassActive(menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void {
    menuButtons.forEach(menuButton => {
        menuButton?.classList.remove("active")
    });
}


export function menuNavigationKeyboard(menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement]): void {
    // const x = document.querySelector('#game_start') as HTMLDivElement;
    // if (x?.style.display !== 'none') {

    const button = document?.querySelector(".menu_button.active") as HTMLButtonElement;
    // const event: Event = Event;
    switch (event.key) {

        case "ArrowDown":
            arrowDown(button, menuButtons)
            break;

        case "ArrowUp":
            arrowUp(button, menuButtons)
            break;

        case "Enter":
            enter(button, play, options, bestScores)
            break;

        default: null

    }
    // }
}