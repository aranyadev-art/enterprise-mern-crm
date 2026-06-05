const mongoose = require("mongoose");

const shippingSchema = new mongoose.Schema(
  {
    gfjNo: {
      type: String,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },

    salesRep: {
      type: String,
    },

    clientName: {
      type: String,
    },

    finalQuotation: {
      type: String,
    },

    metalStoneDetails: {
      type: String,
    },

    trackingNumber: {
      type: String,
    },

    systemType: {
      type: String,
    },

    status: {
      type: String,
      enum: ["Pending", "Packed", "Shipped", "Delivered"],
      default: "Pending",
    },
quotation: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Quotation",
  required: true,
}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Shipping", shippingSchema);