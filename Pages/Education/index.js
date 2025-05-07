import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { usePageTitle } from '../../context/PageTitleContext';

export default function Education() {
  const { setTitle } = usePageTitle();
  React.useEffect(() => setTitle('Education'), [setTitle]);

  const rows = [
    { degree: 'ICS', institution: 'FESS', year: '2023' },
    { degree: 'BSCS (Ongoing)', institution: 'ITU', year: '2027' },
  ];

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>Education</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Degree</strong></TableCell>
              <TableCell><strong>Institution</strong></TableCell>
              <TableCell><strong>Year</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={idx}>
                <TableCell>{row.degree}</TableCell>
                <TableCell>{row.institution}</TableCell>
                <TableCell>{row.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
