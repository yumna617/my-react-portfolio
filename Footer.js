import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ p: 2, textAlign: 'center', bgcolor: 'black', color: 'white' }}>
      <Typography variant="body2">© 2025 Yumna Shahid | All Rights Reserved</Typography>
    </Box>
  );
}
