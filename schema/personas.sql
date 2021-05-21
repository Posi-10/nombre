CREATE SCHEMA `personas` DEFAULT CHARACTER SET utf8mb4;
USE personas;
CREATE TABLE `personas`.`nombres` (
  `id_nombre` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(255) NULL,
  PRIMARY KEY (`id_nombre`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;