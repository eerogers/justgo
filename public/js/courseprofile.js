$(document).ready (function(){
//these are pre-set because we don't have sign-in or route select functions yet which should set these:
var id = localStorage.getItem("routeId")
var userid = localStorage.getItem("userId")
console.log(userid)
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
$.get("/api/times/"+id+"/"+userid, function(data) {
    console.log(data)
    var timesArray = []
    for(i=0; i<data.length; i++){
        timesArray.push(Math.round((moment(data[i].end_time, 'HH:mm:ss').diff(moment(data[i].start_time, 'HH:mm:ss'), 'minutes', 'seconds') +0.00001) * 100) / 100)
    }
    console.log(timesArray)
    $("#best").text(" "+Math.min(...timesArray)+ " min")
})
$.get("/api/routes/" +id, function(data) {
    console.log(data)
  //  for(i=0; i<data.length; i++){
        $("#name").text(" " +data[0].name_of_route)
        $("#distance").text(" " +data[0].distance)
        $("#map").append("<div id='1'>"+ data[0].name_of_route+"</div><div id='map1'</div>")
     //    console.log(waypnts)
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
          //  console.log(status)
        if (status == 'OK') {
            directionsDisplay.setDirections(result);
            console.log("Leg 1 = "+ result.routes[0].legs[0].distance.text)
            console.log("Leg 2 = "+ result.routes[0].legs[1].distance.text)
            console.log("Leg 3 = "+ result.routes[0].legs[2].distance.text)
            console.log("Leg 4 = "+ result.routes[0].legs[3].distance.text)
        }
        });
}
})