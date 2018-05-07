var express = require('express');
var app = express();
var bodyParser = require("body-parser")
var PORT = process.env.PORT || 8080;
var YOUR_API_KEY = "AIzaSyA40MnFrb860AigP6w4wR9Efw-ClUBr1F0"
//var googleMapsClient = require('@google/maps').createClient({
//    key: YOUR_API_KEY
//  });
var locQuery = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + YOUR_API_KEY
//this is the geolocation code --> 
var googleMapsClient = require('@google/maps').createClient({
    key: YOUR_API_KEY
  });
//takes coordinates as lat, long -- IN THAT ORDER
var origin = "33.648663, -117.837966"
var destination = "33.649500, -117.839020"
var waypointsArray = "33.649907,-117.832047"
var params = {origin: origin,
destination: destination,
mode: "walking",
waypoints: waypointsArray
}
googleMapsClient.directions(params, function(err, response) {
    if (err) {
    console.log(err)
    } 
    console.log(response.json.routes[0].legs[1].steps)
});
// the above console log is displaying the second set of steps, you could use this to select down further and create html written route directions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true } ));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api_json" }))
app.use(express.static("public"));
var db = require("./models")
var sequelize = require('./config/connection.js')
require("./routes/api-routes.js") (app)
require("./routes/html-routes.js") (app)
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
//accuracy: 2685location: {lat: 33.658895099999995, lng: -117.8282121}__proto__: Object
//chick-fil-a: accuracy: 805location: {lat: 33.6490106, lng: -117.8369926}__proto__: Object