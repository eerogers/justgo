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
        route_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        date: DataTypes.STRING,
        start_time: DataTypes.STRING,
        end_time: DataTypes.STRING,
        distance: DataTypes.DECIMAL,
        run_code: DataTypes.STRING,
        finished: DataTypes.BOOLEAN,
        route_name: DataTypes.STRING
        
    })
    return Times;
}