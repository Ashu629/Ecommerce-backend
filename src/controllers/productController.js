// backend/src/controllers/productController.js

const axios = require("axios");

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");

    // Normalize data for frontend compatibility
    const products = response.data.map((product) => ({
      _id: product.id.toString(),
      name: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
    }));

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    const product = {
      _id: response.data.id.toString(),
      name: response.data.title,
      price: response.data.price,
      description: response.data.description,
      category: response.data.category,
      image: response.data.image,
    };

    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
