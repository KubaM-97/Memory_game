import { play, options, bestScores, switchSoundButton } from "../variables";
import { switchSoundFunction } from "./sound";
import { changeView } from "./door";
import { initGame } from "../game/init_game";
import { mainGame } from "../game/play";
import { startTimer } from  "./../game/timer";

import "../game/play"
play.addEventListener("click", async () => {
    await initGame(); 
    await mainGame();
    await startTimer();
})

options.addEventListener("click", function(){
    changeView("game_start", "game_options");
})

bestScores.addEventListener("click", function(){
    changeView("game_start", "game_bestScores");
})

switchSoundButton.addEventListener("click", switchSoundFunction);


