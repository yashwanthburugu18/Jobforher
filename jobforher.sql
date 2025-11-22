CREATE DATABASE jobforher;
USE jobforher;
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(100),email VARCHAR(100) UNIQUE,password VARCHAR(100));
select * from users;