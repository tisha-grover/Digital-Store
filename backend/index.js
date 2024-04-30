const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const RegisterRoute = require("./routes/register.route.js");
const LoginRoute = require("./routes/login.route.js");
const ProductRoute = require("./routes/product.route.js");
const app = express();

// Enable CORS for all routes which is enforced by browsers.
app.use(cors());

// Middleware for JSON parsing
app.use(express.json());

// Middleware for URL encoded form parsing
app.use(express.urlencoded({ extended: false }));

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

// Routes
app.use("/api/register", RegisterRoute);
app.use("/api/login", LoginRoute);
app.use("/api/product", ProductRoute);

// API Endpoint for fetching data
app.get("/", async (req, res) => {
  res.send("Checking Nodemon");
});
