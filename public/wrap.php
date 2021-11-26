<?php
$strJsonFileContents = file_get_contents("data.json");
// file_put_contents("data.json", "assdfdsfdf", FILE_APPEND);
$array = json_decode($strJsonFileContents, true);
function cmp($a, $b) {
    return strcmp($b['points'], $a['points']);
}
usort($array, "cmp");
echo ' <table>
<tbody>';
foreach ($array as $key=>$value) {
    $increasedKey = $key+1;
    $nickname = $value['nickname'];
    $points = $value['points'];
    echo " <tr> 
        <td>$increasedKey</td>
        <td>$nickname</td>
        <td>$points</td>
    </tr> ";
};
echo ' </tbody>
</table>';
?>
