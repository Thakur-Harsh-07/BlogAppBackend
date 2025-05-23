const Post = require('../models/postmodel');
const Like = require('../models/likeModel');

exports.likePost = async (req,res) => {
    try{
        const{post, user} = req.body;
        const like = new Like({
            post, user,
            
        });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(
                    post,{$push:{likes:savedLike._id}},{new:true}
                    
                )
                .populate("likes")
                    .exec();
                
                res.json({
                    post:updatedPost,
                });
            
        
    }
    catch(err){
        return res.status(500).json({
            error:"Error While Creating likes",
            
        })
    }
    
};

exports.unlikePost = async (req,res) => {
    try{
        const{post, like} = req.body;
        //find  and delete
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});
        //update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});
        res.json({
            post:updatedPost,
        })

    }
    catch(err){
        return res.status(500).json({
            error:"Error While unliking ",
            
        })
    }
    
}