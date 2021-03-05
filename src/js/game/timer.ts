import { timeCounter, end_screen_message  } from "../variables";
import { changeView } from "../menu/door";
import { totalPairs } from "./play";
export async function startTimer(){
    await changeView("game_start", "game_board");
    let currentTime: number = 3;
    timeCounter.innerHTML = currentTime.toString();
    const timer = setInterval( async function() {
        currentTime--;
        timeCounter.innerHTML = currentTime.toString();
        if(currentTime == -1) {
            clearInterval(timer);
            timeCounter.innerHTML = "0";
            await changeView("game_board", "game_end");
            end_screen_message.innerHTML = `Game over!!! You died!!!`;
            end_screen_message.style.color = "rgb(212, 24, 24)";
        }
        if(totalPairs == 0) {
            clearInterval(timer);
        }
    },1000)
}