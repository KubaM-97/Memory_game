import { changeView } from "../../gate";
import { menuButtonsService } from "../menu";

export function showBestPlayerPage(playerTotalScore: number) {
    const pointsPage = document?.querySelector("#page_summary") as HTMLDivElement;
    const nicknamePage = document?.querySelector("#page_nickname") as HTMLDivElement;
    const spanPoints = document?.querySelector("span.scored_points") as HTMLSpanElement;
    const inputPoints = document?.querySelector(".enter_nickname input[type='text']") as HTMLInputElement;

    pointsPage.style.animation = "hide 2s";
    pointsPage.style.animationFillMode = "forwards";
    pointsPage.addEventListener("ended", function() { this.style.display = "none" } )
    
    nicknamePage.style.display = "block";
    nicknamePage.style.animation = "show 2s 2s";
    nicknamePage.style.animationFillMode = "forwards";

    spanPoints.innerHTML = "" + playerTotalScore;

    window.addEventListener('keypress', function (e: KeyboardEvent) {
        if (e.key === 'Enter') enterBestPlayer(inputPoints, playerTotalScore)
    })
}

async function enterBestPlayer(inputPoints: any, playerTotalScore: number) {
    await noteBestPlayer(inputPoints.value, playerTotalScore);
    await changeView('menu');
    menuButtonsService();
}


function noteBestPlayer(playerNick: string, playerTotalScore: number): void {
    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', './php/results/addNewPlayer.php', true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(`nickname=${playerNick}&points=${playerTotalScore}`);
}