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
      image:"/images/defaultImg.png"
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
      image:"/images/defaultImg.png"
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
      image:"/images/defaultImg.png"
      // _location: 'Location'
    }];

//puts coffeespot in db-- the remove and create keeps seed data in db. all other entries would be refreshed followed node seed.js
db.Coffeespot.remove({}, function(err, savedCoffeeSpots) {
    if (err) {
        console.log("!!!! ERROR OCCURED IN REMOVAL", err);
      } else {
        console.log("!!! Removed ALL coffeespot entries and left seed data only!!");
    }
db.Coffeespot.create(coffeeSpotsList, function(err, createdCoffeeSpots){
    if (err) {
      return console.log("!!ERROR!!, err");}
    console.log("SUCCESS!!! CREATED createdCoffeeSpots:" + createdCoffeeSpots);
});
    coffeeSpotsList.forEach(function(coffeespot){
        var searchParam = {name: coffeespot.name};
        db.Coffeespot.findOne(searchParam, function(err, album){
            if(err){return console.log("!!ERROR:" + err);}
        });
    });







    });
