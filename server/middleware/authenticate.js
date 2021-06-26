const jwt = require("jsonwebtoken");
const User = require('../models/UserSchema');

const authenticate = async (req, res, next) => {
  //  console.log(req.Cookies.jwt)
    try {
       // console.log(req.cookies.jwtToken)
        const token = req.cookies.jwtToken;
         console.log("cookie part "+token)
        if (token) {
            const verifyUser = jwt.verify(token, process.env.KEY);
          //  console.log(verifyUser)
            //res.json(true)
            const user = await User.findOne({ _id: verifyUser._id,'tokens.token':token })
            req.token = token;
            req.user = user;
            req.userId=user._id
        }
        else{
            res.status(400).json({ error: "error1" })
            console.log('notAthentic')
        }

        next();
    } catch (error) {
        res.status(400).json({ error: "error1" })
        console.log('notAthentic')

    }

}
module.exports = authenticate;