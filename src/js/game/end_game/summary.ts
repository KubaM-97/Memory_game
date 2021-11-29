import { selectedOptions } from "../../menu/optionsSettings";
import { currentTime } from ".././timer";
import { turnCounter } from ".././play";

enum multipliers {
    multiplierCards = 200,
    multiplieTimeLeft = 5,
    multiplieTimeBonus = 100,
    multiplieTimeInitial = 10,
    multiplieMoves = 20
}

let totalSum: number = 0;
let updateTotalSum: { next: (arg0: number) => void; };

function* updateTotalSumGenerator(x: number): any {
    totalSum += yield
    totalSum += yield
    totalSum += yield
    totalSum -= yield
    totalSum -= yield
}

export async function summary(): Promise<number> {
    totalSum = 0;
    const cardsNumber = document?.querySelector(".message #cardsNumber") as HTMLDivElement;
    const timeInitial = document?.querySelector(".message #timeInitial") as HTMLDivElement;
    const timeLeft = document?.querySelector(".message #timeLeft") as HTMLDivElement;
    const timeBonus = document?.querySelector(".message #timeBonus") as HTMLDivElement;
    const madeMoves = document?.querySelector(".message #madeMoves") as HTMLDivElement;
    const totalPoints = document?.querySelector(".message #totalPoints") as HTMLDivElement;

    const messageScores = {
        cardsNumberScore: cardsNumber?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
        timeInitialScore: timeInitial?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
        timeLeftScore: timeLeft?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
        timeBonusScore: timeBonus?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
        madeMovesScore: madeMoves?.querySelector(":scope > .message_segment_score") as HTMLDivElement,
        totalPointsScore: totalPoints?.querySelector(":scope > .message_segment_score .score_full") as HTMLDivElement,
    }
    messageScores.totalPointsScore.innerHTML = `0`;
    updateTotalSum = updateTotalSumGenerator(0);
    updateTotalSum.next(0);

    let cardsNumberScored: number = selectedOptions.cardsNumber;
    let timeInitialScored: number = selectedOptions.time! | 0;
    let timeBonusScored: number = selectedOptions.selectedTime;
    let timeLeftScored: number = currentTime | 0;
    let madeMovesScored: number = turnCounter;

    const totalSegmentPointsCards = await summarizePoints(cardsNumberScored, cardsNumber, messageScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards, messageScores)

    const totalSegmentPointsTimeLeft = await summarizePoints(timeLeftScored, timeLeft, messageScores.timeLeftScore, multipliers.multiplieTimeLeft);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft, messageScores)

    const totalSegmentPointsTimeBonus = await summarizePoints(timeBonusScored, timeBonus, messageScores.timeBonusScore, multipliers.multiplieTimeBonus);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeBonus, totalSegmentPointsTimeBonus, messageScores)

    const totalSegmentPointstimeInitial = await summarizePoints(timeInitialScored, timeInitial, messageScores.timeInitialScore, multipliers.multiplieTimeInitial);
    await summarizeTotalPoints(totalSum - totalSegmentPointstimeInitial, totalSegmentPointstimeInitial, messageScores)

    const totalSegmentPointsMoves = await summarizePoints(madeMovesScored, madeMoves, messageScores.madeMovesScore, multipliers.multiplieMoves);
    await summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves, messageScores)

    // cardsNumberScored = 0;
    // timeInitialScored = 0;
    // timeBonusScored = 0;
    // timeLeftScored = 0;
    // madeMovesScored = 0;

    return totalSum
}

async function summarizePoints(x: number, messagePart: HTMLDivElement, messageScore: HTMLDivElement, multiplier: number): Promise<number> {
    messagePart.style.display = "flex";
    messageScore.querySelector(":scope > .score")!.innerHTML = `0 x ${multiplier} = `;
    let i: number = 0;
    return new Promise((resolve, reject) => {
        const incrementScore = setInterval(() => {
            if (i < x) {
                i++
                messageScore.querySelector(":scope > .score")!.innerHTML = `${i} x ${multiplier} = `;

            }
            else {
                clearInterval(incrementScore);
                messageScore.querySelector(":scope > .score_full")!.innerHTML = `${i * multiplier} points`
                resolve(i * multiplier);
            }
        }, 50)
    })
}

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number, messageScores: any): Promise<void> {

    return new Promise((resolve, reject) => {
        let x = totalSum;
        const incrementTotalScore = setInterval(async () => {
            if (x < totalSumWithValueToUpdate) {
                messageScores.totalPointsScore.innerHTML = `${x + 5}`
                x += 5
            }
            else if (x > totalSumWithValueToUpdate) {
                messageScores.totalPointsScore.innerHTML = `${x - 5}`
                x -= 5
                messageScores.totalPointsScore.style.animation = "squintingTimer .4s infinite"
            }
            else {

                clearInterval(incrementTotalScore)
                await updateTotalSum.next(valueToUpdate)
                messageScores.totalPointsScore.style.animation = "none";
                resolve()

            }
        }, 1)
    })


}
