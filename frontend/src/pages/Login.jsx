import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '' };

    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password) {
      // Here you would typically send the data to your server
      console.log('Sign in data:', { email, password });
    }
  };

  return (
    <div className="sign-in-container">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sign-in-box"
      >
        <h2 className="sign-in-title">Sign In</h2>
        <form onSubmit={handleSubmit} className="sign-in-form">
          <div>
            <label htmlFor="email" className="input-label">Email</label>
            <div className="input-wrapper">
              <div className="icon">
                <FaEnvelope aria-hidden="true" />
              </div>
              <input
                type="email"
                id="email"
                className={`input ${errors.email ? 'input-error' : ''}`}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby="email-error"
              />
            </div>
            {errors.email && (
              <p className="error-message" id="email-error">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="password" className="input-label">Password</label>
            <div className="input-wrapper">
              <div className="icon">
                <FaLock aria-hidden="true" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={`input ${errors.password ? 'input-error' : ''}`}
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-invalid={errors.password ? 'true' : 'false'}
                aria-describedby="password-error"
              />
              <div className="password-toggle">
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="toggle-button"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <FaEyeSlash aria-hidden="true" className='password-icons' /> : <FaEye aria-hidden="true" className='password-icons' />}
                </button>
              </div>
            </div>
            {errors.password && (
              <p className="error-message" id="password-error">{errors.password}</p>
            )}
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-button"
            >
              Sign In
            </motion.button>
          </div>
        </form>
        <div className="divider">
          <div className="divider-line"></div>
          <div className="divider-text">Or continue with</div>
        </div>
        <div className="social-buttons">
          {['Facebook', 'Twitter', 'GitHub'].map((provider) => (
            <div key={provider}>
              <a
                href="#"
                className="social-button"
              >
                <span className="sr-only">Sign in with {provider}</span>
                <svg className="social-icon" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.3V19.878C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
