import { lose, timeCounter, loseVideo, loseSound, messageLose, end_screen_message, endScreenLoseButtons, endScreenLose, endScreenLoseMM, endScreenLoseTA } from "../../variables";
import { showVideo, hideVideo, clearPreviousGame } from  "./index";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";

export async function losingProcedure(){
    lose.style.display = 'block'
    timeCounter.innerHTML = "0";
    clearPreviousGame();
    showVideo(loseVideo)
}

loseVideo.addEventListener("ended", function(){

    hideVideo(loseSound)
    
    endScreenLose.style.display = "flex";
    endScreenLose.style.animation = "show 2s";
    endScreenLose.style.animationFillMode = "forwards";
    messageLose.style.display = "flex";
    messageLose.style.animation = "show 2s";
    messageLose.style.animationFillMode = "forwards";
    
})

endScreenLoseMM.addEventListener("click", function(){
    changeView("game_end", "game_start");
    endScreenLose.style.display = "none";
})

endScreenLoseTA.addEventListener("click", async function(){
    await initGame(); 
    await mainGame();
    await changeView("game_start", "game_board");
    await startTimer();
    endScreenLose.style.display = "none";

})
