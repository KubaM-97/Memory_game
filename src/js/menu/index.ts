// import { menuButtonPlay, menuButtonOptions, menuButtonBestScores, menuButtonToggleSound } from "../variables";
import { toggleAudio } from "./sound";
import { play, options, bestScores, menuMouseNavigation, menuNavigationKeyboard } from "./navigation/index";
import { changeView } from './door';
import { menuButtonPlayAction } from './play';
import { menuButtonOptionsAction } from './options';
import { menuButtonBestScoresAction } from './bestScore';

// menuButtonPlay?.addEventListener("click", play)
// menuButtonOptions?.addEventListener("click", options)
// menuButtonBestScores?.addEventListener("click", bestScores)
// menuButtonToggleSound?.addEventListener("click", toggleAudio);

// export const menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [menuButtonPlay, menuButtonOptions, menuButtonBestScores];

// menuButtons.forEach(button => {
//     button?.addEventListener("mouseover", function(){
//         (this)
//     })
// })


export function menuButtonsService(){
    
 const menuButtonPlay = document?.querySelector("#menu_play") as HTMLButtonElement;
 const menuButtonOptions = document?.querySelector("#menu_options") as HTMLButtonElement;
 const menuButtonBestScores = document?.querySelector("#menu_bestScores") as HTMLButtonElement;
 const menuButtonToggleSound = document?.querySelector(".switch_sound") as HTMLDivElement;
menuButtonToggleSound?.addEventListener("click", toggleAudio);

// if( gamestart istnieje escape nie działa){
// if( gamestart istnieje ){

// }
    const menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [menuButtonPlay, menuButtonOptions, menuButtonBestScores];
    window.addEventListener("keydown", ()=>menuNavigationKeyboard(menuButtons));

    menuButtons.forEach(button => {
        button?.addEventListener("mouseover", function(){
            menuMouseNavigation(this, menuButtons)
        })
    })

    menuButtonPlay?.addEventListener('click', menuButtonPlayAction)
    menuButtonOptions?.addEventListener('click', menuButtonOptionsAction)
    menuButtonBestScores?.addEventListener('click', menuButtonBestScoresAction)
}

export async function backToMenu() {
    await changeView('menu');
    menuButtonsService()
}
