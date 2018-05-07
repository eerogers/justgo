$(document).ready (function(){
//I think we'll need a user 'get' in order to check existing users when people are
//trying to login
var userid = 1 
$.get("/api/users/" + userid, function(data) {
    console.log(data)
    //data returns user info based on id
    //& password?
});
});