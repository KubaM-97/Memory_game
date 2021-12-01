<?php 
echo '
<div id="page_win">
    <div id="page_summary">
        <div class="total_statistics">
            <div class="statistics" id="cardsNumber">
                <div class="statistics_segment_description">Cards number: </div>
                <div class="statistics_segment_score">
                    <span class="score"></span>
                    <span class="score_full"></span>
                </div>
            </div>
            <div class="statistics" id="timeLeft">
                <div class="statistics_segment_description">Time left: </div>
                <div class="statistics_segment_score">
                    <span class="score"></span>
                    <span class="score_full"></span>
                </div>
            </div>
            <div class="statistics" id="timeBonus">
                <div class="statistics_segment_description">Time bonus: </div>
                <div class="statistics_segment_score">
                    <span class="score"></span>
                    <span class="score_full"></span>
                </div>
            </div>
            <div class="statistics" id="timeInitial">
                <div class="statistics_segment_description">Time start: </div>
                <div class="statistics_segment_score">
                    <span class="score"></span>
                    <span class="score_full"></span>
                </div>
            </div>
            <div class="statistics" id="madeMoves">
                <div class="statistics_segment_description">Made moves: </div>
                <div class="statistics_segment_score">
                    <span class="score"></span>
                    <span class="score_full"></span>
                </div>
            </div>
            <div class="statistics" id="totalPoints">
                <div class="statistics_segment_description">Total: </div>
                <div class="statistics_segment_score">
                    <span class="score_full">0</span> points
                </div>
            </div>
        </div>
        

        <div class="buttons buttons_end_lose" style="display: none;">
            <button class="button mainMenu">Main menu</button>
            <button class="button tryAgain">Try again</button>
        </div>

        <div class="buttons buttons_end_win" style="display: none;">
            <button class="button go">GO</button>
        </div>
            
    </div>
    <div id="page_nickname" style="display:none">

        <span class="score_congratulations">
            <h2>Congratulations!</h2>
            <h3>Type nickname</h3>
        </span>

        <p class="scored_points">
            <span class="scored_points"></span> points
        </p>

        <span class="enter_nickname">
            <input type="text" name="nickname" id="playerNickname" maxlength="12" autofocus autocomplete="off">
            <input type="hidden" name="points" id="playerPoints">
        </span>

    </div>
</div>
'
?>