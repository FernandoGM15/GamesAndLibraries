const { DataTypes} = require("sequelize");
const sequelize = require("./../config/db-config");

const Library = sequelize.define("Library",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
});


module.exports = Library;