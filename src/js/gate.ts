import { overlay, gateLeft, gateRight } from "./variables"

export function changeView(filename: string){
    return new Promise<void>((resolve, reject) =>{
        overlay.style.display = "block"

        gateLeft.style.animation = "closeTheGateLeft 1s";
        gateLeft.style.animationFillMode = "forwards";
    
        gateRight.style.animation = "closeTheGateRight 1s";
        gateRight.style.animationFillMode = "forwards";
        gateRight.addEventListener('animationend', () => { 


            overlay.style.display = "none";
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                const page = document.querySelector(".page") as HTMLDivElement;
                page.innerHTML = this.responseText;
                resolve()
            }
            xhttp.open("GET", `./php/pages/${filename}.php`, true);
            xhttp.send();
            
            gateLeft.style.animation = "openTheGateLeft 1s";
            gateRight.style.animation = "openTheGateRight 1s";
            
        }, { once: true })

    })
    

}