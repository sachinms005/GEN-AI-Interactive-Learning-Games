import React from "react";
import { Link } from "react-router-dom";
import Leaderboard from "../components/Leaderboard";

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Gen AI Learning! 🚀</h1>
      <nav>
        <ul>
          <li><Link to="/quiz">Quiz Mode</Link></li>
          <li><Link to="/story">Story Learning</Link></li>
        </ul>
      </nav>
      <Leaderboard />
    </div>
  );
};

export default Dashboard;
