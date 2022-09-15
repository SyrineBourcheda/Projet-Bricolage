const mongoose = require('mongoose');
require('mongoose-type-url')
const messageSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }
   
},)

const MESSAGE = mongoose.model('MESSAGE',messageSchema )

module.exports = { MESSAGE }