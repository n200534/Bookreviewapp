const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
} = require("../controllers/authController");

const {
  getUserProfile,
  updateUserProfile,
} = require("../controllers/userController");

const { protect } = require("../middleware/authMiddleware");

// Auth routes
router.post("/register", registerUser);
router.post("/login", loginUser);


// User profile routes
router.get("/:id", protect, getUserProfile);
router.put("/:id", protect, updateUserProfile);

module.exports = router; 
