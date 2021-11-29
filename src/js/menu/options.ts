import { selectedOptions, enumCardsNumber } from "./optionsSettings";
// import { selectedOptions, enumCardsNumber, enumTimer } from "./optionsSettings";
import { changeView } from "./gate";
import { backToMenu } from "./";
enum enumTimer{
    opt1 = 15,
    opt2 = 20,
    opt3 = 25,
    opt4 = 30,
    opt5 = 35,
    opt6 = 40,
    opt7 = 45,
    opt8 = 50,
    opt9 = 55,
    opt10 = 60
};
const enumLength: number = Object.keys(enumTimer).length / 2;
export let enumIndex: number = 1;

function initialOptions(){
    // console.log(selectedOptions);
}
export async function menuButtonOptionsAction() {
    await changeView('options');

    const optionsCardsNumber = document?.querySelector(".cardsNumber") as HTMLDivElement;

    const optionsTimer = document?.querySelector(".timer") as HTMLDivElement;
    const clock = document?.querySelector(".clock") as HTMLButtonElement;
    const clockMinutes = document?.querySelector(".clock span.clockTimeMinutes") as HTMLButtonElement;
    const clockSeconds = document?.querySelector(".clock span.clockTimeSeconds") as HTMLButtonElement;
    const minusTime = document?.querySelector(".updateTime #minusTime") as HTMLButtonElement;
    const plusTime = document?.querySelector(".updateTime #plusTime") as HTMLButtonElement;

    const backMenuButton = document?.querySelector("button.back_menu") as HTMLButtonElement;

    initialOptions()
    if(selectedOptions.cardsNumber === 16) optionsCardsNumber?.children[0].classList.add("active")
    else if(selectedOptions.cardsNumber === 20) optionsCardsNumber?.children[1].classList.add("active")
    else if(selectedOptions.cardsNumber === 24) optionsCardsNumber?.children[2].classList.add("active")
    if(selectedOptions.time === null ) optionsTimer?.children[0].classList.add("active")
    else {
        optionsTimer?.children[0].classList.remove("active");
        optionsTimer?.children[1].classList.add("active")

        clock.style.display = "block";
        selectedOptions.time = enumTimer[`opt${enumIndex}`];
        clockSeconds.innerHTML = "" + selectedOptions.time
    }
    for (let i: number = 0; i < optionsCardsNumber?.children.length; i++) {
        optionsCardsNumber?.children[i].addEventListener("click", function (this: any) {

            selectedOptions.cardsNumber = enumCardsNumber[`opt${i + 1}`];

            for (let j: number = 0; j < optionsCardsNumber?.children.length; j++) {
                optionsCardsNumber?.children[j].classList.remove("active");
            }

            this.classList.add("active");
        })
    }

    function setCardsNumber(el: any, index: number){
        selectedOptions.cardsNumber = enumCardsNumber[`opt${index + 1}`];

        optionsCardsNumber?.childNodes.forEach( (optionCardsNumber, index) => {
            // optionCardsNumber.classList.remove("active");
        })

        el.classList.add("active");
    }

    optionsCardsNumber.childNodes.forEach( (optionCardsNumber, index) => {
        optionCardsNumber.addEventListener("click", () => setCardsNumber(optionCardsNumber, index))
    })

    optionsTimer?.children[0].addEventListener("click", function (this: any) {

        optionsTimer?.children[1].classList.remove("active");
        this.classList.add("active");

        clock.style.display = "none";
        selectedOptions.time = null;
        selectedOptions.selectedTime = 0;

    })

    optionsTimer?.children[1].addEventListener("click", function (this: any) {

        optionsTimer?.children[0].classList.remove("active");
        this.classList.add("active");

        clock.style.display = "block";
        selectedOptions.time = enumTimer[`opt${enumIndex}`];
        clockSeconds.innerHTML = "" + selectedOptions.time

    })

    function setTimer(){
        selectedOptions.time = enumTimer[`opt${enumIndex}`];
        const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60)
        clockMinutes.innerHTML = ` ${minutes} `
        let seconds: number = enumTimer[`opt${enumIndex}`] % 60
        seconds < 10 ? clockSeconds.innerHTML = ` 0${seconds} ` : clockSeconds.innerHTML = ` ${seconds} `;
        selectedOptions.selectedTime = 11 - enumIndex;
    }
    
    minusTime?.addEventListener("click", function () {
        enumIndex == 1 ? enumIndex = enumLength : enumIndex--;
        setTimer();
    })
    plusTime?.addEventListener("click", function () {
        enumIndex == enumLength ? enumIndex = 1 : enumIndex++;
        setTimer();
    })

    backMenuButton?.addEventListener("click", backToMenu)
}
