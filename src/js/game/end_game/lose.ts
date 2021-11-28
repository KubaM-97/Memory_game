import { loseVideo, loseSound } from "../../variables";
import { showVideo, hideVideo } from  "./index";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";
import { backToMenu, menuButtonsService } from "../../menu";

export async function losingProcedure(){
    const endScreenLose = document?.querySelector(".buttons_end_lose") as HTMLButtonElement;
    const backMenuButton = endScreenLose?.querySelector(".mainMenu") as HTMLButtonElement;
    const tryAgainButton = endScreenLose?.querySelector(".tryAgain") as HTMLButtonElement;
  
    showVideo(loseVideo)
    loseVideo.addEventListener("ended", function(){
        hideVideo(loseSound)
        
        const content = document?.querySelector(".lose .content") as HTMLDivElement;
        content.style.display = "block";
        content.style.animation = "show 2s";
        content.style.animationFillMode = "forwards";
    })
    backMenuButton?.addEventListener("click", backToMenu)
    
    tryAgainButton?.addEventListener("click", async function(){
        await changeView("game");
        await initGame(); 
        await mainGame();
        await startTimer();
    })
}




