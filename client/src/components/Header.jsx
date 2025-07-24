// client/src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1><Link to="/" style={linkStyle}>My MERN Blog</Link></h1>
      <nav>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/posts" style={linkStyle}>Posts</Link> {/* NEW: Posts Link */}
        {/* Add more navigation links here */}
      </nav>
    </header>
  );
};

export default Header;