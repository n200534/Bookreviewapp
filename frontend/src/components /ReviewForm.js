import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Box,
  Alert
} from '@mui/material';
import StarRating from './StarRating';

const ReviewForm = ({ open, onClose, book }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (rating === 0) {
      setError('Please provide a rating');
      return;
    }
    if (comment.trim().length < 10) {
      setError('Please write at least 10 characters in your review');
      return;
    }
    
    // Here you would typically submit to your API
    console.log('Submitting review:', { rating, comment, book: book?._id });
    
    // Reset form
    setRating(0);
    setComment('');
    setError('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Typography variant="h5" component="h2">
          Write a Review
        </Typography>
        {book && (
          <Typography variant="subtitle1" color="text.secondary">
            for "{book.title}" by {book.author}
          </Typography>
        )}
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Rating *
          </Typography>
          <StarRating
            rating={rating}
            interactive={true}
            onRatingChange={setRating}
            showNumber={false}
            size="large"
          />
        </Box>
        
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Review"
          placeholder="Share your thoughts about this book..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          helperText={`${comment.length}/1000 characters`}
          inputProps={{ maxLength: 1000 }}
        />
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DialogContent>
      
      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="contained" 
          color="primary"
          disabled={rating === 0 || comment.trim().length < 10}
        >
          Submit Review
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReviewForm;