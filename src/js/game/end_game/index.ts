
import { timer, messageParts, end_screen_message, endScreenWinButton, mainMenu, tryAgain } from "../../variables";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";

export async function showVideo(video: HTMLVideoElement){

    // await changeView("game_board", "game_end"); 
    const endScreenLoseButtons = document?.querySelector(".buttons_end_lose") as HTMLDivElement;
    
    // endScreenLoseButtons.style.display = "none";
    const divVideo = document?.querySelector(".video") as HTMLDivElement;

    divVideo.style.display = "block";
    divVideo.appendChild(video);
    divVideo.style.animation = "show 2s";

    video.play();
    video.playbackRate = 1.4;

        
}

export function hideVideo(sound:HTMLAudioElement){

    sound.play();
    const divVideo = document?.querySelector(".video") as HTMLDivElement;

    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";

}

export function showEndLoseButtons(){
    const endScreenLoseButtons = document?.querySelector(".buttons_end_lose") as HTMLDivElement;

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
    changeView("menu");
    // endScreenLoseButtons.style.display = "none";
})

tryAgain?.addEventListener("click", async function(){
    await initGame(); 
    await mainGame();
    await changeView("game");
    await startTimer();
})

