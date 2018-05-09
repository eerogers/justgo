//var Route = require("../models/routes.js");
// var Time = require("../models/times.js");
//var User = require("../models/users.js");
var db = require("../models")
module.exports = function(app) {
    //gets-->
    app.get("/api/users/:username", function(req, res) {
        db.User.findAll({
            where: {
                user_name: req.params.username
            }
        }).then(function(results){
            console.log(results)
            res.json(results);
        })
    })
    app.get("/api/users/:id", function(req, res) {
        db.User.findAll({
            where: {
                id: parseInt(req.params.id)
            }
        }).then(function(results){
            console.log(results)
            res.json(results);
        })
    })
    app.get("/api/routes/public", function(req, res) {
        db.Route.findAll({
            where: {
                group_name: "public"
            }
        }).then(function(results) {
            console.log(results)
            res.json(results);
        });
    });
    //get route info based on id
    app.get("/api/routes/:id", function (req, res) {
        db.Route.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(results) {
            console.log(results)
            res.json(results);
        });
    })
    //get route times based on user id and route id
  
 //   app.get("/api/routes/:userid", function (req, res) {
 //       db.Route.findAll({

    app.get("/api/times/:routeid/:userid", function (req, res) {
        db.Time.findAll({
            where: {
                user_id: req.params.userid
            }
        }).then(function(results) {
            console.log(results)
            res.json(results);
        });
    })

    app.get('/api/times/:userid', function (req, res) {
        db.Times.findAll({
            where: {
                user_id: req.params.userid
            }, attributes: ['createdAt', 'distance'],
        }).then(function(results) {
            console.log(results)
            res.json(results)
        })
    })

    //posts -->
    app.post("/api/routes/new", function(req, res) {
        db.Route.create({
            name_of_route: req.body.name,
            start_long: req.body.startLong,
            start_lat: req.body.startLat,
            end_long: req.body.endLong,
            end_lat: req.body.endLat,
            group_name: req.body.groupName,
            // --> prob should include distance of actual route as a value
            //so can calculate speed and whether or not is possible
            //maybe save an image of the route? not sure how this should work - might need to add more
            //to this database entry
          });
        });
    app.post("/api/times/new", function(req, res) {
        db.Time.create({
            route_id: req.body.routeId,
            user_id: req.body.userId,
            time: req.body.time
        })
    })
    app.post("/api/users/new", function(req, res) {
        db.User.create({
            name: req.body.name,
            starred_route: req.body.starredRoute,
            user_name: req.body.userName
        })
    })
};