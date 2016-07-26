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
    console.log('FOUND COFFEESPOTS INDEX');
    json.forEach(function(coffeespot) {
      renderCoffeespot(coffeespot);
      console.log("SUCCESS rendered the following coffeespots to the page:" + coffeespot);
    });
  }

  //ADD NEW COFFEE SPOT
  $("form").on('submit', function(e){
      e.preventDefault();
      var formData = $(this).serialize();
      console.log("formData:", formData);
      $.ajax({
          method: 'POST',
          url: '/api/coffeespots',
          data: formData,
          success: addCoffeespotSuccess,
          error: addCoffeespotError
      });
      $.ajax({
          method: 'POST',
          url: '/api/locations',
          data: formData,
          success: addLocationSuccess,
          error: addLocationError
      });
        $(this).trigger("reset"); //clears form
  });

  function addCoffeespotSuccess(json) {
      console.log(json);
      renderCoffeespot(json);
  }

  function addCoffeespotError(json) {
      return console.log("ERROR! Could not add new coffeespot!");
  }

  function addLocationSuccess(json){
      console.log(json);
  }

  function addLocationError(json) {
      return console.log("ERROR! Could not add new location!");
  }

  //DELETE
  $coffeespotsList.on('click', '.deleteBtn', function(e){
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/api/coffeespots/' + $(this).attr('data-id'),
      success: deleteCoffeespotSuccess,
      error: deleteCoffeespotError
    });
  });
  function deleteCoffeespotSuccess(json){
    var coffeespot = json;
    var coffeespotId = coffeespot._id;
    console.log(coffeespotId);
    $('div[data-id=' + coffeespotId + ']').remove();
  }
  function deleteCoffeespotError() {
    console.log("DELETE COFFEESPOT ERROR!");
  }


    //ASSIGNING CHECKBOXES WITH TRUE/FALSE VALS: (Brute code-- need to refactor)
    var $attributes = ["$(#freeWifiBox)", "$(#outletsBox)", '$(#goodCoffee)', '$(#goodForGroupsBox)', '$(#parkingLotBox)'];

    $attributes.forEach(function(){
        if($(this).attr('checked')){
          $(this).val('true');
        }else{
          $(this).val('false');
        }
        console.log($(this).val());
    });


    // $('#freeWifiBox').change(function(){
    //   if($(this).attr('checked')){
    //     $(this).val('false');
    //   }else{
    //     $(this).val('true');
    //   }
    //   console.log($(this).val());
    // });
    // $('#outletsBox').change(function(){
    //   if($(this).attr('checked')){
    //     $(this).val('false');
    //   }else{
    //     $(this).val('true');
    //   }
    //   console.log($(this).val());
    // });
    // $('#goodCoffeeBox').change(function(){
    //   if($(this).attr('checked')){
    //     $(this).val('false');
    //   }else{
    //     $(this).val('true');
    //   }
    //   console.log($(this).val());
    // });
    // $('#goodForGroupsBox').change(function(){
    //   if($(this).attr('checked')){
    //     $(this).val('false');
    //   }else{
    //     $(this).val('true');
    //   }
    //   console.log($(this).val());
    // });
    // $('#parkingLotBox').change(function(){
    //   if($(this).attr('checked')){
    //     $(this).val('false');
    //   }else{
    //     $(this).val('true');
    //   }
    //   console.log($(this).val());
    // });



});
