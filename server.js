console.log("SANITY CHECK- I'M WORKING");
// SERVER-SIDE JAVASCRIPT
//require express in our app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/vendor', express.static(__dirname + '/bower_components'));

app.use(bodyParser.urlencoded({ extended: true }));

var controllers = require('./controllers');

//ROUTES
//HTML Endpoints
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

//JSON API Endpoints
app.get('/api', controllers.api.index);
//get all coffeespots
app.get('/api/coffeespots', controllers.coffeespots.index);
//get all coffeespots by id
app.get('/api/coffeespots/:coffeespot_id', controllers.coffeespots.show);
//get all locations
app.get('/api/locations', controllers.locations.index);
//get all locations by id
app.get('/api/locations/:location_id', controllers.locations.show);
//create new coffeespot post by id
app.post('/api/coffeespots', controllers.coffeespots.create);
//edit coffeespot post by id
app.put('/api/coffeespots/:coffeespot_id', controllers.coffeespots.update);
//edit location by id
app.put('/api/locations/:location_id', controllers.locations.update);
//delete coffeespots by id
app.delete('/api/coffeespots/:coffeespot_id', controllers.coffeespots.destroy);
//delete locations by id
app.delete('/api/locations/:location_id', controllers.locations.destroy);

//get all coffeespots within location id
app.get('/api/locations/:location_id/coffeespots', controllers.coffeespots.coffeespotsByLocId);


/* SERVER */
app.listen(process.env.PORT || 3000, function () {
  console.log('EXPRESS SERVER IS RUNNING ON: http://localhost:3000/');
});
