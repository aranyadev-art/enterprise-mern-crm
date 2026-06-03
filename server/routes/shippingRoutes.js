const express = require("express");

const {
  createShipping,
  getShippings,
} = require("../controllers/shippingController");

const router = express.Router();

router.post("/", createShipping);

router.get("/", getShippings);

module.exports = router;