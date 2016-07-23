var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Location = require('./location.js');

var CoffeespotSchema = new Schema({
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
  image:String,
  _location: [Location.schema], //reference
});

var Coffeespot = mongoose.model('Coffeespot', CoffeespotSchema);

module.exports = Coffeespot;
