var db = require('../models');
var mongoose = require("mongoose");
var Coffeespot =  require('./coffeespot.js');

var LocationSchema = new Schema ({
    city: String,
    state: String,
    zipcode: String,
});

var Location = mongoose.model('Location', LocationSchema);

module.exports = Location;
