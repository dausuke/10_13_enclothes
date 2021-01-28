<?PHP
session_start();
ini_set('display_errors', 1);

// include('../functions.php');
// check_session_id();
?>
<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/signin.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css">
    <title>enclothes</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <header>
        <div class="header-content">
            <p>enclothes</p>
            <div class="action">
                <div class="siginin" id="signin"><i class="fas fa-sign-in-alt"></i>ログイン</div>
                <div class="usercreat" id='signup'><i class="fas fa-user-plus"></i>新規登録</div>
            </div>
        </div>
    </header>
    <div class="indexpage">
        <div class="introduction">
            <h1>enclothes</h1>
            <h2>人と物の出会いで新たな価値を創造する</h2>
            <p>何を着たら良いかわからない、自分に似合う服がわからない。</p>
            <p>そんな悩みを洋服のプロフェッショナルが解決します。</p>
            <p>enclothesでワクワクするような服との出会いを見つけませんか。</p>
        </div>
    </div>
    <script>
        $('#signin').on('click', function() {
            window.location.href = "signin/signin.php"
        });
        $('#signup').on('click', function() {
            window.location.href = "signup/consumer_signup.php"
        });
    </script>
</body>

</html>