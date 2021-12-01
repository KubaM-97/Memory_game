
import { audios, backgroundSound } from "../../../variables";

export function toggleAudio(){

    audios.forEach( audio => audio.muted = !audio.muted);
    
    const menuButtonToggleSound = document?.querySelector(".switch_sound") as HTMLDivElement;
    if(menuButtonToggleSound){
        const statusSound = backgroundSound.muted ? 'muted' : 'unmuted';
        menuButtonToggleSound .innerHTML = `<img src="images/${statusSound}.png" alt=${statusSound}/>`
    }

}

export function unmuteAudio(): void{
    backgroundSound.autoplay = true;
    backgroundSound.loop = true;
}

