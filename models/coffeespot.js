var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Location = require('./location.js');

var CoffeeSpotSchema = new Schema({
  name: String,
  openNow:Boolean,
  address: String,
  freeWifi: Boolean,
  fastWifi: Boolean,
  outlets: Boolean,
  goodCoffee: Boolean,
  lively: Boolean,
  quiet: Boolean,
  goodForGroups: Boolean,
  outdoorSeating: Boolean,
  petFriendly: Boolean,
  parkingLot: Boolean,
  _location: [Location.schema], //reference
});

var CoffeeSpot = mongoose.model('CoffeeSpot', CoffeeSpotSchema);

module.exports = CoffeeSpot;
