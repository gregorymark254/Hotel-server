module.exports = (sequelize, Sequelize) => {
    const Mpesa = sequelize.define("mpesa", {
      transaction_id: {
        type: Sequelize.STRING
      },
      phonenumber: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      },
    });
  
    return Mpesa;
  };
      