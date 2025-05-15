const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "mysql_password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
