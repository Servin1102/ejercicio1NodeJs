const { db, DataTypes } = require("../utils/database.utils")

const Register = db.define("register", {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    entranceTime:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "active"
    },

})

module.exports= { Register }