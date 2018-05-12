module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        starred_route_id: DataTypes.INTEGER,
        password: DataTypes.STRING
    })
    return User;
}