const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
         user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'user',
            require:true
         },
         video:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'video',
            require:true
         },
         message:{
            type:String,
            require:true
         }


},{timestamps:true})
   module.exports = mongoose.model('comment',commentSchema);