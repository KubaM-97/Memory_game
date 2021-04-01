
import { timer, divVideo, message_lose, messageParts, end_screen_message, end_screen_buttons, main_menu, try_again } from "../../variables";
import { changeView } from "../../menu/door";
import { startTimer } from  ".././timer";
import { initGame } from ".././init_game";
import { mainGame } from ".././play";

export function clearPreviousGame(){
    divVideo.innerHTML = "";
    message_lose.style.display = "none";
    for(const div in messageParts){
        messageParts[div].style.display = "none";
    }
}

export async function showVideo(video: HTMLVideoElement){

    await changeView("game_board", "game_end");
    
    end_screen_buttons.style.display = "none";

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

export function showEndButtons(){
    end_screen_buttons.style.display = "flex";
    end_screen_buttons.style.animation = "show 2s";
    end_screen_buttons.style.animationFillMode = "forwards";
}

main_menu.addEventListener("click", function(){
    changeView("game_end", "game_start");
})

try_again.addEventListener("click", async function(){
    await initGame(); 
    await mainGame();
    await changeView("game_start", "game_board");
    await startTimer();
})