"use strict;"

const express = require('express');

let router = express.Router();

router.use('/stuffs', require('./stuffs'));
router.use('/things', require('./things'));

module.exports = router;

