// src/components/BookCard.jsx
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={book.coverImage || "https://via.placeholder.com/300x400"}
        alt={book.title}
        className="h-60 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{book.title}</h2>
        <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
        <div className="flex items-center text-yellow-500 mb-2">
          <span>⭐⭐⭐⭐☆</span>
        </div>
        <p className="text-sm text-gray-700">100+ Reviews</p>
      </div>
    </div>
  );
};

export default BookCard;
