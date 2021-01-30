<?php
session_start();
ini_set('display_errors', 1);

include("../functions.php");

header('Content-Type: application/json; charset=utf-8');
$receive_id = $_POST['id'];
$salesperson_id = (int)$receive_id;
// var_dump($salesperson_id);
// exit();

$pdo = connect_to_db();

// データ取得SQL作成
$sql = 'SELECT * FROM salesperson WHERE id=:salesperson_id';    //販売員の全データ取得

// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':salesperson_id', $salesperson_id, PDO::PARAM_INT);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    // SQL実行に失敗した場合はここでエラーを出力し，以降の処理を中止する
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
}