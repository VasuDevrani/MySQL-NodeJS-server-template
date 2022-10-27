# MySQL-NodeJS-server-template

This repo provides a BOILERPLATE to create Express-Nodejs servers using MySQL database.

## ✅ Pre-requesites:
- Install & SetUp MySQL workbench and CLI
- [Install FROM HERE](https://www.mysql.com/downloads/)

## 🦾 GET STARTED:
- Fork the repo
- Clone into your local machine
- Run ```npm i```
- Before connecting Node.js Application with MySQL, we need a table first. So run the SQL script (in CLI or workbench) below to create tutorials table:
```
CREATE TABLE IF NOT EXISTS tutorials (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
);
```
- Replace the ```root``` and ```password``` in ```config > db.config.js``` as per your mySQL setup
- ```npm start``` to run the server (at 8000)
- Test the routes on PostMan or similar tools.

## 😁 That's All, Now use it to create your own custom Express-MySQL APIs.
