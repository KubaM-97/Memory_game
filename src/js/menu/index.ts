import { play, options, bestScores, switchSoundButton } from "../variables";
import { switchSoundFunction } from "./sound";
import { changeView } from "./door";
import { startTimer } from  "./../game/timer";
import "./options";

play.addEventListener("click", () => startTimer())

options.addEventListener("click", function(){
    changeView("game_start", "game_options")
})

bestScores.addEventListener("click", function(){
    changeView("game_start", "game_bestScores")
})

switchSoundButton.addEventListener("click", switchSoundFunction)


