const mongoose = require('mongoose');

const stuffSchema = new mongoose.Schema({
  name: String,
});

const Stuff = mongoose.model('Stuff', stuffSchema);

module.exports = Stuff;
