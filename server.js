// backend/server.js
const express = require("express");
const cors = require("cors");

// route files
const productRoutes = require("./src/routes/productRoutes");
const authRoutes = require("./src/routes/authRoutes");
const recommendationRoutes = require("./src/routes/recommendationRoutes");
const interactionRoutes = require("./src/routes/interactionRoutes");
const orderRoutes= require("./src/routes/orderRoutes");

const app = express();

// Middleware
app.use(cors({
  origin:"*"
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.use("/images", express.static("public/images"));
// Main routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/recommend", recommendationRoutes);
app.use("/api/interactions", interactionRoutes);
app.use("/api/orders",orderRoutes);



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});