var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coffeeBreak");

module.exports.CoffeeSpot = require('.coffeespot.js');
module.exports.Location = require('.location.js');
