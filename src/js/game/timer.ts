import { timeCounter } from "../variables";
import { changeView } from "../menu/door";

export async function startTimer(){
    await changeView("game_start", "game_board");
    let currentTime: number = 30;
    setInterval(()=>{
        currentTime--;
        timeCounter.innerHTML = currentTime.toString();
        if(currentTime == -1) alert("Game over! You died!");
    },1000)
}