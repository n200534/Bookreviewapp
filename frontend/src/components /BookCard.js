import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
  IconButton,
  Button
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import StarRating from './StarRating';

const BookCard = ({ book, variant = 'default', onClick }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);

  if (variant === 'featured') {
    return (
      <Card 
        sx={{ 
          background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
          color: 'white',
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
          }
        }}
        onClick={onClick}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 80, height: 112, borderRadius: 1 }}
              image={book.coverImage}
              alt={book.title}
            />
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                {book.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#e0e7ff', mb: 1 }}>
                by {book.author}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <StarRating rating={book.averageRating} size="small" />
                <Typography variant="caption" sx={{ color: '#e0e7ff' }}>
                  ({book.totalRatings})
                </Typography>
              </Box>
              <Chip 
                label={book.genre} 
                size="small"
                sx={{ 
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  color: 'white',
                  fontSize: '0.75rem'
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card 
      sx={{ 
        height: '100%',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
        }
      }}
      onClick={onClick}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="240"
          image={book.coverImage}
          alt={book.title}
        />
        <IconButton
          sx={{ 
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255,255,255,0.9)',
            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
        </IconButton>
      </Box>
      
      <CardContent>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          by {book.author}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <StarRating rating={book.averageRating} size="small" />
          <Typography variant="caption" color="text.secondary">
            ({book.totalRatings})
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Chip label={book.genre} size="small" variant="outlined" color="primary" />
          <Button size="small" color="primary">
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;