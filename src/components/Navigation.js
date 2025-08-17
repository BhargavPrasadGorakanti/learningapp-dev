import React, { useState } from 'react';
import './Navigation.css';

import logo from '../images/LearningAppIcon.png';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;