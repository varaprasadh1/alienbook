const Router = require('express').Router();
const User = require('../models/User');
const uuid = require('uuid').v1;

const Post = require("../models/Post");

const {createPost,formatPost} =require("./helper/createPost");
const getPost=require("./helper/getPost");


Router.post("/share",(req,res)=>{
    const userid=req.user.id;
    console.log(req.body);
    console.log("currid",userid);
    const {postid,username,owner,content="\t"}=req.body;
    createPost({
        author: userid,
        refId:postid,
        ref_author: owner,
        content: content,
        type:"SHARE",
    }).then(post=>{
        getPost(post.id,userid).then(post=>{
            res.status(200).json({
                post:post
            }); 
        }).catch(err=>{
            throw new Error(err);
        })
    }).catch(err=>{
        res.status(400).json({
            error:err.message
        })
    })
});


module.exports=Router;
