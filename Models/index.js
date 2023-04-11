const dbConfig = require("../DB/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.DBUSER, dbConfig.DBPASSWORD, {
  host: dbConfig.DBHOST,
  port: dbConfig.DBPORT,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employees = require("./Employee.Model")(sequelize, Sequelize);
db.customerLists = require("./CustomerModel")(sequelize, Sequelize);
db.guests = require("./GuestModel")(sequelize, Sequelize);
db.bookingreport = require("./BookingReportModel")(sequelize, Sequelize);

module.exports = db;
