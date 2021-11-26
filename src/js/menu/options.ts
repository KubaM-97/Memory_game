import { enumCardsNumber, enumTimer, optCardsNumberDiv, optTimerDiv, clock, clockMinutes, clockSeconds, minusTime, plusTime, optButton } from "../variables";
import { changeView } from "./door";

let enumIndex:number = 3;
const enumLength: number = Object.keys(enumTimer).length / 2;

for(let i: number=0; i<optCardsNumberDiv?.children.length; i++){
    optCardsNumberDiv?.children[i].addEventListener("click", function(this: any){

        selectedOptions.cardsNumber = enumCardsNumber[`opt${i+1}`];
        
        for(let j: number=0; j<optCardsNumberDiv?.children.length; j++){
            optCardsNumberDiv?.children[j].classList.remove("active");
        }

        this.classList.add("active");
    })
}
optTimerDiv?.children[0].addEventListener("click", function(this: any){
    
    optTimerDiv?.children[1].classList.remove("active");
    this.classList.add("active");

    clock.style.display = "none";
    selectedOptions.time = null;
    selectedOptions.selectedTime = 0;
})
optTimerDiv?.children[1].addEventListener("click", function(this: any){

    optTimerDiv?.children[0].classList.remove("active");
    this.classList.add("active");

    clock.style.display = "block";
    selectedOptions.time = enumTimer[`opt${enumIndex}`];
    clockSeconds.innerHTML = "" + selectedOptions.time
})
minusTime?.addEventListener("click", function(){
    enumIndex==1 ? enumIndex=enumLength : enumIndex--
    selectedOptions.time = enumTimer["opt".concat(enumIndex.toString())];
    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
    clockMinutes.innerHTML = ` ${ minutes } `
    let seconds: number = enumTimer[`opt${enumIndex}`] % 60
    seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
    selectedOptions.selectedTime = 11 - enumIndex;
    
})
plusTime?.addEventListener("click", function(){
    enumIndex==enumLength ? enumIndex=1 : enumIndex++
    selectedOptions.time = enumTimer[`opt${enumIndex}`];
    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
    clockMinutes.innerHTML = ` ${ minutes } `
    let seconds: number = enumTimer[`opt${enumIndex}`] % 60
    seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
    selectedOptions.selectedTime = 11 - enumIndex;
})

interface options_interface {
    cardsNumber: number;
    time: null|number;
    selectedTime: number
}
export const selectedOptions: options_interface = {
    cardsNumber: 16,
    time: null,
    selectedTime: 11 - enumIndex
}

optButton?.addEventListener("click", function(){
    changeView("game_options", "game_start")
})
