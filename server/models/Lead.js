const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema(
  {
    leadName: {
      type: String,
      required: true,
    },

    companyName: {
      type: String,
    },

    email: {
      type: String,
    },

    phone: {
      type: String,
    },

    leadSource: {
      type: String,
      enum: ["Website", "Facebook", "Instagram", "Referral", "Call", "Other"],
      default: "Website",
    },

    assignedTo: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "New",
        "Contacted",
        "Qualified",
        "Proposal Sent",
        "Converted",
        "Lost",
      ],
      default: "New",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lead", leadSchema);
