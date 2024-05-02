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
-- Table structure for table `SAFE_YEAR_ROUND_SHELTERS`
--

DROP TABLE IF EXISTS `SAFE_YEAR_ROUND_SHELTERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SAFE_YEAR_ROUND_SHELTERS` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL,
  `OPEN_HOURS` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SAFE_YEAR_ROUND_SHELTERS`
--

LOCK TABLES `SAFE_YEAR_ROUND_SHELTERS` WRITE;
/*!40000 ALTER TABLE `SAFE_YEAR_ROUND_SHELTERS` DISABLE KEYS */;
INSERT INTO `SAFE_YEAR_ROUND_SHELTERS` VALUES ('Portland Rescue Mission','111 W Burnside Street Portland 97209','7 days per week 8am-4:30pm for lottery signup, lottery names posted 5pm, shelter check-in 8pm'),('CityTeam International','526 SE Grand Avenue Portland 97214','7 days per week 5:45pm-7am'),('Wy’East Shelter','1415 SE 122nd Avenue Portland 97233','24 hours per day / 7 days per week, check-in varies based on intake appointment time'),('Laurelwood Center','6130 SE Foster Road Portland OR 97206','TPI Resource Center walk-in: 7 Days per week 8am-4pm, Shelter: 24 hours per day / 7 days per week'),('Downtown Shelter (former Greyhound Station)','550 NW 6th Avenue Portland 97209','24 hours per day / 7 days per week'),('Market Street Shelter','120 SE Market Street Portland 97214','Intake Reservations: Monday-Friday 9am-5pm, Shelter: 24 hours per day / 7 days per week'),('Walnut Park Shelter','5329 NE Martin Luther King Junior Portland OR 97211','TPI Resource Center walk-in: 7 Days per week 8am-4pm, Shelter: 24 hours per day / 7 days per week'),('River District Navigation Center','1111 NW Naito Parkway Portland OR 97209','TPI Resource Center walk-in: 7 Days per week 8am-4pm, Shelter: 24 hours per day / 7 days per week'),('St Johns Village','8005 N Richmond Portland 97203','24 hours per day / 7 days per week'),('Family Promise of Metro East','4837 NE Couch Street Portland 97213','Phone hours: Monday-Friday 8am-9pm'),('Porch Light Youth Shelter','1635 SW Alder Street Portland 97205','Access Center: 7 days per week 9am-5pm, Shelter: 7 days per week 8:45pm-8:45am'),('North Portland Winter Shelter','4775 N Lombard Street, Portland 97203',' 7 days per week 8:30pm-6am, January 2, 2024-April 1, 2024'),('Winter Shelter at Central Church of Nazarene by Union Gospel Mission','9715 SE Powell Boulevard, Portland 97266','7 days per week 9pm-6pm, November 1, 2023-March 31, 2024');
/*!40000 ALTER TABLE `SAFE_YEAR_ROUND_SHELTERS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:32:36
