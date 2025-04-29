const Comment = require('../models/commentModel');
const Post = require('../models/postmodel')

//logic

exports.createComment = async (req,res) => {
    try{
        // fetch data
        const{post, user, body} = req.body;
        // create comment object
        const comment = new Comment({
            post,user,body
        });

        // save the new comment in db
        const savedComment = await comment.save();

        // find the post by id, addf the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(
            post,{$push:{comments:savedComment._id}},{new:true}
            
        )
        .populate("comments")
            .exec();
        
        res.json({
            post:updatedPost,
        });
    }
    catch(err){
        return res.status(500).json({
            error:"Error While Creating Comments",
            
        })
    }
    
};

