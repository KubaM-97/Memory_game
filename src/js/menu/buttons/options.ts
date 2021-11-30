import { changeView } from "../../gate";
import { backToMenu } from "..";

interface Options {
    cardsNumber: number;
    time: null | number;
    selectedTime: number
};

let enumIndex: number = 3;

export const selectedOptions: Options = {
    cardsNumber: 16,
    time: null,
    selectedTime: 11 - enumIndex
};

enum enumCardsNumber {
    opt1 = 16,
    opt2 = 20,
    opt3 = 24
};

enum enumTimer {
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

function setInitialOptions(optionsCardsNumber: HTMLDivElement, optionsTimer: HTMLDivElement, timer: HTMLButtonElement) {   
    optionsCardsNumber?.children[(selectedOptions.cardsNumber - 16) / 4].classList.add("active")

    if (selectedOptions.time === null) optionsTimer?.children[0].classList.add("active")
    else {
        optionsTimer?.children[0].classList.remove("active");
        optionsTimer?.children[1].classList.add("active")
        timer.style.display = "block";
    }
}

function setCardsNumber(el: any, index: number) {
    selectedOptions.cardsNumber = enumCardsNumber[`opt${index + 1}`];
    el.classList.add("active");
}

function setTimer(clockMinutes: HTMLButtonElement, clockSeconds: HTMLButtonElement) {
    selectedOptions.time = enumTimer[`opt${enumIndex}`];
    selectedOptions.selectedTime = 11 - enumIndex;

    const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60);
    const seconds: number = enumTimer[`opt${enumIndex}`] % 60;

    clockMinutes.innerHTML = ` ${minutes} `;
    clockSeconds.innerHTML = seconds < 10 ? ` 0${seconds} ` : ` ${seconds} `; 
}

export async function menuButtonOptionsAction() {
    await changeView('options');

    const optionsCardsNumber = document?.querySelector(".optCardsNumber") as HTMLDivElement;
    const optionsTimer = document?.querySelector(".optTimer") as HTMLDivElement;
    const timer = document?.querySelector(".timer") as HTMLButtonElement;
    const clockMinutes = document?.querySelector(".timer span.clockTimeMinutes") as HTMLButtonElement;
    const clockSeconds = document?.querySelector(".timer span.clockTimeSeconds") as HTMLButtonElement;
    const minusTime = document?.querySelector(".setTimer.minusTime") as HTMLButtonElement;
    const plusTime = document?.querySelector(".setTimer.plusTime") as HTMLButtonElement;
    const backMenuButton = document?.querySelector("button.back_menu") as HTMLButtonElement;

    setInitialOptions(optionsCardsNumber, optionsTimer, timer);
    setTimer(clockMinutes, clockSeconds);

    const cardsOptions = Array.from(optionsCardsNumber.children);

    cardsOptions.forEach((optionCardsNumber, index) => optionCardsNumber.addEventListener("click", () => {
        cardsOptions.forEach( optionCardsNumber => optionCardsNumber.classList.remove("active"))
        setCardsNumber(optionCardsNumber, index)
    }))

    optionsTimer?.children[0].addEventListener("click", function (this: any) {

        optionsTimer?.children[1].classList.remove("active");
        this.classList.add("active");

        timer.style.display = "none";
        selectedOptions.time = null;
        selectedOptions.selectedTime = 0;

    })

    optionsTimer?.children[1].addEventListener("click", function (this: any) {

        optionsTimer?.children[0].classList.remove("active");
        this.classList.add("active");

        timer.style.display = "block";
        selectedOptions.time = enumTimer[`opt${enumIndex}`];
        clockSeconds.innerHTML = "" + selectedOptions.time

    })
    
    minusTime?.addEventListener("click", function () {
        enumIndex == 1 ? enumIndex = enumLength : enumIndex--;
        setTimer(clockMinutes, clockSeconds);
    });
    
    plusTime?.addEventListener("click", function () {
        enumIndex == enumLength ? enumIndex = 1 : enumIndex++;
        setTimer(clockMinutes, clockSeconds);
    });

    backMenuButton?.addEventListener("click", backToMenu)

    window.addEventListener("keyup", (e) => { if(e.key==='Escape') backToMenu()})

}
