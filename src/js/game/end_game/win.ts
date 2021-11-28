import { lose, messageParts, pointsScreen, nicknameScreen, spanPoints, inputPoints, endScreenWinButton } from "../../variables";
import { showEndLoseButtons, showEndWinButton } from "./index";
import { summary } from "./summary";
import { changeView } from "../../menu/door";
import { menuButtonsService } from "../../menu";

function showTypeNickNamePanel(playerTotalScore: number) {
     const pointsScreen = document?.querySelector(".summary") as HTMLDivElement;
 const nicknameScreen = document?.querySelector(".nickname") as HTMLDivElement;
 const spanPoints = document?.querySelector("span.score_points") as HTMLSpanElement;
 const inputPoints = document?.querySelector(".nickname input[type='text']") as HTMLInputElement;

    pointsScreen.style.animation = "hide 2s";
    pointsScreen.style.animationFillMode = "forwards";
    setTimeout(() => pointsScreen.style.display = "none" ,2000)
    nicknameScreen.style.display = "block";
    nicknameScreen.style.animation = "show 2s 2s";
    nicknameScreen.style.animationFillMode = "forwards";

    spanPoints.innerHTML = "" + playerTotalScore;

    inputPoints.focus()
    window.addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') hideNicknameScreen(inputPoints, playerTotalScore)
    })
}
export async function winningProcedure() {
    await changeView("win");
    const messageParts = {
        cardsNumber: document?.querySelector(".message #cardsNumber") as HTMLDivElement,
        timeStart: document?.querySelector(".message #timeStart") as HTMLDivElement,
        timeLeft: document?.querySelector(".message #timeLeft") as HTMLDivElement,
        timeBonus: document?.querySelector(".message #timeBonus") as HTMLDivElement,
        madeMoves: document?.querySelector(".message #madeMoves") as HTMLDivElement,
        totalPoints: document?.querySelector(".message #totalPoints") as HTMLDivElement,
    }
    const pointsScreen = document?.querySelector(".summary") as HTMLDivElement;
 const endScreenWinButton = document?.querySelector(".buttons_end_win") as HTMLButtonElement;
    
    messageParts.totalPoints.style.display = "flex";

    pointsScreen.style.display = "block"
    pointsScreen.style.animation = "show 2s";

    const playerTotalScore = await summary();    
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (playerTotalScore > +this.responseText) {
            showEndWinButton();
            endScreenWinButton.addEventListener('click', function() {
                showTypeNickNamePanel(playerTotalScore)
            })
            window.addEventListener('keypress', function (e: KeyboardEvent) {
                if (e.key === 'Enter') showTypeNickNamePanel(playerTotalScore)
            })
        }
        else {
            showEndLoseButtons();
        }
    };
    xhr.open('GET', 'results.php', true);
    xhr.send();
    
}
function xxx(){
    
var xhr = new XMLHttpRequest();
xhr.onload = function () {
    console.log(this.responseText);
    return +this.responseText
};
xhr.open('GET', 'results.php', true);
xhr.send();
}
async function hideNicknameScreen(inputPoints: any, playerTotalScore: number){
    noteBestScore(inputPoints.value, playerTotalScore)
    await changeView("menu");
    menuButtonsService()

}

function noteBestScore(playerNick: string, playerTotalScore: number): void {
        //ważne prepare()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'add.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        console.log(this.responseText);
    };
    xhr.send(`nickname=${playerNick}&points=${playerTotalScore}`);
}