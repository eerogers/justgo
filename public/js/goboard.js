$(document).ready (function(){
    //these are pre-set because we don't have sign-in or route select functions yet which should set these:
    var routeid = parseInt(localStorage.getItem("routeId"))
    var userid = 1
    $.get("/api/users/" + userid, function(data) {
        console.log(data)
        //data returns user info based on id
    });
    var directionsArray = []
    var wayLat1 = 0
    var wayLong1 = 0
    var wayLat2 = 0
    var wayLong2 = 0
    var wayLat3 = 0
    var wayLong3 = 0
    var atStart = true
    var atFinish = true
    var startLat = 0
    var startLong = 0
    var endLat = 0
    var endLong = 0
    var isRunning = false
    var newTime= {
        routeId: routeid,
        userId: userid,//localStorage.getItem("userid"),
        time: 20,
        distance: 20
    }
    console.log(newTime)

    $.get("/api/routes/" +routeid, function(data) {
        console.log(data)
      //  for(i=0; i<data.length; i++){
            $("#map").append("<div id='1'>"+ data[0].name_of_route+"</div><div id='map1'</div>")
         //    console.log(waypnts)
            startLat =  parseFloat(data[0].start_lat)
            startLong = parseFloat(data[0].start_long)
            endLat = parseFloat(data[0].end_lat)
            endLong = parseFloat(data[0].end_long)
            var locationsArray = {startLat: parseFloat(data[0].start_lat), startLong: parseFloat(data[0].start_long), 
                                     endLat: parseFloat(data[0].end_lat), endLong: parseFloat(data[0].end_long)}
             directionsArray.push(locationsArray)
             console.log(directionsArray)
             console.log(data)
            wayLat1 = data[0].way_lat1
            wayLong1 = data[0].way_long1
            wayLat2 = data[0].way_lat2
            wayLong2 = data[0].way_long2
            wayLat3 = data[0].way_lat3
            wayLong3 = data[0].way_long3
     //}
    }).then(
        function initMap(){
            directionsService = new google.maps.DirectionsService();
            directionsDisplay = new google.maps.DirectionsRenderer();
            var irvine = new google.maps.LatLng(33.722909, -117.772497);
            var mapOptions = {
                zoom:10,
                center: irvine
            }
            var map = new google.maps.Map(document.getElementById('map1'), mapOptions)
            var waypnts = []
            waypnts.push({
                location: new google.maps.LatLng(wayLat1, wayLong1),
                stopover: true,
            }) 
            waypnts.push({
                location: new google.maps.LatLng(wayLat2, wayLong2),
                stopover: true,
            })
            waypnts.push({
                location: new google.maps.LatLng(wayLat3, wayLong3),
                stopover: true,
            })
    infoWindow = new google.maps.InfoWindow;
    // for geolocation errors:
    function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      infoWindow.setPosition(pos);
      infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
      infoWindow.open(map);
      $('#map1').html('<h2>Please allow geolocation.</h2>')

    }
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        posLat = position.coords.latitude
        console.log(posLat)
        posLong = position.coords.longitude
        console.log(posLong)
        checkLocation(posLat, posLong, startLat, startLong)
        pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        infoWindow.setPosition(pos);
        console.log(pos)
        infoWindow.setContent('You Are Here');
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(15)
      }, function () {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
    createMaps(map, waypnts)
})
    function createMaps(map, waypnts){
        directionsDisplay.setMap(map);
            var request = {
                origin: new google.maps.LatLng(directionsArray[0].startLat,directionsArray[0].startLong),
                destination: new google.maps.LatLng(directionsArray[0].endLat,directionsArray[0].endLong),
                waypoints: waypnts,
                travelMode: 'WALKING',
            };
            directionsService.route(request, function(result, status) {
                console.log(status)
            if (status == 'OK') {
                directionsDisplay.setDirections(result);
            }
            });
    }
function checkLocation(posLat, posLong){
    console.log(posLat, posLong)
    console.log(startLat, startLong)   
    if(posLat == startLat && posLong == startLong){
        atStart = true
    }
    if(posLat == endLat && posLong == endLong){
        atFinish = true
    } 
}
function checkStatus(){
    if (atStart == false){
        $("#advance").text("Please advance to the start location to begin!")
        $("#start").css("opacity","0.5")
    }
    if (atStart){
        $("#start").css("opacity","1")
    }
    if(atStart || isRunning) {
        $("#advance").empty()
    }
    if (atFinish){
        $("#finish").css("visibility", "visible")
    }
} checkStatus()
$("#start").on("click", function(){
    checkStatus()
    if(atStart) {
        isRunning = true
        console.log("RUN!")
        $("#running").text("Your time has begun!")
        $("#cancel").css("visibility", "visible")
    }
})

$("#finish").on("click", function(){
    $.post("/api/times/new", newTime)
    .then(function(data){
        console.log(data)
    })
})
$("#cancel").on("click", function(){
    isRunning = false
    $("#cancel").css("visibility", "hidden")
})
})