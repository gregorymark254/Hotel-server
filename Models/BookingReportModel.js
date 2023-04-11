module.exports = (sequelize, Sequelize) => {
  const Booking = sequelize.define("bookingreport", {
    bookingnumber: {
      type: Sequelize.STRING
    },
    roomtype: {
      type: Sequelize.STRING
    },
    checkin: {
      type: Sequelize.STRING
    },
    checkout: {
      type: Sequelize.STRING
    },
    bookingdate: {
      type: Sequelize.STRING
    },
    bookingstatus: {
      type: Sequelize.STRING
    },
    paymentstatus: {
      type: Sequelize.STRING
    },
    totalamount: {
      type: Sequelize.STRING
    },
    paidamount: {
      type: Sequelize.STRING
    },
    dueamount: {
      type: Sequelize.STRING
    }
  });

  return Booking;
};