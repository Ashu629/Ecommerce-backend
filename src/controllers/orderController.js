// backend/src/controllers/orderController.js

const orders = require("../data/orders");

// POST /api/orders
const createOrder = (req, res) => {
  const { userId, items, totalAmount } = req.body;

  if (!userId || !items || items.length === 0) {
    return res.status(400).json({ message: "Invalid order data" });
  }

  const newOrder = {
    id: Date.now().toString(),
    userId,
    items,
    totalAmount,
    status: "Placed",
    createdAt: new Date().toISOString(),
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
};

// GET /api/orders/my/:userId
const getUserOrders = (req, res) => {
  const { userId } = req.params;
  const userOrders = orders.filter(order => order.userId === userId);
  res.json(userOrders);
};

// GET /api/orders
const getAllOrders = (req, res) => {
  res.json(orders);
};

// PUT /api/orders/:id/status
const updateOrderStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = orders.find((o) => o.id === id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = status;
  res.json(order);
};


module.exports = {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
};

