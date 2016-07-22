// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.
var db = require("./models");

var coffeeSpotsList = [
      {
      name: "Filter Coffee House",
      freeWifi: true,
      fastWifi: true,
      openNow: ,
      outlets: true,
      goodCoffee: true,
      lively: true,
      quiet: false,
      goodForGroups: true ,
      outdoorSeating: true ,
      petFriendly: true,
      parkingLot: false,
      _location: 'Location'
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
      _location: 'Location'
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
      _location: 'Location'
    }];
