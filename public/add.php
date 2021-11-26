<?php
$nickname = $_POST['nickname'];
echo $nickname;
$points = $_POST['points'];
echo $points;
$strJsonFileContents = file_get_contents("data.json");
$array = json_decode($strJsonFileContents, true);
$id = strval(count($array)+1);
echo $id;
$obj = new stdClass();
$obj->id = $id;
$obj->nickname = $nickname;
$obj->points = $points;
array_push($array, $obj);
array_shift($array);
$x = json_encode($array, JSON_PRETTY_PRINT);
file_put_contents("data.json", $x);

?>
