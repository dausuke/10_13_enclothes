<?php
session_start();
ini_set( 'display_errors', 1 );

$data = $this->request->input('json_decode');

var_dump($data);
exit();
$title = $_POST['config']['data']['title'];
$contents = $_POST['contents'];
$uid = $_SESSION['uid'];

// DB接続の設定
include('../functions.php');
$pdo = connect_to_db();

$sql = 'INSERT INTO question(id,uid,title,contents,answers,solved,created_at)VALUES(NULL,:uid,:title,:contents,0,0,sysdate())';
$stmt = $pdo->prepare($sql);
//バインド変数設定
$stmt->bindValue(':uid', $uid, PDO::PARAM_STR);
$stmt->bindValue(':title', $title, PDO::PARAM_STR);
$stmt->bindValue(':contents', $contents, PDO::PARAM_STR);
//SQL実行
$status = $stmt->execute();

if ($status == false) {
    $error = $stmt->errorInfo();
    // データ登録失敗次にエラーを表示
    exit('sqlError:' . $error[2]);
} else {

}