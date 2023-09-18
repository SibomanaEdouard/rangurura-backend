// This is to import required files
const mysql = require("mysql2");

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USERS, // Corrected from USERS to USER
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  waitForConnections: true,
  connectionLimit: 10, // You can adjust the connection limit as needed
  queueLimit: 0,
});

// Export the MySQL connection pool
module.exports = pool.promise();
