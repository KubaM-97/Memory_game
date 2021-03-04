import { overlay, doorLeft, doorRight } from "../variables"

export function changeView(hideId: string, showId: string){
    return new Promise<void>((resolve, reject) =>{
    overlay.style.display = "block"

    const hideMe = document.querySelector("#"+hideId);
    const showMe = document.querySelector("#"+showId);
    
    doorLeft.style.animation = "closeTheDoorLeft 1s";
    doorLeft.style.animationFillMode = "forwards";

    doorRight.style.animation = "closeTheDoorRight 1s";
    doorRight.style.animationFillMode = "forwards";

    
        setTimeout(()=>{
            (hideMe as HTMLDivElement).style.display = "none";
            (showMe as HTMLDivElement).style.display = "block";

            doorLeft.style.animation = "openTheDoorLeft 1s";
            doorRight.style.animation = "openTheDoorRight 1s";

            overlay.style.display = "none";
            resolve()
        },1600)
    })
    

}