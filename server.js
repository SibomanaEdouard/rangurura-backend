// require('dotenv').config();
// const http=require("http");
// const mysql=require("mysql2");
// const express=require("express");
// const cors=require("cors");
// const routes=require('./Routes/routes');
// const bodyParser=require('body-parser');


// //this is to make express as function
// const app=express();

// //to create server
// const server=http.createServer(app);
// app.use(cors());


// //this is configuration
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());



// //this is how to connect to the routes
// app.use('/',routes);
// // Create a MySQL connection pool
// const dbConfig = {
//   host: process.env.HOST,
//   user: process.env.USERS, // Corrected from USERS to USER
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// };

// const pool = mysql.createPool(dbConfig);

// // Test the connection pool
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Failed to connect to MySQL:", err);
//   } else {
//     console.log("Connected to MySQL database");

//     // Release the connection when done
//     connection.release();
//   }
// });

// //this is to set the port
// const port=process.env.PORT || 256;

// //this is error handling  api
// app.use((err, req, res, next) => {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   });

// server.listen(port,(error)=>{

//     if(error){
//     throw error;
//     }
//     else{
//         console.log("the server is running on port " + port );
//     }
// })


require('dotenv').config();
const http = require("http");
const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const routes = require('./Routes/routes');
const sequelize=require('sequelize');

// Create an instance of Express
const app = express();

// Create an HTTP server using Express
const server = http.createServer(app);

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json())

// Use your routes
app.use('/', routes);

// Create a MySQL connection pool
const dbConfig = {
  host: process.env.HOST,
  user: process.env.USERS,
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

// Set the port
const port = process.env.PORT || 256;

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
server.listen(port, (error) => {
  if (error) {
    throw error;
  } else {
    console.log("The server is running on port " + port);
  }
});


