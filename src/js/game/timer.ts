import { totalPairs } from "./play";
import { selectedOptions } from "./menu/buttons/options";
import { losingProcedure } from "./end_game/lose";
import { changeView } from "../gate";

export let currentTime: number;

export async function startTimer() {
    const timer = document?.getElementById("timer") as HTMLDivElement
    const timeCounter = document?.getElementById("timeCounter") as HTMLDivElement
    if (selectedOptions.time !== null) {

        timer.style.display = "block";

        currentTime = selectedOptions.time;
        timeCounter.innerHTML = currentTime.toString();

        const startTimer = setInterval(async function () {
            window.addEventListener("keyup", (e) => { if(e.key==='Escape') clearInterval(startTimer)})
            
            currentTime--;
            timeCounter.innerHTML = currentTime.toString();

            if (currentTime <= 5 && currentTime >= 0) {
                timer.style.animation = "squintingTimer .4s infinite";
                timer.style.animationDirection = "alternate";
            }
            if (currentTime == -1) {
                
                clearInterval(startTimer);
                const timeCounter = document?.getElementById("timeCounter") as HTMLDivElement

                timeCounter.innerHTML = "0";
                await changeView('lose')
                losingProcedure();
                timer.style.animation = "none";

            }
            if (totalPairs == 0) {
                clearInterval(startTimer);
                timer.style.animation = "none";
            }
        }, 1000)
    }
    else {
        timer.style.display = "none";
    }
}