<?php
$strJsonFileContents = file_get_contents("data.json");
$array = json_decode($strJsonFileContents, true);
// function cmp($a, $b) {
//     return strcmp($b['points'], $a['points']);
// }
// usort($array, "cmp");
echo ' <div id="game_bestScores">
            <div class="tableScores">
            
                <table>
                    <tbody>
';
foreach ($array as $key=>$value) {
    $increasedKey = $key+1;
    $nickname = $value['nickname'];
    $points = $value['points'];
    echo "  <tr> 
                <td>$increasedKey</td>
                <td>$nickname</td>
                <td>$points</td>
            </tr> 
    ";
};
echo ' </tbody>
    </table>
</div>

<div class="buttons">
    <button class="back_menu">BACK TO MENU</button>
</div>
';
?>
