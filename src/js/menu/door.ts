import { overlay, doorLeft, doorRight } from "../variables";
import { loadDoc } from "../loadDoc";

export function changeView(filename: string): Promise<void>{
    return new Promise<void>((resolve, reject) =>{
    overlay.style.display = "block";
    
    doorLeft.style.animation = "closeTheDoorLeft 1s";
    doorLeft.style.animationFillMode = "forwards";

    doorRight.style.animation = "closeTheDoorRight 1s";
    doorRight.style.animationFillMode = "forwards";

    
        setTimeout(()=>{
            resolve(loadDoc(filename)) 

            doorLeft.style.animation = "openTheDoorLeft 1s";
            doorRight.style.animation = "openTheDoorRight 1s";

            overlay.style.display = "none";
            
        },1600)
    })
    

}