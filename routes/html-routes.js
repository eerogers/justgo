var path = require('path')
module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signin.html"));
});
app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/main.html"));
});
app.get("/course", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/courseprofile.html"));
});
//some things might be linking to /userprofile --> maybe changes  
app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userprofile.html"));
});
app.get("/goboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/goboard.html"));
});          
};