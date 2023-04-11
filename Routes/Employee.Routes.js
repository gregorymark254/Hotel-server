const employees = require("../Controllers/Employee.Controller");

var router = require("express").Router();

// Create a new Tutorial
router.post("/add", employees.create);

// Retrieve all employees
router.get("/all", employees.findAlls);

// Retrieve a single Tutorial with id
router.get("/all/:id", employees.findOne);

// Update a Tutorial with id
router.put("/put/:id", employees.update);

// Delete a Tutorial with id
router.delete("/delete/:id", employees.delete);

// Delete all employees
router.delete("/delete", employees.deleteAll);

module.exports = router
