const express = require('express');

const router = express.Router();

router.use('/stuffs', require('./stuffs'));
router.use('/things', require('./things'));

module.exports = router;

