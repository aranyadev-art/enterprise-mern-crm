const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },
  resetToken: {
  type: String,
},

resetTokenExpire: {
  type: Date,
},

  role: {
    type: String,
    default: "Sales"
  },

  phone: String,

  address: String,

  city: String,

  state: String,

  zip: String,

  status: {
    type: String,
    default: "Active"
  },

  moduleAccess: [String]

}, {
  timestamps: true
});

module.exports = mongoose.model("User", userSchema);