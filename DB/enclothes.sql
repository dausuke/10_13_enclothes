-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- ホスト: localhost
-- 生成日時: 2021 年 1 月 28 日 11:26
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
-- テーブルの構造 `opinion`
--

CREATE TABLE `opinion` (
  `id` int(100) NOT NULL,
  `favorite` int(1) NOT NULL,
  `evaluation` int(1) NOT NULL,
  `consumer_id` int(1) NOT NULL,
  `salesperson_id` int(1) NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- テーブルの構造 `question`
--

CREATE TABLE `question` (
  `id` int(100) NOT NULL,
  `uid` varchar(128) NOT NULL,
  `title` varchar(128) NOT NULL,
  `contents` varchar(128) NOT NULL,
  `answers` int(10) NOT NULL,
  `solved` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- テーブルのデータのダンプ `question`
--

INSERT INTO `question` (`id`, `uid`, `title`, `contents`, `answers`, `solved`, `created_at`) VALUES
(2, '1', 'test', 'テストクエスチョン', 0, 0, '2021-01-15 12:29:35'),
(3, '1', 'テスト', 'テスト質問', 2, 1, '2021-01-15 15:43:53'),
(4, '1', 'テスト5', 'test', 2, 0, '2021-01-16 05:20:16');

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

--
-- ダンプしたテーブルのインデックス
--

--
-- テーブルのインデックス `consumer`
--
ALTER TABLE `consumer`
  ADD PRIMARY KEY (`id`);

--
-- テーブルのインデックス `opinion`
--
ALTER TABLE `opinion`
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
-- ダンプしたテーブルの AUTO_INCREMENT
--

--
-- テーブルの AUTO_INCREMENT `consumer`
--
ALTER TABLE `consumer`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- テーブルの AUTO_INCREMENT `opinion`
--
ALTER TABLE `opinion`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- テーブルの AUTO_INCREMENT `question`
--
ALTER TABLE `question`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- テーブルの AUTO_INCREMENT `salesperson`
--
ALTER TABLE `salesperson`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
