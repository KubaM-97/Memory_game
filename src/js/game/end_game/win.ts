import { winSound, winVideo,  messageParts, pointsScreen, nicknameScreen, spanPoints, inputPoints, buttonNicknamePoints} from "../../variables";
import { showVideo, hideVideo, showEndButtons, clearPreviousGame } from  "./index";
import {  summary } from  "./summary";
import { changeView } from "../../menu/door";
// winningProcedure()
export async function winningProcedure(){
    clearPreviousGame();
    showVideo(winVideo)
}

winVideo.addEventListener("ended", async function(){

    hideVideo(winSound);

    messageParts.totalPoints.style.display = "flex";
    
    pointsScreen.style.animation = "show 2s";
    const playerTotalScore = await summary();
    if(playerTotalScore > 2000){
        
        pointsScreen.style.animation = "hide 2s";
        pointsScreen.style.animationFillMode = "forwards";

        nicknameScreen.style.display = "block";
        nicknameScreen.style.animation = "show 2s 2s";
        nicknameScreen.style.animationFillMode = "forwards";
        
        spanPoints.innerHTML = "" + playerTotalScore;

        inputPoints.focus()
    }
    else{
        showEndButtons();
    }
    

})



buttonNicknamePoints.addEventListener("click", function(){
    noteBestScore(inputPoints.value)
    changeView("start.php");
    inputPoints.value = "";
    messageParts.totalPoints.style.display = "none";
    nicknameScreen.style.display = "none";
})

function noteBestScore(playerNick: string): void{
    console.log(playerNick);
}

