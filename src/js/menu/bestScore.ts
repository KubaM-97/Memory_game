import { changeView } from "./door";
import { menuButtonsService } from "./";

export async function menuButtonBestScoresAction(){
    await changeView('best_scores');
    const backMenuButton = document?.querySelector(".panel button.back_menu") as HTMLButtonElement;
    // backMenuButton?.addEventListener("click", async function(){
    //     await changeView("menu");
    //     menuButtonsService()
    // })
    backMenuButton?.addEventListener("click", async function(){
             //ważne prepare()
             const playerNick = 'DUPSKO SOCZYSTE'
             const playerTotalScore = 5000
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'add.php', true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            console.log(this.responseText);
        };
        xhr.send(`nickname=${playerNick}&points=${playerTotalScore}`);
    })
}
