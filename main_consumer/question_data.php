<?php
session_start();
ini_set( 'display_errors', 1 );

include('../functions.php');
check_session_id();

$pdo = connect_to_db();
$uid = $_SESSION['uid'];

// データ取得SQL作成
$sql = 'SELECT * FROM question LEFT OUTER JOIN (SELECT question_id,COUNT(id) AS cnt FROM answers GROUP BY question_id
) AS state ON question.id = state.question_id WHERE consumer_id=:uid';
// SQL準備&実行
$stmt = $pdo->prepare($sql);
$stmt->bindValue(':uid', $uid, PDO::PARAM_STR);
$status = $stmt->execute();

// データ登録処理後
if ($status == false) {
    // SQL実行に失敗した場合はここでエラーを出力し，以降の処理を中止する
    $error = $stmt->errorInfo();
    echo json_encode(["error_msg" => "{$error[2]}"]);
    exit();
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
}