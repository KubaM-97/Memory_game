
import { switchSoundButton, audios, backgroundSoundIndex } from "../variables";


export function switchSoundFunction(){
    
    const switchSoundImage = document.querySelector(".switch_sound>img") as HTMLImageElement;

    if(switchSoundImage.src.includes("volume")){
        switchSoundButton.innerHTML = `<img src="images/mute.png" alt="muted"/>`
        audios.forEach( audio => {
            (audio as HTMLAudioElement).muted = true;
        });
    }
    else{
        switchSoundButton.innerHTML = `<img src="images/volume.png" alt="volume"/>`;
        audios.forEach( audio => {
            (audio as HTMLAudioElement).muted = false;
        });
        unmuteBackgroundSound();
    }

}

export function unmuteBackgroundSound(): void{
    audios[backgroundSoundIndex].autoplay = true;
    audios[backgroundSoundIndex].loop = true;
}

