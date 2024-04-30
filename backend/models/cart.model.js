// Import mongoose
const mongoose = require('mongoose');

// Define UserProduct Schema
const userProductSchema = new mongoose.Schema({
  // Reference to the user
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // List of product IDs
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
});

// Define models based on schemas
const UserProduct = mongoose.model('UserProduct', userProductSchema);

// Export the UserProduct model
module.exports = UserProduct;
