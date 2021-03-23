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
    // if(playerTotalScore > 2000){
    //     for(const div in messageParts){
    //         if(div !== "totalPoints"){
    //             messageParts[div].style.animation = "hide 2s";
    //             messageParts[div].style.animationFillMode = "forwards";
    //         } 
    //     }
    //     messageParts.totalPoints.style.position = "static";
    //     messageParts.totalPoints.style.top = "10%"
    //     const totalDescr = messageParts.totalPoints.querySelector(".message_segment_description") as HTMLDivElement;
    //     totalDescr.style.animation = "hide 2s";
    //     totalDescr.style.animationFillMode = "forwards";

    //     const totalScore = document.querySelector("#totalPoints") as HTMLDivElement;
    //     // totalScore.style.animation = "bestScore 2s";
    //     // totalScore.style.animationFillMode = "forwards";
    //     // totalScore.style.bottom = "90%"

    //     // document.querySelector("#totalPoints")!.style.position = "static"
    // }
    // else{
    //     showEndButtons();
    // }
    

})




