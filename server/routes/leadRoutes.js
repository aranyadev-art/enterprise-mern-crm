const express = require("express");

const {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
  convertLeadToClient,
} = require("../controllers/leadController");

const router = express.Router();


// CREATE LEAD
router.post("/", createLead);


// GET ALL LEADS
router.get("/", getLeads);


// UPDATE LEAD
router.put("/:id", updateLead);


// DELETE LEAD
router.delete("/:id", deleteLead);

// CONVERT LEAD TO CLIENT
router.post("/convert/:id", convertLeadToClient);


module.exports = router;