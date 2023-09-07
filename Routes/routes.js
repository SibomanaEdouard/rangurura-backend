const express=require('express')
const app=express()
const signUp=require('../controllers/signupController') //to sign the user
const InjizaUmuturage=require('../controllers/loginController') //kwinjiza umuntu muri rangurura


//this is signup 
app.post('/signup',signUp)
app.post('/',InjizaUmuturage) //this is login route



module.exports=app
