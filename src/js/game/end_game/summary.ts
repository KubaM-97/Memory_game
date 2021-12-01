import { selectedOptions } from "../menu/buttons/options";
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
    const cardsNumber = document?.querySelector(".statistics#cardsNumber") as HTMLDivElement;
    const timeInitial = document?.querySelector(".statistics#timeInitial") as HTMLDivElement;
    const timeLeft = document?.querySelector(".statistics#timeLeft") as HTMLDivElement;
    const timeBonus = document?.querySelector(".statistics#timeBonus") as HTMLDivElement;
    const madeMoves = document?.querySelector(".statistics#madeMoves") as HTMLDivElement;
    const totalPoints = document?.querySelector(".statistics#totalPoints") as HTMLDivElement;

    const statisticsScores = {
        cardsNumberScore: cardsNumber?.querySelector(":scope > .statistics_segment_score") as HTMLDivElement,
        timeInitialScore: timeInitial?.querySelector(":scope > .statistics_segment_score") as HTMLDivElement,
        timeLeftScore: timeLeft?.querySelector(":scope > .statistics_segment_score") as HTMLDivElement,
        timeBonusScore: timeBonus?.querySelector(":scope > .statistics_segment_score") as HTMLDivElement,
        madeMovesScore: madeMoves?.querySelector(":scope > .statistics_segment_score") as HTMLDivElement,
        totalPointsScore: totalPoints?.querySelector(":scope > .statistics_segment_score .score_full") as HTMLDivElement,
    }
    statisticsScores.totalPointsScore.innerHTML = `0`;
    updateTotalSum = updateTotalSumGenerator(0);
    updateTotalSum.next(0);

    let cardsNumberScored: number = selectedOptions.cardsNumber;
    let timeInitialScored: number = selectedOptions.time! | 0;
    let timeBonusScored: number = !selectedOptions.time ? 0 : selectedOptions.selectedTime;
    let timeLeftScored: number = currentTime | 0;
    let madeMovesScored: number = turnCounter;

    const totalSegmentPointsCards = await summarizePoints(cardsNumberScored, cardsNumber, statisticsScores.cardsNumberScore, multipliers.multiplierCards);
    await summarizeTotalPoints(totalSum + totalSegmentPointsCards, totalSegmentPointsCards, statisticsScores)

    const totalSegmentPointsTimeLeft = await summarizePoints(timeLeftScored, timeLeft, statisticsScores.timeLeftScore, multipliers.multiplieTimeLeft);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeLeft, totalSegmentPointsTimeLeft, statisticsScores)

    const totalSegmentPointsTimeBonus = await summarizePoints(timeBonusScored, timeBonus, statisticsScores.timeBonusScore, multipliers.multiplieTimeBonus);
    await summarizeTotalPoints(totalSum + totalSegmentPointsTimeBonus, totalSegmentPointsTimeBonus, statisticsScores)

    const totalSegmentPointstimeInitial = await summarizePoints(timeInitialScored, timeInitial, statisticsScores.timeInitialScore, multipliers.multiplieTimeInitial);
    await summarizeTotalPoints(totalSum - totalSegmentPointstimeInitial, totalSegmentPointstimeInitial, statisticsScores)

    const totalSegmentPointsMoves = await summarizePoints(madeMovesScored, madeMoves, statisticsScores.madeMovesScore, multipliers.multiplieMoves);
    await summarizeTotalPoints(totalSum - totalSegmentPointsMoves, totalSegmentPointsMoves, statisticsScores)

    // cardsNumberScored = 0;
    // timeInitialScored = 0;
    // timeBonusScored = 0;
    // timeLeftScored = 0;
    // madeMovesScored = 0;

    return totalSum
}

async function summarizePoints(x: number, statisticsPart: HTMLDivElement, statisticsScore: HTMLDivElement, multiplier: number): Promise<number> {
    statisticsPart.style.display = "flex";
    statisticsScore.querySelector(":scope > .score")!.innerHTML = `0 x ${multiplier} = `;
    let i: number = 0;
    return new Promise((resolve, reject) => {
        const incrementScore = setInterval(() => {
            if (i < x) {
                i++
                statisticsScore.querySelector(":scope > .score")!.innerHTML = `${i} x ${multiplier} = `;

            }
            else {
                clearInterval(incrementScore);
                statisticsScore.querySelector(":scope > .score_full")!.innerHTML = `${i * multiplier} points`
                resolve(i * multiplier);
            }
        }, 50)
    })
}

async function summarizeTotalPoints(totalSumWithValueToUpdate: number, valueToUpdate: number, statisticsScores: any): Promise<void> {

    return new Promise((resolve, reject) => {
        let x = totalSum;
        const incrementTotalScore = setInterval(async () => {
            if (x < totalSumWithValueToUpdate) {
                statisticsScores.totalPointsScore.innerHTML = `${x + 5}`
                x += 5
            }
            else if (x > totalSumWithValueToUpdate) {
                statisticsScores.totalPointsScore.innerHTML = `${x - 5}`
                x -= 5
                statisticsScores.totalPointsScore.style.animation = "squintingTimer .4s infinite"
            }
            else {

                clearInterval(incrementTotalScore)
                await updateTotalSum.next(valueToUpdate)
                statisticsScores.totalPointsScore.style.animation = "none";
                resolve()

            }
        }, 1)
    })


}
