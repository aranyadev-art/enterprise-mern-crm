const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

mongoose.connect("YOUR_MONGODB_URL")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

async function createAdmin() {
  try {

    const hashedPassword = await bcrypt.hash("123456", 10);

    const admin = new User({
      name: "Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
    });

    await admin.save();

    console.log("Admin Created Successfully");

    process.exit();

  } catch (error) {
    console.log(error);
    process.exit();
  }
}

createAdmin();