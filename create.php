<?php

// if($_POST["task"]["done"] != true || $_POST["task"]["done"] != false){
//         echo json_encode([
//                 "success" => false,
//                 "message" => "invalid data",
//                 "code" => 400
//         ]);
//         die();
// }

$toDoList = file_get_contents("./database.json");
$toDoListDecoded = json_decode($toDoList,true);


$newLing=[
        "taskName" => $_POST["task"]["taskName"],
        "done" => $_POST["task"]["done"] =="true" ? true : false
];
$toDoListDecoded[]= $newLing;
$toDoListEncoded = json_encode($toDoListDecoded);

file_put_contents("./database.json",$toDoListEncoded);



header("Content-Type: application/json");
$response =[
        "success" => true,
        "code" => 200,
        "message"=>"ok",
        "todolist" => $toDoListDecoded
];
echo json_encode($response);