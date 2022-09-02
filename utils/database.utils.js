const { Sequelize, DataTypes } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "servin01",
  port: 3001,
  database: "registers",
  logging: false,
});

module.exports = { db, DataTypes };
