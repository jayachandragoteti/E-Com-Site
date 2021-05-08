const express = require("express");
const registerController = require("../controller/register.controller");

const router = express.Router();

router.post("/register", registerController.registerUser);

router.get("/users", registerController.getUsers);

module.exports = router;
