// client/src/components/PostList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const PostList = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages

  useEffect(() => {
    // This effect runs once after the component mounts
    const fetchPosts = async () => {
      try {
        // Make GET request to your backend API
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data.data); // Assuming your posts are in response.data.data
        setLoading(false); // Stop loading
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts(); // Call the async function
  }, []); // Empty dependency array means this effect runs only once on mount

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>Loading posts...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', marginTop: '50px', color: 'red' }}>{error}</div>;
  }

  if (posts.length === 0) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>No posts found.</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Latest Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '15px',
          marginBottom: '20px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ color: '#007bff', marginBottom: '10px' }}>{post.title}</h3>
          <p style={{ fontSize: '0.9em', color: '#666', marginBottom: '10px' }}>
            Category: {post.category ? post.category.name : 'Uncategorized'} |
            Published: {new Date(post.createdAt).toLocaleDateString()}
          </p>
          <p>{post.content.substring(0, 150)}...</p> {/* Display first 150 chars */}
          {/* You'll add a "Read More" link here later */}
        </div>
      ))}
    </div>
  );
};

export default PostList;