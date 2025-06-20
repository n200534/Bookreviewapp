import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import BooksListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import UserProfilePage from './pages/UserProfilePage';
import PostBookPage from './pages/PostBookPage'; // Import PostBookPage
import ReviewForm from './components /ReviewForm';
import Navbar from './components /Navbar';
import AuthPage from './pages/AuthPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed',
    },
    secondary: {
      main: '#3b82f6',
    },
  },
});

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedBook, setSelectedBook] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleLoginSuccess = () => {
    setLoggedIn(true);
    setCurrentPage('home');
  };

  const renderPage = () => {
    if (!loggedIn) {
      return <AuthPage onLoginSuccess={handleLoginSuccess} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} onBookSelect={setSelectedBook} />;
      case 'books':
        return (
          <BooksListPage
            onBookSelect={(book) => {
              setSelectedBook(book);
              setCurrentPage('book-detail');
            }}
          />
        );
      case 'book-detail':
        return (
          <BookDetailPage
            book={selectedBook}
            onBack={() => setCurrentPage('books')}
            onWriteReview={() => setShowReviewForm(true)}
          />
        );
      case 'profile':
        return <UserProfilePage />;
      case 'post-book':
        return (
          <PostBookPage
            onBack={() => setCurrentPage('home')}
            onBookPosted={() => {
              setCurrentPage('books');
              // You can add additional logic here like showing a success message
            }}
          />
        );
      default:
        return <HomePage onNavigate={setCurrentPage} onBookSelect={setSelectedBook} />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loggedIn && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />}
      {renderPage()}
      {loggedIn && (
        <ReviewForm
          open={showReviewForm}
          onClose={() => setShowReviewForm(false)}
          book={selectedBook}
        />
      )}
    </ThemeProvider>
  );
};

export default App;