console.log("SANITY CHECK!");
var templateFunction;
var $coffeeSpotsList;
var allCoffeeSpots = [];

$(document).ready(function(){
  $.get('/api/coffeespots', onSuccess);
});

function renderCoffeespot(coffeespot) {
    var coffeespotHtml = $('#coffeespot-template').html();
    var coffeespotTemplate = Handlebars.compile(coffeespotHtml);
    var html = coffeespotTemplate(coffeespot);
    $('#target').prepend(html);
}
function onSuccess(json) {
  console.log('FOUND ALL COFFEESPOTS');
  json.forEach(function(coffeespot) {
    renderCoffeespot(coffeespot);
    console.log("SUCCESS rendered the following coffeespots to the page:" + coffeespot);
  });
}
