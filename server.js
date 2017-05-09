var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
// var PORT =  process.env.PORT || 8080;
var PORT = process.env.PORT || 8080;



var htmlRouters = require('./app/routing.htmlRouters.js')
var apiRoutes = require('./app/routing.apiRouters.js')

app.get('/', function (req, res) {
  res.send('Find Friends');
});



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', htmlRouters);
app.use('/',/api/friends/apiRouters());
app.use(bodyParser.json({type:"data/"}));



app.listen(PORT,function(){
  console.log("App is listening PORT: " + PORT);
});
