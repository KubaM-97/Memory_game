import { menuButtonPlay, menuButtonOptions, menuButtonBestScores, menuButtonToggleSound } from "../variables";
import { toggleAudio } from "./sound";
import { play, options, bestScores, windowMouseOver, navigationKeyboard } from "./navigation/index";

menuButtonPlay?.addEventListener("click", play)
menuButtonOptions?.addEventListener("click", options)
menuButtonBestScores?.addEventListener("click", bestScores)
menuButtonToggleSound?.addEventListener("click", toggleAudio);

export const menuButtons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [menuButtonPlay, menuButtonOptions, menuButtonBestScores];

menuButtons.forEach(button => {
    button?.addEventListener("mouseover", function(){
        windowMouseOver(this)
    })
})

window.addEventListener("keydown", navigationKeyboard);
