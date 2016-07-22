console.log("Sanity Check");
// SERVER-SIDE JAVASCRIPT

//require express in our app
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));

//ROUTES
/* HTML Endpoints*/

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/* JSON API Endpoints*/




/* SERVER */

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
