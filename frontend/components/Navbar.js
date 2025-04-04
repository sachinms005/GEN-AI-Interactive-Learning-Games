// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">GEN AI Learning</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/story">Story</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
