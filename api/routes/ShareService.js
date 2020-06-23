const Router = require('express').Router();
const User = require('../models/User');
const uuid = require('uuid').v1;

const Post = require("../models/Post");

Router.post("/share",(req,res)=>{
    const userid=req.user.id;
    const postid=req.body.postid;
    res.status(200).json({
        message:"we dont support this feature,use real facebook"
    });
});
Router.post("/unshare",(req,res)=>{
    const userid=req.user.id;
    const postid=req.body.postid;
    Post.findOne({id:postid}).then(post=>{
        post.shared.pull(userid);
        post.save().then(()=>{
            res.status(200).json({
                message:"post has been removed from timeline"
            })
        });
    }).catch(err=>{
        res.status(400).json({
            error:err.message
        })
    })
})



module.exports=Router;