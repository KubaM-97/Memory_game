import { enumCardsNumber, enumTimer, optCardsNumberDiv, optTimerDiv, clock, clockMinutes, clockSeconds, minusTime, plusTime, optButton } from "../variables";
import { changeView } from "./door";



let enumIndex:number = 3;
const enumLength: number = Object.keys(enumTimer).length / 2;

for(let i: number=0; i<optCardsNumberDiv.children.length; i++){
    optCardsNumberDiv.children[i].addEventListener("click", function(this: any){

        readyOptions.cardsNumber = enumCardsNumber[`opt${i+1}`];
        
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
    readyOptions.bonusTime = 0;
})
optTimerDiv.children[1].addEventListener("click", function(this: any){

    optTimerDiv.children[0].classList.remove("active");
    this.classList.add("active");

    clock.style.display = "block";
    readyOptions.time = enumTimer[`opt${enumIndex}`];
    clockSeconds.innerHTML = "" + readyOptions.time
})
minusTime.addEventListener("click", function(){
    enumIndex==1 ? enumIndex=enumLength : enumIndex--
    readyOptions.time = enumTimer["opt".concat(enumIndex.toString())];
    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
    clockMinutes.innerHTML = ` ${ minutes } `
    let seconds: number = enumTimer[`opt${enumIndex}`] % 60
    seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
    readyOptions.bonusTime = 11 - enumIndex;
    console.log(readyOptions.bonusTime)
    
})
plusTime.addEventListener("click", function(){
    enumIndex==enumLength ? enumIndex=1 : enumIndex++
    readyOptions.time = enumTimer[`opt${enumIndex}`];
    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
    clockMinutes.innerHTML = ` ${ minutes } `
    let seconds: number = enumTimer[`opt${enumIndex}`] % 60
    seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
    readyOptions.bonusTime = 11 - enumIndex;
    console.log(readyOptions.bonusTime)
})

interface options_interface {
    cardsNumber: number;
    time: null|number;
    bonusTime: number
}
export const readyOptions: options_interface = {
    cardsNumber: 16,
    time: null,
    bonusTime: 11 - enumIndex
}

optButton.addEventListener("click", function(){
    changeView("game_options", "game_start")
})
