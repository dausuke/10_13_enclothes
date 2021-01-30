<?php
session_start();
ini_set( 'display_errors', 1 );

include('../functions.php');

$pdo = connect_to_db();
header('Content-Type: application/json; charset=utf-8');
$receive_id = $_POST['id'];
$question_id = (int)$receive_id;

//回答のデータ取得
// $sql = 'SELECT * FROM answers WHERE question_id=:question_id';
$sql = 'SELECT * FROM answers LEFT OUTER JOIN (SELECT id,name FROM salesperson ) AS answer_person ON answers.salesperson_id = answer_person.id
 WHERE question_id=:question_id';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':question_id', $question_id, PDO::PARAM_STR);

$status = $stmt->execute();

if ($status == false) {
    $error = $stmt->errorInfo();
    // データ登録失敗次にエラーを表示
    exit('sqlError:' . $error[2]);
} else {
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
}
