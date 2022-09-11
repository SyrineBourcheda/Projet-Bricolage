const mongoose = require('mongoose');
require('mongoose-type-url')
const adSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
       
    },
    skills:{
        type:String,
        required:true,
       
    },
    price:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    facebook:{
        type:String,
        required:true
    },
    linkedin:{
        type:String,
       
    },
    image:{
        type:String,
        required:true
    },
    image1:{
        type:String,
        
    },
    image2:{
        type:String,
        
    },
    image3:{
        type:String,
       
    },
    image4:{
        type:String
    },
    image5:{
        type:String
    },
    category:{
        type:String
    }
},{timestamps:true})

const Ad = mongoose.model('Ad',adSchema )

module.exports = { Ad }