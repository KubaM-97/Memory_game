import { initGame } from "../game/init_game";
import { mainGame } from "../game/play";
import { changeView } from  "./gate"; 
import { startTimer } from  "../game/timer"; 
import { backToMenu } from ".";
export async function menuButtonPlayAction(){
    await changeView("game");
    await initGame(); 
    await mainGame();
    await startTimer();
    window.addEventListener("keypress", (e) => { if(e.key==='Escape') backToMenu})

}