<?php
echo '<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <title>Happy Tree Friends: Memory Game</title>
    <meta name="description" content="Happy Tree Friends: Memory Game">
</head>
<body>            
    <script src="bundle.js" defer></script>
    <main>
        <div id="overlay"></div>
        
        <div class="container">
            
            <div class="game">
                <div class="gate" id="left_gate"></div>            
                <div class="gate" id="right_gate"></div>  
                <div class="page"></div>
            </div>
        </div>
    </main>    
</body>
</html>
'
?>