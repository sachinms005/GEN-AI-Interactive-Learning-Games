// validateInput.js

const validateQuizSubmission = (req, res, next) => {
  const { userAnswers } = req.body;

  if (!userAnswers || !Array.isArray(userAnswers)) {
    return res.status(400).json({ message: 'Invalid input: userAnswers is required and must be an array.' });
  }

  next();
};

const validateFeedback = (req, res, next) => {
  const { feedback } = req.body;

  if (!feedback || typeof feedback !== 'string') {
    return res.status(400).json({ message: 'Invalid input: feedback must be a non-empty string.' });
  }

  next();
};

module.exports = {
  validateQuizSubmission,
  validateFeedback,
};
