db = require('../models');

var coffeeSpots = [];

function index(req, res) {
  db.Coffeespot.find(function (err, allCoffeeSpots){
    if (err) {console.log("INDEX ERROR CANT FIND DIS");}
      res.json(allCoffeeSpots);
  });
}
function show(req, res){
    var coffeespotId = req.params.coffeespot_id;
    db.Coffeespot.findById(coffeespotId, function(err, foundCoffeespot){
        if (err) {console.log("!! ERROR !! COULD NOT FIND COFFEE SPOT");}
        console.log("FOUND coffee spot:" + foundCoffeespot);
        res.json(foundCoffeespot);
    });
}




module.exports = {
  index: index,
  show: show,
};
