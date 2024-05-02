-- MySQL dump 10.13  Distrib 8.3.0, for macos14 (x86_64)
--
-- Host: localhost    Database: UNHOUSED
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `FREEMEALS`
--

DROP TABLE IF EXISTS `FREEMEALS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FREEMEALS` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FREEMEALS`
--

LOCK TABLES `FREEMEALS` WRITE;
/*!40000 ALTER TABLE `FREEMEALS` DISABLE KEYS */;
INSERT INTO `FREEMEALS` VALUES ('City team ministries','526 SE Grand Ave Portland, OR 97214'),('Portland Rescue Mission','111 W Burnside Portland, OR 97209'),('Blanchet House','310 NW Glisan St Portland, OR 97209'),('First Baptist Church CMS','909 SW 11th Ave. Portland, OR 97205'),('Outside in Café','1132 SW 13th Ave. Portland, OR 97205'),('Clay St Table HomePDX Meals (First Christian)','1314 SW Park Ave Portland , OR 97201'),('St Philip the Deacon Church','120 NE Knott St Portland, OR 97212'),('Beacon PDX','4312 SE Stark St Portland , OR 97215'),('Woodstock Hot Meals','4033 SE Woodstock Blvd Portland, OR 97202'),('Clackamas Service Center Meals','8800 SE 80th Ave Portland, OR 97206');
/*!40000 ALTER TABLE `FREEMEALS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:31:54
