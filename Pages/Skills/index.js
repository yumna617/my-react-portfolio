import React from 'react';
import { Typography, Box, LinearProgress } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Skills() {
  const { setTitle } = usePageTitle();
  React.useEffect(() => setTitle('Skills'), [setTitle]);

  const skills = [
    { name: 'Java', value: 70 },
    { name: 'Python', value: 60 },
    { name: 'C++', value: 80 },
  ];

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>Skills</Typography>
      {skills.map((skill, idx) => (
        <Box key={idx} sx={{ mb: 3 }}>
          <Typography variant="body1">{skill.name} ({skill.value}%)</Typography>
          <LinearProgress variant="determinate" value={skill.value} />
        </Box>
      ))}
    </>
  );
}
