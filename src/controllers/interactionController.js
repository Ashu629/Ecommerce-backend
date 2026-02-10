const interactions = require("../data/interactions");

// POST /api/interactions
// body: { productId, type }
const logInteraction = (req, res) => {
  const { productId, type } = req.body;

  if (!productId || !type) {
    return res.status(400).json({ message: "productId and type are required" });
  }

  interactions.push({
    productId,
    type, // "view" or "purchase"
    timestamp: new Date().toISOString(),
  });

  return res.json({ message: "Interaction logged" });
};

module.exports = {
  logInteraction,
};