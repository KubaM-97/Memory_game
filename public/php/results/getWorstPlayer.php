<?php
    $oldResults = json_decode(file_get_contents('../../top10Players.json'));
    echo $oldResults[9]->points
?>
