// client/src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState(''); // <--- NEW STATE FOR NAME
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSuccess(false);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('/api/auth/register', {
        username,
        name, // <--- INCLUDE NAME IN THE REQUEST BODY
        email,
        password,
      });

      console.log('Registration successful:', response.data);
      setSuccess(true);

      setTimeout(() => {
        navigate('/login'); // Redirect to login page (you'll create this next)
      }, 2000);
    } catch (err) {
      console.error('Registration failed:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formContainerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  };

  const messageStyle = {
    marginTop: '15px',
    padding: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const errorStyle = {
    ...messageStyle,
    backgroundColor: '#f8d7da',
    color: '#721c24',
    border: '1px solid #f5c6cb',
  };

  const successStyle = {
    ...messageStyle,
    backgroundColor: '#d4edda',
    color: '#155724',
    border: '1px solid #c3e6cb',
  };

  const linkContainerStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '0.9em',
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#333' }}>Register for an Account</h2>
      <form onSubmit={handleSubmit}>
        <div style={inputGroupStyle}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
            aria-label="Username"
          />
        </div>
        {/* NEW INPUT FIELD FOR NAME */}
        <div style={inputGroupStyle}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
            aria-label="Full Name"
          />
        </div>
        {/* END NEW INPUT FIELD */}
        <div style={inputGroupStyle}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
            aria-label="Email address"
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
            aria-label="Password"
          />
        </div>
        <div style={inputGroupStyle}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={inputStyle}
            required
            aria-label="Confirm password"
          />
        </div>

        {error && <div style={errorStyle}>{error}</div>}
        {success && <div style={successStyle}>Registration successful! Redirecting to login...</div>}

        <button type="submit" style={buttonStyle} disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>

      <div style={linkContainerStyle}>
        Already have an account? <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Login here</Link>
      </div>
    </div>
  );
};

export default RegisterPage;