import mysql from "mysql";
import dbConfig from "../config/db.config.js";

// create connection
const connection = mysql.createConnection({
  port: "3306",
  host: "localhost",
  user: "root",
  password: "vasu1234",
  database: "newdb",
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default connection;
