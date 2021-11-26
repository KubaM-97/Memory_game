import { lose, messageParts, pointsScreen, nicknameScreen, spanPoints, inputPoints, endScreenWinButton } from "../../variables";
import { showEndLoseButtons, showEndWinButton, clearPreviousGame } from "./index";
import { summary } from "./summary";
import { changeView } from "../../menu/door";

function showTypeNickNamePanel(playerTotalScore: number) {
    pointsScreen.style.animation = "hide 2s";
    pointsScreen.style.animationFillMode = "forwards";
    setTimeout(() => pointsScreen.style.display = "none" ,2000)
    nicknameScreen.style.display = "block";
    nicknameScreen.style.animation = "show 2s 2s";
    nicknameScreen.style.animationFillMode = "forwards";

    spanPoints.innerHTML = "" + playerTotalScore;

    inputPoints.focus()
    window.addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') hideNicknameScreen(playerTotalScore)
    })
}
export async function winningProcedure() {
    lose.style.display = 'none'
    clearPreviousGame();
    await changeView("game_board", "game_end");
    messageParts.totalPoints.style.display = "flex";

    pointsScreen.style.display = "block"
    pointsScreen.style.animation = "show 2s";

    const playerTotalScore = await summary();
    if (playerTotalScore > 2000) {
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
}

function hideNicknameScreen(playerTotalScore: number){
    noteBestScore(inputPoints.value, playerTotalScore)
    changeView("game_end", "game_start");
    inputPoints.value = "";
    messageParts.totalPoints.style.display = "none";
    nicknameScreen.style.display = "none";
}

function noteBestScore(playerNick: string, playerTotalScore: number): void {
    console.log(playerNick, playerTotalScore);
}
