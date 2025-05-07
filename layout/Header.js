// src/layout/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component={RouterLink} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
          Yumna Shahid
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          {['Home', 'Education', 'Projects', 'Skills', 'Contact'].map((text) => (
            <Button
              key={text}
              color="inherit"
              component={RouterLink}
              to={`/${text.toLowerCase()}`}
              sx={{ textTransform: 'none' }}
            >
              {text}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}