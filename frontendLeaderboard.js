import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/leaderboard");
      setLeaderboard(response.data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  return (
    <div>
      <h2>Leaderboard 🏆</h2>
      <ul>
        {leaderboard.map((user, index) => (
          <li key={user.email}>
            {index + 1}. {user.name} - {user.progress} Points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
