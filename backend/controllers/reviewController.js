const Review = require("../models/Review");
const Book = require("../models/Book");

// @desc   Get reviews for a book
// @route  GET /api/reviews?bookId=xxx
exports.getReviewsForBook = async (req, res) => {
  const { bookId } = req.query;

  if (!bookId) return res.status(400).json({ message: "bookId query param is required" });

  try {
    const reviews = await Review.find({ book: bookId })
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.status(200).json({ total: reviews.length, reviews });
  } catch (error) {
    res.status(500).json({ message: "Failed to get reviews", error: error.message });
  }
};

// @desc   Submit a new review
// @route  POST /api/reviews
exports.submitReview = async (req, res) => {
  const { bookId, rating, comment } = req.body;

  if (!bookId || !rating) {
    return res.status(400).json({ message: "bookId and rating are required" });
  }

  try {
    // Check for duplicate review
    const existingReview = await Review.findOne({ user: req.user.id, book: bookId });
    if (existingReview) return res.status(400).json({ message: "You already reviewed this book" });

    // Create new review
    const review = new Review({
      user: req.user.id,
      book: bookId,
      rating,
      comment,
    });

    await review.save();

    // Update average rating and totalRatings in Book
    const reviews = await Review.find({ book: bookId });
    const totalRatings = reviews.length;
    const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / totalRatings;

    await Book.findByIdAndUpdate(bookId, {
      averageRating,
      totalRatings,
    });

    res.status(201).json({ message: "Review submitted", review });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit review", error: error.message });
  }
};