const mongoose = require('mongoose');

const mySchema = mongoose.Schema({
    title : {type : String,
    required : true},
    description : {type : String,
    required : true},
    name : {type : String,
    required : true},
    date : {type : Date,
    default : Date.now}
});


module.exports = mongoose.model('newSchema', mySchema);

//npm installs bellow here

//npm init = json package
//npm install express nodemon
//npm install mongoose
//npm install dotenv

//remember in scripts: {"start" : "nodemon application.js"}