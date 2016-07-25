console.log("SANITY CHECK!");
var template;
var $coffeespotsList;
var allCoffeeSpots = [];

$(document).ready(function(){

$coffeespotsList = $('#target');

$.get('/api/coffeespots', onSuccess);
//handlebars
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

$coffeespotsList.on('click', '.deleteBtn', function(){
    console.log("CLICKED Delete button!!");
});


//when delete coffeespot button is clicked:
function handleDeleteCoffeespot(e){
    console.log("Button clicked!");
}

  function deleteCoffeespotSuccess(json){
      var coffeespot = json;
      var coffeespotId = coffeespot._id;
      //find coffeespot entry with correct ID and remove from coffeespots array
      for(var index = 0; index < allCoffeeSpots.length; index++){
        if(allCoffeespots[index]._id === coffeespotId) {
            allCoffeespots.splice(index, 1);
            break;
        }
      }
      render(json);
  }


$('.dropdown-toggle').dropdown();
});
