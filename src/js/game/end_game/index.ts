
import { timer, divVideo, messageLose, messageParts, end_screen_message, endScreenLoseButtons, endScreenWinButton, mainMenu, tryAgain } from "../../variables";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";

export function clearPreviousGame(){
    divVideo.innerHTML = "";
    messageLose.style.display = "none";
    for(const div in messageParts){
        messageParts[div].style.display = "none";
    }
}

export async function showVideo(video: HTMLVideoElement){

    await changeView("game_board", "game_end");
    
    endScreenLoseButtons.style.display = "none";

    divVideo.style.display = "block";
    divVideo.appendChild(video);
    divVideo.style.animation = "show 2s";

    video.play();
    video.playbackRate = 1.4;

    timer.style.animation = "none";
        
}

export function hideVideo(sound:HTMLAudioElement){

    sound.play();

    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";

}

export function showEndLoseButtons(){
    endScreenLoseButtons.style.display = "flex";
    endScreenLoseButtons.style.animation = "show 2s";
    endScreenLoseButtons.style.animationFillMode = "forwards";
}

export function showEndWinButton(){
    endScreenWinButton.style.display = "flex";
    endScreenWinButton.style.animation = "show 2s";
    endScreenWinButton.style.animationFillMode = "forwards";
}

mainMenu?.addEventListener("click", function(){
    changeView("game_end", "game_start");
    endScreenLoseButtons.style.display = "none";
})

tryAgain?.addEventListener("click", async function(){
    await initGame(); 
    await mainGame();
    await changeView("game_start", "game_board");
    await startTimer();
})

