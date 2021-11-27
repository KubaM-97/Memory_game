<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Cards</title>
</head>
<body>            
    <script src="bundle.js" defer></script>
    <main>
        <div id="overlay"></div>
        
        <div class="container">
            
            <div class="game">
                <div class="door" id="left_door"></div>            
                <div class="door" id="right_door"></div>  

                <div class="panel"></div>
                <!-- 
                <div id="game_end">
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

                            <div class="buttons buttons_end_lose" style="display: none;">
                                <button class="button mainMenu">Main menu</button>
                                <button class="button tryAgain">Try again</button>
                            </div>
                            <div class="buttons buttons_end_win" style="display: none;">
                                <button class="button go">Go</button>
                            </div>
                        </div>
                                                      
                    </div>
                    <div class="nickname" style="display:none">
                        <span class="score_congratulations">
                            <h2>Congratulations!</h2>
                            <h3>Type nickname</h3>
                        </span>

                        <p class="score_points">
                            <span class="score_points"></span> points
                        </p>

                        <span class="score_nickname">
                            <input type="text" name="nickname" id="playerNickname" maxlength="12">
                            <input type="hidden" name="points" id="playerPoints">
                        </span>

                    </div>
                </div> -->
            </div>
        </div>
    </main>    
</body>
</html>
