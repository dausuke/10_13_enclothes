<?php
ini_set( 'display_errors', 1 );
ini_set( 'error_reporting', E_ALL );
//データ受信

$attribute = $_POST['attribute'];

// var_dump($password);
// exit();

// DB接続の設定
include('../functions.php');
$pdo = connect_to_db();
//アカウント作成した人がユーザーか販売員か
if($attribute == 0){
    //ユーザーの場合
    $username = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $city = $_POST['city'];
    $gender = $_POST['gender'];
    $shop = $_POST['shop'];
    $height = $_POST['height'];
    $weight = $_POST['weight'];
// var_dump($weight);
// exit();
    $sql = 'INSERT INTO consumer(id,name,age,city,gender,shop,height,weight,email,password,created_at,is_deleted) VALUES(NULL,:name,:age,:city,:gender,:shop,:height,:weight,:email,:password,sysdate(),0)';
    $stmt = $pdo->prepare($sql);

    //バインド変数設定
    $stmt->bindValue(':name', $username, PDO::PARAM_STR);
    $stmt->bindValue(':age', $age, PDO::PARAM_INT);
    $stmt->bindValue(':city', $city, PDO::PARAM_STR);
    $stmt->bindValue(':gender', $gender, PDO::PARAM_STR);
    $stmt->bindValue(':shop', $shop, PDO::PARAM_STR);
    $stmt->bindValue(':height', $height, PDO::PARAM_INT);
    $stmt->bindValue(':weight', $weight, PDO::PARAM_INT);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':password', $password, PDO::PARAM_STR);
}elseif($attribute == 1){

    //販売員の場合
    $username = $_POST['name'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $city = $_POST['city'];
    $gender = $_POST['gender'];
    $shop = $_POST['shop'];
    $experience = $_POST['experience'];
// var_dump($experience);
// exit();
    $sql = 'INSERT INTO salesperson(id,name,email,age,city,gender,shop,experience,password,created_at,is_deleted) VALUES(NULL,:name,:email,:age,:city,:gender,:shop,:experience,:password,sysdate(),0)';
    $stmt = $pdo->prepare($sql);

    //バインド変数設定
    $stmt->bindValue(':name', $username, PDO::PARAM_STR);
    $stmt->bindValue(':age', $age, PDO::PARAM_INT);
    $stmt->bindValue(':city', $city, PDO::PARAM_STR);
    $stmt->bindValue(':gender', $gender, PDO::PARAM_STR);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->bindValue(':password', $password, PDO::PARAM_STR);
    $stmt->bindValue(':shop', $shop, PDO::PARAM_STR);
    $stmt->bindValue(':experience', $experience, PDO::PARAM_STR);
}

//SQL実行
$status = $stmt->execute();

if ($status == false) {
    $error = $stmt->errorInfo();
    // データ登録失敗次にエラーを表示
    exit('sqlError:' . $error[2]);
} else {
    // 登録ページへ移動
    header('Location:../index.php');
}
