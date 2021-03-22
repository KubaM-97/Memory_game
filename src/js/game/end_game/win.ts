import { winSound, winVideo, message_lose, messageParts} from "../../variables";
import { showVideo, hideVideo, showEndButtons, clearPreviousGame } from  "./index";
import { hideAndClearSummarize, summary } from  "./summary";
// winningProcedure()
export async function winningProcedure(){
    clearPreviousGame();
    showVideo(winVideo)
}

winVideo.addEventListener("ended", async function(){

    hideVideo(winSound);

    messageParts.totalPoints.style.display = "flex";
    hideAndClearSummarize();
    const playerTotalScore = await summary();
    if(playerTotalScore > 2000){
        alert("Best Score")
    }
    else{
        showEndButtons();
    }
    

})




