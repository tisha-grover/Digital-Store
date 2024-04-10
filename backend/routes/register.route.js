const express = require("express");
const router = express.Router();
const {registerUser} = require("../controllers/register.controller")

// register user
router.post('/', registerUser);

module.exports = router;