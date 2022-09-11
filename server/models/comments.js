const mongoose = require('mongoose');
require('mongoose-type-url')
const commentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    adId:{
        type:String,
        required:true
    }
   
},)

const COMMENT = mongoose.model('COMMENT',commentSchema )

module.exports = { COMMENT }