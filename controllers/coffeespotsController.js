db = require('../models');

var coffeeSpots = [];

function index(req, res) {
  db.Coffeespot.find(function (err, allCoffeeSpots){
    if (err) {console.log("INDEX ERROR CANT FIND DIS");}
      res.json(allCoffeeSpots);
  });
}

module.exports = {
  index: index
};
