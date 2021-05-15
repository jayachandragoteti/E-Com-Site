const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/users/register", userController.registerUser);

// User Routes
router.get("/users", userController.getUsers);
router.get("/users/:id", userController.getUser);

module.exports = router;
