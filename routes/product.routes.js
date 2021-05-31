const express = require("express");
const productController = require("../controller/product.controller");

const router = express.Router();

// Product Routes
router.get("/products", productController.getProducts);
router.post("/products", productController.addProduct);
//category routes
router.get("/products/categories", productController.getCategories);
router.post("/products/categories", productController.addCategories);
router.post("/products/category/:id", productController.getSingleCategory);

module.exports = router;
