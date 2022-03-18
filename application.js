const express = require('express');//imports express

const app = express();//executes express

const mongoose = require('mongoose');//import mongoose

require('dotenv/config');

const bodyParser = require('body-parser'); 

app.use(bodyParser.json());

// const newSchema = require('./models/schema')


//Import Routs
const postsRoute = require('./mernAPIsPractice/routs');


//Middle Ware
app.use('/posts', postsRoute);
app.use('/user', postsRoute);


//Routs
app.get('/', (req,res)=>{
    res.send('We are home')
});

app.get('/posts', (req,res)=>{
    res.send('This is our post')
})


// app.post('/', (req,res)=>{
//     const post = new newSchema ({
//         title : req.body.title,
//         description : req.body.description,
//         name : req.body.name
//     });
//     post.save()
//     .then(data =>{
//         res.status(200).json(data)
//     })
//     .catch(err=>{
//         res.json({message : err})
//     })
// });



//Port Listener
app.listen(3000, ()=>{
    console.log('Server is up and running')
});






//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, ()=>{
    console.log('connected to DB');
})
// mongosh "" --apiVersion 1 --username Norbert