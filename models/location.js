var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LocationSchema =  new Schema({
    city: String,
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
