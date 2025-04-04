import React from "react";
import QuizComponent from "../components/QuizComponent";

const QuizPage = () => {
  const email = "test@example.com"; // Replace with user authentication logic

  return (
    <div>
      <h1>Quiz Page 🎯</h1>
      <QuizComponent email={email} />
    </div>
  );
};

export default QuizPage;

