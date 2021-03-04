
export const play = document.querySelector(".main_button#play") as HTMLDivElement;
export const options = document.querySelector(".main_button#options") as HTMLDivElement;
export const bestScores = document.querySelector(".main_button#best_scores") as HTMLDivElement;

export const overlay = document.querySelector("#overlay") as HTMLDivElement;
export const doorLeft = document.querySelector("#left_door") as HTMLDivElement;
export const doorRight = document.querySelector("#right_door") as HTMLDivElement;

export const audios: NodeListOf<Element> = document.querySelectorAll("audio");

export const switchSoundButton = document.querySelector(".switch_sound") as HTMLDivElement;

export const scoreCounter = document.getElementById("scoreCounter") as HTMLDivElement
export const timer = document.getElementById("timer") as HTMLDivElement
export let timeCounter = document.getElementById("timeCounter") as HTMLDivElement