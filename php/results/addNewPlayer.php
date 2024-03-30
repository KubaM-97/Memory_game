<?php
$id = uniqid();
$nickname = $_POST['nickname'];
$points = $_POST['points'];

$oldResults = json_decode(file_get_contents('../../json/top10Players.json'));

$newPlayer = new stdClass();
$newPlayer->id = $id;
$newPlayer->nickname = $nickname;
$newPlayer->points = intval($points);

array_push($oldResults, $newPlayer);

function compare($a, $b) {
    return $b->points - $a->points;
}

usort($oldResults, 'compare');

array_pop($oldResults);

$newResults = json_encode($oldResults, JSON_PRETTY_PRINT);
file_put_contents('../../json/top10Players.json', $newResults);

?>
