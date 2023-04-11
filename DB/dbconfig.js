 module.exports = {
  DBHOST: process.env.DBHOST,
  DBPORT: process.env.DBUSER,
  DBUSER: process.env.DBUSER,
  DBPASSWORD: process.env.DBPASSWORD,
  DATABASE: process.env.DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
