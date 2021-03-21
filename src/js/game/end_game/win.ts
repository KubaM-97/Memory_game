import { winSound, winVideo, message_lose, messageParts} from "../../variables";
import { showVideo, hideVideo, showEndButtons } from  "../end_game";
import { summary } from  "./summary";
// winningProcedure()
export async function winningProcedure(){
    showVideo(winVideo)
}

winVideo.addEventListener("ended", async function(){

    hideVideo(winSound);

    messageParts.totalPoints.style.display = "flex";

    await summary();
    
    showEndButtons();

})




