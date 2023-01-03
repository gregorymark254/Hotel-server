const db = require("../Models/index");
const Booking = db.bookingreport;
const Op = db.Sequelize.Op;

// Create and Save a new Booking
exports.create = (req, res) => {
  // Validate request
  if (!req.body.idnumber) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Booking
  const booking = {
    bookingnumber: req.body.bookingnumber,
    roomtype: req.body.roomtype,
    checkin: req.body.checkin,
    checkout: req.body.checkout,
    bookingdate: req.body.bookingdate,
    bookingstatus: req.body.bookingstatus,
    paymentstatus: req.body.paymentstatus,
    totalamount: req.body.totalamount,
    paidamount: req.body.paidamount,
    dueamount: req.body.dueamount,
  };

  // Save Booking in the database
  Booking.create(booking)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message : err.message || "Some error occurred while creating the Booking."
      });
    });
};

// Retrieve all Booking from the database.
exports.findAlls = (req, res) => {
  const bookingnumber = req.query.bookingnumber;
  var condition = bookingnumber ? { bookingnumber: { [Op.like]: `%${bookingnumber}%` } } : null;

  Booking.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message : err.message || "Some error occurred while retrieving Booking."
      });
    });
};

// Find a single Booking with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Booking.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Booking with id=" + id
      });
    });
};

// Update a Booking by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Booking.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "Booking was updated successfully."
        });
      } else {
        res.send({ message: `Cannot update Booking with id=${id}. Maybe Booking was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Booking with id=" + id
      });
    });
};

// Delete a Booking with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Booking.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Booking was deleted successfully!"
        });
      } else {
        res.send({ message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete Booking with id=" + id
      });
    });
};

// Delete all Booking from the database.
exports.deleteAll = (req, res) => {
  Booking.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {res.send({ message: `${nums} Booking were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while removing all Booking."
      });
    });
};