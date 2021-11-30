import { changeView } from '../gate';

import { menuButtonPlayAction } from './buttons/play';
import { menuButtonOptionsAction } from './buttons/options';
import { menuButtonBestScoresAction } from './buttons/bestScore';
import { toggleAudio } from "./buttons/sound";

import { menuKeyboardNavigation } from "./navigation/keyboardNavigation";
import { menuMouseNavigation } from "./navigation/mouseNavigation";

export function menuButtonsService(): void {

    const menuButtonPlay = document?.querySelector("#menu_play") as HTMLButtonElement;
    const menuButtonOptions = document?.querySelector("#menu_options") as HTMLButtonElement;
    const menuButtonBestScores = document?.querySelector("#menu_bestScores") as HTMLButtonElement;
    const menuButtonToggleSound = document?.querySelector(".switch_sound") as HTMLDivElement;
    
    menuButtonPlay?.addEventListener('click', menuButtonPlayAction);
    menuButtonOptions?.addEventListener('click', menuButtonOptionsAction);
    menuButtonBestScores?.addEventListener('click', menuButtonBestScoresAction);
    menuButtonToggleSound?.addEventListener("click", toggleAudio);

    menuButtonPlay?.addEventListener('mouseover', () => menuMouseNavigation(menuButtonPlay));
    menuButtonOptions?.addEventListener('mouseover', () => menuMouseNavigation(menuButtonOptions));
    menuButtonBestScores?.addEventListener('mouseover', () => menuMouseNavigation(menuButtonBestScores));

    window.addEventListener("keydown", menuKeyboardNavigation);
    
}

export async function backToMenu(): Promise<void> {
    const isPagePlayExists: boolean = !!document.querySelector('#page_play')
    const isPageOptionsExists: boolean = !!document.querySelector('#page_options')
    const isPageBestScoresExists: boolean = !!document.querySelector('#page_best_scores')

    if (isPagePlayExists || isPageOptionsExists || isPageBestScoresExists) {
        await changeView('menu');
        menuButtonsService()
    }
}
