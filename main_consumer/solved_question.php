<?php
session_start();
ini_set( 'display_errors', 1 );
// var_dump($_POST);
// exit();
$question_id = $_POST['id'];

// DB接続の設定
include('../functions.php');
$pdo = connect_to_db();

$sql = 'UPDATE question SET solved=1 WHERE id=:id';
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':id', $question_id, PDO::PARAM_STR);
$status = $stmt->execute();