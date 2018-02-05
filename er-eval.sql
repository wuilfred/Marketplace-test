-- MySQL Script generated by MySQL Workbench
-- Thu Feb  1 15:08:07 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema evaluacion
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema evaluacion
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `evaluacion` DEFAULT CHARACTER SET utf8 ;
USE `evaluacion` ;

-- -----------------------------------------------------
-- Table `evaluacion`.`app_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_category` (
  `idapp_category` INT(11) NOT NULL,
  `category_name` VARCHAR(45) NULL DEFAULT NULL,
  `category_description` TEXT NULL DEFAULT NULL,
  `category_image` TEXT NULL DEFAULT NULL,
  `category_tax` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`idapp_category`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `evaluacion`.`app_salesman`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_salesman` (
  `idapp_salesman` INT(11) NOT NULL,
  `salesman_company` TEXT NULL DEFAULT NULL,
  `salesman_name` VARCHAR(45) NULL DEFAULT NULL,
  `salesman_country` VARCHAR(45) NULL DEFAULT NULL,
  `salesman_address` TEXT NULL DEFAULT NULL,
  `salesman_phone` INT(11) NULL DEFAULT NULL,
  `salesman_description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`idapp_salesman`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `evaluacion`.`app_shipper`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_shipper` (
  `idapp_shipper` INT(11) NOT NULL,
  `shipper_name` VARCHAR(45) NULL DEFAULT NULL,
  `shipper_phone` INT(11) NULL DEFAULT NULL,
  `shipper_pound_price` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`idapp_shipper`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `evaluacion`.`app_products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_products` (
  `idapp_product` INT(11) NOT NULL,
  `idapp_category` INT(11) NULL DEFAULT NULL,
  `idapp_salesman` INT(11) NULL DEFAULT NULL,
  `idapp_shipper` INT(11) NULL DEFAULT NULL,
  `product_name` VARCHAR(45) NULL DEFAULT NULL,
  `product_item` INT(11) NULL DEFAULT NULL,
  `product_price` FLOAT NULL DEFAULT NULL,
  `product_exist` TINYINT(4) NULL DEFAULT NULL,
  `product_ weight` FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (`idapp_product`),
  INDEX `idapp_category_idx` (`idapp_category` ASC),
  INDEX `idapp_salesman_idx` (`idapp_salesman` ASC),
  INDEX `idapp_shipper_idx` (`idapp_shipper` ASC),
  CONSTRAINT `idapp_category`
    FOREIGN KEY (`idapp_category`)
    REFERENCES `evaluacion`.`app_category` (`idapp_category`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idapp_salesman`
    FOREIGN KEY (`idapp_salesman`)
    REFERENCES `evaluacion`.`app_salesman` (`idapp_salesman`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idapp_shipper`
    FOREIGN KEY (`idapp_shipper`)
    REFERENCES `evaluacion`.`app_shipper` (`idapp_shipper`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `evaluacion`.`app_orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_orders` (
  `idapp_order` INT(11) NOT NULL,
  `idapp_product` INT(11) NOT NULL,
  `order_name` TEXT NULL DEFAULT NULL,
  `order_date` DATETIME NULL DEFAULT NULL,
  `order_price` FLOAT NULL DEFAULT NULL,
  `order_quantity` FLOAT NULL DEFAULT NULL,
  `order_tax` FLOAT NULL DEFAULT NULL,
  `order_safe` FLOAT NULL,
  `order_total` FLOAT NULL,
  PRIMARY KEY (`idapp_order`),
  INDEX `idapp_product_idx` (`idapp_product` ASC),
  CONSTRAINT `idapp_product`
    FOREIGN KEY (`idapp_product`)
    REFERENCES `evaluacion`.`app_products` (`idapp_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `evaluacion`.`app_image_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `evaluacion`.`app_image_product` (
  `idapp_image_product` INT NOT NULL,
  `image_name` VARCHAR(45) NULL,
  `image_path` VARCHAR(45) NULL,
  `app_products_idapp_product` INT(11) NOT NULL,
  PRIMARY KEY (`idapp_image_product`),
  INDEX `fk_app_image_product_app_products1_idx` (`app_products_idapp_product` ASC),
  CONSTRAINT `fk_app_image_product_app_products1`
    FOREIGN KEY (`app_products_idapp_product`)
    REFERENCES `evaluacion`.`app_products` (`idapp_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;