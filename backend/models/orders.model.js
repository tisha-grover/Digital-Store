// Import mongoose
const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
  // Assuming user has an ID
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Other user properties
  name: String,
  email: String,
  // ...
});

// Define Product Schema
const productSchema = new mongoose.Schema({
  // Assuming product has an ID
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  // Other product properties
  name: String,
  price: Number,
  // ...
});

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
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);
const UserProduct = mongoose.model('UserProduct', userProductSchema);

// Export models
module.exports = {
  User,
  Product,
  UserProduct
};
