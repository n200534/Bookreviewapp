import React from 'react';

export default function UserProfilePage() {
  const user = {
    name: 'Akshay Kumar',
    email: 'akshay@example.com',
    reviews: [
      { book: 'Book One', rating: 5, comment: 'Excellent!' },
      { book: 'Book Two', rating: 4, comment: 'Good read.' },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">My Profile</h1>
      <p className="text-gray-700">Name: {user.name}</p>
      <p className="text-gray-700 mb-4">Email: {user.email}</p>

      <h2 className="text-xl font-semibold mt-6">My Reviews</h2>
      <div className="space-y-4 mt-2">
        {user.reviews.map((r, i) => (
          <div key={i} className="border p-3 rounded bg-gray-100">
            <p className="font-semibold">{r.book}</p>
            <p>{r.comment}</p>
            <p className="text-yellow-500">Rating: {r.rating}⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
}
