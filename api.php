<?php
$toDoList = file_get_contents("./database.json");
$toDoListDecoded = json_decode($toDoList,true);
header("Content-Type: application/json");
$toDoListEncoded = json_encode($toDoListDecoded);
echo $toDoListEncoded;
?> 