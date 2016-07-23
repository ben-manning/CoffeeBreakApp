var db = require('../models');

//get all locations in db
function index(req, res) {
    db.Location.find(function(err, allLocations){
        if (err) {console.log("!! ERROR!! Could NOT find all locations!");
      }
      res.json(allLocations);
    });
}






















module.exports = {
  index: index,
};
