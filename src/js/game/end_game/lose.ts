import { timeCounter, loseVideo, loseSound, message_lose, end_screen_message } from "../../variables";
import { showVideo, hideVideo,  showEndButtons, clearPreviousGame } from  "./index";
export async function losingProcedure(){
    

    timeCounter.innerHTML = "0";
    clearPreviousGame();
    
    showVideo(loseVideo)
}

loseVideo.addEventListener("ended", function(){

    hideVideo(loseSound)
    
    message_lose.style.display = "flex";
    message_lose.style.animation = "show 2s";
    message_lose.style.animationFillMode = "forwards";

    showEndButtons();
    
})