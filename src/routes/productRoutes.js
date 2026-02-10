
const express = require("express");
const { getAllProducts, getProductById } = require("../controllers/productController");

const router = express.Router();

// Route: GET /api/products
router.get("/", getAllProducts);

// Route: GET /api/products/:id
router.get("/:id", getProductById);

module.exports = router;