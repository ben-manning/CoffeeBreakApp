db = require('../models');




//Get all coffeespots in db
function index(req, res) {
  db.Coffeespot.find(function (err, allCoffeeSpots){
    if (err) {console.log("INDEX ERROR CANT FIND THIS");}
      res.json(allCoffeeSpots);
  });
}

//create coffeespot in db
function create(req, res){
    // return console.log('body', req.body);
    db.Coffeespot.create(req.body, function(err, coffeespot){
        if (err) {console.log("ERROR!", err);}
        console.log(coffeespot);
        res.json(coffeespot);
      });
    }
//show coffeespot by id in db
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
foundCoffeespot.fastWifi = req.body.fastWifi;
foundCoffeespot.outlets = req.body.outlets;
foundCoffeespot.goodCoffee = req.body.goodCoffee;
foundCoffeespot.lively = req.body.lively;
foundCoffeespot.quiet = req.body.quiet;
foundCoffeespot.goodForGroups = req.body.goodForGroups;
foundCoffeespot.petFriendly = req.body.petFriendly;
foundCoffeespot.parkingLot = req.body.parkingLot;
foundCoffeespot.image = req.body.image;





      foundCoffeespot.save(function(err, savedCoffeespot){
          if (err) {console.log("FAILED TO SAVE UPDATED COFFEE SPOT ENTRY"); }
          res.json(savedCoffeespot);
      });
  });


}





module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy,
  update: update
};
