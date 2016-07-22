console.log("Sanity Check");
// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(express.static(__dirname + '/public'));

app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(bodyParser.urlencoded({ extended: true }));
//ROUTES
/* HTML Endpoints*/
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var controllers = require('./controllers');
/* JSON API Endpoints*/

//PATH TO API JSON "LIBARY"
app.get('/api',controllers.api.index);

/* SERVER */

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
