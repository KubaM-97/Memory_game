<div id="game_end">
    <div class="video"></div>
    <div class="summary">
        <div class="message">

            <div class="message_statistics">
                <div class="message_segment" id="cardsNumber">
                    <div class="message_segment_description">Cards number: </div>
                    <div class="message_segment_score">
                        <span class="score"></span>
                        <span class="score_full"></span>
                    </div>
                </div>
                <div class="message_segment" id="timeLeft">
                    <div class="message_segment_description">Time left: </div>
                    <div class="message_segment_score">
                        <span class="score"></span>
                        <span class="score_full"></span>
                    </div>
                </div>
                <div class="message_segment" id="timeBonus">
                    <div class="message_segment_description">Time bonus: </div>
                    <div class="message_segment_score">
                        <span class="score"></span>
                        <span class="score_full"></span>
                    </div>
                </div>
                <div class="message_segment" id="timeStart">
                    <div class="message_segment_description">Time start: </div>
                    <div class="message_segment_score">
                        <span class="score"></span>
                        <span class="score_full"></span>
                    </div>
                </div>
                <div class="message_segment" id="madeMoves">
                    <div class="message_segment_description">Made moves: </div>
                    <div class="message_segment_score">
                        <span class="score"></span>
                        <span class="score_full"></span>
                    </div>
                </div>
            </div>
            
            <div class="message_segment" id="totalPoints">
                <div class="message_segment_description">Total: </div>
                <div class="message_segment_score">
                    <span class="score_full">0</span> points
                </div>
            </div>

        </div>
                                        
    </div>
    <div class="nickname">
        <span class="score_congratulations">
            <h2>Congratulations!</h2>
            <h3>Type nickname</h3>
        </span>

        <p class="score_points">
            <span class="score_points"></span> points
        </p>

        <!-- <form action=""> -->
            <span class="score_nickname">
                <input type="text" name="nickname" id="playerNickname">
                <input type="hidden" name="points" id="playerPoints">
            </span>
            <div class="buttons">
                <button>GO TO MENU</button>
            </div>
        <!-- </form> -->

    </div>
    
    <div class="message_lose">Game Over! You die!</div>
    
    <div class="buttons">
        <div class="button"> 
            <button class="main_menu">Main menu</button>
        </div>
        <div class="button"> 
            <button class="try_again">Try again</button>
        </div>
    </div>

</div>