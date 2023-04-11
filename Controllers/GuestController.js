const db = require("../Models/index");
const Guests = db.guests;
const Op = db.Sequelize.Op;

// Create and Save a new Guests
exports.create = (req, res) => {
  // Validate request
  if (!req.body.bookingnumber) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Guests
  const guest = {
    bookingnumber: req.body.bookingnumber,
    guestname: req.body.guestname,
    gender: req.body.gender,
    mobile: req.body.mobile,
    email: req.body.email,
    idnumber: req.body.idnumber
  };

  // Save Guests in the database
  Guests.create(guest)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message : err.message || "Some error occurred while creating the Guests."
      });
    });
};

// Retrieve all Guests from the database.
exports.findAlls = (req, res) => {
  const guestname = req.query.guestname;
  var condition = guestname ? { guestname: { [Op.like]: `%${guestname}%` } } : null;

  Guests.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message : err.message || "Some error occurred while retrieving Guests."
      });
    });
};

// Find a single Guests with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Guests.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving Guests with id=" + id
      });
    });
};

// Update a Guests by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Guests.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "Guests was updated successfully."
        });
      } else {
        res.send({ message: `Cannot update Guests with id=${id}. Maybe Guests was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Guests with id=" + id
      });
    });
};

// Delete a Guests with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Guests.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Guests was deleted successfully!"
        });
      } else {
        res.send({ message: `Cannot delete Guests with id=${id}. Maybe Guests was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete Guests with id=" + id
      });
    });
};

// Delete all Guests from the database.
exports.deleteAll = (req, res) => {
  Guests.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {res.send({ message: `${nums} Guests were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while removing all Guests."
      });
    });
};