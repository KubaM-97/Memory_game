import { menuButtonPlayAction } from "../buttons/play";
import { menuButtonOptionsAction } from "../buttons/options";
import { menuButtonBestScoresAction } from "../buttons/bestScore";

export function play(): void {
    menuButtonPlayAction();
}

export function options(): void {
    menuButtonOptionsAction();
}

export function bestScores(): void {
    menuButtonBestScoresAction();
}

export function removeClassActive(): void {
    const menuButtons = document?.querySelectorAll("[id^='menu_'") as NodeListOf<HTMLButtonElement>;
    menuButtons.forEach(menuButton => menuButton?.classList.remove("active") );
}
