module.exports = (sequelize, Sequelize) => {
  const Customers = sequelize.define("customerLists", {
    idnumber: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    balance: {
      type: Sequelize.STRING
    }
  });

  return Customers;
};