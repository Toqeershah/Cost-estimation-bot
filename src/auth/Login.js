import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import Helpers from '../Config/Helpers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password });
      if (response.data.success) {
        navigate('/chat');
        Helpers.toast("success", "Login Successfully");
      } else {
        setError(response.data.errors);
        Helpers.toast("error", "Invalid Credentials")
      }
    } catch (err) {
      setError("An error occurred during user login");
      Helpers.toast("error", "Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to continue</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="test@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="********"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
            Login
          </button>
          {/* <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 mt-4 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-200">
            <FaGoogle className="mr-2" /> Log In with Google
          </button> */}
        </form>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;