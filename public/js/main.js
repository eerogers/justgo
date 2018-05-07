$(document).ready (function(){
//should probably put api key in the .env -->
var YOUR_API_KEY = "AIzaSyA40MnFrb860AigP6w4wR9Efw-ClUBr1F0"
var locQuery = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + YOUR_API_KEY
var waypnts = []
var yourLocationLat = 0
var yourLocationLong = 0
$.ajax({
    url : locQuery,
    method: "POST"
}).then(function(response) {
  yourLocationLat = parseFloat(response.location.lat) 
  yourLocationLong = parseFloat(response.location.lng)
//  initMap()
 // console.log(yourLocationLat, yourLocationLong)
});

var directionsArray = []
$.get("/api/routes/public", function(data) {
    //   console.log(data)
       //data returns all public routes info to populate the page
       for(i=0; i<data.length; i++){
           $("#info-box"+i).append("<a href='/course'data='"+data[i].id+"'><div id='"+data[i].id+"'>"+ data[i].name_of_route+"</div></a>")
        //    console.log(waypnts)
        //    var locationsArray = {startLat: parseFloat(data[i].start_lat), startLong: parseFloat(data[i].start_long), 
        //                            endLat: parseFloat(data[i].end_lat), endLong: parseFloat(data[i].end_long)}
        //    directionsArray.push(locationsArray)
        //    console.log(directionsArray)
    }
        //this plots something --> not sure what, but also erased the entire path so...
    //    var marker = new google.maps.Marker({
    //        position: new google.maps.LatLng(yourLocationLat,yourLocationLong),
    //          map: new google.maps.Map(document.getElementById('map'), mapOptions),
    //        title: "You are here"
    //    }); 
       // console.log(typeof(yourLocationLat))
 //   calcRoute(data[i].start_lat, data[i].start_long, data[i].end_lat, data[i].end_long)
    //    youAreHere(marker)
})
})
$(".box").on("click", function(){
    console.log($(this).attr("data"))
    localStorage.setItem("routeId", $(this).attr("data"))
})
//probably all to be deleted below but keeping temporarily for reference

//.then(
//function initMap(){
//    console.log("initing?")
//    directionsService = new google.maps.DirectionsService();
//    directionsDisplay = new google.maps.DirectionsRenderer();
//    var irvine = new google.maps.LatLng(33.722909, -117.772497);
//    var mapOptions = {
//        zoom:10,
//        center: irvine
//    }
//var map0 = new google.maps.Map(document.getElementById('map0'), mapOptions)
//var map1 = new google.maps.Map(document.getElementById('map1'), mapOptions)
//var map2 = new google.maps.Map(document.getElementById('map2'), mapOptions)
//var map3 = new google.maps.Map(document.getElementById('map3'), mapOptions)
//var map4 = new google.maps.Map(document.getElementById('map4'), mapOptions)

//var maps = [map0, map1, map2] 
//console.log(maps)
//createMaps(maps)
//})
//function createMaps(maps){
   // console.log(start, end)
    
    //--> for some reason empty values are also being pushed into 'waypnts' which means these values are incorrectly labeled'd' and 'e'
//    waypnts.push({
//        location: new google.maps.LatLng(33.649907,-117.832047),
//        stopover: true,
 //   }) 
//    waypnts.push({
//        location: new google.maps.LatLng(33.652274,-117.832295),
//        stopover: true,
//    })
//   console.log(directionsArray[0].startLat,directionsArray[0].startLong)
//for(i=0; i< directionsArray.length; i++){
//    directionsDisplay.setMap(maps[2]);
//    var request = {
//        origin: new google.maps.LatLng(directionsArray[2].startLat,directionsArray[2].startLong),
//        destination: new google.maps.LatLng(directionsArray[2].endLat,directionsArray[2].endLong),
//        waypoints: waypnts,
//        travelMode: 'WALKING',
//    };
//    directionsService.route(request, function(result, status) {
//        console.log(status)
//      if (status == 'OK') {
//        directionsDisplay.setDirections(result);
//      }
//    });
//directionsDisplay.setMap(maps[1])
//var request = {
//    origin: new google.maps.LatLng(directionsArray[1].startLat,directionsArray[1].startLong),
//    destination: new google.maps.LatLng(directionsArray[1].endLat,directionsArray[1].endLong),
//    waypoints: waypnts,
//    travelMode: 'WALKING',
//};
//directionsService.route(request, function(result, status) {
//    console.log(status)
//  if (status == 'OK') {
//    directionsDisplay.setDirections(result);
//  }
//}).then (function initMap(){
//    console.log("initing?")
//    directionsService = new google.maps.DirectionsService();
//    directionsDisplay = new google.maps.DirectionsRenderer();
//    var irvine = new google.maps.LatLng(33.722909, -117.772497);
//    var mapOptions = {
//        zoom:10,
//        center: irvine
//    }
//createMaps(maps)
//})
//function createMaps(maps){
   // console.log(start, end)
    //--> for some reason empty values are also being pushed into 'waypnts' which means these values are incorrectly labeled'd' and 'e'
//    waypnts.push({
//        location: new google.maps.LatLng(33.649907,-117.832047),
//        stopover: true,
//    }) 
//    waypnts.push({
//        location: new google.maps.LatLng(33.652274,-117.832295),
//        stopover: true,
//    })
//   console.log(directionsArray[0].startLat,directionsArray[0].startLong)
//for(i=0; i< directionsArray.length; i++){
//    directionsDisplay.setMap(maps[0]);
//    var request = {
//        origin: new google.maps.LatLng(directionsArray[0].startLat,directionsArray[0].startLong),
//        destination: new google.maps.LatLng(directionsArray[0].endLat,directionsArray[0].endLong),
//        waypoints: waypnts,
//        travelMode: 'WALKING',
//    };
//    directionsService.route(request, function(result, status) {
//        console.log(status)
//      if (status == 'OK') {
//        directionsDisplay.setDirections(result);
//      }
//    });


//}

//}
//}

//function calcRoute(start_lat, start_long, end_lat, end_long) {
//    console.log(start_lat)
//    var routeStart = (start_lat, start_long)
//    var routeEnd = (end_lat, end_long)
//    var request = {
//        origin: routeStart,
//        destination: routeEnd,
//        waypoints: waypnts,
//        travelMode: 'WALKING',
//    };
//    directionsService.route(request, function(result, status) {
//      if (status == 'OK') {
//        directionsDisplay.setDirections(result);
//      }
//    });
//  }
//function youAreHere(marker){
//    marker.setMap(map);
//}

//$.get("/api/user/" + id, function(data) {
//    console.log(data)
    //data returns user info based on id
//});