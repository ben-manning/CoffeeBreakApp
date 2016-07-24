var db = require("./models");
var coffeeSpotsList = [
  {
    name: "Filter Coffee House",
    freeWifi: true,
    fastWifi: true,
    outlets: true,
    goodCoffee: true,
    lively: true,
    quiet: false,
    goodForGroups: true ,
    outdoorSeating: true ,
    petFriendly: true,
    parkingLot: false,
    image:"http://www.sandiegotown.com/images/sandiegotown/event/feature/article/LRG_Filter.jpg",
    location: 'san diego',
    link:"https://www.yelp.com/biz/filter-coffee-house-san-diego"
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
    image:"http://farm4.static.flickr.com/3435/3818488866_77c164ee22.jpg",
    location: 'san francisco'
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
    image:"http://www.missionmission.org/wp-content/uploads/2009/05/3526747032_d16d22a560.jpg",
    location: 'san francisco'
  }];

  var locationsList = [
    {
      city: "san diego",
    },
    {
      city: "san francisco",
    },
    {
      city: "los angeles",
    },
    {
      city: "san jose"
    }
  ];

  db.Location.remove({}, function(err, locations){
    console.log('REMOVED all locations');
    db.Location.create(locationsList, function(err, locations){
      if (err) {console.log("!!ERROR!!" + err);
      return;
    }
    console.log("RECREATED ALL LOCATIONS");
    console.log("CREATED", locations.length, "locations");

    db.Coffeespot.remove({}, function(err, coffeespots){
      console.log("REMOVED all coffeespots");
      coffeeSpotsList.forEach(function (coffeespotData){
        console.log(coffeespotData);
        var coffeespot = new db.Coffeespot({

          name: coffeespotData.name,
          openNow: coffeespotData.openNow,
          freeWifi: coffeespotData.freeWifi,
          outlets: coffeespotData.outlets,
          goodCoffee: coffeespotData.goodCoffee,
          lively: coffeespotData.lively,
          quiet: coffeespotData.quiet,
          goodForGroups: coffeespotData.goodForGroups,
          outdoorSeating: coffeespotData.outdoorSeating,
          petFriendly: coffeespotData.petFriendly,
          parkingLot: coffeespotData.parkingLot,
          image: coffeespotData.image,
        });
        console.log(coffeespotData);
        db.Location.findOne({city: coffeespotData.location},
          function(err, foundLocation) {
            console.log("FOUND LOCATION" + foundLocation + " for ");
            if (err) {console.log ("ERROR!" + err);}

            coffeespot.location = foundLocation;
            coffeespot.save(function(err, savedCoffeespot){
              if (err) {
                return console.log("ERRRROR!", err);
              }
              console.log("SAVED COFFEE SPOT" + savedCoffeespot);
            });

          });


        });
      });
    });
  });
