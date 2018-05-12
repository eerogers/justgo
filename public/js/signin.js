$(document).ready (function(){
//I think we'll need a user 'get' in order to check existing users when people are
//trying to login
var userid = 0
$("#submit").on("click", function(){
    var username = $("#uname").val()
    var pass = $("#password").val()
    console.log(username, pass)
    $.get("/api/users/" + username, function(data){
        if(data[0].password == pass){
            //data[0].id
            localStorage.setItem('userId', data[0].id)
            localStorage.setItem('userName', username)
            window.location.href="/main"
        }
        else{
            alert("The username or password is incorrect, please try again.")
        }
    })
})

 //Capture button click
 $("#add-user").on("click", function(event) {
    //prevent form from trying to submit/refresh the page
    event.preventDefault();

    //Capture User iNputs and store them into variables
    var userName = $('#usernamecreate').val().trim();
    var password = $('#psw').val().trim();
    var passwordRepeat = $('#psw-repeat').val().trim();
    $.get("/api/users/" + userName, function(data){
        if(data[0]){
            alert("That username is already in use, please try again!")
        }
        else if (password !== passwordRepeat){
                alert("Password entries must be the same. Please try again.")
            }
        else if (password === ""){
            alert("Please enter a password.")
        } 
        else {
            //Console log each of the user inputs to confirm we are receiving them
                var newUser ={
                    userName: userName,
                    password: password
                }
                $.post("/api/users/new", newUser)
                .then(function(data){
                    console.log(data)
                })
                localStorage.setItem('userName', userName)
                console.log(userName);
                console.log(password);
                logId(userName)
        }
    })
    function logId(userName){
        $.get("/api/users/" + userName, function(data){
            console.log(data[0].id)
            localStorage.setItem('userId', data[0].id)
        })
        $("#usernamecreate").val("")
        $("#psw").val("")
        $("#psw-repeat").val("")
    }

   
    //Output all of the new information into the relevant HTML sections
  //  $("#userName-display").text(localStorage.getItem("username"));
  //  $("#password-display").text(localStorage.getItem("password"));

    //put a post to database here of the new user's information
   // if(userName.value !== storeduserName || password.value !== storedpassword) {
   //     alert('ERROR');
   // }else {
   //     alert('You are logged in.');
   // }
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