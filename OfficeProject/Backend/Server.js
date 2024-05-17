const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
require('dotenv').config();
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log("CONNECTED TO DATABASE");
}).catch((error)=>{
    console.log("failed to connect to mongodb")
})
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})