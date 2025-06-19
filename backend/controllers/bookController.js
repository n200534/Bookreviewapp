const Book = require("../models/Book");

exports.getAllBooks = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;
    const totalBooks = await Book.countDocuments();
    const books = await Book.find().skip(skip).limit(limit).sort({ createdAt: -1 });

    res.status(200).json({
      total: totalBooks,
      page,
      limit,
      books,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve books", error: error.message });
  }
};


exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve book", error: error.message });
  }
};

//only admin
exports.addBook = async (req, res) => {
  const { title, author, description, genre, coverImage } = req.body;

  try {
    const newBook = new Book({
      title,
      author,
      description,
      genre,
      coverImage,
    });

    await newBook.save();
    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (error) {
    res.status(500).json({ message: "Failed to add book", error: error.message });
  }
};
