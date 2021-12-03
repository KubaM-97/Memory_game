
import { backToMenu } from "../menu";
import { menuButtonPlayAction } from "../menu/buttons/play";

export function showVideo(video: HTMLVideoElement){

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
    const mainMenuButton = document?.querySelector(".main_menu") as HTMLDivElement;
    const tryAgainButton = document?.querySelector(".try_again") as HTMLDivElement;

    endScreenLoseButtons.style.display = "flex";
    endScreenLoseButtons.style.animation = "show 2s";
    endScreenLoseButtons.style.animationFillMode = "forwards";
    
    mainMenuButton?.addEventListener("click", backToMenu)
    tryAgainButton?.addEventListener("click", menuButtonPlayAction)
}

export function showEndWinButton(){
    const endScreenWinButton = document?.querySelector(".buttons_end_win") as HTMLDivElement;
    const go = document?.querySelector(".go") as HTMLDivElement;

    endScreenWinButton.style.display = "flex";
    endScreenWinButton.style.animation = "show 2s";
    endScreenWinButton.style.animationFillMode = "forwards";
    go?.addEventListener("click", function(){
        const nickNamePanel = document?.querySelector(".enter_nickname") as HTMLDivElement;
        nickNamePanel.style.display="block";
        nickNamePanel.style.animation = "show 1s"
        nickNamePanel.style.animationFillMode = "forwards"
    })
}



