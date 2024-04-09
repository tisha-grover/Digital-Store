const mongoose = require("mongoose");

const UserInfo = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please Enter Username"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Password"],
  },
},
{
    timestamps: true,
}
);

// Define Model
const User = mongoose.model("User", UserInfo);

//exporting model
module.exports = User;