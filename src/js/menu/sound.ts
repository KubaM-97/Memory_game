
import { audios, backgroundSoundIndex } from "../variables";

export function toggleAudio(){
const switchSoundImage = document.querySelector(".switch_sound>img") as HTMLImageElement;
const menuButtonToggleSound = document?.querySelector(".switch_sound") as HTMLDivElement;

    
    if(switchSoundImage.src.includes("volume")){
        menuButtonToggleSound.innerHTML = `<img src="images/mute.png" alt="muted"/>`
        audios.forEach( audio => {
            (audio as HTMLAudioElement).muted = true;
        });
    }
    else{
        menuButtonToggleSound.innerHTML = `<img src="images/volume.png" alt="volume"/>`;
        audios.forEach( audio => {
            (audio as HTMLAudioElement).muted = false;
        });
        unmuteAudio();
    }

}

export function unmuteAudio(): void{
    audios[backgroundSoundIndex].autoplay = true;
    audios[backgroundSoundIndex].loop = true;
}

