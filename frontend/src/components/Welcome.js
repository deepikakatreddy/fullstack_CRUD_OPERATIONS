import React from 'react';
import './Welcome.css';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">STREAMLINE</h1>
      <p className="welcome-subtitle">
        Manage profiles, billing, and plans with ease.
      </p>
      <button className="welcome-button" onClick={() => navigate('/dashboard')}>
        Go to Dashboard
      </button>
    </div>
  );
};

export default Welcome;
