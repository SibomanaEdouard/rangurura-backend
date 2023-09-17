// This is to import required files
const mysql = require("mysql2");

// Create a MySQL connection pool
const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERS, // Corrected from USERS to USER
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const pool = mysql.createPool(dbConfig);

// Test the connection pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Failed to connect to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");

    // Release the connection when done
    connection.release();
  }
});

module.exports = pool.promise(); // Use pool.promise() to enable async/await for queries
