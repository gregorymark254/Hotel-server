module.exports = (sequelize, Sequelize) => {
  const Employees = sequelize.define("employees", {
    idnumber: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    middlename: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    department: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.STRING
    },
    udate: {
      type: Sequelize.STRING
    },
    birth: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING
    },
    file: {
      type: Sequelize.STRING
    }
  });

  return Employees;
};
