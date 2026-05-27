const express = require("express");

const {
  createAccount,
  getAccounts,
  updateAccount,
  deleteAccount,
} = require("../controllers/accountController");

const router = express.Router();


// CREATE
router.post("/", createAccount);

// GET ALL
router.get("/", getAccounts);

// UPDATE
router.put("/:id", updateAccount);

// DELETE
router.delete("/:id", deleteAccount);

module.exports = router;