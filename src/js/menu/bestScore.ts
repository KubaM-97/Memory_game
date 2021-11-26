import { bestScoresButton } from "../variables";
import { changeView } from "./door";

bestScoresButton?.addEventListener("click", async function(){
    // await changeView("game_bestScores", "game_start")
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        const x = document.querySelector(".tableScores") as HTMLDivElement;
        x.innerHTML = this.responseText;
    }
    xhttp.open("GET", "wrap.php", true);
    xhttp.send();
}) 

bestScoresButton?.addEventListener("dblclick", async function(){
    //ważne prepare()
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'add.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        // do something to response
        console.log(this.responseText);
    };
    xhr.send('nickname=avada&points=40000');
}) 
