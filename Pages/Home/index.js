
import React from 'react';
import { Box, Typography, Avatar, Paper, useTheme } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';
import profileImage from '../../assets/profile.jpg';

export default function Home() {
  const { setTitle } = usePageTitle();
  const theme = useTheme();

  React.useEffect(() => setTitle('Home'), [setTitle]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Avatar
        src={profileImage}
        alt="Profile"
        sx={{ width: 200, height: 200, border: `4px solid ${theme.palette.primary.main}` }}
      />
      <Typography variant="h4" align="center">Welcome to My Portfolio</Typography>
      <Paper elevation={3} sx={{ p: 3, maxWidth: 800 }}>
        <Typography variant="body1" paragraph>
          Hi, I'm Yumna Shahid! I'm a passionate developer with expertise in React, JavaScript, and modern web technologies.
        </Typography>
        <Typography variant="body1" paragraph>
          This portfolio showcases my projects, skills, and educational background. Feel free to explore and get in touch!
        </Typography>
      </Paper>
    </Box>
  );
}