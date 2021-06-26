//require part
require('dotenv').config();
const express=require("express");
const app=express();
const cors =require('cors')
const cookieParser = require("cookie-parser")
require('./db/monguCon')
const User=require('./models/UserSchema')


app.use(cookieParser())
// for json data
app.use(express.json())
//
app.use(cors({
    origin:['http://localhost:3000'],
    credentials:true,
}));
// app.use(cors())
//for router.......
app.use(require('./router/auth'))

//middleware

//server part
app.get('/',(req,res)=>{
    res.send("hello from other side")
})
app.get('/about',(req,res)=>{
    res.send("hello about world from other side")
})
app.get('/contact',(req,res)=>{
    res.send("hello contact world from other side")
})
app.get('/singin',(req,res)=>{
    res.send("hello singin world from other side")
})
app.get('/singup',(req,res)=>{
    res.send("hello singup world from other side")
})
app.listen(8000,()=>{
    console.log("port running on 8000....")
})