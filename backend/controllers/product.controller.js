const Product = require("../models/product.model");
const User = require("../models/user.model");
const UserProduct = require("../models/cart.model");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    // Organize products by category
    const categorizedProducts = {};
    products.forEach(product => {
      if (!categorizedProducts[product.productCategory]) {
        categorizedProducts[product.productCategory] = [];
      }
      categorizedProducts[product.productCategory].push({
        image: product.image,
        name: product.name,
        rating: product.rating,
        Price: product.price,
        reviews: product.reviews,
        id: product._id
      });
    });

    // Send the categorized products in the response
    res.status(200).json(categorizedProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getCartProducts = async (req, res) => {
  try {
    // Retrieve username from the request parameters
    const { username } = req.body;
    // Find the user in the User model based on the username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the user's cart in the UserProduct model
    const userCart = await UserProduct.findOne({ user: user._id });
    if (!userCart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Get the list of product IDs from the user's cart
    const productIds = userCart.products;

    // Count the number of occurrences of each product ID
    const productCounts = productIds.reduce((acc, productId) => {
      if (productId in acc) {
        acc[productId]++;
      } else {
        acc[productId] = 1;
      }
      return acc;
    }, {});

    // Retrieve product details for each unique product ID
    const cartProducts = await Promise.all(Object.keys(productCounts).map(async productId => {
      const product = await Product.findById(productId);
      return {
        id: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: productCounts[productId]
      };
    }));

    res.status(200).json(cartProducts);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    console.log("reached here");
    const product = await Product.create(req.body);
    console.log(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addproductToCart = async (req, res) => {
  try {
    // Retrieve username and product ID from the request body
    const { username, productId } = req.body;
    console.log("in request" + username + productId);

    // Find the user in the User model based on the username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("user" + user);

    // Find the product in the Product model
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    console.log("product" + product);

    // Add the product to the user's cart in the UserProduct model
    let userProduct = await UserProduct.findOne({ user: user._id });

    if (!userProduct) {
      userProduct = new UserProduct({ user: user._id, products: [productId] });
    } else {
      userProduct.products.push(productId);
    }

    await userProduct.save();

    res.status(200).json({ message: "Product added to the cart" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.user; // Assuming the user's role is stored in req.user

    if (role !== 'admin') {
      return res.status(403).json({ message: "Only admin users can delete products" });
    } 
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeFromCart = async (req, res) => {
  try {
    // Retrieve username and product ID from the request body
    const { username, productId } = req.body;
    console.log(username + productId);

    // Find the user in the User model based on the username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log(user);

    // Find the user's cart in the UserProduct model
    let userProduct = await UserProduct.findOne({ user: user._id });
    if (!userProduct) {
      return res.status(404).json({ message: "Cart not found" });
    }
    console.log(userProduct);

    // Check if the product exists in the cart
    const index = userProduct.products.indexOf(productId);
    if (index === -1) {
      return res.status(404).json({ message: "Product not found in cart" });
    }

    // Remove the product from the cart
    userProduct.products.splice(index, 1);
    await userProduct.save();

    res.status(200).json({ message: "Product removed from cart" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  addproductToCart,
  removeFromCart,
  getCartProducts
};