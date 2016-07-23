console.log("SANITY CHECK!");
$(document).ready(function(){
var template;
var $coffeeSpotsList = $('#target');

//compile handlebars template:
var source = $("#coffee-template").html();
  template = Handlebars.compile(source);

//function to render all posts to views
function render(coffeespot){
    //empty existing posts from views
    $coffeeSpotsList.empty();
    //pass 'all coffeesports' into the template fxn
    var coffeeSpotHtml = template(coffeespot);
    //append html to the view
    $coffeeSpotsList.prepend(coffeeSpotHtml);
}
function handleSuccess(json) {
    allCoffeeSpots = json;
    render();
}
function handleError(e) {
console.log("DIDN'T WORK!");
$('#target').text("FAILED TO LOAD COFFEESPOTS");
}

  //get all coffeespots
  $.get('/api/coffeespots', onSuccess);
  function onSuccess(json){
      console.log("FOUND ALL COFFEESHOPS");
      json.forEach(function(coffeespot){
          render(coffeespot);
      });
  }



function handleDeleteCoffeespot(e) {
    var coffeespotId = $(this).parents('.spotEntry').data('coffeespot-id');
    var deletedContent = '/api/coffeespots/' + coffeespotId;
    console.log("request to DELETE COFFEE SPOT ID=" + coffeespotId);
    //DELETE ajax call
    $.ajax({
          url: deletedContent,
          method: 'DELETE',
          success: handleDeleteCoffeespot
        });

}



  function onDeleteSuccess(data){
      var deletedCoffeespotsId = data.coffeespot_id;
      console.log("!! SUCCESS--REMOVED COFFEE SPOT:" + deletedCoffeespotsId);
      $(deletedCoffeespotsId).remove();
  }
});
