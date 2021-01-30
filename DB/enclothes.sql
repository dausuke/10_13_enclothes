-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2021 年 1 月 30 日 04:29
-- サーバのバージョン： 10.4.17-MariaDB
-- PHP のバージョン: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- データベース: `enclothes`
--

-- --------------------------------------------------------

--
-- テーブルの構造 `answers`
--

CREATE TABLE `answers` (
  `id` int(100) NOT NULL,
  `question_id` varchar(100) NOT NULL,
  `salesperson_id` varchar(100) NOT NULL,
  `consumer_id` varchar(100) NOT NULL,
  `answer_content` varchar(128) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `answers`
--

INSERT INTO `answers` (`id`, `question_id`, `salesperson_id`, `consumer_id`, `answer_content`, `created_at`) VALUES
(8, '3', '1', '1', 'テスト回答です', '2021-01-15 13:40:12'),
(10, '3', '1', '1', 'テスト回答２', '2021-01-15 13:46:29'),
(11, '4', '1', '1', 'a', '2021-01-29 15:05:15'),
(12, '4', '1', '1', 'test', '2021-01-16 05:20:16'),
(13, '2', '1', '1', 'テスト回答です。こんにちは。', '2021-01-29 14:41:15');

-- --------------------------------------------------------

--
-- テーブルの構造 `consumer`
--

CREATE TABLE `consumer` (
  `id` int(100) NOT NULL,
  `name` varchar(128) NOT NULL,
  `age` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `gender` varchar(128) NOT NULL,
  `shop` varchar(128) NOT NULL,
  `height` varchar(128) NOT NULL,
  `weight` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `created_at` datetime NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `consumer`
--

INSERT INTO `consumer` (`id`, `name`, `age`, `city`, `gender`, `shop`, `height`, `weight`, `email`, `password`, `created_at`, `is_deleted`) VALUES
(1, 'やまだ', '33', '岩手', '男性', 'UA', '0', '0', 'kkkk@gmail.com', '123456', '2021-01-26 10:31:47', 0);

-- --------------------------------------------------------

--
-- テーブルの構造 `favorite`
--

CREATE TABLE `favorite` (
  `id` int(100) NOT NULL,
  `consumer_id` int(100) NOT NULL,
  `salesperson_id` int(100) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- テーブルの構造 `question`
--

CREATE TABLE `question` (
  `id` int(100) NOT NULL,
  `consumer_id` varchar(128) NOT NULL,
  `title` varchar(100) NOT NULL,
  `contents` varchar(500) NOT NULL,
  `solved` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `question`
--

INSERT INTO `question` (`id`, `consumer_id`, `title`, `contents`, `solved`, `created_at`) VALUES
(2, '1', 'test', 'テストクエスチョン', 1, '2021-01-30 01:17:27'),
(3, '1', 'テスト', 'テスト質問', 0, '2021-01-15 15:43:53'),
(4, '1', 'テスト5', 'test', 1, '2021-01-29 15:08:19'),
(5, '1', '制服風コーディネートをしたいと考えています。', 'プリーツスカートに白シャツリボンかネクタイで(カーディガン)、その上に赤のカシャカシャを羽織りたいと思っています。\n\nプリーツと白シャツ赤のカシャカシャはあります。\n中に着るカーディガンの色に迷っています、少々派手な色でも構わないので似合うカーディガンの色を教えてください。\nよろしくお願いします！！！！', 0, '2021-01-28 13:43:42'),
(6, '1', '寒い', '急にまた寒くなりましたね。おすすめのダウンを教えてください。カナダグース以外で。', 0, '2021-01-30 03:21:21'),
(10, '1', 'コーディネートが下手くそで困っています。', '毎回似たようなコーディネートしかできません。どうしたら上手く服の組み合わせができますか？\n\n高校の時は制服で、土日は基本部活で部活の服を着ており、大学生になって私服になってから本当に困っています。', 0, '2021-01-30 03:28:15');

-- --------------------------------------------------------

--
-- テーブルの構造 `salesperson`
--

CREATE TABLE `salesperson` (
  `id` int(100) NOT NULL,
  `name` varchar(128) NOT NULL,
  `age` varchar(128) NOT NULL,
  `city` varchar(128) NOT NULL,
  `gender` varchar(128) NOT NULL,
  `shop` varchar(128) NOT NULL,
  `experience` varchar(128) NOT NULL,
  `email` varchar(128) NOT NULL,
  `password` varchar(128) NOT NULL,
  `created_at` datetime NOT NULL,
  `is_deleted` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `salesperson`
--

INSERT INTO `salesperson` (`id`, `name`, `age`, `city`, `gender`, `shop`, `experience`, `email`, `password`, `created_at`, `is_deleted`) VALUES
(1, 'おおうちだ', '25', '千葉', '男性', 'Bshop', 'JOURNAL STANDARD', 'lolo@gmail.com', '567890', '2021-01-26 10:40:04', 0);

-- --------------------------------------------------------

--
-- テーブルの構造 `salesperson_state`
--

CREATE TABLE `salesperson_state` (
  `id` int(100) NOT NULL,
  `salesperson_id` int(100) NOT NULL,
  `evaluation` int(1) NOT NULL,
  `bestanswer_cnt` int(1) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `consumer`
--
ALTER TABLE `consumer`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `salesperson`
--
ALTER TABLE `salesperson`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `salesperson_state`
--
ALTER TABLE `salesperson_state`
  ADD PRIMARY KEY (`id`);

--
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- テーブルの AUTO_INCREMENT `consumer`
--
ALTER TABLE `consumer`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルの AUTO_INCREMENT `favorite`
--
ALTER TABLE `favorite`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `question`
--
ALTER TABLE `question`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- テーブルの AUTO_INCREMENT `salesperson`
--
ALTER TABLE `salesperson`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルの AUTO_INCREMENT `salesperson_state`
--
ALTER TABLE `salesperson_state`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
