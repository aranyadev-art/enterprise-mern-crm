const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    clientName: {
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

    assignedTo: {
      type: String,
    },

    status: {
      type: String,
      default: "Active",
    },

    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);