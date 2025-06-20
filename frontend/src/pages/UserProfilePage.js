import React from 'react';
import {
  Container,
  Paper,
  Typography,
  Avatar,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Divider
} from '@mui/material';
import { Person, Edit, Book, RateReview, Favorite } from '@mui/icons-material';
import { mockUser } from '../data/mockData';

const UserProfilePage = () => {
  const userStats = [
    { icon: RateReview, value: '12', label: 'Reviews Written', color: '#7c3aed' },
    { icon: Book, value: '45', label: 'Books Read', color: '#3b82f6' },
    { icon: Favorite, value: '8', label: 'Wishlist Items', color: '#ef4444' }
  ];

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ overflow: 'hidden' }}>
        {/* Profile Header */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
            color: 'white',
            p: 4
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Avatar
              sx={{
                width: 96,
                height: 96,
                bgcolor: 'rgba(255,255,255,0.2)',
                fontSize: '2rem'
              }}
            >
              <Person sx={{ fontSize: '3rem' }} />
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
                {mockUser.username}
              </Typography>
              <Typography variant="body1" sx={{ color: '#e0e7ff', mb: 1 }}>
                {mockUser.email}
              </Typography>
              <Typography variant="body2" sx={{ color: '#c7d2fe' }}>
                Member since {new Date(mockUser.createdAt).toLocaleDateString()}
              </Typography>
            </Box>
            <Button
              variant="outlined"
              startIcon={<Edit />}
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.1)',
                  borderColor: 'white'
                }
              }}
            >
              Edit Profile
            </Button>
          </Box>
        </Box>

        {/* Profile Content */}
        <Box sx={{ p: 4 }}>
          {/* Stats */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {userStats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card sx={{ textAlign: 'center', height: '100%' }}>
                  <CardContent>
                    <Avatar
                      sx={{
                        bgcolor: `${stat.color}20`,
                        color: stat.color,
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        mb: 2
                      }}
                    >
                      <stat.icon />
                    </Avatar>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: stat.color, mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4 }} />

          {/* Bio Section */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
              About Me
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
              {mockUser.bio || 'No bio added yet. Click edit profile to add your bio.'}
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Recent Activity */}
          <Box>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
              Recent Activity
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <Typography variant="body1" color="text.secondary">
                No recent activity to show.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default UserProfilePage;