console.log("SANITY CHECK!");

$(document).ready(function(){
  $.get('/api/coffeespots', onSuccess);
});

$('.dropdown-toggle').dropdown();
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

function handleDeleteCoffeespotClick(event) {
    var coffeespotId = $(this).parents('.coffeespot').data('coffeespot-id');
    console.log("Someone wants to delete coffee spot id =" + coffeespotId);
    $.ajax({
        url: '/api/coffeespots/' + coffeespotId,
        method: "DELETE",
        success: handleDeleteCoffeespotSuccess
    });
}
//callback DELETE function /api/coffeespots/:coffeespots_Id
function handleDeleteCoffeespotSuccess(data) {
    var deletedCoffeespotId = data._id;
    console.log("REMOVING THE FOLLOWING COFFEESPOTS FROM PAGE:" + deletedCoffeespotId);
    $('div[data-coffeespot-id=' + deletedCoffeespotId + ']').remove();
}
