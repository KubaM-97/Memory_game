import { multipliers, messageParts, messageScores} from "../../variables";
import { readyOptions } from "../../menu/options";
import { currentTime } from  ".././timer";
import { turnCounter } from  ".././play";

let totalSum: number = 0;
let updateTotalSum: { next: (arg0: number) => void; };

function* updateTotalSumGenerator(x: number): any{
    totalSum+=yield
    totalSum+=yield
    totalSum+=yield
    totalSum-=yield
    totalSum-=yield
}

export async function summary(): Promise<number>{
    totalSum = 0;
    messageScores.totalPointsScore.innerHTML = `0`;
    updateTotalSum = updateTotalSumGenerator(0);
    updateTotalSum.next(0);

    let cardsNumber: number = readyOptions.cardsNumber;
    let timeStart: number = readyOptions.time! | 0;
    let timeBonus: number = readyOptions.bonusTime;
    let timeLeft: number = currentTime | 0;
    let madeMoves: number = turnCounter;

    const totalSegmentPointsCards =  await summarizePoints(cardsNumber, messageParts.cardsNumber, messageScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards)  
    
    const totalSegmentPointsTimeLeft =  await summarizePoints(timeLeft, messageParts.timeLeft, messageScores.timeLeftScore, multipliers.multiplieTimeLeft); 
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft)
   
    const totalSegmentPointsTimeBonus =  await summarizePoints(timeBonus, messageParts.timeBonus, messageScores.timeBonusScore, multipliers.multiplieTimeBonus);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeBonus, totalSegmentPointsTimeBonus)

    const totalSegmentPointsTimeStart =  await summarizePoints(timeStart, messageParts.timeStart, messageScores.timeStartScore, multipliers.multiplieTimeStart);
    await summarizeTotalPoints(totalSum - totalSegmentPointsTimeStart, totalSegmentPointsTimeStart)

    const totalSegmentPointsMoves =  await summarizePoints(madeMoves, messageParts.madeMoves, messageScores.madeMovesScore, multipliers.multiplieMoves);
    await summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves)
    
    cardsNumber = 0;
    timeStart =  0;
    timeBonus = 0;
    timeLeft = 0;
    madeMoves = 0;

    return totalSum
}

async function summarizePoints(x:number, messagePart: HTMLDivElement, messageScore: HTMLDivElement, multiplier: number): Promise<number>{
    messagePart.style.display = "flex";
    messageScore.querySelector(":scope > .score")!.innerHTML = `0 x ${multiplier} = `;
    let i: number = 0;
    return new Promise ((resolve, reject)=>{
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
        }, 50)
    })
}

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number): Promise<void>{
    
    return new Promise ((resolve, reject)=>{
        let x = totalSum;
        const incrementTotalScore = setInterval( async ()=>{
            if(x < totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${x + 5}`
                x+=5
            }
            else if(x > totalSumWithValueToUpdate){
                messageScores.totalPointsScore.innerHTML = `${x - 5}`
                x-=5
                messageScores.totalPointsScore.style.animation = "squintingTimer .4s infinite"
            }
            else{
                
                clearInterval(incrementTotalScore)
                await updateTotalSum.next(valueToUpdate)
                messageScores.totalPointsScore.style.animation = "none";
                resolve()
                
            }
        }, 1)
    })
 

}
