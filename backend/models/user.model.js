const mongoose = require("mongoose");

const UserInfo = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Enter Username"],
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
    },
    email: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "normal",
    },
  },
  {
    timestamps: true,
  }
);

//To maintain the security of UI
// Middleware to prevent users from updating the role field
UserInfo.pre("save", function (next) {
  if (this.isModified("role")) {
    // If role field is being modified, check if the user is an admin
    if (this.role !== "admin") {
      return next(new Error("Role field cannot be modified"));
    }
  }
  next();
});
// Define Model
const User = mongoose.model("User", UserInfo);

//exporting model
module.exports = User;
