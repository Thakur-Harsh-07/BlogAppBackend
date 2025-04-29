const express = require('express');

const router = express.Router();

// import controller
const{createComment} = require('../controller/CommentController');
const{createPost, getAllPost} = require('../controller/PostController');
const{ likePost,unlikePost} = require('../controller/LikeController');


// mapping

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPost);
router.post("/likes/like",likePost);
router.post("/like/unlike",unlikePost);


module.exports = router;