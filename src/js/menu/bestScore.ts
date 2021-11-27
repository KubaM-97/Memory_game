import { changeView } from "./door";
import { menuButtonsService } from "./";

export async function menuButtonBestScoresAction(){
    await changeView('best_scores');
    const backMenuButton = document?.querySelector(".panel button.back_menu") as HTMLButtonElement;
    backMenuButton?.addEventListener("click", async function(){
        await changeView('menu');
        menuButtonsService()
    })
}
