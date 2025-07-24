// client/src/components/Footer.js
import React from 'react';

const footerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
  marginTop: 'auto', // Pushes footer to the bottom
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} MERN Blog. All rights reserved.</p>
    </footer>
  );
};

export default Footer;