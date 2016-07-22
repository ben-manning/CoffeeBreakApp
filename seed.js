// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require("./models");

var coffeeSpotsList = [
      {
      name: "Filter Coffee House",
      freeWifi: true,
      fastWifi: true,
      // openNow: ,
      outlets: true,
      goodCoffee: true,
      lively: true,
      quiet: false,
      goodForGroups: true ,
      outdoorSeating: true ,
      petFriendly: true,
      parkingLot: false,
      // _location: 'Location'
    },

    {
      name: "Ritual Coffee Roasters",
      freeWifi: true,
      fastWifi: false,
      outlets: true,
      goodCoffee: true,
      lively: true,
      quiet: false,
      goodForGroups: true,
      outdoorSeating: false,
      petFriendly: false,
      parkingLot: false,
      // _location: 'Location'
    },

    {
      name: "Haus Coffee",
      freeWifi: true,
      fastWifi: false,
      outlets: true,
      goodCoffee: true,
      lively: false,
      quiet: true,
      goodForGroups: true,
      outdoorSeating: false,
      petFriendly: false,
      parkingLot: false,
      // _location: 'Location'
    }];

    function savedCoffeeSpot(err, success){
        if (err) {return console.log("!!ERROR!! Could not save coffee spots", err);}
        console.log("SUCCESS!", success);
    }

  db.CoffeeSpot.create(coffeeSpotsList, function(err, createdCoffeeSpots){
    if (err) {return console.log("!!ERROR!!, err");}
    console.log("SUCCESS!!! CREATED createdCoffeeSpots:" + createdCoffeeSpots);
    });
