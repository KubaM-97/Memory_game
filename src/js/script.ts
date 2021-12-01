import "../less/style.less";

import { unmuteAudio } from "./game/menu/buttons/sound";
unmuteAudio();

import { menuButtonsService } from './game/menu';

const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    const page = document?.querySelector(".page") as HTMLDivElement;
    page.innerHTML = this.responseText;
    menuButtonsService()
}
xhttp.open("GET", "./php/pages/menu.php", true);
xhttp.send();
