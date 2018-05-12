//var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    var Route = sequelize.define("Route", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name_of_route: DataTypes.STRING,
        start_long: DataTypes.DECIMAL,
        start_lat: DataTypes.DECIMAL,
        way_lat1: DataTypes.DECIMAL,
        way_long1: DataTypes.DECIMAL,
        way_lat2: DataTypes.DECIMAL,
        way_long2: DataTypes.DECIMAL,
        way_lat3: DataTypes.DECIMAL,
        way_long3: DataTypes.DECIMAL,
        end_long: DataTypes.DECIMAL,
        end_lat: DataTypes.DECIMAL,
        group_name: DataTypes.STRING,
        distance: DataTypes.DECIMAL
    })
    return Route;
}

//data to populate "routes" file with pre-set public routes -->
//before you begin make sure the table is EMPTY so it will start with ID 1 -
//- the id is what I use to distinguish between tables, so it's important they're the same as expected -
//this might require a TRUNCATE command - one of the delete commands does not reset IDs at 1, but I think TRUNCATE will do it(?)
//then you can run this in justgo_db, this should work -->
//INSERT INTO routes (name_of_route, start_long, start_lat, way_lat1, way_long1, way_lat2, way_long2, way_lat3, way_long3, end_long, end_lat, group_name)
// VALUES ("Irvine Ring Road", -117.8428840000, 33.6471860000, 33.6462930000, -117.8441930000, 33.6446850000, -117.8429510000, 33.6461750000, -117.8412320000, -117.8428120000, 33.6472110000, "public"),
// VALUES ("Crystal Cove Trail", -117.8607690000, 33.5838290000, 33.5856100000, -117.8553420000, 33.5812080000, -117.8478630000, 33.5662580000, -117.8327890000, -117.8281660000, 33.5643360000, "public"),
// VALUES ("Balboa Island Circuit", -117.8898500000, 33.6086160000, 33.6082730000, -117.8999240000, 33.6044770000, -117.8970860000, 33.6044590000, -117.8891200000, -117.8897580000, 33.6086190000, "public"),
// VALUES ("Turtle Rock", -117.8185070000, 33.6491350000, 33.6359330000, -117.8206740000, 33.6373630000, -117.8011260000, 33.6452020000, -117.8086370000, -117.8181420000, 33.6492960000, "public"),
// VALUES ("Bayview Trail", -117.8942300000, 33.6427780000, 33.6452780000, -117.8935850000, 33.6477620000, -117.8918810000, 33.6528410000, -117.8894000000, -117.8836520000, 33.6529780000, "public");
