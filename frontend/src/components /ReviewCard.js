import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Chip
} from '@mui/material';
import { Person } from '@mui/icons-material';
import StarRating from './StarRating';

const ReviewCard = ({ review }) => {
  return (
    <Card sx={{ borderLeft: '4px solid #7c3aed' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>
              <Person />
            </Avatar>
            <Box>
              <Typography variant="h6" component="h4">
                {review.user.username}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(review.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
          </Box>
          <StarRating rating={review.rating} size="small" showNumber={false} />
        </Box>
        
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          {review.comment}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;