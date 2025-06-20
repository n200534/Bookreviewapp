import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box
} from '@mui/material';
import BookCard from '../components /BookCard';
import SearchFilter from '../components /SearchFilter';
import { mockBooks } from '../data/mockData';

const BooksListPage = ({ onBookSelect }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          Discover Books
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Find your next favorite book from our collection
        </Typography>
      </Box>

      <SearchFilter />

      <Grid container spacing={3}>
        {mockBooks.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={book._id}>
            <BookCard
              book={book}
              onClick={() => onBookSelect(book)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BooksListPage;