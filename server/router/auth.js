const express = require('express')
const router = express.Router();
require('../db/monguCon')
const User = require('../models/UserSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const authenticate =require('../middleware/authenticate')

router.get('/', (req, res) => {
    res.send("hello from other side to router")
})

// register data....
router.post('/register', async (req, res) => {
     console.log(req.body)
    // res.json({massage:req.body})

    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "plz fill all fild" })
    }



    try {
        const data = await User.findOne({ email: email })
        if (data) {
            console.log('vhul')
           
            return res.status(422).json({ error: "email already exist.." })
           
        }
        else if (password !== cpassword) {
            console.log('vhul')
            return res.status(422).json({ error: "both password are not same" })
           
        }
        else {
            const docu = new User({ name, email, phone, work, password, cpassword })
            await docu.save();
            res.status(201).json({ mesage: "data register successfully.." })
            console.log('register')

        }


    } catch (error) {
        console.log(error)

    }

})
// signin 
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            console.log('vhul')
            return res.status(400).json({ error: "fill all field" })
           
        }
        const userSignin = await User.findOne({ email: email });
        //console.log(userSignin)
        if (userSignin) {
            //res.json({ message: "user signin successfully" })
            const ismatch=await bcrypt.compare(password,userSignin.password)
            if(ismatch)
            {
                const token=await userSignin.genationToken();
                console.log(token)
                res.cookie('jwtToken',token)
               // console.log(res.cookie.jwtToken)
                
                console.log("user signin successfully")
                res.json({ message: "user signin successfully" })   
            }
            else{
                console.log('vhul pass')
                return res.status(400).json({ error: "user error" })
            }
        }
        else {
            console.log('vhul')
            return res.status(400).json({ error: "user error" })
        }
    } catch (error) {
        console.log(error)
    }
})
//about
router.get('/about',authenticate,(req,res)=>{
    console.log("athentic")
    res.json(req.user)
})

//get data
router.get('/getdata',authenticate,(req,res)=>{
    console.log("athentic")
    res.status(200).json(req.user)
})
//
// contact
router.post('/contact',authenticate,async(req,res)=>{

    const {name,email,phone,message}=req.body;
    if(!name || !email || !phone || !message){
        console.log("error in contact from")
        return res.json({error:"plzz fill the from"})
    }

    const userContact=await User.findOne({_id:req.userId})
    if(userContact){
        const userMessage=await userContact.addmessage(name,email,phone,message);
        console.log(userMessage)
        await userContact.save();
        res.status(201).json({message:"user contact successfull "})
    }
})

//logout
router.get('/logout',authenticate,(req,res)=>{
    res.clearCookie('jwtToken')
    req.user.tokens=[]
    console.log("logout")
    res.json(req.user)
})

module.exports = router;