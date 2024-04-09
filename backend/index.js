// app.js
const express = require("express");
const mongoose = require("mongoose");
const UserInfo = require("./models/user.model.js");
const RegisterRoute = require("./routes/register.route.js");
const LoginRoute = require("./routes/login.route.js");
const app = express();

//middleware
app.use(express.json());// for JSON parsing
app.use(express.urlencoded({extended: false}));//for taking body params as form using postmen


//routes
app.use("/api/register", RegisterRoute);
app.use("/api/login", LoginRoute);

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://admin2002digital:Mongoapiestore@backenddb.guiy5ww.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("MongoDb is connected");
    // Start Server
    app.listen(3001, () => console.log("Server started"));
  })
  .catch((err) => {
    console.log("MongoDb connection Failed " + err);
  });


// API Endpoint for fetching data
 app.get("/", async (req, res) => {
  res.send("checking Nodemon")
 });

// register user
// app.post("/api/register", async (req, res) => {
//   try {
//     const user = await UserInfo.create(req.body);
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({message: error.message});
//   }
// });

// Endpoint for user authentication
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//       const user = await UserInfo.findOne({ username, password });
//       if (user) {
//           res.status(200).json({ message: 'Login successful' });
//       } else {
//           res.status(401).json({ message: 'Invalid username or password' });
//       }
//   } catch (err) {
//       console.error('Error authenticating user:', err);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// });