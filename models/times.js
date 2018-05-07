//var Sequelize = require("sequelize");
//var sequelize = require("../config/connection.js");
module.exports = function(sequelize, DataTypes) {
    var Time = sequelize.define("Time", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        route_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        time: DataTypes.INTEGER
    })
    return Time;
}