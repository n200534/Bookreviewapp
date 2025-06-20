export const mockBooks = [
  {
    _id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop',
    averageRating: 4.2,
    totalRatings: 156,
    createdAt: '2024-01-15'
  },
  {
    _id: '2',
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An Easy & Proven Way to Build Good Habits & Break Bad Ones. Tiny changes, remarkable results.',
    genre: 'Self-Help',
    coverImage: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
    averageRating: 4.7,
    totalRatings: 298,
    createdAt: '2024-01-10'
  },
  {
    _id: '3',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.',
    genre: 'Romance',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    averageRating: 4.5,
    totalRatings: 187,
    createdAt: '2024-01-20'
  },
  {
    _id: '4',
    title: 'Dune',
    author: 'Frank Herbert',
    description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.',
    genre: 'Sci-Fi',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=400&fit=crop',
    averageRating: 4.3,
    totalRatings: 342,
    createdAt: '2024-01-08'
  },
  {
    _id: '5',
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    description: 'A woman\'s act of violence against her husband and her refusal to speak sends shockwaves through London.',
    genre: 'Mystery',
    coverImage: 'https://images.unsplash.com/photo-1535905557558-afc4877cdf3f?w=300&h=400&fit=crop',
    averageRating: 4.1,
    totalRatings: 223,
    createdAt: '2024-01-25'
  },
  {
    _id: '6',
    title: 'Educated',
    author: 'Tara Westover',
    description: 'A memoir about a woman who grows up in a survivalist family and eventually escapes to learn about the wider world through education.',
    genre: 'Biography',
    coverImage: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=300&h=400&fit=crop',
    averageRating: 4.6,
    totalRatings: 412,
    createdAt: '2024-01-12'
  }
];

export const mockReviews = [
  {
    _id: '1',
    user: { username: 'bookworm23', _id: 'u1' },
    book: '1',
    rating: 5,
    comment: 'Absolutely phenomenal! This book changed my perspective on life choices. The concept of the midnight library is both beautiful and profound.',
    createdAt: '2024-02-01'
  },
  {
    _id: '2',
    user: { username: 'reader_sarah', _id: 'u2' },
    book: '1',
    rating: 4,
    comment: 'Beautiful concept and well-executed. Highly recommend for anyone going through a tough time in life.',
    createdAt: '2024-02-03'
  },
  {
    _id: '3',
    user: { username: 'literary_lover', _id: 'u3' },
    book: '1',
    rating: 4,
    comment: 'Matt Haig has a wonderful way of exploring deep philosophical questions through engaging storytelling.',
    createdAt: '2024-02-05'
  }
];

export const mockUser = {
  _id: 'u1',
  username: 'bookworm23',
  email: 'bookworm@example.com',
  bio: 'Passionate reader who loves fantasy, sci-fi, and contemporary fiction. Always looking for the next great book to get lost in!',
  role: 'user',
  createdAt: '2023-06-15'
};