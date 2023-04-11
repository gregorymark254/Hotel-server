const customerList = require("../Controllers/CustomerController");

var router = require("express").Router();

// Create a new Tutorial
router.post("/add", customerList.create);

// Retrieve all customerList
router.get("/all", customerList.findAlls);

// Retrieve a single Tutorial with id
router.get("/all/:id", customerList.findOne);

// Update a Tutorial with id
router.put("/put/:id", customerList.update);

// Delete a Tutorial with id
router.delete("/delete/:id", customerList.delete);

// Delete all customerList
router.delete("/delete", customerList.deleteAll);

module.exports = router
