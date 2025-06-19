const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");
const { protect, admin } = require("../middleware/authMiddleware");

// GET /books - Retrieve all books (with pagination)
router.get("/", protect, bookController.getAllBooks);

// GET /books/:id - Retrieve a specific book
router.get("/:id", protect, bookController.getBookById);

// POST /books - Add a new book (admin only)
router.post("/", protect, admin, bookController.addBook);

module.exports = router;