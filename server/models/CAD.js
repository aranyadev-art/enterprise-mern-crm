const mongoose = require("mongoose");

const cadSchema = new mongoose.Schema(

  {
    cadCode: {
      type: String,
      required: true,
      unique: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    duration: {
      type: String,
    },

    designFile: {
      type: String,
    },

    cpxSent: {
      type: Boolean,
      default: false,
    },

    comment: {
      type: String,
    },

    status: {
      type: String,

      enum: [
        "Pending",
        "In Progress",
        "Completed",
      ],

      default: "Pending",
    },

  },

  {
    timestamps: true,
  }

);

module.exports = mongoose.model("CAD", cadSchema);