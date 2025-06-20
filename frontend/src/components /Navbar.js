import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar
} from '@mui/material';
import { Home, Book, Person, Add } from '@mui/icons-material';

const Navbar = ({ currentPage, onNavigate }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#7c3aed' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          BookReview
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<Home />}
            onClick={() => onNavigate('home')}
            sx={{ 
              backgroundColor: currentPage === 'home' ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Home
          </Button>
          
          <Button
            color="inherit"
            startIcon={<Book />}
            onClick={() => onNavigate('books')}
            sx={{ 
              backgroundColor: currentPage === 'books' ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Books
          </Button>

          <Button
            color="inherit"
            startIcon={<Add />}
            onClick={() => onNavigate('post-book')}
            sx={{ 
              backgroundColor: currentPage === 'post-book' ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            Post Book
          </Button>
          
          <IconButton
            color="inherit"
            onClick={() => onNavigate('profile')}
            sx={{ 
              backgroundColor: currentPage === 'profile' ? 'rgba(255,255,255,0.2)' : 'transparent',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.main' }}>
              <Person />
            </Avatar>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;