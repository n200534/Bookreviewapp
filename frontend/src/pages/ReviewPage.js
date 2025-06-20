import React, { useState } from 'react';

export default function ReviewFormPage() {
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ rating, comment });
    alert('Review Submitted!');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Submit a Review</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="border p-2 w-full rounded"
          required
        >
          <option value="">Select Rating</option>
          <option value="1">1 - Poor</option>
          <option value="2">2 - Okay</option>
          <option value="3">3 - Good</option>
          <option value="4">4 - Great</option>
          <option value="5">5 - Excellent</option>
        </select>

        <textarea
          className="border p-2 w-full rounded"
          placeholder="Write your review..."
          rows="4"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
