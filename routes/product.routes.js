const express = require("express");
const productController = require("../controller/product.controller");

const router = express.Router();

// Product Routes
router.post("/products", productController.addProduct);
router.get("/products", productController.getProducts);
router.post("/products/:id", productController.getSingleProduct);

// Category Routes
router.post("/products/category", productController.addCategory);
router.get("/products/category", productController.getCategory);
router.post("/products/category/:id", productController.getSingleCategory);

module.exports = router;
