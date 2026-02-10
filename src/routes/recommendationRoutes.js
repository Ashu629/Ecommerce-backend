// backend/src/routes/recommendationRoutes.js

const express = require("express");
const {
  getPopularProducts,
  getSimilarProducts,
} = require("../controllers/recommendationController"); // 

const router = express.Router();

// GET /api/recommend/popular
router.get("/popular", getPopularProducts);

// GET /api/recommend/similar/:id
router.get("/similar/:id", getSimilarProducts);

module.exports = router;