import { multipliers, messageParts, messageScores} from "../../variables";
import { readyOptions } from "../../menu/options";
import { currentTime } from  ".././timer";
import { turnCounter } from  ".././play";

let totalSum: number = 0;
const updateTotalSum: Generator<number> = updateTotalSumGenerator(0);
updateTotalSum.next(0);

function* updateTotalSumGenerator(x: number): any{
    totalSum+=yield
    totalSum+=yield
    totalSum-=yield
    totalSum-=yield
}

export async function summary(): Promise<void>{
    if( readyOptions.time === null ){
        readyOptions.time = 0
    }

    const timeLeft = currentTime | 0;

    const totalSegmentPointsCards =  await summarizePoints(readyOptions.cardsNumber, messageParts.cardsNumber, messageScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards)  

    const totalSegmentPointsTimeLeft =  await summarizePoints(timeLeft, messageParts.timeLeft, messageScores.timeLeftScore, multipliers.multiplieTimeLeft); 
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft)
   
    const totalSegmentPointsTimeStart =  await summarizePoints(readyOptions.time, messageParts.timeStart, messageScores.timeStartScore, multipliers.multiplieTimeStart);
    await summarizeTotalPoints(totalSum - totalSegmentPointsTimeStart, totalSegmentPointsTimeStart)

    const totalSegmentPointsMoves =  await summarizePoints(turnCounter, messageParts.madeMoves, messageScores.madeMovesScore, multipliers.multiplieMoves);
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
        }, 45)
    })
}

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number): Promise<void>{
    
    return await new Promise (async (resolve, reject)=>{
        let x = totalSum;
        const incrementTotalScore = await setInterval( async ()=>{
            if(x < totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${x + 25}`
                x+=25
            }
            else if(x > totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${x - 25}`
                x-=25
                messageScores.totalPointsScore.style.animation = "squintingTimer .4s infinite"
            }
            else{
                
                clearInterval(incrementTotalScore)
                await updateTotalSum.next(valueToUpdate)
                messageScores.totalPointsScore.style.animation = "none";
                resolve()
            }
        }, 20)
    })
 

}
