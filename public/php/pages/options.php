<?php
echo '
<div id="game_options">

    <div class="option_step">

        <div class="option_description">
            <span>Cards Number</span>
        </div>

        <div class="options cardsNumber">

            <button class="option">
                <img src="./images/cards/lumpy.png" alt="x16">
                <div class="optHint">x16</div>
            </button>

            <button class="option">
                <img src="./images/cards/lifty&shifty.png" alt="x20">
                <div class="optHint">x20</div>
            </button>

            <button class="option">
                <img src="./images/cards/splendid.png" alt="x24">
                <div class="optHint">x24</div>
            </button>

        </div>

    </div>

    <div class="option_step">

        <div class="option_description">
            <span>Timer</span>
        </div>

        <div class="options timer">

            <button class="option timerNo">
                <img src="./images/alarm_clock.png" alt="alarm_clock Yes">
            </button>

            <button class="option timerYes">
                <img src="./images/alarm_clock.png" alt="alarm_clock No">
            </button>

            <button class="clock"> 
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