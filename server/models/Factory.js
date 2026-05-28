const mongoose = require("mongoose");

const factorySchema = new mongoose.Schema(
  {
    quotation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Quotation",
      required: true,
    },

    factoryEmployee: {
      type: String,
      required: true,
    },

    orderNo: {
      type: String,
    },

    shippingNo: {
      type: Number,
    },

    metalWeight: {
      type: String,
    },

    stoneCtWeight: {
      type: String,
    },

    finalWeight: {
      type: String,
    },

    dailyComment: {
      type: String,
    },

    completed: {
      type: Boolean,
      default: false,
    },

    completedDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Factory", factorySchema);