const mongoose=require('mongoose');
const supplySchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    reorderLevel:{
        type:Number,
        required:true
    }
})
const Supply=mongoose.model('Supply',supplySchema);
module.exports=Supply;