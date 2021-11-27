<?php
echo '
<div id="game_options">

    <div class="option_step">

        <div class="option_description">
            <span>Cards Number</span>
        </div>

        <div class="options cardsNumber">

            <div class="option active">
                <img src="./images/cards/lumpy.png" alt="x16">
                <div class="optHint">x16</div>
            </div>

            <div class="option">
                <img src="./images/cards/lifty&shifty.png" alt="x20">
                <div class="optHint">x20</div>
            </div>

            <div class="option">
                <img src="./images/cards/splendid.png" alt="x24">
                <div class="optHint">x24</div>
            </div>

        </div>

    </div>

    <div class="option_step">

        <div class="option_description">
            <span>Timer</span>
        </div>

        <div class="options timer">

            <div class="option timerNo active">
                <img src="./images/alarm_clock.png" alt="alarm_clock Yes">
            </div>

            <div class="option timerYes">
                <img src="./images/alarm_clock.png" alt="alarm_clock No">
            </div>

            <div class="clock"> 
                <img src="./images/clock.png" alt="clock">
                <span class="clockTime">  

                    <span class="updateTime minusTime">
                        <button id="minusTime">-</button>  
                    </span>

                    <div class="clockTimeDisplay">
                        <span class="clockTimeMinutes">0</span>
                        :
                        <span class="clockTimeSeconds">25</span>
                    </div>
                

                    <span class="updateTime plusTime">
                        <button id="plusTime">+</button> 
                    </span>
                </span>                     

            </div>

        </div>

    </div>

    <div class="buttons">
        <button class="back_menu">SAVE & QUIT</button>
    </div>

</div>
'
?>