module.exports = (sequelize, Sequelize) => {
  const Guests = sequelize.define("guests", {
    bookingnumber: {
      type: Sequelize.STRING
    },
    guestname: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    idnumber: {
      type: Sequelize.STRING
    }
  });

  return Guests;
};
    