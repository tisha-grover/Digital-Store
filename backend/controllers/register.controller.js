const UserInfo = require("../models/user.model.js");

const registerUser = async (req, res) => {
    try {
      const user = await UserInfo.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };

  module.exports = {
    registerUser
  }