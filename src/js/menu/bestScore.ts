import { changeView } from "./gate";
import { backToMenu } from "./";

export async function menuButtonBestScoresAction(){
    await changeView('best_scores');

    const backMenuButton = document?.querySelector(".back_menu") as HTMLButtonElement;
    backMenuButton?.addEventListener("click", backToMenu)
    window.addEventListener("keyup", (e) => { if(e.key==='Escape' || e.key==='Enter') backToMenu()})
}
