require('dotenv').config();
const {config}=require("dotenv");
const http=require("http");
const mysql=require("mysql2");
const express=require("express");
const cors=require("cors");
const routes=require('./Routes/routes');
const bodyParser=require('body-parser');
require("./connections");

//this is to make express as function
const app=express();
//to create server
const server=http.createServer(app);
//to use config;
app.use(cors());
config();

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

