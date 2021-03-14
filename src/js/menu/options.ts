import { optCardsNumberDiv, optTimerDiv, clock, clockMinutes, clockSeconds, minusTime, plusTime, optButton } from "../variables";
import { changeView } from "./door";

enum cardsNumber{
    opt1 = 16,
    opt2 = 20,
    opt3 = 24
}
enum timer{
    opt1 = 10,
    opt2 = 15,
    opt3 = 20,
    opt4 = 25
}

let t:number = 2;

for(let i: number=0; i<optCardsNumberDiv.children.length; i++){
    optCardsNumberDiv.children[i].addEventListener("click", function(this: any){

        readyOptions.cardsNumber = cardsNumber[`opt${i+1}`];
        
        for(let j: number=0; j<optCardsNumberDiv.children.length; j++){
            optCardsNumberDiv.children[j].classList.remove("active");
        }

        this.classList.add("active");
    })
}
optTimerDiv.children[0].addEventListener("click", function(this: any){
    
    optTimerDiv.children[1].classList.remove("active");
    this.classList.add("active");

    clock.style.display = "none";
    readyOptions.time = null;
})
optTimerDiv.children[1].addEventListener("click", function(this: any){

    optTimerDiv.children[0].classList.remove("active");
    this.classList.add("active");

    clock.style.display = "block";
    readyOptions.time = timer[`opt${t}`];
    clockSeconds.innerHTML = "" + readyOptions.time
})
minusTime.addEventListener("click", function(){
    t==1 ? t=4 : t--
    readyOptions.time = timer["opt".concat(t.toString())];
    clockSeconds.innerHTML = timer[`opt${t}`]
})
plusTime.addEventListener("click", function(){
    t==4 ? t=1 : t++
    readyOptions.time = timer[`opt${t}`];
    clockSeconds.innerHTML = timer[`opt${t}`]
})


interface options_interface {
    cardsNumber: number;
    time: null|number;
}
export const readyOptions: options_interface = {
    cardsNumber: 16,
    time: null,
}

optButton.addEventListener("click", function(){
    changeView("game_options", "game_start")
})
