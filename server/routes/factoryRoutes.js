const express = require("express");

const router = express.Router();

const {
  createFactory,
  getFactories,
  updateFactory,
} = require("../controllers/factoryController");

router.get("/", getFactories);

router.post("/", createFactory);

router.put("/:id", updateFactory);

module.exports = router;