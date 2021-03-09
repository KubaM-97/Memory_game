// menu
export const play = document.querySelector(".main_button#play") as HTMLDivElement;
export const options = document.querySelector(".main_button#options") as HTMLDivElement;
export const bestScores = document.querySelector(".main_button#best_scores") as HTMLDivElement;

//door
export const overlay = document.querySelector("#overlay") as HTMLDivElement;
export const doorLeft = document.querySelector("#left_door") as HTMLDivElement;
export const doorRight = document.querySelector("#right_door") as HTMLDivElement;

//sounds
export const switchSoundButton = document.querySelector(".switch_sound") as HTMLDivElement;

export const backgroundSound = new Audio("audio/forest.mp3") as HTMLAudioElement;
export const cardSound = new Audio("audio/card.mp3") as HTMLAudioElement;
export const winSound = new Audio("audio/win.mp3") as HTMLAudioElement;
export const loseSound = new Audio("audio/lose.mp3") as HTMLAudioElement;

export const audios: HTMLAudioElement[] = [backgroundSound, cardSound, winSound, loseSound];
export const backgroundSoundIndex: number = audios.findIndex(audio => audio == backgroundSound);

//videos
export const winVideo = document.createElement("video") as HTMLVideoElement;
winVideo.setAttribute("src", "video/win.mp4");

export const loseVideo = document.createElement("video") as HTMLVideoElement;
loseVideo.setAttribute("src", "video/lose.mp4");

export const divVideo = document.querySelector(".video") as HTMLDivElement;

//moves and timer
export const scoreCounter = document.getElementById("scoreCounter") as HTMLDivElement
export const timer = document.getElementById("timer") as HTMLDivElement
export let timeCounter = document.getElementById("timeCounter") as HTMLDivElement

//end screen
export const end_screen_message = document.querySelector("#game_end .message") as HTMLDivElement;
export const end_screen_buttons = document.querySelector("#game_end .buttons") as HTMLDivElement;
export const main_menu = document.querySelector(".main_menu") as HTMLButtonElement;
export const try_again = document.querySelector(".try_again") as HTMLButtonElement;