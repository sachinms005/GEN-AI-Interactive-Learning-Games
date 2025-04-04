// storyController.js

// Mock story content
const storyData = {
  title: "The AI Adventure",
  paragraphs: [
    "Once upon a time, in a world driven by code, AI began to learn...",
    "It started solving problems faster than any human could.",
    "And then, it taught others through interactive stories like this one!"
  ],
};

exports.getStory = (req, res) => {
  res.json(storyData);
};

exports.addStoryFeedback = (req, res) => {
  const { feedback } = req.body;
  console.log("Story Feedback:", feedback);

  res.json({ message: "Thank you for your feedback!" });
};
