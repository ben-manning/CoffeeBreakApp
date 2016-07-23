db = require('../models');

function index(req, res) {
  db.Coffeespot.find(function (err, allCoffeeSpots){
    if (err) {console.log("INDEX ERROR CANT FIND DIS");}
      res.json(allCoffeeSpots);
  });
}

function create(req, res){
    return console.log('body', req.body);
}

// db.Coffeespot.create(req.body, function(err, coffeespot){
//     if (err) {console.log("ERROR!", err);}
//     console.log(coffeespot);
//     res.json(coffeespot);
//   });

function destroy(req, res){
    db.Coffeespots.findOneandRemove({coffeespot_id:req.params.coffeespotId}, function(err, foundCoffeespot){
        res.json(foundCoffeespot);
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
  create: create,
  destroy: destroy
};
