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
        group_name: DataTypes.STRING
    })
    return Route;
}
 // Route.sync();
  
 // module.exports = Route;