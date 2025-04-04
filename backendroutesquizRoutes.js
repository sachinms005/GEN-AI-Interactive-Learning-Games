const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/save", async (req, res) => {
  const { email, question, selectedAnswer, correctAnswer } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ name: "New User", email });
    }

    user.quizzesTaken.push({ question, selectedAnswer, correctAnswer });
    user.progress += selectedAnswer === correctAnswer ? 10 : 0;

    await user.save();
    res.json({ message: "Quiz saved successfully", progress: user.progress });
  } catch (error) {
    res.status(500).json({ error: "Failed to save quiz result" });
  }
});

module.exports = router;
