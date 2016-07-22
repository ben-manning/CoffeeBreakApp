db = require('../models');

var coffeeSpots = [];

function index(req, res) {
  db.CoffeeSpot.find(function (err, allCoffeeSpots){
      res.json(allCoffeeSpots);
  });
}

module.exports = {
  index: index
};
