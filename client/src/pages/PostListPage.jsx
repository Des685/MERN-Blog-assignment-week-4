// client/src/pages/PostListPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostListPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Make sure your backend server is running on port 5000!
        // Vite automatically proxies /api requests to your backend
        const response = await axios.get('/api/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching posts:', err.response ? err.response.data : err.message);
        setError('Failed to load posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const containerStyle = {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '2.5em',
  };

  const messageStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '1.2em',
    color: '#555',
  };

  const errorTextStyle = {
    ...messageStyle,
    color: 'red',
    fontWeight: 'bold',
  };

  const postsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '25px',
  };

  const postCardStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const postImageStyle = {
    maxWidth: '100%',
    height: '200px', // Fixed height for consistency
    objectFit: 'cover', // Cover the area, cropping if necessary
    borderRadius: '6px',
    marginBottom: '15px',
  };

  const postTitleStyle = {
    fontSize: '1.8em',
    marginBottom: '10px',
    color: '#007bff',
  };

  const postContentSnippetStyle = {
    fontSize: '1em',
    color: '#555',
    marginBottom: '10px',
    lineHeight: '1.5',
    flexGrow: 1, // Allows content to take up available space
  };

  const postMetaStyle = {
    fontSize: '0.85em',
    color: '#777',
    marginTop: '10px',
  };

  if (loading) {
    return <div style={messageStyle}>Loading posts...</div>;
  }

  if (error) {
    return <div style={errorTextStyle}>{error}</div>;
  }

  if (posts.length === 0) {
    return <div style={messageStyle}>No posts found. Why not create one using Thunder Client?</div>;
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>All Blog Posts</h1>
      <div style={postsGridStyle}>
        {posts.map(post => (
          <div key={post._id} style={postCardStyle}>
            {post.image && <img src={post.image} alt={post.title} style={postImageStyle} />}
            <h2 style={postTitleStyle}>{post.title}</h2>
            <p style={postContentSnippetStyle}>{post.content.substring(0, 150)}...</p> {/* Show snippet */}
            <div style={postMetaStyle}>
              <p>By {post.author ? post.author.username : 'Unknown'}</p> {/* Handle cases where author might not be populated */}
              <p>Published on: {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostListPage;