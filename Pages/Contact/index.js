import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Contact() {
  const { setTitle } = usePageTitle();
  React.useEffect(() => setTitle('Contact'), [setTitle]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>Contact Me</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
        <TextField fullWidth label="Your Name" margin="normal" required />
        <TextField fullWidth label="Your Email" margin="normal" type="email" required />
        <TextField
          fullWidth
          label="Your Message"
          margin="normal"
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Send
        </Button>
      </Box>
    </>
  );
}
