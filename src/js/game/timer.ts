import { timer, timeCounter, loseVideo, divVideo, end_screen_message, end_screen_buttons } from "../variables";
import { changeView } from "../menu/door";
import { totalPairs } from "./play";

export async function startTimer(){

    await changeView("game_start", "game_board");
    let currentTime: number = 30;
    timeCounter.innerHTML = currentTime.toString();

    const startTimer = setInterval( async function() {
        currentTime--;
        timeCounter.innerHTML = currentTime.toString();
        if(currentTime <= 5){
            timer.style.animation = "squintingTimer .4s infinite" ;
            timer.style.animationDirection = "alternate";
        }
        if(currentTime == -1) {
            clearInterval(startTimer);
            timeCounter.innerHTML = "0";
            await changeView("game_board", "game_end");
            
            // loseSound.play();
            end_screen_message.innerHTML = ``;
            end_screen_buttons.style.display = "none";
            divVideo.style.display = "block";
            divVideo.appendChild(loseVideo);
            divVideo.style.animation = "show 2s";

            loseVideo.play();
            loseVideo.muted = true;
            loseVideo.playbackRate = 0.7;

        }
        if(totalPairs == 0) {
            clearInterval(startTimer);
        }
    },1000)

}
loseVideo.addEventListener("ended", function(){
    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";
    setTimeout(()=>{

        end_screen_message.innerHTML = `Game over!!! <br />You died!!!`;
        end_screen_message.style.color = "rgb(231, 35, 35)";
        end_screen_message.style.animation = "show 2s";
        end_screen_message.style.animationFillMode = "forwards";

        end_screen_buttons.style.display = "flex";
        end_screen_buttons.style.animation = "show 2s";
        end_screen_buttons.style.animationFillMode = "forwards";
        
    },800)
})