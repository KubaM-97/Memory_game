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

                 <div id="game_start">
                    <header>
                        <h1>Happy Tree Friends</h1>
                        <h2>Memory game</h2>
                        <h5>Based on animated series for kids
                            <a href="https://www.mondomedia.com/channel/HappyTreeFriends" target="_blank">[link]</a>
                        </h5>    
                    </header>

                    <section class="main_buttons">

                        <div class="main_button_div">
                            <button class="main_button active" id="play">
                                <span>PLAY</span>
                            </button>
                        </div>
                        <div class="main_button_div">
                            <button class="main_button" id="options">
                                <span>OPTIONS</span>
                            </button>
                        </div>
                        <div class="main_button_div">
                            <button class="main_button" id="bestScores">
                                <span>BEST SCORES</span>
                            </button>
                        </div>

                    </section>
                    
                    <div class="switch_sound">
                        <img src="images/volume.png" alt="sound-icon" />
                    </div> 
                </div> 

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
                            <button>SAVE & QUIT</button>
                        </div>
                        
                </div>
                <div id="game_bestScores">
                    <div class="tableScores">
                       
                    </div>
                   
                    <div class="buttons">
                        <button>BACK TO MENU</button>
                    </div>

                </div>
                <div id="game_board">
                    <div id="game_cards"></div>
                    <div id="timer">Time: <br> <span id="timeCounter"></span></div>
                    <div id="score">Moves: <br><span id="scoreCounter">0</span></div>
                </div>
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
                    

                    <div class="lose">
                        <div class="video"></div>

                        <div class="message_lose">Game Over! You die!</div>
                        
                        <div class="buttons buttons_end_lose" style="display: none;">
                            <button class="button mainMenu2">Main menu2</button>
                            <button class="button tryAgain2">Try again</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>    
</body>
</html>
