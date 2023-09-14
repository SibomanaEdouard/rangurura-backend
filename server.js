
//this is to require all dependencies
const {config}=require("dotenv");
const http=require("http");
const mongo=require("mongoose");
const mysql=require("mysql");
const express=require("express");
const cors=require("cors");
const routes=require('./Routes/routes');
const bodyParser=require('body-parser');


//this is to make express as function
const app=express();
//to create server
const server=http.createServer(app);
//to use config;
app.use(cors());
config();

// Create a MySQL connection pool
const dbConfig = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  };
  
  const con = mysql.createPool(dbConfig);
  
  con.getConnection((err) => {
    if (err) {
      console.error("Failed to connect to MySQL:", err);
    } else {
      console.log("Connected to MySQL database");
    }
  });

//this is configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());



//this is how to connect to the routes
app.use('/',routes);

//this is to set the port
const port=process.env.PORT || 256;

//this is error handling  api
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  });

server.listen(port,(error)=>{

    if(error){
    throw error;
    }
    else{
        console.log("the server is running on port " + port );
    }
})

