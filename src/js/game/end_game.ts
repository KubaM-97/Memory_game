
import { timer, divVideo, end_screen_message, end_screen_buttons, main_menu, try_again } from "../variables";
import { changeView } from "../menu/door";
import { startTimer } from  "./timer";


export async function showVideo(video: HTMLVideoElement){

    await changeView("game_board", "game_end");
    
    end_screen_buttons.style.display = "none";

    divVideo.style.display = "block";
    divVideo.appendChild(video);
    divVideo.style.animation = "show 2s";

    video.play();
    video.playbackRate = .9;

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

try_again.addEventListener("click", function(){
    changeView("game_end", "game_board");
    startTimer();
})