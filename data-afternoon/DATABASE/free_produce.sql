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
-- Table structure for table `FREE_PRODUCE`
--

DROP TABLE IF EXISTS `FREE_PRODUCE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FREE_PRODUCE` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL,
  `OPEN_HOURS` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FREE_PRODUCE`
--

LOCK TABLES `FREE_PRODUCE` WRITE;
/*!40000 ALTER TABLE `FREE_PRODUCE` DISABLE KEYS */;
INSERT INTO `FREE_PRODUCE` VALUES ('Portland Open Bible Free Food Market','3223 SE 92nd Avenue Portland, OR 97266','Wed: 10 am - 12 pm'),('School Pantry at Floyd Light','10800 SE Washington St. Portland, OR 97216','Mon: 4 pm - 5:30 pm'),('Cherry Blossom Free Food Market','740 SE 106th Ave Portland, OR 97216','Wed: 9 am - 11 am'),('Bridger Elementary School Free Food Market (SUN/Latino Network)','7910 SE Market St Portland, OR 97215','Fri: 3 pm - 4:30 pm'),('Wilkes Elementary School Free Food Market','17020 NE Wilkes Rd Portland, OR 97230','Fri: 4 pm - 5:30 pm'),('Black Mental Health Oregon Free Food Market','8501 N Chautauqua Blvd Portland, OR 97217','Thurs: 12 pm - 2 pm'),('University Park Seventh Day Adventist Free Food Market','4007 N Alaska Ave Portland, OR 97203','Fri: 11 am - 12 pm'),('New Columbia Free Food Market','4625 N Trenton St Portland, OR 97203','Sat: 11 am - 12 pm'),('Free Food Market @ South Park Blocks','1914 SW Park Ave Portland, OR 97201','Mon: 9:30 am - 11 am'),('Lift Urban / Legacy Good Samaritan Free Food Market','1200 NW 23rd Portland, OR 97210','Wed: 11 am - 12 pm'),('Ortiz Center Free Food Market','6736 NE Killingsworth Portland, OR 97218','Wed: 10 am - 12 pm'),('Davis Elementary School Free Food Market (SUN/MFS)','19501 NE Davis Street Portland, OR 97230','Fri: 4:15 pm - 5:15 pm'),('Rigler Elementary School Free Food Market (SUN/Latino Network)','5401 NE Prescott Portland, OR 97218','Wed: 3:30 pm - 5 pm');
/*!40000 ALTER TABLE `FREE_PRODUCE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:31:00
