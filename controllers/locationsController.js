var db = require('../models');

//get all locations in db
function index(req, res) {
    db.Location.find(function(err, allLocations){
        if (err) {console.log("!! ERROR!! Could NOT find all locations!");
      }
      res.json(allLocations);
    });
}

//find location by id
function show (req, res) {
  var locationId = req.params.location_id;
  db.Location.findById(locationId, function(err, foundLocation){
      if (err) {console.log("!! ERROR COULD NOT FIND LOCATION");}
      console.log("SUCCESS! Found location:" + foundLocation);
      res.json(foundLocation);
  });
}

function create (req, res) {
    db.Locaton.create(req.body, function(err, location){
        if (err) {console.log("ERROR!" + err); }
        console.log(location);
        res.json(location);
    });
}
























module.exports = {
  index: index,
  show: show,
  create: create
};
