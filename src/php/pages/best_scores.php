<?php
$oldResults = json_decode(file_get_contents('../../json/top10Players.json'), true);
echo '  <div id="page_best_scores">
            <table class="tableScores">
                <tbody>
';
foreach ($oldResults as $key=>$player) {
    $place = $key+1;
    $nickname = $player['nickname'];
    $points = $player['points'];
    echo "  <tr> 
                <td>$place</td>
                <td>$nickname</td>
                <td>$points</td>
            </tr> 
    ";
};
echo ' </tbody>
    </table>

    <div class="buttons">
        <button class="back_menu">BACK TO MENU</button>
    </div>
</div>

';
?>
