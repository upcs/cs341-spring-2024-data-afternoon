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
-- Table structure for table `FREE_WIFI`
--

DROP TABLE IF EXISTS `FREE_WIFI`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FREE_WIFI` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL,
  `CONTACT_INFO` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FREE_WIFI`
--

LOCK TABLES `FREE_WIFI` WRITE;
/*!40000 ALTER TABLE `FREE_WIFI` DISABLE KEYS */;
INSERT INTO `FREE_WIFI` VALUES ('Urban Grind','911 Northwest 14th Avenue, Portland','(503) 546-5919'),('Tiny’s Coffee','1412 Southeast 12th Avenue, Portland, OR','(503) 239-5859'),('Paragon','1309 Northwest Hoyt Street, Portland, OR 97209','(503) 833-5060'),('Morningstar Cafe','500 Southwest 3rd Avenue, Portland, OR 97204','503) 241-2401'),('Starbucks on 11th and Couch','1039 NW Couch St, Portland, OR 97209','(503) 227-0708'),('Laurelwood Brewery','5115 Northeast Sandy Boulevard, Portland, OR 97213','(503) 282-0622'),('F&B Cafe','1100 Southeast Grand Avenue, Portland, OR 97214','(503) 234-8189'),('Bridgeport','1313 NW Marshall Street, Portland, OR 97209','503.241.3612'),('Bipartisan Cafe','7901 Southeast Stark Street, Portland, OR 97215','(503) 253-1051'),('WeWork Pioneer Place','700 SW 5th Ave, 3rd floor, Portland','Not Provided');
/*!40000 ALTER TABLE `FREE_WIFI` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:31:14
