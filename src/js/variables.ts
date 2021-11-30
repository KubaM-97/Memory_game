//gate
export const overlay = document?.querySelector("#overlay") as HTMLDivElement;
export const gateLeft = document?.querySelector("#left_gate") as HTMLDivElement;
export const gateRight = document?.querySelector("#right_gate") as HTMLDivElement;

//audio
export const backgroundSound = new Audio("audio/background.mp3") as HTMLAudioElement;
export const cardSound = new Audio("audio/card.mp3") as HTMLAudioElement;
export const loseSound = new Audio("audio/lose.mp3") as HTMLAudioElement;

export const audios: HTMLAudioElement[] = [backgroundSound, cardSound, loseSound];
export const backgroundSoundIndex: number = audios.findIndex(audio => audio == backgroundSound);

//video
export const loseVideo = document?.createElement("VIDEO") as HTMLVideoElement;
loseVideo.setAttribute("src", "video/lose.mp4");
