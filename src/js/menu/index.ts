import { menuButtonPlay, menuButtonOptions, menuButtonBestScores, menuButtonToggleSound } from "../variables";
import { toggleAudio } from "./sound";
import { play, options, bestScores, menuMouseKeyboard, menuNavigationKeyboard } from "./navigation/index";
import { changeView } from './door';
import { menuButtonPlayAction } from './play';
import { menuButtonOptionsAction } from './options';
import { menuButtonBestScoresAction } from './bestScore';

menuButtonPlay?.addEventListener("click", play)
menuButtonOptions?.addEventListener("click", options)
menuButtonBestScores?.addEventListener("click", bestScores)
menuButtonToggleSound?.addEventListener("click", toggleAudio);

export const menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [menuButtonPlay, menuButtonOptions, menuButtonBestScores];

menuButtons.forEach(button => {
    button?.addEventListener("mouseover", function(){
        (this)
    })
})

window.addEventListener("keydown", menuNavigationKeyboard);

export function menuButtonsService(){
    const menuButtonPlay = document?.querySelector("#menu_play") as HTMLDivElement;
    const menuButtonOptions = document?.querySelector("#menu_options") as HTMLDivElement;
    const menuButtonBestScores = document?.querySelector("#menu_bestScores") as HTMLDivElement;

    menuButtonPlay?.addEventListener('click', menuButtonPlayAction)
    menuButtonOptions?.addEventListener('click', menuButtonOptionsAction)
    menuButtonBestScores?.addEventListener('click', menuButtonBestScoresAction)
}

export async function backToMenu() {
    await changeView('menu');
    menuButtonsService()
}
