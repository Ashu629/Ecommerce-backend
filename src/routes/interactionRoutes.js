const express = require("express");
const { logInteraction } = require("../controllers/interactionController");

const router = express.Router();

// POST /api/interactions
router.post("/", logInteraction);

module.exports = router;