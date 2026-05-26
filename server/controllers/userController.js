const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

const generateToken = (id) => {
  return jwt.sign(
    { id },
    "mysecretkey",
    {
      expiresIn: "30d",
    }
  );
};

const registerUser = async (req, res) => {

  try {

    const {
      firstName,
      lastName,
      email,
      phone,
      password,
      role,
    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role,
    });

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(401).json({
        message: "Invalid email"
      });

    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(401).json({
        message: "Invalid password"
      });

    }

    res.json({

      _id: user._id,
      firstName: user.firstName,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),

    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const getUsers = async (req, res) => {

  try {

    const users = await User.find()
      .select("-password");

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// CREATE USER
const createUser = async (req, res) => {

  try {

    const {

      firstName,
      lastName,
      email,
      password,
      role,
      phone,
      address,
      city,
      state,
      zip,
      status,
      moduleAccess

    } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {

      return res.status(400).json({
        message: "User already exists"
      });

    }

    const bcrypt = require("bcryptjs");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      phone,
      address,
      city,
      state,
      zip,
      status,
      moduleAccess

    });

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// UPDATE USER

const updateUser = async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {

      return res.status(404).json({
        message: "User not found"
      });

    }

    user.firstName =
      req.body.firstName || user.firstName;

    user.lastName =
      req.body.lastName || user.lastName;

    user.email =
      req.body.email || user.email;

    user.role =
      req.body.role || user.role;

    user.phone =
      req.body.phone || user.phone;

    user.status =
      req.body.status || user.status;

    const updatedUser = await user.save();

    res.json(updatedUser);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

const deleteUser = async (req, res) => {

  try {

    console.log("DELETE ID:", req.params.id);

    const deletedUser = await User.findByIdAndDelete(
      req.params.id
    );

    if (!deletedUser) {

      return res.status(404).json({
        message: "User not found",
      });

    }

    res.json({
      message: "User deleted successfully",
    });

  } catch (error) {

    console.log("DELETE ERROR:", error);

    res.status(500).json({
      message: error.message,
    });

  }

};





module.exports = {
  loginUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
};
