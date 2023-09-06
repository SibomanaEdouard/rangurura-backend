const express=require('express')
const app=express()
const signUp=require('../controllers/signupController')

//this is signup 
app.post('/signup',signUp)


