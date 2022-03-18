const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const newSchema = require('../models/schema')



router.get('/posts', (req,res)=>{
    res.send('This is a post message!')
})

router.get('/:Postid', async (req,res)=>{
    try {
        const posts = await newSchema.find();
        res.status(200).json(posts);
    } catch (err){
        res.status(404).json({message :err})
    }
})

router.post('/user', (req,res)=>{
    const post = new newSchema ({
        title : req.body.title,
        description : req.body.description,
        name : req.body.name
    });
    post.save()
    .then(data =>{
        res.status(200).json(data)
    })
    .catch(err=>{
        res.status(404).json({message : err})
    })
});


router.patch('/:postId', async (req,res)=>{
    try {
        const updatedPost = await newSchema.updateOne({_id : req.params.postId}, {$set : {title : req.body.title}});
        res.status(200).json(updatedPost);
    }
    catch (err) {
        res.status(404).json({message : err})
    }
})


router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost = await newSchema.remove({_id : req.params.postId});
        res.status(200).json({message : err});
    }
    catch (err) {
        res.status(404).json({message : err});
    }
})

module.exports = router