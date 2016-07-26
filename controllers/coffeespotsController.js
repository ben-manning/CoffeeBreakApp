db = require('../models');

function index(req, res) {
  db.Coffeespot.find()
  .populate('location')
  .exec(function(err, allCoffeeSpots) {
    if (err){console.log("INDEX ERROR CANT FIND THIS"); }
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

function destroy(req, res){
  db.Coffeespot.findOneAndRemove({_id: req.params.coffeespot_id}, function(err, foundCoffeespot){
    if (err) {return console.log("ERROR DELETING COFFEEESPOT");}
    console.log("!! SUCCESSFULLY DELETED:" + foundCoffeespot);
    res.json(foundCoffeespot);
  });
}

function update(req, res) {
  console.log('UPDATING with data', req.body);
  db.Coffeespot.findById(req.params.coffeespot_id, function(err, foundCoffeespot){
    if(err) {console.log("!!UPDATE ERROR!!", err); }
    foundCoffeespot.name = req.body.name;
    foundCoffeespot.freeWifi = req.body.freeWifi;
    foundCoffeespot.outlets = req.body.outlets;
    foundCoffeespot.goodCoffee = req.body.goodCoffee;
    foundCoffeespot.goodForGroups = req.body.goodForGroups;
    foundCoffeespot.parkingLot = req.body.parkingLot;
    foundCoffeespot.lively = req.body.lively;
    foundCoffeespot.outdoorSeating = req.body.outdoorSeating;
    foundCoffeespot.image = req.body.image;
    foundCoffeespot.yelp = req.body.yelp;

    foundCoffeespot.save(function(err, savedCoffeespot){
      if (err) {console.log("FAILED TO SAVE UPDATED COFFEE SPOT ENTRY"); }
      res.json(savedCoffeespot);
    });
  });
}

function coffeespotsByLocId(req, res){
    var location_id = req.params.location_id;
    db.Location.findById(location_id, function(err, city){
        if (err) {
            console.log(err);
        }
        console.log(location_id);
        db.Coffeespot.find({location: location_id}, function(err, cityCoffeespots){
            if (err) {
                console.log(cityCoffeespots + "found with" + location_id);
            }
            res.json(cityCoffeespots);
        });
    });
}

function create(req, res) {
  var location_id = req.params.location_id;
  var newCoffeespot = new db.Coffeespot ({
    name : req.body.name,
    image : req.body.image,
    freeWifi : req.body.freeWifi,
    outlets : req.body.outlets,
    goodCoffee : req.body.goodCoffee,
    goodForGroups : req.body.goodForGroups,
    parkingLot : req.body.parkingLot,
    lively: req.body.lively,
    outdoorSeating: req.body.outdoorSeating,
    yelp : req.body.yelp
  });
  db.Location.findById(location_id, function(err, location){
      if (err) {
          return console.log("!!ERROR could not find location", err);
      }
      console.log(location_id + "FOUND!");
      newCoffeespot.location = location;
      newCoffeespot.save(function(err, coffeespot){
          if (err) {
              return console.log("ERROR. Save Error:" + err);
          }
          console.log("SUCCESS! Saved new coffeespot:" + coffeespot.location);
          res.json(coffeespot);
      });
  });
}
module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update,
  coffeespotsByLocId: coffeespotsByLocId
};
