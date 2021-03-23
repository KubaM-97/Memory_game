import { playButton, optionsButton, bestScoresButton, switchSoundButton } from "../variables";
import { switchSoundFunction } from "./sound";
import { play, options, bestScores, windowMouseOver, windowKeyboard, removeClassActive } from "./navigation";

playButton.addEventListener("click", play)
optionsButton.addEventListener("click", options)
bestScoresButton.addEventListener("click", bestScores)
switchSoundButton.addEventListener("click", switchSoundFunction);


export const buttons: [HTMLButtonElement, HTMLButtonElement, HTMLButtonElement] = [playButton, optionsButton, bestScoresButton];

buttons.forEach(button => {
    button.addEventListener("mouseover", function(){
        windowMouseOver(this)
    })
})

window.addEventListener("keydown", windowKeyboard);