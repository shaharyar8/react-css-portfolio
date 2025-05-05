import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Footer.css';

function Footer() {
  return (
    <Box component="footer" className="footer-box">
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" className="footer-text">
          {'Copyright © '}
          Shaharyar Shahid {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
