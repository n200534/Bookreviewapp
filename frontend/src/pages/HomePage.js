import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Avatar
} from '@mui/material';
import { Book, RateReview, People, EmojiEvents } from '@mui/icons-material';
import BookCard from '../components /BookCard';
import { mockBooks } from '../data/mockData';

const HomePage = ({ onNavigate, onBookSelect }) => {
  const stats = [
    { icon: Book, value: '10,000+', label: 'Books Available', color: '#7c3aed' },
    { icon: RateReview, value: '50,000+', label: 'Reviews Written', color: '#3b82f6' },
    { icon: People, value: '5,000+', label: 'Active Readers', color: '#10b981' },
    { icon: EmojiEvents, value: '500+', label: 'Top Rated Books', color: '#f59e0b' }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 3 }}>
            Discover Your Next Great Read
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, color: '#e0e7ff' }}>
            Join thousands of book lovers sharing reviews and discovering amazing stories
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: '#7c3aed',
                '&:hover': { bgcolor: '#f8fafc' }
              }}
              onClick={() => onNavigate('books')}
            >
              Explore Books
            </Button>
          
          </Box>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <Avatar
                  sx={{
                    bgcolor: `${stat.color}20`,
                    color: stat.color,
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  <stat.icon sx={{ fontSize: 32 }} />
                </Avatar>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Books */}
      <Box sx={{ bgcolor: '#f8fafc', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold' }}>
              Featured Books
            </Typography>
            <Button 
              color="primary"
              onClick={() => onNavigate('books')}
            >
              View All
            </Button>
          </Box>
          
          <Grid container spacing={4}>
            {mockBooks.slice(0, 3).map((book) => (
              <Grid item xs={12} md={4} key={book._id}>
                <BookCard
                  book={book}
                  variant="featured"
                  onClick={() => {
                    onBookSelect(book);
                    onNavigate('book-detail');
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;