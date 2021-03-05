import { main_menu, try_again } from "../variables";
import { changeView } from "../menu/door";
import { startTimer } from  "./../game/timer";


main_menu.addEventListener("click", function(){
    changeView("game_end", "game_start");
})
try_again.addEventListener("click", function(){
    changeView("game_end", "game_board");
    startTimer();
})