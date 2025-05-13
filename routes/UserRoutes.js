const express = require("express");
const router = express.Router();
const UserController = require("../controller/UserController");

//router
router.get("/getallusers", UserController.getAllUsers);
router.get("/getusersbyid/:id", UserController.getById);

module.exports = router;
