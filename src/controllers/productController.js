const products = require("../data/products.js");

// GET /api/products
const getAllProducts = (req, res) => {
  res.json(products);
};

// GET /api/products/:id
const getProductById = (req, res) => {
  const product = products.find(p => p._id === req.params.id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

module.exports = {
  getAllProducts,
  getProductById
};
