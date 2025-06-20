import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Paper,
  Chip
} from '@mui/material';
import { ArrowBack, FavoriteOutlined, Share } from '@mui/icons-material';
import StarRating from '../components /StarRating';
import ReviewCard from '../components /ReviewCard';
import { mockReviews } from '../data/mockData';

const BookDetailPage = ({ book, onBack, onWriteReview }) => {
  if (!book) return null;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Button
        startIcon={<ArrowBack />}
        onClick={onBack}
        sx={{ mb: 3 }}
        color="primary"
      >
        Back to Books
      </Button>

      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        <Grid container>
          <Grid item xs={12} md={4} sx={{ p: 4 }}>
            <Box sx={{ textAlign: 'center' }}>
              <img
                src={book.coverImage}
                alt={book.title}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)'
                }}
              />
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8} sx={{ p: 4 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              {book.title}
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
              by {book.author}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
              <StarRating rating={book.averageRating} size="large" />
              <Typography variant="body1" color="text.secondary">
                ({book.totalRatings} reviews)
              </Typography>
              <Chip label={book.genre} color="primary" />
            </Box>

            <Typography variant="body1" sx={{ lineHeight: 1.7, mb: 4 }}>
              {book.description}
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                onClick={onWriteReview}
              >
                Write Review
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<FavoriteOutlined />}
              >
                Add to Wishlist
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Share />}
              >
                Share
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
          Reviews
        </Typography>
        
        <Grid container spacing={3}>
          {mockReviews.map((review) => (
            <Grid item xs={12} key={review._id}>
              <ReviewCard review={review} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default BookDetailPage;