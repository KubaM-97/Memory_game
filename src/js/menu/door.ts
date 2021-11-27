import { overlay, doorLeft, doorRight } from "../variables"

export function changeView(filename: string){
    return new Promise<void>((resolve, reject) =>{
        overlay.style.display = "block"

        doorLeft.style.animation = "closeTheDoorLeft 1s";
        doorLeft.style.animationFillMode = "forwards";
    
        doorRight.style.animation = "closeTheDoorRight 1s";
        doorRight.style.animationFillMode = "forwards";
        doorRight.addEventListener('animationend', () => { 

            doorLeft.style.animation = "openTheDoorLeft 1s";
            doorRight.style.animation = "openTheDoorRight 1s";

            overlay.style.display = "none";
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                const panel = document.querySelector(".panel") as HTMLDivElement;
                panel.innerHTML = this.responseText;
                resolve()
            }
            xhttp.open("GET", `${filename}.php`, true);
            xhttp.send();
        }, { once: true })

    })
    

}