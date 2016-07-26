var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var Location = require('./location.js');

var CoffeespotSchema = new Schema({
  name: String,
  freeWifi: Boolean,
  outlets: Boolean,
  goodCoffee: Boolean,
  goodForGroups: Boolean,
  parkingLot: Boolean,
  lively: Boolean,
  outdoorSeating: Boolean,
  image:String,
  link: String,
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location'
  },
});

var Coffeespot = mongoose.model('Coffeespot', CoffeespotSchema);
module.exports = Coffeespot;
