var db = require("./models");
var coffeeSpotsList = [
  {
    name: "Filter Coffee House",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true ,
    outdoorSeating: true ,
    parkingLot: false,
    image:"http://www.sandiegotown.com/images/sandiegotown/event/feature/article/LRG_Filter.jpg",
    location: 'San Diego',
    link:"https://www.yelp.com/biz/filter-coffee-house-san-diego"
  },

  {
    name: "Ritual Coffee Roasters",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    image:"http://farm4.static.flickr.com/3435/3818488866_77c164ee22.jpg",
    location: 'San Francisco',
    link:"https://www.yelp.com/biz/ritual-coffee-roasters-san-francisco"
  },

  {
    name: "Haus Coffee",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    image:"http://www.missionmission.org/wp-content/uploads/2009/05/3526747032_d16d22a560.jpg",
    location: 'San Francisco',
    link:"https://www.yelp.com/biz/haus-coffee-san-francisco"
  },
];

  var locationsList = [
    {
      city: "San Diego",
    },
    {
      city: "San Francisco",
    },
    {
      city: "Los Angeles",
    },
    {
      city: "San Jose"
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
          freeWifi: coffeespotData.freeWifi,
          outlets: coffeespotData.outlets,
          goodCoffee: coffeespotData.goodCoffee,
          goodForGroups: coffeespotData.goodForGroups,
          parkingLot: coffeespotData.parkingLot,
          image: coffeespotData.image

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
