import { changeView } from "./door";
import { backToMenu } from "./";

export async function menuButtonBestScoresAction(){
    await changeView('best_scores');

    const backMenuButton = document?.querySelector(".panel button.back_menu") as HTMLButtonElement;
    backMenuButton?.addEventListener("click", backToMenu)
    window.addEventListener("keypress", (e) => {console.log('bziuuuuuuuuu', e.key);})
    window.addEventListener("keypress", (e) => { if(e.key==='Escape' || e.key==='Enter') backToMenu})
}
