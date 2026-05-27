const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
      unique: true,
    },

    salesName: {
      type: String,
      required: true,
    },

    cadName: {
      type: String,
      required: true,
    },

    clientName: {
      type: String,
      required: true,
    },

    quotationId: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: [
        "Pending",
        "CAD Started",
        "CAD Approved",
        "Production",
        "Completed",
        "Delivered",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);