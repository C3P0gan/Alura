-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: mutillidae
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.22.04.1

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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `livro` varchar(255) DEFAULT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `preco_ebook` varchar(255) DEFAULT NULL,
  `preco_livro` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES ('Node.js','Davi Fernandes','14,85','60,4'),('Scratch','Cecilia Gomes','24,98','54,19'),('Haskell','Rafael Oliveira','13,5','63,20'),('Metricas Ageis','Walewska Rocha','26,78','88,59'),('Angular 2','Vitor Oliveira','31,10','76,43'),('Vue.js','Arthur Lima','27,30','79,3'),('Elixir','Pietro Oliveira','45,91','62,2'),('PostgreSQL','Davi Lima','15,59','96,47'),('Algoritmos','Luiza Araujo','18,41','83,9'),('Big Data','Valentina Martins','40,37','91,82'),('Scala','Cecilia Almeida','48,44','71,25'),('Amazon AWS','Gabriela Pereira','39,46','86,75'),('CSS','Leonardo Almeida','32,71','68,23'),('Arduino','Joao Ribeiro','19,28','90,91'),('SASS','Isabella Costa','36,85','90,20'),('Android','Heitor Carvalho','13,5','90,8'),('IOS','Melissa Nascimento','35,55','90,31'),('Windows Server 2012','Walewska Ribeiro','36,48','52,74'),('NoSQL','Eriberto Gomes','36,3','69,64'),('ASP.NET','Enzo Souza','11,54','66,51'),('Elasticsearch','Isabelly Rocha','18,29','76,16'),('Cordova e PhoneGap','Lara Oliveira','44,51','82,45'),('Jenkins','Theo Rocha','11,6','65,81'),('Azure','Guilherme Silva','10,79','85,18'),('Docker','Heloisa Costa','16,69','73,30'),('Python','Yasmin Oliveira','23,25','87,32'),('MySQL','Theo Santos','39,24','94,67'),('PHP','Miguel Oliveira','30,61','73,44'),('Spring MVC','Beatriz Rodrigues','39,86','58,64'),('SEO','Pietro Martins','46,32','88,70'),('APIs Java','Lara Pereira','25,0','88,18'),('TDD PHP','Gustavo Oliveira','47,18','55,39'),('TDD Java','Sarah Santos','13,10','82,22'),('MongoDB','Pietro Souza','34,29','88,64'),('SWift','Heitor Rodrigues','26,55','77,60'),('Git','Pietro Fernandes','44,80','53,42'),('UX Design','Matheus Oliveira','28,8','52,38'),('Windows Phone','Pedro Souza','10,52','79,48'),('Java 8','Isabella Fernandes','45,87','64,29'),('Linux','Yasmin Oliveira','11,31','51,79'),('Photoshop','Heitor Costa','17,5','74,32'),('JPA','Davi Fernandes','27,11','74,5'),('CDI','Rafaela Gomes','36,91','59,1'),('REST','Felipe Nascimento','35,17','90,26'),('JavaFX','Helena Carvalho','20,63','70,61'),('Scrum','Luiza Carvalho','40,22','81,61'),('VRaptor','Enzo Carvalho','42,57','93,43'),('JQuery','Isadora Martins','36,72','86,2'),('SOA','Pedro Araujo','21,83','87,8'),('Web Design responsivo','Isabella Pereira','26,90','92,39');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-02 14:02:52
