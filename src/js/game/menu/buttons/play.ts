import { changeView } from  "../../../gate"; 
import { backToMenu } from "../";
import { initGame } from "../../init_game";
import { mainGame } from "../../play";
import { startTimer } from  "../../timer"; 

export async function menuButtonPlayAction(){
    await changeView("game");
    await initGame(); 
    await mainGame();
    await startTimer();
    window.addEventListener("keyup", (e) => { if(e.key==='Escape') backToMenu()})
}