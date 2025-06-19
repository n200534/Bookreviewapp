const express = require("express");
const router = express.Router();
const {
  getReviewsForBook,
  submitReview,
} = require("../controllers/reviewController");

const { protect } = require("../middleware/authMiddleware");

// Public route to fetch reviews
router.get("/", getReviewsForBook);

// Protected route to submit review
router.post("/", protect, submitReview);

module.exports = router;