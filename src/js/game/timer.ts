import { timer, timeCounter } from "../variables";
import { totalPairs } from "./play";
import { readyOptions } from "../menu/options";
import { losingProcedure } from "./end_game/lose";

export let currentTime: number;

export async function startTimer(){

    if( readyOptions.time !== null){
    
        //shows timer
        timer.style.display = "block" ;

        currentTime  = readyOptions.time;
        timeCounter.innerHTML = currentTime.toString();
        
        const startTimer = setInterval( async function() {
            currentTime--;
            timeCounter.innerHTML = currentTime.toString();
            
            if(currentTime <= 5 && currentTime >=0){
                timer.style.animation = "squintingTimer .4s infinite" ;
                timer.style.animationDirection = "alternate";
            }
            if(currentTime == -1) {

                clearInterval(startTimer);
                losingProcedure();
            }
            if(totalPairs == 0) {
                clearInterval(startTimer);
            }
        },1000)
    }
}