import React from 'react';
import { Rating, Box, Typography } from '@mui/material';

const StarRating = ({ rating, size = 'medium', showNumber = true, interactive = false, onRatingChange }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Rating
        value={rating}
        onChange={(event, newValue) => {
          if (interactive && onRatingChange) {
            onRatingChange(newValue);
          }
        }}
        readOnly={!interactive}
        size={size}
        precision={0.1}
      />
      {showNumber && (
        <Typography variant="body2" color="text.secondary">
          {rating.toFixed(1)}
        </Typography>
      )}
    </Box>
  );
};

export default StarRating;