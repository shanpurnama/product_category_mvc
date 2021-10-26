-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2021 at 04:50 AM
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
('97b54354-77b7-45e1-b187-9e828dace94d', 'School'),
('e44a2a10-fd98-420c-9b2a-b9d9849944aa', 'Exercise');

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
('3195d149-794e-40ea-bb91-144292a61802', 'Diamond', '100.000'),
('3231cd3e-30b7-40ae-a628-ea2a5d47a103', 'Flowerss', '800.000'),
('47655e3f-6629-4f44-9faa-4c4caae401aa', 'Flowerss', '800.000');

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
('319bf6f3-2b98-4e20-9cc1-b7b6d120b9d2', '3195d149-794e-40ea-bb91-144292a61802', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('4d83abdd-3998-4279-bb15-a371b20c93ac', '3231cd3e-30b7-40ae-a628-ea2a5d47a103', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('765fa664-1f2e-42ef-9385-29408060b81c', '47655e3f-6629-4f44-9faa-4c4caae401aa', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('8095e9b6-7aec-423c-bfc5-f88faac53902', '65a76f8b-38fa-485e-8d15-d65d58a22f10', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('96cd85a6-f784-4a6d-8120-a1859ac0ff8b', '4788bbcf-c9b5-4216-9cce-eafc3c8f7847', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('bb070c34-c72b-41a7-a727-7e8ec5020965', '568714b0-c9ad-4b38-88e3-505bb02b9a54', '0d12f9d5-7567-4be8-8961-9f3a538643d7'),
('d6f548d0-c931-438a-876c-432657880af9', 'b60efee7-361a-496c-bb36-935ac7a96be9', '97b54354-77b7-45e1-b187-9e828dace94d'),
('e1d9a72c-030c-41da-9df8-e063b7500fb4', 'c8ff8743-09c5-4041-bf1b-ba9f6cd687b4', '0d12f9d5-7567-4be8-8961-9f3a538643d7');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` varchar(36) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` char(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
('0700ce23-82dd-4624-a0b1-3d7c5fc43146', 'shandy@gmail.com', '$2b$04$.HysrmL1rnmto8GTVzIAWuUt8BlSuZwGe0vaqsyyBvF6eDxLOABT.'),
('ca43f6d4-cd8f-4335-b6e9-02cd20a8ad9c', 'shanshan@gmail.com', '$2b$04$bmciwlCkI.023TUCPz0cg.l9Qheofn7WYTMMT11LPVVHgEPc4evfO'),
('952b5dab-f1ad-4070-8aa9-1e0606757c0c', 'user@gmail.com', '$2b$04$P.X7qhPRF.hSO./VzepkneEmwcjRTynQDESId2kqA9pPY0l8E7OV.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
