import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Alert,
  Avatar,
  Snackbar,
  Card,
  CardMedia,
  InputAdornment
} from '@mui/material';
import {
  BookmarkAdd,
  Person,
  Description,
  Category,
  Image,
  CloudUpload,
  Check
} from '@mui/icons-material';

const PostBookPage = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    genre: '',
    coverImage: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const genres = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Thriller',
    'Biography',
    'History',
    'Self-Help',
    'Poetry',
    'Drama',
    'Horror',
    'Adventure',
    'Philosophy',
    'Business',
    'Health',
    'Travel',
    'Children',
    'Young Adult'
  ];

  const handleInputChange = (field) => (event) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.author.trim()) {
      newErrors.author = 'Author is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().length < 50) {
      newErrors.description = 'Description must be at least 50 characters';
    }
    
    if (!formData.genre) {
      newErrors.genre = 'Please select a genre';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Book data to submit:', formData);
      
      setShowSuccess(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          author: '',
          description: '',
          genre: '',
          coverImage: ''
        });
        setShowSuccess(false);
        onNavigate('books'); // Navigate back to books page
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting book:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box>
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Avatar
            sx={{
              bgcolor: 'rgba(255,255,255,0.2)',
              width: 80,
              height: 80,
              mx: 'auto',
              mb: 3
            }}
          >
            <BookmarkAdd sx={{ fontSize: 40 }} />
          </Avatar>
          <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Share a Great Book
          </Typography>
          <Typography variant="h6" sx={{ color: '#e0e7ff', maxWidth: 600, mx: 'auto' }}>
            Help fellow readers discover amazing stories by adding your favorite books to our community
          </Typography>
        </Container>
      </Box>

      {/* Form Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 6, borderRadius: 3, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              {/* Title Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Book Title"
                  value={formData.title}
                  onChange={handleInputChange('title')}
                  error={!!errors.title}
                  helperText={errors.title}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BookmarkAdd color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>

              {/* Author Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Author Name"
                  value={formData.author}
                  onChange={handleInputChange('author')}
                  error={!!errors.author}
                  helperText={errors.author}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>

              {/* Genre Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  select
                  label="Genre"
                  value={formData.genre}
                  onChange={handleInputChange('genre')}
                  error={!!errors.genre}
                  helperText={errors.genre || 'Select the primary genre of the book'}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Category color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                >
                  {genres.map((genre) => (
                    <MenuItem key={genre} value={genre}>
                      {genre}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              {/* Cover Image URL Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Cover Image URL (Optional)"
                  value={formData.coverImage}
                  onChange={handleInputChange('coverImage')}
                  placeholder="https://example.com/book-cover.jpg"
                  helperText="Provide a URL to the book's cover image"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Image color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>

              {/* Image Preview */}
              {formData.coverImage && (
                <Grid item xs={12}>
                  <Card sx={{ maxWidth: 200, mx: 'auto' }}>
                    <CardMedia
                      component="img"
                      height="250"
                      image={formData.coverImage}
                      alt="Book cover preview"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </Card>
                </Grid>
              )}

              {/* Description Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  label="Book Description"
                  value={formData.description}
                  onChange={handleInputChange('description')}
                  error={!!errors.description}
                  helperText={errors.description || `${formData.description.length}/50 characters minimum`}
                  placeholder="Provide a compelling description of the book. What makes it special? What can readers expect?"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 1 }}>
                        <Description color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    }
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
                  <Button
                    type="button"
                    variant="outlined"
                    size="large"
                    onClick={() => onNavigate('books')}
                    sx={{ minWidth: 120 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={isSubmitting}
                    startIcon={isSubmitting ? <CloudUpload /> : <BookmarkAdd />}
                    sx={{
                      minWidth: 160,
                      background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #6d28d9 0%, #2563eb 100%)',
                      }
                    }}
                  >
                    {isSubmitting ? 'Publishing...' : 'Publish Book'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
          icon={<Check />}
        >
          Book published successfully! Redirecting to books page...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default PostBookPage;