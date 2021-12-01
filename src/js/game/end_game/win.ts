import { showEndLoseButtons, showEndWinButton } from "./index";
import { summary } from "./summary";
import { changeView } from "../../gate";
import { winSound } from "../../variables";
import { showBestPlayerPage } from "./nickname";


export async function winningProcedure() {
    await changeView("win");
    const statisticsParts = {
        cardsNumber: document?.querySelector(".statistics#cardsNumber") as HTMLDivElement,
        timeInitial: document?.querySelector(".statistics#timeInitial") as HTMLDivElement,
        timeLeft: document?.querySelector(".statistics#timeLeft") as HTMLDivElement,
        timeBonus: document?.querySelector(".statistics#timeBonus") as HTMLDivElement,
        madeMoves: document?.querySelector(".statistics#madeMoves") as HTMLDivElement,
        totalPoints: document?.querySelector(".statistics#totalPoints") as HTMLDivElement,
    }
    const pointsPage = document?.querySelector("#page_summary") as HTMLDivElement;
    const endScreenWinButton = document?.querySelector(".buttons_end_win") as HTMLButtonElement;

    statisticsParts.totalPoints.style.display = "flex";

    pointsPage.style.display = "block"
    pointsPage.style.animation = "show 2s";

    const playerTotalScore = await summary();
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (playerTotalScore > +this.responseText) {
            
            winSound.play();
            showEndWinButton();
            endScreenWinButton.addEventListener('click', function () {
                showBestPlayerPage(playerTotalScore)
            })
            window.addEventListener('keypress', function (e: KeyboardEvent) {
                if (e.key === 'enter') showBestPlayerPage(playerTotalScore)
            })
        }
        else {
            showEndLoseButtons();
        }
    };
    xhttp.open('GET', './php/results/getWorstPlayer.php', true);
    xhttp.send();

}
