const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },

    dueBalance: {
      type: Number,
      required: true,
      default: 0,
    },

    creditLimit: {
      type: Number,
      required: true,
      default: 0,
    },

    excessCheck: {
      type: Boolean,
      default: false,
    },

    shippingApproval: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", accountSchema);