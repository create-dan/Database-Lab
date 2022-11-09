// var express=require("express");
// var bodyParser=require("body-parser");

// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://dnyaneshwar:mongodb0611@cluster0.cuepdbh.mongodb.net/?retryWrites=true&w=majority');
// var db=mongoose.connection;
// db.on('error', console.log.bind(console, "connection error"));
// db.once('open', function(callback){
// 	console.log("connection succeeded");
// })

// var app=express()

// app.use(bodyParser.json());
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

// app.post('/sign_up', function(req,res){
// 	var name = req.body.name;
// 	var email =req.body.email;
// 	var pass = req.body.password;
// 	var phone =req.body.phone;

// 	var data = {
// 		"name": name,
// 		"email":email,
// 		"password":pass,
// 		"phone":phone
// 	}
// db.collection('details').insertOne(data,function(err, collection){
// 		if (err) throw err;
// 		console.log("Record inserted Successfully");

// 	});

// 	return res.redirect('signup_success.html');
// })

// app.get('/',function(req,res){
//     console.log('thus');
// res.set({
// 	'Access-control-Allow-Origin': '*'
// 	});
// return res.redirect('index.html');
// }).listen(3000)

// console.log("server listening at port 3000");

// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
// var mongodb = require('mongodb');

// var dbConn = mongodb.MongoClient.connect('mongodb+srv://dnyaneshwar:mongodb0611@cluster0.cuepdbh.mongodb.net/?retryWrites=true&w=majority');

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.resolve(__dirname, 'public')));

// app.post('/post-feedback', function (req, res) {
//     dbConn.then(function(db) {
//         delete req.body._id; // for safety reasons
//         db.collection('feedbacks').insertOne(req.body);
//     });
//     res.send('Data received:\n' + JSON.stringify(req.body));
// });

// app.get('/view-feedbacks',  function(req, res) {
//     dbConn.then(function(db) {
//         db.collection('feedbacks').find({}).toArray().then(function(feedbacks) {
//             res.status(200).json(feedbacks);
//         });
//     });
// });

// app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', ()=>{
//     console.log('success');
// } );

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/user");
var connectionUrl =
  "mongodb+srv://dnyaneshwar:mongodb0611@cluster0.cuepdbh.mongodb.net/just?retryWrites=true&w=majority";
mongoose.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("Connected");
  }
);

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/home", (req, res) => {
  res.render("index");
});

app.post("/api/user", (req, res) => {
  const SaveUser = new UserModel(req.body);
  SaveUser.save((error, savedUser) => {
    if (error) throw error;
    res.json(savedUser);
  });
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
