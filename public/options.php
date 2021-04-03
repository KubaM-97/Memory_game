<div id="game_options">

    <form action="$Self" method="POST">
    
        <div class="option_step">

            <div class="option_description">
                <span>Cards Number</span>
            </div>

            <div class="options cardsNumber">

                <div class="level">

                    <label for="easy">
                        <div class="option active">
                            <img src="./images/cards/lumpy.png" alt="x16">
                            <div class="optHint">x16</div>
                        </div>
                    </label>
                    
                    <input type="radio" name="cardsNumber" value="16" id="easy">

                </div>

                <div class="level">

                    <label for="medium">
                        <div class="option">
                            <img src="./images/cards/lifty&shifty.png" alt="x20">
                            <div class="optHint">x20</div>
                        </div>
                    </label>
                    
                    <input type="radio" name="cardsNumber" value="20" id="medium">

                </div>

                <div class="level">

                    <label for="hard">
                        <div class="option">
                            <img src="./images/cards/splendid.png" alt="x24">
                            <div class="optHint">x24</div>
                        </div>
                    </label>
                    
                    <input type="radio" name="cardsNumber" value="24" id="hard">

                </div>

            </div>

        </div>

        <div class="option_step">

            <div class="option_description">
                <span>Timer</span>
            </div>

            <div class="options timer">

                <div class="level">

                    <label for="noTimer">
                        <div class="option timerNo active">
                            <img src="./images/alarm_clock.png" alt="alarm_clock Yes">
                        </div>
                    </label>

                    <input type="radio" name="timer" value="null" id="noTimer">

                </div>

                <div class="level">

                    <label for="yesTimer">
                        <div class="option timerYes">
                            <img src="./images/alarm_clock.png" alt="alarm_clock No">
                        </div>
                    </label>

                    <input type="radio" name="timer" value="25" id="yesTimer">

                    <div class="clock"> 
                        <img src="./images/clock.png" alt="clock">
                        <span class="clockTime">  

                            <span class="updateTime minusTime">
                                <button type="button" id="minusTime">-</button>  
                            </span>

                            <div class="clockTimeDisplay">
                                <span class="clockTimeMinutes">0</span>
                                :
                                <span class="clockTimeSeconds">25</span>
                            </div>
                            

                            <span class="updateTime plusTime">
                                <button type="button" id="plusTime">+</button> 
                            </span>
                        </span>                     

                    </div>

                </div>

                

            </div>

        </div>
        
        <div class="buttons">
            <button>SAVE & QUIT</button>
        </div>
    
    </form>


</div

<?php 

    $number = $POST['cardsNumber'];
    $timer = $POST['timer'];

    $enumIndex = 3;
    const enumLength: number = Object.keys(enumTimer).length / 2;

    for( $i=0; $i<optCardsNumberDiv.children.length; $i++){
        
        optCardsNumberDiv.children[i].addEventListener("click", function(this: any){

            readyOptions.cardsNumber = enumCardsNumber[`opt${i+1}`];
            
            for(let j: number=0; j<optCardsNumberDiv.children.length; j++){
                optCardsNumberDiv.children[j].classList.remove("active");
            }

            this.classList.add("active");
        })
    }
    optTimerDiv.children[0].addEventListener("click", function(this: any){
        
        optTimerDiv.children[1].classList.remove("active");
        this.classList.add("active");

        clock.style.display = "none";
        readyOptions.time = null;
        readyOptions.bonusTime = 0;
    })
    optTimerDiv.children[1].addEventListener("click", function(this: any){

        optTimerDiv.children[0].classList.remove("active");
        this.classList.add("active");

        clock.style.display = "block";
        readyOptions.time = enumTimer[`opt${enumIndex}`];
        clockSeconds.innerHTML = "" + readyOptions.time
    })
    minusTime.addEventListener("click", function(){
        enumIndex==1 ? enumIndex=enumLength : enumIndex--
        readyOptions.time = enumTimer["opt".concat(enumIndex.toString())];
        const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
        clockMinutes.innerHTML = ` ${ minutes } `
        let seconds: number = enumTimer[`opt${enumIndex}`] % 60
        seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
        readyOptions.bonusTime = 11 - enumIndex;
        
    })
    plusTime.addEventListener("click", function(){
        enumIndex==enumLength ? enumIndex=1 : enumIndex++
        readyOptions.time = enumTimer[`opt${enumIndex}`];
        const minutes = Math.floor(enumTimer[`opt${enumIndex}`] / 60 )
        clockMinutes.innerHTML = ` ${ minutes } `
        let seconds: number = enumTimer[`opt${enumIndex}`] % 60
        seconds < 10 ? clockSeconds.innerHTML = ` 0${ seconds } ` : clockSeconds.innerHTML = ` ${ seconds } `;
        readyOptions.bonusTime = 11 - enumIndex;
    })

    interface options_interface {
        cardsNumber: number;
        time: null|number;
        bonusTime: number
    }
    export const readyOptions: options_interface = {
        cardsNumber: 16,
        time: null,
        bonusTime: 11 - enumIndex
    }

    optButton.addEventListener("click", function(){
        changeView("start.php")
    })

?>