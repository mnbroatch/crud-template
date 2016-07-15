const express = require('express');
const Stuff = require('../models/stuff');

const router = express.Router();

router.route('/')
.get((req, res) => {
  Stuff.find({}, (err, stuffs) => {
    res.status(err ? 400 : 200).send(err || stuffs);
  });
})
.post((req, res) => {
  const stuff = new Stuff(req.body);
  stuff.save((err, savedStuff) => {
    res.status(err ? 400 : 200).send(err || savedStuff);
  });
});


router.route('/:id')
.get((req, res) => {
  Stuff.find({ _id: req.params.id }, (err, stuff) => {
    res.status((err || !stuff) ? 400 : 200).send(err || stuff[0]);
  });
})
.put((req, res) => {
  Stuff.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, savedStuff) => {
    res.status(err ? 400 : 200).send(err || savedStuff);
  });
})
.delete((req, res) => {
  Stuff.findByIdAndRemove(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

module.exports = router;
