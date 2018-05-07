$(document).ready (function(){
$.get("/api/users/" + userid, function(data) {
    console.log(data)
    //data returns user info based on id
});

$.get("/api/routes/" +id, function(data) {
    console.log(data)
    //data individual route info based on id
});
});