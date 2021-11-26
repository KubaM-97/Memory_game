// menu
export const gameStart = document?.querySelector("#game_start") as HTMLDivElement;
export const playMenuButton = document?.querySelector("button.main_button#play") as HTMLButtonElement;
export const optionsMenuButton = document?.querySelector("button.main_button#options") as HTMLButtonElement;
export const bestScoresMenuButton = document?.querySelector("button.main_button#bestScores") as HTMLButtonElement;
export const switchSoundImage = document.querySelector(".switch_sound>img") as HTMLImageElement;

//options
export enum enumCardsNumber{
    opt1 = 16,
    opt2 = 20,
    opt3 = 24
}
export enum enumTimer{
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
}

export const optCardsNumberDiv = document?.querySelector("#game_options .cardsNumber") as HTMLDivElement;
export const optTimerDiv = document?.querySelector("#game_options .timer") as HTMLDivElement;
export const clock = document?.querySelector("#game_options .clock") as HTMLButtonElement;
export const clockMinutes = document?.querySelector("#game_options .clock span.clockTimeMinutes") as HTMLButtonElement;
export const clockSeconds = document?.querySelector("#game_options .clock span.clockTimeSeconds") as HTMLButtonElement;
export const minusTime = document?.querySelector("#game_options .updateTime #minusTime") as HTMLButtonElement;
export const plusTime = document?.querySelector("#game_options .updateTime #plusTime") as HTMLButtonElement;
export const optButton = document?.querySelector("#game_options .buttons button") as HTMLButtonElement;

//best scores
export const bestScoresButton = document?.querySelector("#game_bestScores .buttons button") as HTMLButtonElement;

//door
export const overlay = document?.querySelector("#overlay") as HTMLDivElement;
export const doorLeft = document?.querySelector("#left_door") as HTMLDivElement;
export const doorRight = document?.querySelector("#right_door") as HTMLDivElement;

//sounds
export const switchSoundButton = document?.querySelector(".switch_sound") as HTMLDivElement;

export const backgroundSound = new Audio("audio/background.mp3") as HTMLAudioElement;
export const cardSound = new Audio("audio/card.mp3") as HTMLAudioElement;
export const winSound = new Audio("audio/win.mp3") as HTMLAudioElement;
export const loseSound = new Audio("audio/lose.mp3") as HTMLAudioElement;

export const audios: HTMLAudioElement[] = [backgroundSound, cardSound, winSound, loseSound];
export const backgroundSoundIndex: number = audios.findIndex(audio => audio == backgroundSound);

// game
export const gameCards = document?.querySelector("#game_cards") as HTMLDivElement;

//videos
export const winVideo = document?.createElement("VIDEO") as HTMLVideoElement;

export const loseVideo = document?.createElement("VIDEO") as HTMLVideoElement;
loseVideo.setAttribute("src", "video/lose.mp4");

export const divVideo = document?.querySelector(".video") as HTMLDivElement;

//moves and timer
export const scoreCounter = document?.getElementById("scoreCounter") as HTMLDivElement
export const timer = document?.getElementById("timer") as HTMLDivElement
export let timeCounter = document?.getElementById("timeCounter") as HTMLDivElement

//end screen
export enum multipliers{
    multiplierCards = 200,
    multiplieTimeLeft = 5,
    multiplieTimeBonus = 100,
    multiplieTimeStart = 10,
    multiplieMoves = 20
}

export const end_screen_message = document?.querySelector("#game_end .message") as HTMLDivElement;

export const messageParts = {
    cardsNumber: document?.querySelector("#game_end .message #cardsNumber") as HTMLDivElement,
    timeStart: document?.querySelector("#game_end .message #timeStart") as HTMLDivElement,
    timeLeft: document?.querySelector("#game_end .message #timeLeft") as HTMLDivElement,
    timeBonus: document?.querySelector("#game_end .message #timeBonus") as HTMLDivElement,
    madeMoves: document?.querySelector("#game_end .message #madeMoves") as HTMLDivElement,
    totalPoints: document?.querySelector("#game_end .message #totalPoints") as HTMLDivElement,
}

export const cardsNumber = document?.querySelector("#game_end .message #cardsNumber") as HTMLDivElement;
export const timeStart = document?.querySelector("#game_end .message #timeStart") as HTMLDivElement;
export const timeLeft = document?.querySelector("#game_end .message #timeLeft") as HTMLDivElement;
export const timeBonus = document?.querySelector("#game_end .message #timeBonus") as HTMLDivElement;
export const madeMoves = document?.querySelector("#game_end .message #madeMoves") as HTMLDivElement;
export const totalPoints = document?.querySelector("#game_end .message #totalPoints") as HTMLDivElement;

export const messageScores = {
    cardsNumberScore: cardsNumber?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeStartScore: timeStart?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeLeftScore: timeLeft?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeBonusScore: timeBonus?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    madeMovesScore: madeMoves?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    totalPointsScore: totalPoints?.querySelector(":scope > .message_segment_score .score_full") as HTMLDivElement,
}

export const summary = document?.querySelector("#game_end .summary") as HTMLDivElement;
export const message_lose = document?.querySelector("#game_end .message_lose") as HTMLDivElement;
export const end_screen_lose_buttons = document?.querySelector(".buttons_end_lose") as HTMLDivElement;
export const main_menu = document?.querySelector(".main_menu") as HTMLButtonElement;
export const try_again = document?.querySelector(".try_again") as HTMLButtonElement;
export const end_screen_win_button = document?.querySelector(".buttons_end_win") as HTMLButtonElement;
console.log(main_menu);
export const pointsScreen = document?.querySelector(".summary") as HTMLDivElement;
export const nicknameScreen = document?.querySelector(".nickname") as HTMLDivElement;
export const spanPoints = document?.querySelector("span.score_points") as HTMLSpanElement;
export const inputPoints = document?.querySelector(".nickname input[type='text']") as HTMLInputElement;
export const buttonNicknamePoints = document?.querySelector(".nickname .buttons button") as HTMLButtonElement;

// export const endScreenLose = document?.querySelector(".end_screen_lose .buttons_end_lose") as HTMLButtonElement;
export const lose = document?.querySelector(".lose") as HTMLButtonElement;
export const endScreenLose = document?.querySelector(".lose .buttons_end_lose") as HTMLButtonElement;
export const endScreenLoseMM = endScreenLose?.querySelector(".main_menu2") as HTMLButtonElement;
export const endScreenLoseTA = endScreenLose?.querySelector(".try_again2") as HTMLButtonElement;
console.log(endScreenLose, endScreenLoseMM, endScreenLoseTA);
