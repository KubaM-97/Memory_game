import { play, options, bestScores, switchSoundButton } from "../variables";
import { switchSoundFunction } from "./sound";
import { changeView } from "./door";
import { initGame } from "../game/init_game";
import { mainGame } from "../game/play";
import { startTimer } from  "./../game/timer"; 
import "../game/end_game"
play.addEventListener("click", async () => {
    await initGame(); 
    await mainGame();
    await changeView("game_start", "game_board");
    await startTimer();
})

options.addEventListener("click", function(){
    changeView("game_start", "game_options");
})

bestScores.addEventListener("click", function(){
    changeView("game_start", "game_bestScores");
})

switchSoundButton.addEventListener("click", switchSoundFunction);


