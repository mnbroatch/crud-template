let mongoose = require('mongoose');


let stuffSchema = new mongoose.Schema({
	name: String
});


let Stuff = mongoose.model('Stuff', stuffSchema);

module.exports = Stuff;

