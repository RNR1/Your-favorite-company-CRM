-- CREATE DATABASE crm_project;
USE crm_project;

-- DROPPER
-- DROP TABLE client;

CREATE TABLE client(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    first_contact DATETIME,
    email_type VARCHAR(5),
    sold BOOLEAN,
    owner VARCHAR(50),
    country VARCHAR(50)
);

