const mongoose=require("mongoose");
//mongodb er online atles a database create kore sekhan theke ay DB link copy kore tate password ar database er name
//nam er jagai atles a thaka database er nam ar password fill kora hoi tn ta ager motu kore e add kora hoi 
// connection er jonno
// console.log(process.env.DATABASE)

const DB=process.env.DATABASE
mongoose.connect(DB,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>console.log("connection successfull....."))
.catch((err)=>console.log(err));
