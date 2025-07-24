// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import PostList from './components/PostList'; 

// Basic CSS for a full-height layout
const appContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainContentStyle = {
  flex: 1, // Allows main content to grow and push footer down
};

function App() {
  return (
    <Router>
      <div style={appContainerStyle}>
        <Header /> {/* Render the Header component */}
        <main style={mainContentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes here as you build your pages (e.g., /posts, /categories, /login, /register) */}
          </Routes>
        </main>
        <Footer /> {/* Render the Footer component */}
      </div>
    </Router>
  );
}

export default App;