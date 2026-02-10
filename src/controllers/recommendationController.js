// backend/src/controllers/recommendationController.js

const products = require("../data/products");
const interactions = require("../data/interactions");

// GET /api/recommend/popular
const getPopularProducts = (req, res) => {
  const counts = {};

  interactions.forEach((item) => {
    const key = item.productId;
    if (!counts[key]) counts[key] = 0;

    if (item.type === "purchase") {
      counts[key] += 3; // purchases count more
    } else if (item.type === "view") {
      counts[key] += 1;
    }
  });

  const productsWithScore = products.map((p) => {
    const score = counts[p._id] || 0;
    return { ...p, score };
  });

  const sorted = productsWithScore.sort((a, b) => b.score - a.score);
  const top = sorted.slice(0, 5);

  res.json(top);
};

// GET /api/recommend/similar/:id
const getSimilarProducts = (req, res) => {
  const { id } = req.params;
  const current = products.find((p) => p._id === id);

  if (!current) {
    return res.status(404).json({ message: "Product not found" });
  }

  const similar = products.filter(
    (p) => p._id !== current._id && p.category === current.category
  );

  res.json(similar);
};

module.exports = {
  getPopularProducts,
  getSimilarProducts,
};