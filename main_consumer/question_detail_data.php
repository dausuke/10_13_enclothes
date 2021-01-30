<?php
session_start();
ini_set( 'display_errors', 1 );

include('../functions.php');

header('Content-Type: application/json; charset=utf-8');
$receive_id = $_POST['id'];
$question_id = (int)$receive_id;
// var_dump($question_id);
// exit();

$pdo = connect_to_db();

//質問のデータ取得
$sql = 'SELECT * FROM question LEFT OUTER JOIN (SELECT question_id,COUNT(id) AS cnt FROM answers GROUP BY question_id
) AS state ON question.id = state.question_id WHERE id=:question_id';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':question_id', $question_id, PDO::PARAM_INT);

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
