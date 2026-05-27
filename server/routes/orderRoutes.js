const express = require("express");

const router = express.Router();

const {
  createOrder,
  getOrders,
} = require("../controllers/orderController");

// CREATE ORDER
router.post("/create", createOrder);

// GET ORDERS
router.get("/", getOrders);

module.exports = router;