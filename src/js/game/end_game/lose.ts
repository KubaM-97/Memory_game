import { loseVideo, loseSound } from "../../variables";
import { showVideo, hideVideo } from  "./index";
import { backToMenu } from "../menu";
import { menuButtonPlayAction } from "../menu/buttons/play";

export async function losingProcedure(){
    const endScreenLose = document?.querySelector(".buttons_end_lose") as HTMLButtonElement;
    const backMenuButton = endScreenLose?.querySelector(".main_menu") as HTMLButtonElement;
    const tryAgainButton = endScreenLose?.querySelector(".try_again") as HTMLButtonElement;
    
    showVideo(loseVideo);

    loseVideo.addEventListener("ended", showLoseButtons);

    backMenuButton?.addEventListener("click", backToMenu)    
    tryAgainButton?.addEventListener("click", menuButtonPlayAction)
}

function showLoseButtons(){
    hideVideo(loseSound)
        
    const content = document?.querySelector("#page_lose .content") as HTMLDivElement;
    content.style.display = "block";
    content.style.animation = "show 2s";
    content.style.animationFillMode = "forwards";
}
