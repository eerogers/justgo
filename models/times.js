//var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    var Times = sequelize.define("Times", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        route_id: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        time: DataTypes.INTEGER,
        distance: DataTypes.INTEGER,
        
    })
    return Times;
}