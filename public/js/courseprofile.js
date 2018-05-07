$(document).ready (function(){
//these are pre-set because we don't have sign-in or route select functions yet which should set these:
var id =3
var userid = 1
$.get("/api/users/" + userid, function(data) {
    console.log(data)
    //data returns user info based on id
});
var directionsArray = []
$.get("/api/routes/" +id, function(data) {
    console.log(data)
    for(i=0; i<data.length; i++){
        $("#map").append("<div id='"+i+"'>"+ data[i].name_of_route+"</div><div id='map1'</div>")
     //    console.log(waypnts)
         var locationsArray = {startLat: parseFloat(data[i].start_lat), startLong: parseFloat(data[i].start_long), 
                                 endLat: parseFloat(data[i].end_lat), endLong: parseFloat(data[i].end_long)}
         directionsArray.push(locationsArray)
         console.log(directionsArray)
 }
}).then(
    function initMap(){
        console.log("initing?")
        directionsService = new google.maps.DirectionsService();
        directionsDisplay = new google.maps.DirectionsRenderer();
        var irvine = new google.maps.LatLng(33.722909, -117.772497);
        var mapOptions = {
            zoom:10,
            center: irvine
        }
var map = new google.maps.Map(document.getElementById('map1'), mapOptions)
createMaps(map)
})
function createMaps(map){
    // console.log(start, end)
    var waypnts = []
    //--> for some reason empty values are also being pushed into 'waypnts' which means these values are incorrectly labeled'd' and 'e'
    waypnts.push({
        location: new google.maps.LatLng(33.649907,-117.832047),
        stopover: true,
    }) 
    waypnts.push({
        location: new google.maps.LatLng(33.652274,-117.832295),
        stopover: true,
    })
     //   console.log(directionsArray[0].startLat,directionsArray[0].startLong)
     //for(i=0; i< directionsArray.length; i++){
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
})