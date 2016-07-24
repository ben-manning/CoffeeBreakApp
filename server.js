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

app.get('/api/coffeespots', controllers.coffeespots.index);

app.get('/api/coffeespots/:coffeespot_id', controllers.coffeespots.show);

app.get('/api/locations', controllers.locations.index);

app.get('/api/locations/:location_id', controllers.locations.show);

app.post('/api/locations', controllers.locations.create);

app.post('/api/coffeespots', controllers.coffeespots.create);

app.put('/api/coffeespots/:coffeespot_id', controllers.coffeespots.update);

app.put('/api/locations/:location_id', controllers.locations.update);

app.delete('/api/coffeespots/:coffeespot_id', controllers.coffeespots.destroy);

app.delete('/api/locations/:location_id', controllers.locations.destroy);


/* SERVER */
app.listen(process.env.PORT || 3000, function () {
  console.log('EXPRESS SERVER IS RUNNING ON: http://localhost:3000/');
});
