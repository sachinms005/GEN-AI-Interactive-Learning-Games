import React, { useState } from "react";
import axios from "axios";

const StoryComponent = () => {
  const [story, setStory] = useState("");

  const fetchStory = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/story/generate");
      setStory(response.data.story);
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  return (
    <div>
      <h2>AI-Powered Story Learning 📖</h2>
      {story ? <p>{story}</p> : <button onClick={fetchStory}>Generate Story</button>}
    </div>
  );
};

export default StoryComponent;
