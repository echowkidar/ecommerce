import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      login(response.data.token);
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error.response.data);
      // Handle login error (e.g., display error message)
    }
  };

  // ... rest of the component remains the same
}

export default Login;