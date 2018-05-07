$(document).ready (function(){
//pre-set user id b/c sign-in not available yet:
var userid =1
$.get("/api/users/" + userid, function(data) {
    console.log(data)
    //data returns user info based on id
});
});