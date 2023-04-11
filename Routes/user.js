const router = require("express").Router()
const User = require("../Models/user")


//Getting all User accounts from mongo db
router.get("/users", async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})


//Getting all User accounts from mongo db by ID
router.get("/users/:id", async (req,res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
})


//Updating User accounts from mongo db by ID
router.put("/users/update/:id", async (req,res) => {
    try {
        const updateduser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})


//Deleting User accounts from mongo db by ID
router.delete("/users/delete/:id", async (req,res) => {
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
})



module.exports = router