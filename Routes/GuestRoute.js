const guests = require("../Controllers/GuestController");

var router = require("express").Router();

// Create a new Tutorial
router.post("/add", guests.create);

// Retrieve all guests
router.get("/all", guests.findAlls);

// Retrieve a single Tutorial with id
router.get("/all/:id", guests.findOne);

// Update a Tutorial with id
router.put("/put/:id", guests.update);

// Delete a Tutorial with id
router.delete("/delete/:id", guests.delete);

// Delete all guests
router.delete("/delete", guests.deleteAll);

module.exports = router
