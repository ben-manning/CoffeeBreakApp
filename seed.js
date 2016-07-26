var db = require("./models");
var coffeeSpotsList = [
  {
    name: "Filter Coffee House",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true ,
    parkingLot: false,
    lively: true,
    outdoorSeating: true,
    image:"http://www.sandiegotown.com/images/sandiegotown/event/feature/article/LRG_Filter.jpg",
    location: 'san diego',
    yelp:"https://www.yelp.com/biz/filter-coffee-house-san-diego"
  },

  {
    name: "Ritual Coffee Roasters",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    lively: true,
    outdoorSeating: true,
    image:"http://farm4.static.flickr.com/3435/3818488866_77c164ee22.jpg",
    location: 'san francisco',
    yelp:"https://www.yelp.com/biz/ritual-coffee-roasters-san-francisco"
  },

  {
    name: "Haus Coffee",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    lively: true,
    outdoorSeating: true,
    image:"http://www.missionmission.org/wp-content/uploads/2009/05/3526747032_d16d22a560.jpg",
    location: 'san francisco',
    yelp:"https://www.yelp.com/biz/haus-coffee-san-francisco"
  },
  {
    name: "Artis",
    freeWifi: true,
    outlets: false,
    goodCoffee: true,
    goodForGroups: false,
    parkingLot: true,
    lively: true,
    outdoorSeating: false,
    image:"http://i0.wp.com/www.dailycal.org/assets/uploads/2014/09/20140914_103446-900x675.jpg",
    location: 'berkeley',
    yelp:"https://www.yelp.com/biz/art%C3%ADs-coffee-berkeley-2"
  },
  {
    name: "Capital One Cafe",
    freeWifi: true,
    outlets: true,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    lively: true,
    outdoorSeating: false,
    image:"https://workfrom.co/siteadmin/wp-content/uploads/2014/10/8691149978_14b06b2993_k.jpg",
    location: 'san francisco',
    yelp:"https://www.yelp.com/biz/capital-one-caf%C3%A9-san-francisco"
  },
  {
    name: "Cafe International",
    freeWifi: true,
    outlets: true,
    goodCoffee: false,
    goodForGroups: true,
    parkingLot: false,
    lively: false,
    outdoorSeating: true,
    image:"https://workfrom.co/siteadmin/wp-content/uploads/2014/10/8691149978_14b06b2993_k.jpg",
    location: 'san francisco',
    yelp:"https://s3-media1.fl.yelpcdn.com/bphoto/xcobt48F8WLWv6-Ba62hDA/o.jpg"
  },
  {
    name: "Four Barrel",
    freeWifi: false,
    outlets: false,
    goodCoffee: true,
    goodForGroups: true,
    parkingLot: false,
    lively: true,
    outdoorSeating: false,
    image:"https://s3-media2.fl.yelpcdn.com/bphoto/xs4GEA2BOpPYG7bh7o6GrA/o.jpg",
    location: 'san francisco',
    yelp:"https://www.yelp.com/biz/four-barrel-coffee-san-francisco"
  },
  {
    name: "Philz Coffee",
    freeWifi: false,
    outlets: false,
    goodCoffee: true,
    goodForGroups: false,
    parkingLot: false,
    lively: true,
    outdoorSeating: false,
    image:"https://s3-media2.fl.yelpcdn.com/bphoto/xs4GEA2BOpPYG7bh7o6GrA/o.jpg",
    location: 'san francisco',
    yelp:"https://www.yelp.com/biz/four-barrel-coffee-san-francisco"
  },
];

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
    },
    {
      city: "oakland"
    },
    {
      city: "irvine"
    },
    {
      city: "newport"
    },
    {
      city: "san mateo"
    },
    {
      city: "san bruno"
    },
    {
      city: "richmond"
    },
    {
      city: "cupertino"
    },
    {
      city: "saratoga"
    },
    {
      city: "berkeley"
    },
    {
      city: "sacramento"
    },
    {
      city: "la jolla"
    },
    {
      city: "san luis obispo"
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
