console.log("SANITY CHECK!");


$(document).ready(function(){

$coffeeSpotsList = $('#target');  


















  //get all coffeespots
  $.get('/api/coffeespots', function coffeeSpotsIndex(req, res) {
    CoffeeSpot.find(function handleDBCoffeeSpotsListed(err, allCoffeeSpots){
      res.json({ coffeeSpots: allCoffeeSpots});
    });
  });
});
