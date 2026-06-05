const express = require("express");

const {
  getDashboardSummary,
  getRecentActivities,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getDashboardSummary);

router.get(
  "/recent-activities",
  getRecentActivities
);

module.exports = router;