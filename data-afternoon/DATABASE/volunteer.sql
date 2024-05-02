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
-- Table structure for table `VOLUNTEER`
--

DROP TABLE IF EXISTS `VOLUNTEER`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VOLUNTEER` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL,
  `CAUSE_AREA` varchar(500) DEFAULT NULL,
  `WEBSITE_ADDRESS` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VOLUNTEER`
--

LOCK TABLES `VOLUNTEER` WRITE;
/*!40000 ALTER TABLE `VOLUNTEER` DISABLE KEYS */;
INSERT INTO `VOLUNTEER` VALUES ('CityTeam International','526 SE Grand Ave, Portland, OR 97214','Children & Youth,  Faith-Based,  Education & Literacy, Health & Medicine, Homeless & Housing, LGBTQ+','https://www.cityteam.org/volunteer'),('Harbor of Hope','1616 NW 13th Ave, Portland, OR 97209','Children & Youth,  Faith-Based,  Education & Literacy, Health & Medicine, Homeless & Housing, LGBTQ+','https://oregonharborofhope.org/take-action/volunteer/'),('Blanchet House ','310 NW Glisan St, Portland, OR 97209','Children & Youth,  Faith-Based,  Education & Literacy,  Health & Medicine,  Homeless & Housing','https://blanchethouse.org/volunteer-in-portland/'),('Outside In ','1132 SW 13th Ave Portland, OR 97205','Children & Youth,  Education & Literacy,  Health & Medicine,  Homeless & Housing,  LGBTQ+','https://outsidein.org/about-us/volunteer'),('Portland Rescue Mission','111 West Burnside Street Portland, OR 97209','Community,  Faith-Based,  Homeless & Housing,  Hunger,  Women','https://portlandrescuemission.org/volunteer/'),('Cascadia Health','847 NE 19th Ave Portland, OR 97232','Community,  Crisis Support,  Health & Medicine,  Homeless & Housing,  Seniors','https://cascadiahealth.org/'),('Path Home','6220 SE 92nd Ave Portland, OR 97266','Children & Youth,  Crisis Support,  Homeless & Housing','http://www.path-home.org'),('YWCA SafeHaven Homeless Shelter','4620 N Maryland Ave. Portland, OR 97217','Children & Youth,  Community,  Emergency & Safety,  Homeless & Housing,  Hunger','https://www.ywcapdx.org/what-we-do'),('Architects Without Borders-Oregon','403 NW 11TH AVE Portland, OR 97209','Arts & Culture,  Community,  Disaster Relief,  Environment,  Homeless & Housing','https://www.awboregon.org/'),('My Father\'s House','5003 Powell Blvd, Gresham, OR 97030','Advocacy & Human Rights  Children & Youth  Community  Education & Literacy  Homeless & Housing','https://www.familyshelter.org/');
/*!40000 ALTER TABLE `VOLUNTEER` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:33:17
