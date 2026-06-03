const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");




const {
  registerUser,
  loginUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  forgotPassword,
  resetPassword
  
  
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {

  res.json(req.user);

});

router.get("/", getUsers);
router.post("/", protect, createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
router.post(
  "/forgot-password",
  forgotPassword
);
router.post(
  "/reset-password/:token",
  resetPassword
);




module.exports = router;