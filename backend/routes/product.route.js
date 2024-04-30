const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  getCartProducts,
  updateProduct,
  deleteProduct,
  addproductToCart,
  removeFromCart,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);

router.post("/createproduct", createProduct);
router.post("/addproductToCart", addproductToCart);
router.post("/removeFromCart", removeFromCart);

// update a product
router.put("/updateprodct/:id", updateProduct);

// delete a product
router.delete("/deleteproduct/:id", deleteProduct);

router.post("/cartProducts", getCartProducts);

module.exports = router;
