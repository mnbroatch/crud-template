const express = require('express');
const Thing = require('../models/thing');

const router = express.Router();

router.route('/')
.get((req, res) => {
  Thing.find({}, (err, things) => {
    res.status(err ? 400 : 200).send(err || things);
  });
})
.post((req, res) => {
  const thing = new Thing(req.body);
  thing.save((err, savedThing) => {
    res.status(err ? 400 : 200).send(err || savedThing);
  });
});


router.route('/:id')
.get((req, res) => {
  Thing.find({ _id: req.params.id }, (err, thing) => {
    res.status((err || !thing) ? 400 : 200).send(err || thing[0]);
  });
})
.put((req, res) => {
  Thing.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, savedThing) => {
    res.status(err ? 400 : 200).send(err || savedThing);
  });
})
.delete((req, res) => {
  Thing.findByIdAndRemove(req.params.id, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

module.exports = router;
