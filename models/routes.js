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
        end_long: DataTypes.DECIMAL,
        end_lat: DataTypes.DECIMAL,
        group_name: DataTypes.STRING
    })
    return Route;
}
 // Route.sync();
  
 // module.exports = Route;