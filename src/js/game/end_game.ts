import { winSound, winVideo, divVideo, messageParts, messageDescriptions, messageScores, end_screen_message, end_screen_buttons, main_menu, try_again } from "../variables";
import { changeView } from "../menu/door";
import { readyOptions } from "../menu/options";
import { startTimer, currentTime } from  "./timer";
import { turnCounter } from  "./play";

endGame()
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
    multiplierimeStart = 75,
    multiplierimeLeft = 200,
    multiplierMoves = 50
}

async function summary(): Promise<void>{
    if( readyOptions.time === null ){
        readyOptions.time = 0
    }

    const timeLeft = currentTime | 0

    const pointsCardsNumber: number =  readyOptions.cardsNumber * multipliers.multiplierCards;
    const pointsTimeStart: number = readyOptions.time * multipliers.multiplierCards | 20;
    const pointsTimeLeft: number = timeLeft * multipliers.multiplierCards | 10;
    const pointsMoves: number = turnCounter * multipliers.multiplierCards | 35;

    messageScores.totalPointsScore.innerHTML += 0;

   
    const b = aaa();

    let totalSegmentPointsCards =  await summarizePoints(readyOptions.cardsNumber, messageParts.cardsNumber, messageDescriptions.cardsNumberDescription, messageScores.cardsNumberScore, `Cards number: `);
    console.log(totalSum, totalSegmentPointsCards)
    const g = totalSum + totalSegmentPointsCards
    const bbb = await setInterval( async ()=>{
        if(totalSum < g){
            console.log(25)
            messageScores.totalPointsScore.innerHTML = `${totalSum + 25}`
            totalSum+=25
        }
        else{
            clearInterval(bbb)
            await b.next(totalSegmentPointsCards)
        }
    }, 1 )
    // await updateTotalSum(totalSum, totalSegmentPointsCards)
    
   
    const totalSegmentPointsTimeStart =  await summarizePoints(20, messageParts.timeStart, messageDescriptions.timeStartDescription, messageScores.timeStartScore, `Time start: `);
    console.log(totalSum, totalSegmentPointsTimeStart)
    const h = totalSum + totalSegmentPointsTimeStart
     const eee = await setInterval( async ()=>{
        if(totalSum < h){
            console.log(35)
            messageScores.totalPointsScore.innerHTML = `${totalSum + 25}`
            totalSum+=25
        }
        else{
            clearInterval(eee)
            await b.next(totalSegmentPointsTimeStart)
        }
    }, 10 )
    // await updateTotalSum(totalSum, totalSegmentPointsTimeStart)

    const totalSegmentPointsTimeLeft =  await summarizePoints(10, messageParts.timeLeft, messageDescriptions.timeLeftDescription, messageScores.timeLeftScore, `Time left: `); 
    console.log(totalSum, totalSegmentPointsTimeLeft, 12)
    const j = totalSum + totalSegmentPointsTimeLeft
    const ccc = await setInterval( async ()=>{
        if(totalSum < j){
            console.log(45)
            messageScores.totalPointsScore.innerHTML = `${totalSum + 25}`
            totalSum+=25
        }
        else{
            clearInterval(ccc)
            await b.next(totalSegmentPointsTimeLeft)
            console.log("ostatni32",totalSum)
        }
    }, 10 )
    // await updateTotalSum(totalSum, totalSegmentPointsTimeLeft)
    
    const totalSegmentPointsMoves =  await summarizePoints(35, messageParts.madeMoves, messageDescriptions.madeMovesDescription, messageScores.madeMovesScore, `Made moves: `);
    console.log(totalSum, totalSegmentPointsMoves)
    let k = totalSum - totalSegmentPointsMoves
    console.log(k, totalSum)
    const ddd = await setInterval( async ()=>{
        if(totalSum > k){
            console.log(k, totalSum)
            messageScores.totalPointsScore.innerHTML = `${totalSum - 25}`
            totalSum-=25
        }
        else{
            clearInterval(ddd)
            await b.next(totalSegmentPointsMoves)
            await b.next(totalSegmentPointsMoves)
            console.log("ostatni2",totalSum)
        }
    }, 10 )
    // await updateTotalSum(totalSum, totalSegmentPointsMoves)
    console.log("ostatni",totalSum)
    
}
async function* aaa(): any{
    // console.log(yield)
    // console.log(yield)
    // console.log(yield)
    // console.log(yield)
    console.log(1111111111111)
    totalSum += yield
    
    console.log(2222222222222)
    totalSum += yield
    
    totalSum += yield

    console.log(34444444444444444)
    totalSum -= yield
}
async function updateTotalSum(x: number, y: number): Promise<void>{

    // totalSum+=y;
    
    return await new Promise ((resolve, reject)=>{
        const incrementScore = setInterval(()=>{
            if(x < totalSum){
                messageScores.totalPointsScore.innerHTML = `${x+5} `;  
                x+=5;
            } 
            else{
                clearInterval(incrementScore);
                resolve();
            }
        },1)
    })

}

let totalSum: number = 0;

async function summarizePoints(x:number, messagePart: HTMLDivElement, messageDescription: HTMLDivElement, messageScore: HTMLDivElement, staticMessage: string): Promise<number>{
    messageDescription.innerHTML = staticMessage;
    let i: number = 0;
    return await new Promise ((resolve, reject)=>{
        const incrementScore = setInterval(()=>{
            if(i < x){
                i++
                messageScore.querySelector(":scope > .score")!.innerHTML = `${i} x ${50} = `;  
    
            } 
            else{
                clearInterval(incrementScore);
                messageScore.querySelector(":scope > .score_full")!.innerHTML = `${i * 50} points`
                resolve(i * 50);
            }
        },50)
    })
}





main_menu.addEventListener("click", function(){
    changeView("game_end", "game_start");
})

try_again.addEventListener("click", function(){
    changeView("game_end", "game_board");
    startTimer();
})