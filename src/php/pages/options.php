<?php
echo '
<div id="page_options">

    <div class="options_step">

        <div class="option_description">
            <span>Cards Number</span>
        </div>

        <div class="options optCardsNumber">

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

    <div class="options_step">

        <div class="option_description">
            <span>Timer</span>
        </div>

        <div class="options optTimer">

            <button class="option timerNo">
                <img src="./images/alarm_clock.png" alt="alarm_clock Yes">
            </button>

            <button class="option timerYes">
                <img src="./images/alarm_clock.png" alt="alarm_clock No">
            </button>

            <div class="timer"> 
                <img src="./images/timerScreen.png" alt="timer">
                <div class="timerDevice">  

                    <span class="setTimer minusTime">
                        <button id="minusTime">-</button>  
                    </span>

                    <div class="timerScreen">
                        <span class="clockTimeMinutes">0</span>
                        :
                        <span class="clockTimeSeconds">25</span>
                    </div>
                
                    <span class="setTimer plusTime">
                        <button id="plusTime">+</button> 
                    </span>
                </span>                     

            </div>

        </div>

    </div>

</div>

<div class="buttons">
    <button class="back_menu">SAVE & QUIT</button>
</div>

'
?>