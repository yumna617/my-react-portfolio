import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Projects() {
  const { setTitle } = usePageTitle();
  React.useEffect(() => setTitle('Projects'), [setTitle]);

  const projects = [
    { title: 'Portfolio Website', description: 'Designed with HTML, CSS, Bootstrap.' },
    { title: 'Chess Game', description: 'Simple and easy-to-use game.' },
    { title: 'Fitness App', description: 'Step count & water intake tracker.' },
  ];

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((project, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
