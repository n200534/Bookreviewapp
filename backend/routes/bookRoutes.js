const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
} = require("../controllers/bookController");

const { protect, isAdmin } = require("../middleware/authMiddleware");


router.get("/", getAllBooks);
router.get("/:id", getBookById);


router.post("/", protect, isAdmin, addBook);

module.exports = router;
