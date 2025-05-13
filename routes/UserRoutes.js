const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

//router
router.get("/getallusers", UserController.getAllUsers);
router.get("/getusersbyid/:id", UserController.getUserById);

module.exports = router;
