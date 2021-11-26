import { playMenuButton, optionsMenuButton, bestScoresMenuButton, switchSoundButton } from "../variables";
import { toggleAudio } from "./sound";
import { play, options, bestScores, windowMouseOver, windowKeyboard, removeClassActive } from "./navigation/index";
import "./bestScore";

playMenuButton?.addEventListener("click", play)
optionsMenuButton?.addEventListener("click", options)
bestScoresMenuButton?.addEventListener("click", bestScores)
switchSoundButton?.addEventListener("click", toggleAudio);


export const buttons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [playMenuButton, optionsMenuButton, bestScoresMenuButton];

buttons.forEach(button => {
    button?.addEventListener("mouseover", function(){
        windowMouseOver(this)
    })
})

window.addEventListener("keydown", windowKeyboard);
