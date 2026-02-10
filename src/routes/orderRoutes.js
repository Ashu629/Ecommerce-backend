// backend/src/routes/orderRoutes.js

const express = require("express");
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.get("/my/:userId", getUserOrders);
router.get("/", getAllOrders);
router.put("/:id/status", updateOrderStatus);


module.exports = router;
