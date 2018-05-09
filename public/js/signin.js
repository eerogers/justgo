$(document).ready (function(){
//I think we'll need a user 'get' in order to check existing users when people are
//trying to login
var userid = 0
var username = $("#uname").val
$("#submit").on("click", function(){
    console.log(username)
})
//$.get("/api/users/" + username, function(data) {
//    userid = data.id
//    console.log(userid)
//    localStorage.setItem("userid", data.id) 
//})
//$.get("/api/users/" + userid, function(data) {
//    console.log(data)
    //data returns user info based on id
    //& password?
//});
});