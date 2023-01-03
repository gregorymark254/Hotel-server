module.exports = {
  HOST: "GREGORY",
  PORT: "1433",
  USER: "mark",
  PASSWORD: "mypassword",
  DB: "HotelDB",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
