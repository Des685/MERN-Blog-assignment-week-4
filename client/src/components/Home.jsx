// client/src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to Your MERN Blog!</h1>
      <p>This is the homepage of your blog. Start building your amazing content!</p>
      <img
        src="https://via.placeholder.com/400x200?text=MERN+Blog"
        alt="MERN Blog Placeholder"
        style={{ marginTop: '20px', borderRadius: '8px' }}
      />
    </div>
  );
};

export default Home;