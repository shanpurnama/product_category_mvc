-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2021 at 04:39 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_categories_db`
--
CREATE DATABASE IF NOT EXISTS `products_categories_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `products_categories_db`;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` char(36) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category_name`) VALUES
('0d12f9d5-7567-4be8-8961-9f3a538643d7', 'Graduation'),
('97b54354-77b7-45e1-b187-9e828dace94d', 'School');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` char(36) NOT NULL,
  `product_name` varchar(11) NOT NULL,
  `price` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `product_name`, `price`) VALUES
('c9493ae1-400a-4c3f-bfde-3546378094cb', 'flowers', '500.000'),
('d6ff57dd-d968-4811-b787-789be183b187', 'Pen', '5000'),
('d8802a8d-584c-4e43-9232-360e6b70fb56', 'Book', '5000');

-- --------------------------------------------------------

--
-- Table structure for table `products_categories`
--

CREATE TABLE IF NOT EXISTS `products_categories` (
  `id` char(36) NOT NULL,
  `product_id` char(36) NOT NULL,
  `category_id` char(36) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products_categories`
--

INSERT INTO `products_categories` (`id`, `product_id`, `category_id`) VALUES
('05469e88-f028-4195-b387-f9a5938e52ca', 'c9493ae1-400a-4c3f-bfde-3546378094cb', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('15cab5b4-ae5d-4af6-8471-d42120c5d4ab', 'd6ff57dd-d968-4811-b787-789be183b187', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('3f3a55e0-f7f7-42b8-bbaa-c84ca94ed5e1', 'd8802a8d-584c-4e43-9232-360e6b70fb56', '97b54354-77b7-45e1-b187-9e828dace94d'),
('40034c80-8658-43cb-afe4-d86070f1cadb', '373362ee-b59a-4b9b-86b5-1e290a5933fc', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('4e71dbd0-3248-41e0-9de3-4a54dc3d43e1', 'b5227903-d7f3-4cbc-bf0b-0c8c5d625400', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('7dfb94d4-bada-4ff1-846b-9e7dc44f765a', '6b25e947-28c4-4a81-80f7-408ae30e892b', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('cc835e57-167d-402d-81ab-7d169c8dab78', '3fa0a298-b799-4227-81e8-52f86a3fdc52', '0d12f9d5-7567-4be8-8961-9f3a538643d7');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
