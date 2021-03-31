import { bestScoresButton } from "../variables";
import { changeView } from "./door";

bestScoresButton.addEventListener("click", function(){
    changeView("game_bestScores", "game_start")
})