const db = require("../Models/index");
const Employees = db.employees;
const Op = db.Sequelize.Op;

// Create and Save a new employees
exports.create = (req, res) => {
  // Validate request
  if (!req.body.firstname) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a employees
  const employee = {
    idnumber: req.body.idnumber,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    middlename: req.body.middlename,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    department: req.body.department,
    position: req.body.position,
    time: req.body.time,
    date: req.body.date,
    udate: req.body.udate,
    birth: req.body.birth,
    gender: req.body.gender,
    status: req.body.status,
    file: req.body.file
  };

  // Save employees in the database
  Employees.create(employee)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message : err.message || "Some error occurred while creating the employees."
      });
    });
};

// Retrieve all Employees from the database.
exports.findAlls = (req, res) => {
  const firstname = req.query.firstname;
  var condition = firstname ? { firstname: { [Op.like]: `%${firstname}%` } } : null;

  Employees.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({message : err.message || "Some error occurred while retrieving Employees."
      });
    });
};

// Find a single employees with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Employees.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: "Error retrieving employees with id=" + id
      });
    });
};

// Update a employees by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Employees.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({message: "employees was updated successfully."
        });
      } else {
        res.send({ message: `Cannot update employees with id=${id}. Maybe employees was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating employees with id=" + id
      });
    });
};

// Delete a employees with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Employees.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "employees was deleted successfully!"
        });
      } else {
        res.send({ message: `Cannot delete employees with id=${id}. Maybe employees was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Could not delete employees with id=" + id
      });
    });
};

// Delete all Employees from the database.
exports.deleteAll = (req, res) => {
  Employees.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {res.send({ message: `${nums} Employees were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({ message: err.message || "Some error occurred while removing all Employees."
      });
    });
};