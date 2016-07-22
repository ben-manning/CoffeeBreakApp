var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CoffeeSpotSchema = new Schema({
  name: String,
  address: String,
  _location: [Location.schema],
  freeWifi: Boolean,
  fastWifi: Boolean,
  outlets: Boolean,
  openNow: Boolean,
  goodCoffee: Boolean,
  lively: Boolean,
  quiet: Boolean,
  goodForGroups: Boolean,
  outdoorSeating: Boolean,
  petFriendly: Boolean,
  parkingLot: Boolean,
  //recommendations
});

var CoffeeSpot = mongoose.model('CoffeeSpot', CoffeeSpotSchema);

module.exports = CoffeeSpot;
