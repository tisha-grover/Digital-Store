const express = require("express");
const router = express.Router();
const {loginUser} = require("../controllers/login.controller.js")

// register user
router.post('/', loginUser);