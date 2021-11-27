//styles
import "../less/style.less";
import { menuButtonsService } from './menu';
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const panel = document?.querySelector(".panel") as HTMLDivElement;
    panel.innerHTML = this.responseText;
    menuButtonsService()
}
xhttp.open("GET", "menu.php", true);
xhttp.send();


// game
import "./menu"; 
import { unmuteAudio } from "./menu/sound";
unmuteAudio(); 
