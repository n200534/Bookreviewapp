const User = require("../models/User");

// @desc   Get user profile
// @route  GET /api/users/:id
// @access Protected
exports.getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to get user profile", error: error.message });
  }
};

// @desc   Update user profile
// @route  PUT /api/users/:id
// @access Protected
exports.updateUserProfile = async (req, res) => {
  const { username, email, password } = req.body;

  if (req.user.id !== req.params.id) {
    return res.status(403).json({ message: "You can only update your own profile" });
  }

  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    if (username) user.username = username;
    if (email) user.email = email;
    if (password) user.password = password; // Will be hashed in pre-save middleware

    const updatedUser = await user.save();

    res.status(200).json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update user profile", error: error.message });
  }
};