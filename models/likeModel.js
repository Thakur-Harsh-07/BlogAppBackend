const mongoose = require('mongoose');


const likeSchema = new mongoose.Schema({
    post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post", // refrence to the post models
        },
        user:{
            type:String,
            reuired:true,
        },
    
});

module.exports = mongoose.model("Like",likeSchema);