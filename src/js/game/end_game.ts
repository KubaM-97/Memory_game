import { winSound, winVideo, divVideo, messageParts, messageDescriptions, messageScores, end_screen_message, end_screen_buttons, main_menu, try_again } from "../variables";
import { changeView } from "../menu/door";
import { readyOptions } from "../menu/options";
import { startTimer, currentTime } from  "./timer";
import { turnCounter } from  "./play";

let totalSum: number = 0;

export async function endGame(){

    await changeView("game_board", "game_end");

    end_screen_buttons.style.display = "none";

    divVideo.style.display = "block";
    divVideo.appendChild(winVideo);
    divVideo.style.animation = "show 2s";

    winVideo.play();
    winVideo.playbackRate = 10.7;
    
}

winVideo.addEventListener("ended", async function(){

    divVideo.style.animation = "hide 2s";
    divVideo.style.animationFillMode = "forwards";
    divVideo.style.display = "none";

    await setTimeout(()=>{

        winSound.play();

        end_screen_buttons.style.display = "flex";
        end_screen_buttons.style.animation = "show 2s";
        end_screen_buttons.style.animationFillMode = "forwards";
        
    },800)
    
    summary()
})

enum multipliers{
    multiplierCards = 100,
    multiplieTimeStart = 75,
    multiplieTimeLeft = 200,
    multiplierMoves = 50
}

const totalPointsGenerator  = updateTotalSum();

async function* updateTotalSum(): any{
    totalSum += yield
    totalSum += yield
    totalSum += yield
    totalSum -= yield
}
async function summary(): Promise<void>{
    if( readyOptions.time === null ){
        readyOptions.time = 0
    }

    const timeLeft = currentTime | 0;

    const totalSegmentPointsCards =  await summarizePoints(readyOptions.cardsNumber, messageParts.cardsNumber, messageScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards)  

    const totalSegmentPointsTimeStart =  await summarizePoints(readyOptions.time, messageParts.timeStart, messageScores.timeStartScore, multipliers.multiplieTimeStart);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeStart, totalSegmentPointsTimeStart)
   
    const totalSegmentPointsTimeLeft =  await summarizePoints(timeLeft, messageParts.timeLeft, messageScores.timeLeftScore, multipliers.multiplieTimeLeft); 
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft)
   
    const totalSegmentPointsMoves =  await summarizePoints(turnCounter, messageParts.madeMoves, messageScores.madeMovesScore, multipliers.multiplierMoves);
    await summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves)
    
}




async function summarizePoints(x:number, messagePart: HTMLDivElement, messageScore: HTMLDivElement, multiplier: number): Promise<number>{
    messagePart.style.display = "flex";
    messageScore.querySelector(":scope > .score")!.innerHTML = `0 x 50 = `;
    let i: number = 0;
    return await new Promise ((resolve, reject)=>{
        const incrementScore = setInterval(()=>{
            if(i < x){
                i++
                messageScore.querySelector(":scope > .score")!.innerHTML = `${i} x ${multiplier} = `;  
    
            } 
            else{
                clearInterval(incrementScore);
                messageScore.querySelector(":scope > .score_full")!.innerHTML = `${i * multiplier} points`
                resolve(i * multiplier);
            }
        }, 1)
    })
}

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number): Promise<void>{

    return await new Promise (async (resolve, reject)=>{
        const incrementTotalScore = await setInterval( async ()=>{
            if(totalSum < totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${totalSum + 25}`
                totalSum+=25
            }
            else if(totalSum > totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${totalSum - 25}`
                totalSum-=25
                messageScores.totalPointsScore.style.animation = "squintingTimer .4s infinite"
            }
            else{
                clearInterval(incrementTotalScore)
                await totalPointsGenerator.next(valueToUpdate);
                messageScores.totalPointsScore.style.animation = "none";
                resolve()
            }
        }, 1 )
    })
 

}



main_menu.addEventListener("click", function(){
    changeView("game_end", "game_start");
})

try_again.addEventListener("click", function(){
    changeView("game_end", "game_board");
    startTimer();
})