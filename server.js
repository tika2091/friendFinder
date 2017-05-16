var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// var PORT =  process.env.PORT || 8080;
var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

var htmlRoutes = require('./app/routing/htmlRoutes.js');
var apiRoutes = require('./app/routing/apiRoutes.js');




// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', htmlRoutes);
app.use('/api/friends', apiRoutes);
app.listen(PORT,function(){
  console.log("App is listening PORT: " + PORT);
});
