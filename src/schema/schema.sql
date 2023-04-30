CREATE DATABASE IF NOT EXISTS ecommerce;
use ecommerce;

CREATE TABLE products (
    id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    brand varchar(40) NOT NULL,
    name varchar(255) NOT NULL,
    price int NOT NULL,
    rating int NOT NULL,
    image varchar(255) NOT NULL,
    description varchar(255) NOT NULL
);