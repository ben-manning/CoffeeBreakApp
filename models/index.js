var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/coffeebreak");

module.exports.CoffeeSpot = require('./coffeespot.js');

module.exports.Location = require('./location.js');
