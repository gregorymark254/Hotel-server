const bookingreport = require("../Controllers/BookingReController");

var router = require("express").Router();

// Create a new report
router.post("/add", bookingreport.create);

// Retrieve all bookingreport
router.get("/all", bookingreport.findAlls);

// Retrieve a single report with id
router.get("/all/:id", bookingreport.findOne);

// Update a report with id
router.put("/put/:id", bookingreport.update);

// Delete a report with id
router.delete("/delete/:id", bookingreport.delete);

// Delete all bookingreport
router.delete("/delete", bookingreport.deleteAll);

module.exports = router
