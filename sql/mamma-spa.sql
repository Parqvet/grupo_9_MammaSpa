-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: mamma-spa_db
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `type` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,NULL,NULL,'Rostro'),(2,NULL,NULL,'Manos');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` varchar(300) NOT NULL,
  `price` int NOT NULL,
  `brand` varchar(30) NOT NULL,
  `img` varchar(50) NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_product_category_idx` (`category_id`),
  CONSTRAINT `fk_product_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (50,'Face oil','Aceite 100% natural - tratamiento para mejorar la aparación de mancahas y cicatrices en la cara. Contiene numerosos ingredientes que ayudan a la piel a volverse más suave y lisa, mejorando así el aspecto del envejecimiento y la piel arrugada.',800,'Natura','producto-01.png',NULL),(51,'Body up','Aceite corporal 100% natural con aroma a jazmín - tratamiento para tonificar la piel, desaparecer estrías, celulitis, manchas y marcas. Combate y previene el envejecimiento prematuro de la piel, mejora su elasticidad, humectación y suavidad, dejándola notablemente más suave.',1200,'Natural Beauty','producto-02.png',NULL),(74,'Skinlab','Tratamiento de 30 minutos que exfolia, limpia y libera celulas muertas e impurezas de las manos. Ofrece hidratación y suavidad. Aporta reparación y defensa para manos trabajadoras, reconstruye la piel lastimada, suaviza el tacto de manera inmediata.',700,'Natura','img-1618491622135.png',2),(75,'Face oil','Aceite 100% natural - tratamiento para mejorar la aparación de mancahas y cicatrices en la cara. Contiene numerosos ingredientes que ayudan a la piel a volverse más suave y lisa, mejorando así el aspecto del envejecimiento y la piel arrugada.',800,'Natura','producto-01.png',NULL),(76,'Body up','Aceite corporal 100% natural con aroma a jazmín - tratamiento para tonificar la piel, desaparecer estrías, celulitis, manchas y marcas. Combate y previene el envejecimiento prematuro de la piel, mejora su elasticidad, humectación y suavidad, dejándola notablemente más suave.',1200,'Natural Beauty','producto-02.png',NULL),(79,'Skinlab Plus','Tratamiento de 30 minutos que exfolia, limpia y libera celulas muertas e impurezas de las manos. Ofrece hidratación y suavidad. Aporta reparación y defensa para manos trabajadoras, reconstruye la piel lastimada, suaviza el tacto de manera inmediata.',700,'Natura','img-1618493178787.png',1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(150) NOT NULL,
  `price` int NOT NULL,
  `img` varchar(50) NOT NULL,
  `brand` varchar(30) NOT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_service_category_idx` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (34,NULL,NULL,'Manos Spa','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ad beatae incidunt sed velit, debitis voluptatibus! Saepe quis accusamus ea?',1000,'manos-04.jpeg','Natura',NULL),(38,NULL,NULL,'Facial Skin','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ad beatae incidunt sed velit, debitis voluptatibus! Saepe quis accusamus ea?',2500,'face-b-02.jpg','Natura',NULL),(39,NULL,NULL,'Manos Spa','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ad beatae incidunt sed velit, debitis voluptatibus! Saepe quis accusamus ea?',1000,'manos-04.jpeg','Natura',NULL),(40,NULL,NULL,'Manos Spa','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ad beatae incidunt sed velit, debitis voluptatibus! Saepe quis accusamus ea?',1000,'manos-04.jpeg','Natura',NULL),(41,NULL,NULL,'Manos Spa','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere ad beatae incidunt sed velit, debitis voluptatibus! Saepe quis accusamus ea?',1000,'manos-04.jpeg','Natura',NULL);
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(70) NOT NULL,
  `password2` varchar(70) NOT NULL,
  `avatar` varchar(50) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'2021-04-02 03:39:42','2021-04-02 03:39:42','lalo','perez','pedro@gmail.com','$2b$12$VTT1Dla8vcqaPoA/GEQZju40fFcQyNI8GWw8ba7iuNNwn9svkWLYy','$2b$12$sIc3VMLvbExPdTRv7t8EGO1VKyjI8KXOR9AOjLZSBfunFft1lN1RC',NULL,NULL),(2,'2021-04-02 03:41:31','2021-04-02 03:41:31','lalo','lol','lalo@gmail.com','$2b$12$aA54kGvfBoks0k9w0wokK.ILg964/KtXYRxfdGLVGGtojj0cRoWou','$2b$12$ILBSfVFUe8THEBUiD4mTze6axwL3MzHYcaHqFwLYnWFmU3ITekeku',NULL,NULL),(3,'2021-04-02 13:02:32','2021-04-02 13:02:32','Admin','Admin','admin@gmail.com','$2b$12$lTu8i19ChPNOe8lyjRTgqeQiiTUeLFGQjN9oA6dyOHNaLVBPRKwtO','$2b$12$d5.r.QykfR6.Sp3cSbgvIOQGQeE2yK6q4F1axhaj25adgQ6qMPFZm',NULL,'admin'),(4,'2021-04-02 13:08:44','2021-04-02 13:08:44','maria','juana','maria@gmail.com','$2b$12$ChFJ8DNKp4YA9./xpMQrJ.TnmOq7Gsz8GaK.4nSb4Qy3bzuVZ05BG','$2b$12$PC1UhTtsDdaxYLWtMk9tCuztEJeG0cB4nZhUWrWFy/kW0nJitJl/S',NULL,NULL),(5,'2021-04-02 13:11:19','2021-04-02 13:11:19','carlo','daniel','carlo@gmail.com','$2b$12$E2NAPm08xipeeyJnqnhwZeYQH/nSh3UBhM3ElhxbanIJX9Bod/74y','$2b$12$h3MBT4g5Uzx0SP9fpS5DVuvEOxfkxHkyFG6tXE9BbaGwluz4sa2CK',NULL,'user'),(6,'2021-04-09 16:40:05','2021-04-09 16:40:05','pepe@gmail.com','lopez','pepe@gmail.com','$2b$12$02Dh2hgrPUjhY6n6TWa6U.fquYR2OrLly0zpRL2yTo6f/sNGG9pWS','$2b$12$.GkNQyzLgnIufpsXwn.Ey.hL21PsJbsK0UA7k.zwLYXVgVwSpaeG.',NULL,'user'),(7,'2021-04-13 12:08:55','2021-04-13 12:08:55','pepe','asd','juan@gmail.com','$2b$12$FCEqeTJrx8cjRtZ8xjkMke.Vre9Z3FqZJliXz8w9TaDhBsvbePLHC','$2b$12$AiYNAINBw.faICMuhVa.BuWDD44OYOqQ7dZapiyCnNldNxoiN2lfu',NULL,'user'),(8,'2021-04-13 12:09:52','2021-04-13 12:09:52','juan','asdada','juan@gmail.com','$2b$12$QMH7n5V.6T365QMEwzJkPuuPBJKlpnXK/UGf.j9pMG9hc1gloYQWu','$2b$12$hMuSeTAPBSSGuQgUvF5GLOhfeQglF8D.rqWWFiks3L3ZJQVfUhhRW',NULL,'user'),(9,'2021-04-13 13:24:27','2021-04-13 13:24:27','pepe','lopez','pepe@gmail.com','$2b$12$oVQ4iyV5LUnNHmV1yq4Uye.cut/1kkRuhtPvTsBhHzo3wtnUcRFte','$2b$12$j9HWqjQXt7Jecyjw07zH/OKrLesI7zN38p2ikvQ4NCdh2pLGdkFk.',NULL,'user'),(10,'2021-04-14 15:10:11','2021-04-14 15:10:11','Ailen','Coordinadora','ailu@gmail.com','$2b$12$0I1DtPcCTEb0rFYKW77ALO9SZEUTwgwyz4q5DSfEpZatLNmfVQXJm','$2b$12$cJRyMoFaoznNv2N6IhUslu6A0Bcm9KFotrRZ9Wob98F.acuxEPUHe',NULL,'user'),(11,'2021-04-15 01:18:12','2021-04-15 01:18:12','peo','coso','peo@gmail.com','$2b$12$do5ghlLz4DK/X/2EGoBT8eOiMHfgh7roO6AP6zUFDSjwJ8XfPnPWq','$2b$12$h/oC4ZdJy.gQs/IaTbhFd.ihRYj1tT3IOsenprBPR6CQfGVLSW9Gq',NULL,'user'),(12,'2021-04-15 01:53:00','2021-04-15 01:53:00','nacho','nachocrack@gmail.com','pepeee@gmail.com','$2b$12$uE11mAu1r8BQZ87Ct8bOieFB7BycgFGV5ql/eL.VhSZmzswTSQzT2','$2b$12$KhgVZuzevKI/SmAhM5DC8OJwKmg4Fh4gTZPxOXkWetEpq47PHRS0.',NULL,'user'),(13,'2021-04-15 03:01:47','2021-04-15 03:01:47','Nachoooooo','asd','nach0@gmail.com','$2b$12$eB9WXcG/oqC4omsuqvU0JuGQq/FWz2DkUNByoyvUacgVsydpBLsdu','$2b$12$/cFQ2E5IScUhVaxA6wud2eGnjQehUIbK.y85Gf1/7q7cucxRDfCqu',NULL,'user'),(14,'2021-04-15 03:21:07','2021-04-15 03:21:07','juan','asd','juaan@gmail.com','$2b$12$WIRmQmdsgOfdOfdMVhiEIukd4J3SUQRtSxACCyZ80EKk9hEJVRaMa','$2b$12$mL49KQFrIm519AOc4eWkI.0J843ivFCD3rC5oKvWJYuo1R8BU3Y7q',NULL,'user'),(15,'2021-04-15 11:30:29','2021-04-15 11:30:29','pepe','lopez','pepe@gmail.com','$2b$12$vFH/1ATOdXU1Lluaebbp3uCunhUNSOQJYK5TQ3btLScB28P11hks.','$2b$12$7.yy7HbrrUA1cJci95P88uLm80JiMaM5o2XVKlSDEk31zXwAP6l9.',NULL,'user'),(16,'2021-04-15 11:53:45','2021-04-15 11:53:45','juan','perez','juan@gmail.com','$2b$12$TSTSi7VYqlfQyWhe1s4ILen2yj33USufF5mJlps/tth.4cg5dOf26','$2b$12$VatjteDZHDLTbiLlBD1hkuAso92upWLM9v4XdivjgZXtfszLDVXmO',NULL,'user'),(17,'2021-04-15 14:13:27','2021-04-15 14:13:27','Nacho','vuotto','nacho@gmail.com','$2b$12$U1KUYBTTFhk0hTg1rQnfae5ozm6eofZu59CUu5xPlJKlUyk3y2qsG','$2b$12$ukqBi24J3GXCQDCO5CD1jOBjTeuwnAf.cZolq2SuBxCaipE8IX8RG',NULL,'user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscartproducts`
--

DROP TABLE IF EXISTS `userscartproducts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userscartproducts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cart_product_idx` (`product_id`),
  KEY `fk_user-cart_user_idx` (`user_id`),
  CONSTRAINT `fk_user-cart_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_user-cart_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscartproducts`
--

LOCK TABLES `userscartproducts` WRITE;
/*!40000 ALTER TABLE `userscartproducts` DISABLE KEYS */;
/*!40000 ALTER TABLE `userscartproducts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userscartservices`
--

DROP TABLE IF EXISTS `userscartservices`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userscartservices` (
  `id` int NOT NULL AUTO_INCREMENT,
  `service_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user-cart_service_idx` (`service_id`),
  KEY `fk_user-cart_user_idx` (`user_id`),
  CONSTRAINT `fk_user-cart_service` FOREIGN KEY (`service_id`) REFERENCES `services` (`id`),
  CONSTRAINT `fk_user-service-cart_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userscartservices`
--

LOCK TABLES `userscartservices` WRITE;
/*!40000 ALTER TABLE `userscartservices` DISABLE KEYS */;
/*!40000 ALTER TABLE `userscartservices` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mamma-spa_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-30 12:21:33
