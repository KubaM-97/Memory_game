import { multipliers, messageParts} from "../../variables";
import { selectedOptions } from "../../menu/options";
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
     const messageParts = {
        cardsNumber: document?.querySelector(".message #cardsNumber") as HTMLDivElement,
        timeStart: document?.querySelector(".message #timeStart") as HTMLDivElement,
        timeLeft: document?.querySelector(".message #timeLeft") as HTMLDivElement,
        timeBonus: document?.querySelector(".message #timeBonus") as HTMLDivElement,
        madeMoves: document?.querySelector(".message #madeMoves") as HTMLDivElement,
        totalPoints: document?.querySelector(".message #totalPoints") as HTMLDivElement,
    }
    const cardsNumber2 = document?.querySelector(".message #cardsNumber") as HTMLDivElement;
     const timeStart2 = document?.querySelector(".message #timeStart") as HTMLDivElement;
     const timeLeft2 = document?.querySelector(".message #timeLeft") as HTMLDivElement;
     const timeBonus2 = document?.querySelector(".message #timeBonus") as HTMLDivElement;
     const madeMoves2 = document?.querySelector(".message #madeMoves") as HTMLDivElement;
     const totalPoints = document?.querySelector(".message #totalPoints") as HTMLDivElement;

    const messageScores = {
    cardsNumberScore: cardsNumber2?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeStartScore: timeStart2?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeLeftScore: timeLeft2?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    timeBonusScore: timeBonus2?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    madeMovesScore: madeMoves2?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
    totalPointsScore: totalPoints?.querySelector(":scope > .message_segment_score .score_full") as HTMLDivElement,
}
    messageScores.totalPointsScore.innerHTML = `0`;
    updateTotalSum = updateTotalSumGenerator(0);
    updateTotalSum.next(0);

    let cardsNumber: number = selectedOptions.cardsNumber;
    let timeStart: number = selectedOptions.time! | 0;
    let timeBonus: number = selectedOptions.selectedTime;
    let timeLeft: number = currentTime | 0;
    let madeMoves: number = turnCounter;

    const totalSegmentPointsCards =  await summarizePoints(cardsNumber, cardsNumber2, messageScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards, messageScores)  
    
    const totalSegmentPointsTimeLeft =  await summarizePoints(timeLeft, timeLeft2, messageScores.timeLeftScore, multipliers.multiplieTimeLeft); 
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft, messageScores)
   
    const totalSegmentPointsTimeBonus =  await summarizePoints(timeBonus, timeBonus2, messageScores.timeBonusScore, multipliers.multiplieTimeBonus);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeBonus, totalSegmentPointsTimeBonus, messageScores)

    const totalSegmentPointsTimeStart =  await summarizePoints(timeStart, timeStart2, messageScores.timeStartScore, multipliers.multiplieTimeStart);
    await summarizeTotalPoints(totalSum - totalSegmentPointsTimeStart, totalSegmentPointsTimeStart, messageScores)

    const totalSegmentPointsMoves =  await summarizePoints(madeMoves, madeMoves2, messageScores.madeMovesScore, multipliers.multiplieMoves);
    await summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves, messageScores)
    
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

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number, messageScores: any): Promise<void>{
    
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
