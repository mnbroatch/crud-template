"use strict;"


let express = require('express');
let Stuff = require('../models/stuff');

let router = express.Router();


router.route('/')
.get(function(req,res){
	Stuff.find({}, (err,stuffs) => {
		res.status(err? 400:200).send(err || stuffs);
	});
})
.post(function(req,res){
	let stuff = new Stuff(req.body);
	stuff.save((err,savedStuff) => {
		res.status(err? 400:200).send(err || savedStuff);
	});
});


router.route('/:id')
.get(function(req,res){
	Stuff.find({_id:req.params.id}, (err,stuff) => {
		res.status((err || !stuff)? 400:200).send(err || stuff[0]);
	});
})
.put(function(req,res){
	Stuff.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,savedStuff) => {
		res.status(err? 400:200).send(err || savedStuff);
	});
})
.delete(function(req,res){
	Stuff.findByIdAndRemove(req.params.id, err => {
		res.status(err? 400:200).send(err);
	});
});


module.exports = router;

