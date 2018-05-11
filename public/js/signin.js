$(document).ready (function(){
//I think we'll need a user 'get' in order to check existing users when people are
//trying to login
var userid = 0
var username = $("#uname").val
$("#submit").on("click", function(){
    console.log(username)
})

 //Capture button click
 $("#add-user").on("click", function(event) {
    //prevent form from trying to submit/refresh the page
    event.preventDefault();

    //Capture User iNputs and store them into variables
    var userName = $('#usernamecreate').val().trim();
    var password = $('#psw').val().trim();

    localStorage.setItem('userName', userName)
    localStorage.setItem('password', password)

    //Console log each of the user inputs to confirm we are receiving them
    console.log(userName);
    console.log(password);

    //Output all of the new information into the relevant HTML sections
    $("#userName-display").text(localStorage.getItem("username"));
    $("#password-display").text(localStorage.getItem("password"));
    
    if(userName.value !== storeduserName || password.value !== storedpassword) {
        alert('ERROR');
    }else {
        alert('You are logged in.');
    }
}); 


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