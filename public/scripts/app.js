$(document).ready(function(){
console.log("SANITY CHECK!");
});

//get all coffeespots
$.get('/api/coffeespots', function coffeeSpotsIndex(req, res) {
    CoffeeSpot.find(function handleDBCoffeeSpotsListed(err, allCoffeeSpots){
        res.json({ coffeeSpots: allCoffeeSpots});
    });
});
