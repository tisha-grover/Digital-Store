const UserInfo = require("./models/user.model.js");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
      const user = await UserInfo.findOne({ username, password });
      if (user) {
          res.status(200).json({ message: 'Login successful' });
      } else {
          res.status(401).json({ message: 'Invalid username or password' });
      }
  } catch (err) {
      console.error('Error authenticating user:', err);
      res.status(500).json({ message: 'Internal server error' });
  }
};

  module.exports = {
    loginUser
  }