const express = require("express");
const signupController = require("../controllers/LoginController");

const router = express.Router();

router.post("/signup", signupController.signUp);
router.post("/login", signupController.login);

module.exports = router;
