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
    image:"/images/defaultImg.png",
    location: 'san diego'
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
    image:"/images/defaultImg.png",
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
    image:"/images/defaultImg.png",
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
              console.log("saved" + savedCoffeespot);
            });

          });


        });
      });
    });
  });


  // db.Coffeespot.remove({}, function(err, savedCoffeeSpots) {
  //     if (err) {
  //         console.log("!!!! ERROR OCCURED IN REMOVAL", err);
  //       } else {
  //         console.log("!!! Removed ALL coffeespot entries and left seed data only!!");
  //     }
  // db.Coffeespot.create(coffeeSpotsList, function(err, createdCoffeeSpots){
  //     if (err) {
  //       return console.log("!!ERROR!!, err");}
  //     console.log("SUCCESS!!! CREATED createdCoffeeSpots:" + createdCoffeeSpots);
  // });
  //     coffeeSpotsList.forEach(function(coffeespot){
  //         var searchParam = {name: coffeespot.name};
  //         db.Coffeespot.findOne(searchParam, function(err, album){
  //             if(err){return console.log("!!ERROR:" + err);}
  //         });
  //     });
  //   });
