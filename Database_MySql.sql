CREATE DATABASE  IF NOT EXISTS `volunteer_network` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `volunteer_network`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: volunteer_network
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `causes`
--

DROP TABLE IF EXISTS `causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `causes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `causes`
--

LOCK TABLES `causes` WRITE;
/*!40000 ALTER TABLE `causes` DISABLE KEYS */;
INSERT INTO `causes` VALUES (1,'Advocacy & Human Rights'),(2,'Animals'),(3,'Arts & Culture'),(4,'Board Development'),(5,'Children & Youth'),(6,'Community'),(7,'Computers & Technology'),(8,'Crisis Support'),(9,'Disaster Relief'),(10,'Education & Literacy'),(11,'Emergency & Safety'),(12,'Employment'),(13,'Environment'),(14,'Faith-Based'),(15,'Health & Medicine'),(16,'Homeless & Housing'),(17,'Hunger'),(18,'Immigrants & Refugees'),(19,'International'),(20,'Justice & Legal'),(21,'LGBTQ+'),(22,'Media & Broadcasting'),(23,'People with Disabilities'),(24,'Politics'),(25,'Race & Ethnicity'),(26,'Seniors'),(27,'Sports & Recreation'),(28,'Veterans & Military Families'),(29,'Women');
/*!40000 ALTER TABLE `causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `donations`
--

DROP TABLE IF EXISTS `donations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `donations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `organization_id` int NOT NULL,
  `donor_name` varchar(100) NOT NULL,
  `donor_email` varchar(100) NOT NULL,
  `donor_phone` varchar(15) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `screenshot` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `organization_id` (`organization_id`),
  CONSTRAINT `donations_ibfk_1` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `donations`
--

LOCK TABLES `donations` WRITE;
/*!40000 ALTER TABLE `donations` DISABLE KEYS */;
INSERT INTO `donations` VALUES (1,11,'Nabeeha Ali','alinabeeha44@gmail.com','033333413951',50.00,'2024-06-01 15:56:40','1717257399501.jpg'),(2,1,'Nazeeha Ali','alinabeeha44@gmail.com','03082629314',100.00,'2024-06-01 16:05:41','1717257941266.jpg'),(5,2,'Fatima','fatima@gmail.com','0333-54789733',12000.00,'2024-06-01 16:21:55','1717258914654.jpeg'),(6,14,'Ramla','ramla@gmail.com','0324-79324781',1000.00,'2024-06-01 16:30:35','1717259434856.jpeg'),(7,5,'Nabeeha Ali','alinabeeha44@gmail.com','033333413951',50000.00,'2024-06-10 13:23:33','1718025812525.jpg'),(8,11,'Azka','alinabeeha44@gmail.com','1234566789',600.00,'2024-06-12 07:23:28','1718177008366.jpg');
/*!40000 ALTER TABLE `donations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opportunity_causes`
--

DROP TABLE IF EXISTS `opportunity_causes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opportunity_causes` (
  `opportunity_id` int DEFAULT NULL,
  `cause_id` int DEFAULT NULL,
  KEY `opportunity_id` (`opportunity_id`),
  KEY `cause_id` (`cause_id`),
  CONSTRAINT `opportunity_causes_ibfk_1` FOREIGN KEY (`opportunity_id`) REFERENCES `opportunities` (`id`),
  CONSTRAINT `opportunity_causes_ibfk_2` FOREIGN KEY (`cause_id`) REFERENCES `causes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opportunity_causes`
--

LOCK TABLES `opportunity_causes` WRITE;
/*!40000 ALTER TABLE `opportunity_causes` DISABLE KEYS */;
INSERT INTO `opportunity_causes` VALUES (102,1),(102,2),(102,3),(103,4),(103,5),(103,6),(104,7),(104,8),(104,9),(105,10),(105,11),(105,12),(106,13),(106,14),(106,15),(107,16),(107,17),(107,18),(108,19),(108,20),(108,21),(109,22),(109,23),(109,24),(110,25),(110,26),(110,27),(111,28),(111,29),(111,1),(112,2),(112,3),(112,4),(113,5),(113,6),(113,7),(114,8),(114,9),(114,10),(115,11),(115,12),(115,13),(116,14),(116,15),(116,16),(117,17),(117,18),(117,19),(118,20),(118,21),(118,22),(119,23),(119,24),(119,25),(120,26),(120,27),(120,28),(121,29),(121,1),(121,2),(122,3),(122,4),(122,5),(123,6),(123,7),(123,8),(124,9),(124,10),(124,11),(125,12),(125,13),(125,14),(126,15),(126,16),(126,17),(127,18),(127,19),(127,20),(128,21),(128,22),(128,23),(129,24),(129,25),(129,26),(130,27),(130,28),(130,29),(131,1),(131,2),(131,3),(132,4),(132,5),(132,6),(133,7),(133,8),(133,9),(134,10),(134,11),(134,12),(135,13),(135,14),(135,15),(136,16),(136,17),(136,18),(137,19),(137,20),(137,21),(138,22),(138,23),(138,24),(139,25),(139,26),(139,27),(140,28),(140,29),(140,1),(141,2),(141,3),(141,4),(142,5),(142,6),(142,7),(143,8),(143,9),(143,10),(144,11),(144,12),(144,13),(145,14),(145,15),(145,16),(146,17),(146,18),(146,19),(147,20),(147,21),(147,22),(148,23),(148,24),(148,25),(149,26),(149,27),(149,28),(150,29),(150,1),(150,2),(151,3),(151,4),(151,5),(152,6),(152,7),(152,8),(153,9),(153,10),(153,11),(154,12),(154,13),(154,14),(155,15),(155,16),(155,17),(156,18),(156,19),(156,20),(157,21),(157,22),(157,23),(158,24),(158,25),(158,26),(159,27),(159,28),(159,29),(160,1),(160,2),(160,3),(161,4),(161,5),(161,6),(162,7),(162,8),(162,9),(163,2),(164,1);
/*!40000 ALTER TABLE `opportunity_causes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opportunity_skills`
--

DROP TABLE IF EXISTS `opportunity_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opportunity_skills` (
  `opportunity_id` int DEFAULT NULL,
  `skill_id` int DEFAULT NULL,
  KEY `opportunity_id` (`opportunity_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `opportunity_skills_ibfk_1` FOREIGN KEY (`opportunity_id`) REFERENCES `opportunities` (`id`),
  CONSTRAINT `opportunity_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opportunity_skills`
--

LOCK TABLES `opportunity_skills` WRITE;
/*!40000 ALTER TABLE `opportunity_skills` DISABLE KEYS */;
INSERT INTO `opportunity_skills` VALUES (102,1),(102,2),(102,3),(103,4),(103,5),(103,6),(104,7),(104,8),(104,9),(105,10),(105,11),(105,12),(106,13),(106,14),(106,15),(107,16),(107,17),(107,18),(108,19),(108,20),(108,21),(109,22),(109,23),(109,24),(110,25),(110,26),(110,27),(111,28),(111,29),(111,1),(112,2),(112,3),(112,4),(113,5),(113,6),(113,7),(114,8),(114,9),(114,10),(115,11),(115,12),(115,13),(116,14),(116,15),(116,16),(117,17),(117,18),(117,19),(118,20),(118,21),(118,22),(119,23),(119,24),(119,25),(120,26),(120,27),(120,28),(121,29),(121,1),(121,2),(122,3),(122,4),(122,5),(123,6),(123,7),(123,8),(124,9),(124,10),(124,11),(125,12),(125,13),(125,14),(126,15),(126,16),(126,17),(127,18),(127,19),(127,20),(128,21),(128,22),(128,23),(129,24),(129,25),(129,26),(130,27),(130,28),(130,29),(131,1),(131,2),(131,3),(132,4),(132,5),(132,6),(133,7),(133,8),(133,9),(134,10),(134,11),(134,12),(135,13),(135,14),(135,15),(136,16),(136,17),(136,18),(137,19),(137,20),(137,21),(138,22),(138,23),(138,24),(139,25),(139,26),(139,27),(140,28),(140,29),(140,1),(141,2),(141,3),(141,4),(142,5),(142,6),(142,7),(143,8),(143,9),(143,10),(144,11),(144,12),(144,13),(145,14),(145,15),(145,16),(146,17),(146,18),(146,19),(147,20),(147,21),(147,22),(148,23),(148,24),(148,25),(149,26),(149,27),(149,28),(150,29),(150,1),(150,2),(151,3),(151,4),(151,5),(152,6),(152,7),(152,8),(153,9),(153,10),(153,11),(154,12),(154,13),(154,14),(155,15),(155,16),(155,17),(156,18),(156,19),(156,20),(157,21),(157,22),(157,23),(158,24),(158,25),(158,26),(159,27),(159,28),(159,29),(160,1),(160,2),(160,3),(161,4),(161,5),(161,6),(162,7),(162,8),(162,9),(163,3),(164,2);
/*!40000 ALTER TABLE `opportunity_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizations`
--

DROP TABLE IF EXISTS `organizations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizations` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `org_id` varchar(100) NOT NULL,
  `location` varchar(255) NOT NULL,
  `country` varchar(100) NOT NULL,
  `contact` varchar(100) NOT NULL,
  `mission` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizations`
--

LOCK TABLES `organizations` WRITE;
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;
INSERT INTO `organizations` VALUES (1,'Edhi Foundation','ORG001','Karachi','Pakistan','contact@edhi.org','Providing humanitarian services including shelter, food, and medical care.'),(2,'Aman Foundation','ORG002','Karachi','Pakistan','info@amanfoundation.org','Improving health and education standards in Pakistan.'),(3,'Shaukat Khanum Memorial Cancer Hospital','ORG003','Lahore','Pakistan','info@shaukatkhanum.org.pk','Providing comprehensive cancer care.'),(4,'Saylani Welfare International Trust','ORG004','Karachi','Pakistan','contact@saylaniwelfare.com','Providing food, education, and health services.'),(5,'Aurat Foundation','ORG005','Islamabad','Pakistan','info@af.org.pk','Empowering women and promoting gender equality.'),(6,'Transparent Hands','ORG006','Lahore','Pakistan','info@transparenthands.org','Providing free healthcare services to the underprivileged.'),(7,'Chhipa Welfare Association','ORG007','Karachi','Pakistan','info@chhipa.org','Providing ambulance and emergency services.'),(8,'Indus Hospital','ORG008','Karachi','Pakistan','info@indushospital.org.pk','Providing quality healthcare services free of cost.'),(9,'The Citizens Foundation','ORG009','Karachi','Pakistan','info@tcf.org.pk','Providing quality education to underprivileged children.'),(10,'Akhuwat Foundation','ORG010','Lahore','Pakistan','info@akhuwat.org.pk','Providing interest-free microfinance to alleviate poverty.'),(11,'Dar-ul-Sukun','ORG011','Karachi','Pakistan','info@darulsukun.com','Providing care and shelter for the mentally and physically challenged.'),(12,'SOS Children’s Village','ORG012','Lahore','Pakistan','info@sos.org.pk','Providing homes and support for orphaned children.'),(13,'Behbud Association','ORG013','Islamabad','Pakistan','info@behbud.org','Improving the lives of women and children through education and health.'),(14,'Aangan Trust','ORG014','Karachi','Pakistan','info@aangantrust.org','Preventing child abuse and exploitation.'),(15,'Rizq','ORG015','Lahore','Pakistan','info@rizq.org.pk','Ending hunger by redistributing surplus food.'),(16,'Al-Khidmat Foundation','ORG016','Karachi','Pakistan','info@alkhidmat.org','Providing humanitarian services including healthcare and disaster relief.'),(17,'Tameer-e-Millat Foundation','ORG017','Islamabad','Pakistan','info@tameeremillat.org','Promoting education and healthcare in rural areas.'),(18,'Hashoo Foundation','ORG018','Islamabad','Pakistan','info@hashoofoundation.org','Promoting economic development and social progress.'),(19,'Diya Pakistan','ORG019','Lahore','Pakistan','info@diyapak.org','Providing scholarships and educational support to underprivileged students.'),(20,'Sahara for Life Trust','ORG020','Lahore','Pakistan','info@saharaforlife.org','Providing healthcare, education, and disaster relief services.'),(21,'Save the children','1234','Karachi','Pakistan','0321-5676768','Fight for Children\'s Rights'),(22,'Helping Hands','14666','islamabad','Pakistan','03302253228','helping'),(23,'Helping Labours','A0123','Karachi','Pakistan','0321-5676768','Fight for Labours Right'),(24,'Helping Hands Foundation','HHF12345','Multan','Pakistan','contact@helpinghands.org','Our mission is to provide support and resources to underprivileged families in our community, focusing on education, healthcare, and essential needs.'),(25,'Example','123','Imagination','Pakistan','03302253228','yes ');
/*!40000 ALTER TABLE `organizations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Academics'),(2,'Administrative & Clerical'),(3,'Animals & Environment'),(4,'Arts'),(5,'Business & Management'),(6,'Children & Family'),(7,'Computers & IT'),(8,'Disaster Relief'),(9,'Education & Literacy'),(10,'Engineering'),(11,'Finance'),(12,'For Profit & Nonprofit Development'),(13,'Food Service & Events'),(14,'Healthcare & Social Services'),(15,'Hobbies & Crafts'),(16,'Housing & Facilities'),(17,'HR'),(18,'Interactive & Web Development'),(19,'IT Infrastructure & Software'),(20,'Interpersonal'),(21,'Language & Culture'),(22,'Legal & Advocacy'),(23,'Logistics, Supply Chain & Transportation'),(24,'Marketing & Communications'),(25,'Music'),(26,'Performing Arts'),(27,'Sports & Recreation'),(28,'Strategy Development & Business'),(29,'Trades');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userprofile`
--

DROP TABLE IF EXISTS `userprofile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userprofile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `causes` text,
  `skills` text,
  `location` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `userprofile_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userprofile`
--

LOCK TABLES `userprofile` WRITE;
/*!40000 ALTER TABLE `userprofile` DISABLE KEYS */;
/*!40000 ALTER TABLE `userprofile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Nabeeha Ali','alinabeeha','alinabeeha2004@example.com','$2a$10$8I1vrzx0j6JjoYU0rVhS/utM07lKpreqWaeLiDxVkhibGnUcyUcue'),(2,'Nabeeha Ali','alinabeeha','alinabeeha2004@exampl.com','$2a$10$bNlOAXAoJvHJJYv4Sc.ZE.A1Uh1maR2FGRz5xak7oCJlKRlmwX7O.'),(3,'Nabeeha','alinab','alinabeeha44@gmail.com','$2a$10$BfLlfixvuR7qGrhr.pZMr.Fw9UL3K.i008uEfXbX9mlpXKIKTWk4u'),(4,'Ben','b','aliben@gmail.com','$2a$10$M7quW/bHxxQaysP3UOb7vOr6bJ2tBD.ndlC5llUNdYuoUpC95IO.K'),(5,'Benten','bb','alibb@@gmail.com','$2a$10$po/GubHJ6nWgXxmujYS27ucsl34wh3/4B2cblhSsYl5B6A9XctxJ6'),(6,'beni','bbi','alibeni@gmail.com','$2a$10$G.HFbiO3ns4OVSNbLspKG.rgRhd2kXgXV2j/GIjzDrMtpf6sM3Rb2'),(7,'Nabeeha Ali','alii','alinabeeha90@gmail.com','$2a$10$eWj2sOXyaWPKke3hmfyM6ONRXS4XVBanuOt79MzbTikaOWEt3luX.'),(8,'Nabeeha','naa','alinabeeha42@gmail.com','$2a$10$SPBXz9Sye8TDNfeut0ETAedCAjapF3fAnB4zuviOpGSM/qmaTaooq'),(9,'Azka','azka_ali','azkaalii@gmail.com','$2a$10$t6lhM2nTTF9pfqlmi8G13OlAJAhGU0kb4maUQXdvBMKoghxqpTvmO'),(10,'Rabeesha','rabeeshaa','alirabeesha44@gmail.com','$2a$10$YW6EQX5TAEg4TWdb7v9YeecYI4MwrXcpiZixywV6VZMuQMQ7ZvJ8K'),(11,'Fatima','fatimaa','fatima@gmail.com','$2a$10$STTTeK7p3UPkqHSIJGTZlu045yvdiSGVjdmseAhmd3hMIDJyuLzba');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-26 13:19:44
