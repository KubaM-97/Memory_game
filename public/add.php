<?php
$nickname = $_POST['nickname'];
echo $nickname;
$points = $_POST['points'];
echo $points;
$strJsonFileContents = file_get_contents("data.json");
$array = json_decode($strJsonFileContents);

$id = uniqid();
echo $id;
$obj = new stdClass();
$obj->id = $id;
$obj->nickname = $nickname;
$obj->points = intval($points);

array_push($array, $obj);
function cmp($a, $b) {
    return $b->points - $a->points;
}
usort($array, "cmp");
array_pop($array);

$x = json_encode($array, JSON_PRETTY_PRINT);
file_put_contents("data.json", $x);

?>
