-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: python1812alg
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alg_cart`
--

DROP TABLE IF EXISTS `alg_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(100) NOT NULL,
  `color` varchar(100) NOT NULL,
  `number` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `isdelete` tinyint(1) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `alg_cart_goods_id_142a2b95_fk_alg_goods_id` (`goods_id`),
  KEY `alg_cart_user_id_bca321ee` (`user_id`),
  CONSTRAINT `alg_cart_goods_id_142a2b95_fk_alg_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `alg_goods` (`id`),
  CONSTRAINT `alg_cart_user_id_bca321ee_fk_alg_user_id` FOREIGN KEY (`user_id`) REFERENCES `alg_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_cart`
--

LOCK TABLES `alg_cart` WRITE;
/*!40000 ALTER TABLE `alg_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `alg_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alg_goods`
--

DROP TABLE IF EXISTS `alg_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productid` varchar(20) NOT NULL,
  `smallsrc` varchar(200) NOT NULL,
  `bigsrc1` varchar(200) NOT NULL,
  `xxsrc1` varchar(200) NOT NULL,
  `bigsrc2` varchar(200) NOT NULL,
  `xxsrc2` varchar(200) NOT NULL,
  `bigsrc3` varchar(200) NOT NULL,
  `xxsrc3` varchar(200) NOT NULL,
  `bigsrc4` varchar(200) NOT NULL,
  `xxsrc4` varchar(200) NOT NULL,
  `bigsrc5` varchar(200) NOT NULL,
  `xxsrc5` varchar(200) NOT NULL,
  `productlongname` varchar(256) NOT NULL,
  `msg` varchar(256) NOT NULL,
  `salemsg` varchar(256) NOT NULL,
  `news` varchar(256) NOT NULL,
  `oldprice` decimal(6,2) NOT NULL,
  `newprice` decimal(6,2) NOT NULL,
  `remnum` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `dealerid` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_goods`
--

LOCK TABLES `alg_goods` WRITE;
/*!40000 ALTER TABLE `alg_goods` DISABLE KEYS */;
INSERT INTO `alg_goods` VALUES (1,'11952','/static/img1/small_good_011.JPG','/static/imgs/big_goods_011.jpg','/static/imgs/goodslist_011.jpg','/static/imgs/big_goods_012.jpg','/static/imgs/goodslist_012.jpg','/static/imgs/big_goods_013.jpg','/static/imgs/goodslist_013.jpg','/static/imgs/big_goods_014.jpg','/static/imgs/goodslist_014.jpg','/static/imgs/big_goods_015.jpg','/static/imgs/goodslist_015.jpg','U.S POLO ASSN. 女士时尚休闲长T恤衫 T111001','U.S POLO ASSN. 女士时尚休闲长T恤衫 T111001','已享受1.50折优惠满299.00元减100.00','国庆“价”到 限时抢购 （U.S POLO 全场1.5折）此商品正参加满299减100元活动！',2499.00,999.00,110,15,'1002'),(2,'11953','/static/img1/small_good_021.JPG','/static/imgs/big_goods_021.JPG','/static/imgs/goodslist_021.JPG','/static/imgs/big_goods_022.JPG','/static/imgs/goodslist_022.JPG','/static/imgs/big_goods_023.JPG','/static/imgs/goodslist_023.JPG','/static/imgs/big_goods_024.JPG','/static/imgs/goodslist_024.JPG','/static/imgs/big_goods_025.JPG','/static/imgs/goodslist_025.JPG','PUMA/彪马 女式针织外套 83602821','PUMA/彪马 女式针织外套 83602821','以优惠价239.00元购买00','今日特价 限时抢购此商品正参加满299减100元活动！',1488.00,888.00,80,8,'1003'),(3,'11953','/static/img1/small_good_061.JPG','/static/imgs/big_goods_061.JPG','/static/imgs/goodslist_061.JPG','/static/imgs/big_goods_062.JPG','/static/imgs/goodslist_062.JPG','/static/imgs/big_goods_063.JPG','/static/imgs/goodslist_063.JPG','/static/imgs/big_goods_064.JPG','/static/imgs/goodslist_064.JPG','/static/imgs/big_goods_065.JPG','/static/imgs/goodslist_065.JPG','小老板 海鲜味紫菜 36g','小老板 海鲜味紫菜 36g','已直降7.20元满159.00元减30.00','今日特价 限时抢购此商品！',89.00,66.00,80,8,'1004'),(4,'11953','/static/img1/small_good_071.JPG','/static/imgs/big_goods_071.JPG','/static/imgs/goodslist_071.JPG','/static/imgs/big_goods_072.JPG','/static/imgs/goodslist_072.JPG','/static/imgs/big_goods_073.JPG','/static/imgs/goodslist_073.JPG','/static/imgs/big_goods_074.JPG','/static/imgs/goodslist_074.JPG','/static/imgs/big_goods_075.JPG','/static/imgs/goodslist_075.JPG','花王 妙而舒婴儿纸尿布 中号（M)64片','花王 妙而舒婴儿纸尿布 中号（M)64片','已直降27.00元满159.00元减30.00','今日特价 限时抢购此商品！',538.00,444.00,80,8,'1005'),(5,'11951','/static/img1/small_good_001.JPG','/static/imgs/big_goods_001.JPG','/static/imgs/goodslist_001.JPG','/static/imgs/big_goods_002.JPG','/static/imgs/goodslist_002.JPG','/static/imgs/big_goods_003.JPG','/static/imgs/goodslist_003.JPG','/static/imgs/big_goods_004.JPG','/static/imgs/goodslist_004.JPG','/static/imgs/big_goods_005.JPG','/static/imgs/goodslist_005.JPG','Versace Collection 范思哲 秋冬新品男款套头毛衫V700629 VK00154 V7023','范思哲 秋冬新品男款套头毛衫V700629 VK00154 V7023','已享受1.50折优惠满299.00元减100.00','国庆“价”到 限时抢购',4399.00,1999.00,80,8,'1001');
/*!40000 ALTER TABLE `alg_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alg_new_goods`
--

DROP TABLE IF EXISTS `alg_new_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_new_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `trackid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_new_goods`
--

LOCK TABLES `alg_new_goods` WRITE;
/*!40000 ALTER TABLE `alg_new_goods` DISABLE KEYS */;
INSERT INTO `alg_new_goods` VALUES (1,'static/img/goods01.jpg','goods01','21870'),(2,'static/img/goods02.jpg','goods02','21869'),(3,'static/img/goods03.jpg','goods03','21862'),(4,'static/img/goods05.jpg','goods05','21770'),(5,'static/img/goods04.jpg','goods07','21874');
/*!40000 ALTER TABLE `alg_new_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alg_new_goods_brand`
--

DROP TABLE IF EXISTS `alg_new_goods_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_new_goods_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `trackid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_new_goods_brand`
--

LOCK TABLES `alg_new_goods_brand` WRITE;
/*!40000 ALTER TABLE `alg_new_goods_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `alg_new_goods_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alg_user`
--

DROP TABLE IF EXISTS `alg_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phone` varchar(40) NOT NULL,
  `password` varchar(256) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_user`
--

LOCK TABLES `alg_user` WRITE;
/*!40000 ALTER TABLE `alg_user` DISABLE KEYS */;
INSERT INTO `alg_user` VALUES (1,'13411111111','111111','111'),(2,'13422222222','222222','222');
/*!40000 ALTER TABLE `alg_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alg_wheel`
--

DROP TABLE IF EXISTS `alg_wheel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alg_wheel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `trackid` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alg_wheel`
--

LOCK TABLES `alg_wheel` WRITE;
/*!40000 ALTER TABLE `alg_wheel` DISABLE KEYS */;
INSERT INTO `alg_wheel` VALUES (6,'static/img/banner1.jpg','banner1','21870'),(7,'static/img/banner2.jpg','banner2','21869'),(8,'static/img/banner3.jpg','banner3','21862'),(9,'static/img/banner4.jpg','banner4','21770'),(10,'static/img/banner5.jpg','banner5','21874');
/*!40000 ALTER TABLE `alg_wheel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_order`
--

DROP TABLE IF EXISTS `app_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `updatetime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `identifier` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_order_user_id_f25a9fc4_fk_alg_user_id` (`user_id`),
  CONSTRAINT `app_order_user_id_f25a9fc4_fk_alg_user_id` FOREIGN KEY (`user_id`) REFERENCES `alg_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_order`
--

LOCK TABLES `app_order` WRITE;
/*!40000 ALTER TABLE `app_order` DISABLE KEYS */;
INSERT INTO `app_order` VALUES (1,'2019-03-18 10:16:08.385358','2019-03-18 10:16:08.385406',0,'1552904168.38488369393',1),(2,'2019-03-18 10:50:07.469657','2019-03-18 10:50:07.469713',0,'1552906207.46902475314',1),(3,'2019-03-18 10:57:57.717301','2019-03-18 10:57:57.717409',0,'1552906677.71563949666',1),(4,'2019-03-18 11:41:21.415045','2019-03-18 11:41:21.415106',0,'1552909281.41433483766',1),(5,'2019-03-18 11:45:25.679491','2019-03-18 11:45:25.679545',0,'1552909525.6788777645',1),(6,'2019-03-18 11:45:26.560766','2019-03-18 11:45:26.560993',0,'1552909526.55967197134',1),(7,'2019-03-18 11:45:27.139728','2019-03-18 11:45:27.139783',0,'1552909527.13909221989',1),(8,'2019-03-18 11:45:27.676414','2019-03-18 11:45:27.676503',0,'1552909527.67583945237',1),(9,'2019-03-18 11:45:28.141963','2019-03-18 11:45:28.142039',0,'1552909528.13992113',1);
/*!40000 ALTER TABLE `app_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_ordergoods`
--

DROP TABLE IF EXISTS `app_ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_ordergoods_goods_id_b3c19f94_fk_alg_goods_id` (`goods_id`),
  KEY `app_ordergoods_order_id_ef926487_fk_app_order_id` (`order_id`),
  CONSTRAINT `app_ordergoods_goods_id_b3c19f94_fk_alg_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `alg_goods` (`id`),
  CONSTRAINT `app_ordergoods_order_id_ef926487_fk_app_order_id` FOREIGN KEY (`order_id`) REFERENCES `app_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_ordergoods`
--

LOCK TABLES `app_ordergoods` WRITE;
/*!40000 ALTER TABLE `app_ordergoods` DISABLE KEYS */;
INSERT INTO `app_ordergoods` VALUES (1,4,2,3),(2,2,2,3),(3,1,1,4),(4,1,1,4);
/*!40000 ALTER TABLE `app_ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add cart',7,'add_cart'),(20,'Can change cart',7,'change_cart'),(21,'Can delete cart',7,'delete_cart'),(22,'Can add goods',8,'add_goods'),(23,'Can change goods',8,'change_goods'),(24,'Can delete goods',8,'delete_goods'),(25,'Can add new_goods',9,'add_new_goods'),(26,'Can change new_goods',9,'change_new_goods'),(27,'Can delete new_goods',9,'delete_new_goods'),(28,'Can add new_goods_brand',10,'add_new_goods_brand'),(29,'Can change new_goods_brand',10,'change_new_goods_brand'),(30,'Can delete new_goods_brand',10,'delete_new_goods_brand'),(31,'Can add user',11,'add_user'),(32,'Can change user',11,'change_user'),(33,'Can delete user',11,'delete_user'),(34,'Can add wheel',12,'add_wheel'),(35,'Can change wheel',12,'change_wheel'),(36,'Can delete wheel',12,'delete_wheel'),(37,'Can add order',13,'add_order'),(38,'Can change order',13,'change_order'),(39,'Can delete order',13,'delete_order'),(40,'Can add order goods',14,'add_ordergoods'),(41,'Can change order goods',14,'change_ordergoods'),(42,'Can delete order goods',14,'delete_ordergoods');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(7,'app','cart'),(8,'app','goods'),(9,'app','new_goods'),(10,'app','new_goods_brand'),(13,'app','order'),(14,'app','ordergoods'),(11,'app','user'),(12,'app','wheel'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-03-18 01:37:13.064778'),(2,'auth','0001_initial','2019-03-18 01:37:13.385866'),(3,'admin','0001_initial','2019-03-18 01:37:13.460962'),(4,'admin','0002_logentry_remove_auto_add','2019-03-18 01:37:13.478956'),(5,'app','0001_initial','2019-03-18 01:37:13.699902'),(6,'contenttypes','0002_remove_content_type_name','2019-03-18 01:37:13.774925'),(7,'auth','0002_alter_permission_name_max_length','2019-03-18 01:37:13.818184'),(8,'auth','0003_alter_user_email_max_length','2019-03-18 01:37:13.860312'),(9,'auth','0004_alter_user_username_opts','2019-03-18 01:37:13.874234'),(10,'auth','0005_alter_user_last_login_null','2019-03-18 01:37:13.910019'),(11,'auth','0006_require_contenttypes_0002','2019-03-18 01:37:13.919479'),(12,'auth','0007_alter_validators_add_error_messages','2019-03-18 01:37:13.937730'),(13,'auth','0008_alter_user_username_max_length','2019-03-18 01:37:14.006944'),(14,'sessions','0001_initial','2019-03-18 01:37:14.037735'),(15,'app','0002_auto_20190318_0140','2019-03-18 01:40:37.760515'),(16,'app','0003_order_ordergoods','2019-03-18 10:15:18.426265');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('2a5wz56mpisrcsmtm30zjyl2jsps3jo7','MmJlZmU3ZWUzYjYxY2Y0OGZjMzgzNzgxODhmMDAyY2M0Y2RjZTBiYjp7InRva2VuIjoiNjcyMDIwN2I2NWM5NDg4ZDMyNWMwODUzODc0OWQ2MDYifQ==','2019-04-01 12:04:47.051832'),('uxxydjexmv7s87zitgczvci54mnxobr9','Njc0MDFiZDY0YzliNjdlMmFlNzAyYzgxNDU4ZDgzMzNiY2JjZjMzNDp7InRva2VuIjoiNTc3MzhlNDRkNTZhZTA2MDVjNjUyYzI4ZDk3NDBjMjkifQ==','2019-04-01 02:08:26.352690'),('wvad62drsr7g1y93p59qagv5i87panau','Y2RkMTBlYjNjODJhMzJmOWIyZDdmNmNlY2FjYmFiY2JhZWYxMTU4OTp7InRva2VuIjoiMDYwNDc2YWM5MzlhYjRlMTE3YzdkNmQ4MmQxZGVkNjkifQ==','2019-04-01 01:50:07.755449'),('xzoa1ris82kv0xl31lhvqqfcx5sge2n0','YzIzZjAzOTc3MzE2MzIyMjFiMDI1MmEzMDAzM2U3MzlhZTMxYzA4YTp7InRva2VuIjoiZTI1MzMxZTMyYzMwOWY1OWEyNjMxYmY2ODA1NGUxMDQifQ==','2019-04-01 11:58:52.451333');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-18 20:34:10
