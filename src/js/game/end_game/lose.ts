import { lose, timeCounter, loseVideo, loseSound, message_lose, end_screen_message, end_screen_lose_buttons, endScreenLose, endScreenLoseMM, endScreenLoseTA } from "../../variables";
import { showVideo, hideVideo,  showEndLoseButtons, clearPreviousGame } from  "./index";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";
// losingProcedure()
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
    // end_screen_lose_buttons.style.display = "flex";
    // end_screen_lose_buttons.style.animation = "show 2s";
    // end_screen_lose_buttons.style.animationFillMode = "forwards";
    message_lose.style.display = "flex";
    message_lose.style.animation = "show 2s";
    message_lose.style.animationFillMode = "forwards";

    // showEndLoseButtons();
    
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
