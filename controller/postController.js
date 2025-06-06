const Post = require('../models/postmodel');

exports.createPost = async (req, res) => {
    try{
        const{title, body} = req.body;
        const post = new Post({
            title, body,
        });
        const savedPost = await post.save();

        res.json({
            post:savedPost,
        });
    }
    catch(err){
        return res.status(400).json({
            error:"Error while creating post",
        })
    }
    
};
exports.getAllPost = async (req,res) => {
    try{
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        });
    }
    catch(err){
        return res.status(400).json({
            error:"Error while fetching post",
        })
    }
    
}