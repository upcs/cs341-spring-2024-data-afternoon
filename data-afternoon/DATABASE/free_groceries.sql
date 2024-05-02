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
-- Table structure for table `FREEGROCERIES`
--

DROP TABLE IF EXISTS `FREEGROCERIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FREEGROCERIES` (
  `NAME` varchar(500) DEFAULT NULL,
  `LOCATION` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `FREEGROCERIES`
--

LOCK TABLES `FREEGROCERIES` WRITE;
/*!40000 ALTER TABLE `FREEGROCERIES` DISABLE KEYS */;
INSERT INTO `FREEGROCERIES` VALUES ('Hand Up Project - People\'s Pantry','4115 N. Mississippi Ave Portland, OR 97217'),('Allen Temple Food Pantry','4214 NE 8th Ave Portland, OR 97211'),('Salvation Army Moore Street','5335 N Williams Ave Portland, OR 97217'),('SVDP St Andrew','806 NE Alberta St Portland, OR 97211'),('William Temple House','2023 NW Hoyt St Portland, OR 97209'),('St Andre Bessette Catholic Church','601 W Burnside St Portland, OR 97209'),('Lift Urban Portland','1838 SW Jefferson Portland, OR 97201'),('SVDP Holy Redeemer','25 N Rosa Parks Way Portland, OR 97217'),('Sharon Community Services SDA','5209 NE 22nd Ave Portland, OR 97211'),('First Baptist Church EFB','909 SW 11th Ave Portland, OR 97205'),('Clay St Table Street/Camp Pantry','1314 SW Park St Portland, OR 97205'),('One HOPE Fellowship (previously Genesis)','5425 NE 27th Ave Portland, OR 97211'),('School Pantry at Woodlawn School (SUN/SEI)','7200 NE 11th Avenue Portland, OR 97211'),('U.Me.Us Food Pantry','2830 NE Flanders St Portland, OR 97232'),('SVDP All Saints','3847 NE Glisan Portland, OR 97213'),('SVDP St Charles','5310 NE 42nd Ave Portland, OR 97218'),('University Park ACS','4007 N Alaska St Portland, OR 97203'),('Hereford House Food Pantry','7704 N Hereford Ave Portland, OR 97203'),('SVDP St Rose','2727 NE 54th Ave Portland, OR 97213'),('C3 Food Pantry','6120 NE 57th Ave Portland, OR 97218'),('School Pantry at Clarendon (SUN/Latino Network)','9325 N Van Houten Ave Portland, OR 97203'),('SVDP St Ignatius','3400 SE 43rd Ave Portland, OR 97206'),('EMO NE Emergency Food Program','4800 NE 72nd Ave Portland, OR 97218'),('School Pantry at Roosevelt High School (SUN/SEI)','6941 N Central Street Portland, OR 97203'),('School Pantry at McDaniel High (SUN/IRCO)','2735 NE 82nd Ave Portland, OR 97220'),('Highland Christian Center','7600 NE Glisan St Portland, OR 97213'),('St Mark\'s Lutheran Church','5415 SE Powell Blvd Portland, OR 97206'),('Mainspring Portland','3500 NE 82nd Avenue Portland, OR 97220'),('SVDP Ascension','823 SE 76th Ave Portland, OR 97215'),('Woodstock Pantry','4033 SE Woodstock Blvd Portland, OR 97202'),('St Luke Lutheran Church EFB','4595 SW California St Portland, OR 97219'),('SVDP Our Lady of Sorrows','5221 SE Knight St Portland, OR 97206-5922'),('Neighborhood House Free Food Market','3445 SW Moss Street Portland, OR 97219'),('SVDP St Rita','10029 NE Prescott St Portland, OR 97220'),('Crossroads Food Bank','2407 NE 102nd Ave Portland, OR 97220'),('SVDP Holy Family','3732 SE Knapp St. Portland, OR 97202'),('Portland Open Bible Community Pantry','3223 SE 92nd Ave Portland, OR 97266'),('PACS Mobile Pantry (COW)','11020 NE Halsey St Portland, OR 97220'),('Portland Adventist Community Services','11020 NE Halsey St Portland, OR 97220'),('School Pantry at Lane Middle School (SUN/Latino Network)','7200 SE 60th Ave Portland, OR 97206'),('School Pantry at Cherry Park Elementary School (SUN/MFS)','1930 SE 104th Ave Portland, OR 97216'),('Linnton Community Center EFB','10614 NW St. Helens Rd Portland, OR 97231'),('SVDP St Pius X (Cedar Mill)','1170 NW 123rd Avenue Portland, OR 97229'),('SVDP St Peter','5905 SE 87th ave bldg B Portland, OR 97266'),('Francis Center','6535 SE 82nd Ave Portland, OR 97266'),('School Pantry at Lent Elementary School (SUN/IRCO)','5105 SE 97th Ave Portland, OR 97266'),('School Pantry at Mill Park (SUN/IRCO)','1900 SE 117th Ave Portland, OR 97216'),('School Pantry at Earl Boyles Elementary (SUN/IRCO)','10822 SE Bush St Portland, OR 97266'),('School Pantry at Shaver Elementary (SUN/IRCO)','3701 NE 131st Place Portland, OR 97230'),('School Pantry at Kelly Elementary (SUN/Latino Network)','9015 SE Rural Portland, OR 97266'),('School Pantry at Menlo Park (SUN/IRCO)','12900 NE Glisan Street Portland, OR 97230'),('SVDP St Therese','1260 NE 132nd Ave Portland, OR 97230'),('School Pantry at David Douglas High (SUN/MFS)','13030 SE Taylor Ct Aquatic Center Portland, OR 97233'),('Clackamas Service Center Day and Night Markets','8800 SE 80th Ave Portland, OR 97206'),('SVDP St Louise','8101 SE Cornwell Portland, OR 97206'),('Sunset Presbyterian Church - Helping Hands','14986 NW Cornell Rd Portland, OR 97229'),('School Pantry at Glenfair (SUN/MFS)','15300 NE Glisan St Portland, OR 97230'),('School Pantry at Gilbert Park (SUN/IRCO)','13132 SE Ramona St. Portland, OR 97236'),('SVDP St Joseph the Worker','2310 SE 148th Ave Portland, OR 97233'),('SVDP St Juan Diego','5995 NW 178th Ave Portland, OR 97229'),('Rock Creek Church EFB','4470 NW 185th Ave Portland, OR 97229'),('School Pantry at Patrick Lynch Elementary (SUN/SEI)','1546 SE 169th Pl Portland, OR 97233'),('School Pantry at Alder Elementary (SUN/MFS)','17200 SE Alder St Portland, OR 97233'),('SnowCap','17805 SE Stark St Portland, OR 97233'),('SVDP St Anne','1015 SE 182nd Ave Portland, OR 97233');
/*!40000 ALTER TABLE `FREEGROCERIES` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-02 13:31:44
