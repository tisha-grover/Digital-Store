const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5, 
    default: 0
  },
  productCategory: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  reviews: {
    type: [String],
    required: true,
    default: [],
  },
  ownedBy: {
    type: String,
    required: true
  },
  ratedBy: {
    type: [String],
    required: false,
    default: []
  }
});

// Create a model using the product schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
