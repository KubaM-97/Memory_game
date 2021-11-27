import { initGame } from "../game/init_game";
import { mainGame } from "../game/play";
import { changeView } from  "./door"; 
import { startTimer } from  "../game/timer"; 
export async function menuButtonPlayAction(){
    await changeView("game");
    await initGame(); 
    await mainGame();
    await startTimer();
}