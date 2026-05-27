const express = require("express");
const router = express.Router();

const {
  createQuotation,
  getQuotations,
} = require("../controllers/quotationController");

router.post("/create", createQuotation);
router.get("/", getQuotations);

module.exports = router;