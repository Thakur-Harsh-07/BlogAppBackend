const mongoose  = require('mongoose');

// route handler
const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post", // refrence to the post models
    },
    user:{
        type:String,
        reuired:true,
    },
    body:{
        type:String,
        reuired:true,
    }
});


// export
module.exports = mongoose.model("Comment",commentSchema);