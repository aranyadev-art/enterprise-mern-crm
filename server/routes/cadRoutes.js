const express = require("express");

const router = express.Router();

const {
  createCAD,
} = require("../controllers/cadController");

router.post("/", createCAD);

module.exports = router;