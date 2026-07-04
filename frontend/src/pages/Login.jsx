import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="login-container">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="logo-container">
          <div className="logo-icon">
            <span className="logo-dot"></span>
            <span className="logo-dot"></span>
            <span className="logo-dot red"></span>
            <span className="logo-dot"></span>
          </div>
          <span className="logo-text">FinRelief AI</span>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Take Control of Your <span className="highlight-text">Financial Future</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered debt management that helps you negotiate smarter, settle faster, and live debt-free sooner.
          </p>
        </div>

        <div className="features-container">
          <div className="feature-card">
            <h3 className="feature-highlight">40-75%</h3>
            <p className="feature-text">Settlement Range</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-highlight">AI</h3>
            <p className="feature-text">Powered Strategy</p>
          </div>
          <div className="feature-card">
            <h3 className="feature-highlight">Free</h3>
            <p className="feature-text">To Get Started</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="auth-box">
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Sign in to your dashboard</p>

          <div className="auth-toggle">
            <button 
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button 
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Email address</label>
              <input type="email" placeholder="kumaraskash02401@gmail.com" />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input type="password" placeholder="••••••••" />
            </div>
            
            <button type="submit" className="submit-btn">
              {isLogin ? 'Sign In →' : 'Register →'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
