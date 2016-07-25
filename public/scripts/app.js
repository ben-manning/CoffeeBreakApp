console.log("SANITY CHECK!");
var template;
var $coffeespotsList;
var allCoffeeSpots = [];

$(document).ready(function(){

$coffeespotsList = $('#target');

$.get('/api/coffeespots', onSuccess);
//HANDLEBARS AND RENDER ON PAGE
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

  $('#freeWifiBox').change(function(){

    if($(this).attr('checked')){
          $(this).val('false');
     }else{
          $(this).val('true');
     }
    alert($(this).val());

});







//DELETE
$coffeespotsList.on('click', '.deleteBtn', function(){
    console.log("CLICKED Delete button!!");
    $.ajax({
        method: 'DELETE',
        url: '/api/coffeespots/' + $(this).attr('data-coffeespot-id'),
        success: deleteCoffeespotSuccess,
        error: deleteCoffeespotError
    });
});
  function deleteCoffeespotSuccess(json){
      var coffeespot = json;
      console.log(json);
      var coffeespotId = coffeespot._id;
      console.log("DELETE coffeespot:" + coffeespotId);
      //find coffeespot entry with correct ID and remove from coffeespots array
      for(var i = 0; i < allCoffeeSpots.length; i++){
        if(allCoffeespots[i]._id === coffeespotId) {
            allCoffeespots.splice(i, 1);
            break;
        }
      }
      render();
  }
  function deleteCoffeespotError() {
      console.log("DELETE COFFEESPOT ERROR!");
  }




});
