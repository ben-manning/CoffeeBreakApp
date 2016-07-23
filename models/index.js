var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/coffeebreak");

module.exports.Coffeespot = require('./coffeespot.js');

module.exports.Location = require('./location.js');
