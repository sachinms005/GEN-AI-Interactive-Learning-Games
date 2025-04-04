// quizController.js

// Mock quiz data (you can replace with DB queries)
const quizzes = [
  {
    id: 1,
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Awesome Idea", "Automatic Input", "Audio Interface"],
    answer: "Artificial Intelligence"
  },
];

exports.getQuiz = (req, res) => {
  res.json(quizzes);
};

exports.submitQuiz = (req, res) => {
  const { userAnswers } = req.body;

  // Simple grading logic
  let score = 0;
  quizzes.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });

  res.json({ message: "Quiz submitted!", score });
};
