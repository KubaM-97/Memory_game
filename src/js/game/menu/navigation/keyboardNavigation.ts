import { toggleAudio } from "../buttons/sound";
import { play, options, bestScores, removeClassActive } from "./index";

export function menuKeyboardNavigation(e: KeyboardEvent): void {

    const menuButtonActive = document?.querySelector(".menu_button.active") as HTMLButtonElement;

    switch (e.key) {

        case "ArrowDown":
            removeClassActive();
            arrowDown(menuButtonActive);
            break;

        case "ArrowUp":
            removeClassActive();
            arrowUp(menuButtonActive);
            break;

        case "Enter":
            enter(menuButtonActive, play, options, bestScores);
            break;

        case "M":
        case "m":
            toggleAudio();
            break;

        default: null;

    }
}

function arrowDown(button: HTMLButtonElement): void {

    const menuButtons = document?.querySelectorAll("[id^='menu_'") as NodeListOf<HTMLButtonElement>;
    const index = Array.from(menuButtons).findIndex(menuButton => menuButton.isEqualNode(button))
    menuButtons[index === 2 ? 0 : index + 1].classList.add("active")

}

function arrowUp(button: HTMLButtonElement): void {

    const menuButtons = document?.querySelectorAll("[id^='menu_'") as NodeListOf<HTMLButtonElement>;
    const index = Array.from(menuButtons).findIndex(menuButton => menuButton.isEqualNode(button))
    menuButtons[index == 0 ? menuButtons.length - 1 : index - 1].classList.add("active")

}

function enter(menuButton: HTMLButtonElement, play: Function, options: Function, bestScores: Function): void {
    const isPageMenuExists: boolean = !!document.querySelector('#page_menu');
    if (isPageMenuExists) {
        const id: string = menuButton.id.replace("menu_", "");
        eval(`${id}()`)
    }
}
