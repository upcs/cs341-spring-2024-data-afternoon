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
-- Table structure for table `HEALTHCARE`
--

DROP TABLE IF EXISTS `HEALTHCARE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `HEALTHCARE` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL,
  `SERVICE` varchar(500) DEFAULT NULL,
  `CONTACT_INFO` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HEALTHCARE`
--

LOCK TABLES `HEALTHCARE` WRITE;
/*!40000 ALTER TABLE `HEALTHCARE` DISABLE KEYS */;
INSERT INTO `HEALTHCARE` VALUES ('Greater Portland Health - Healthcare for the Homeless Program','180 Park Ave. Portland, ME 04102','Primary care, dental services, behavioral health care, oral health care, health education, outreach, social support, and advocacy.','www.greaterportlandhealth.org'),('Central City Concern','232 NW 6th Ave, Portland, OR 97209','Housing, healthcare, addiction recovery, and employment assistance.','www.centralcityconcern.org'),('Bybee Lakes Hope Center','14355 N Bybee Lake Ct, Portland, OR 97203','Trauma-informed, person-centered services for people experiencing houselessness, including shelter, skill-building classes, job search assistance, financial coaching, and more.','Call: (971) 333-5070,  www.portland.gov'),('CODA, Inc.','1027 E Burnside St, Portland, OR 97214','Substance use disorder treatment, including residential treatment, opioid treatment, outpatient treatment, and supported housing.','Call: 855-SEE-CODA, Website: codainc.org'),('Multnomah County - Shelter and Homeless Services','7809 NE Everett St, Portland, OR 97213','Substance use disorder treatment, including residential treatment, opioid treatment, outpatient treatment, and supported housing.','Call: 855-SEE-CODA, Website: codainc.org'),('Fora Health Treatment & Recovery','10230 SE Cherry Blossom Dr, Portland, OR 97216','Substance use treatment services, including withdrawal management (detox), residential treatment, outpatient treatment, DUII program, and peer recovery mentors.','www.forahealth.org'),('Free Clinics in Portland, Oregon','714 NE Alberta St, Portland, OR 97211','A variety of free clinics offering healthcare services on a sliding scale basis.','www.freeclinics.com');
/*!40000 ALTER TABLE `HEALTHCARE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:32:13
