const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema(
  {
    quotationId: {
      type: String,
      unique: true,
    },

    metalPrice: {
      type: Number,
      required: true,
    },

    stonePrice: {
      type: Number,
      required: true,
    },

    purity: {
      type: Number,
      required: true,
    },

    currency: {
      type: String,
      default: "INR",
    },

    totalPrice: {
      type: Number,
      default: 0,
    },

    priceBreakdown: {
      type: String,
    },

    sendEmail: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quotation", quotationSchema);