import React, { useState } from "react";
import axios from "axios";

const QuizComponent = ({ email }) => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [message, setMessage] = useState("");

  const fetchQuiz = async () => {
    // Placeholder question (Replace with AI-generated question later)
    const newQuestion = "What is the capital of France?";
    const newOptions = ["Paris", "Berlin", "Madrid", "Rome"];
    const correct = "Paris";

    setQuestion(newQuestion);
    setOptions(newOptions);
    setCorrectAnswer(correct);
  };

  const submitQuiz = async () => {
    if (!selectedAnswer) {
      setMessage("Please select an answer!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/quiz/save", {
        email,
        question,
        selectedAnswer,
        correctAnswer,
      });

      setMessage(selectedAnswer === correctAnswer ? "Correct! 🎉" : "Wrong! ❌");
    } catch (error) {
      console.error("Error saving quiz result:", error);
    }
  };

  return (
    <div>
      <h2>AI-Generated Quiz 🧠</h2>
      {question ? (
        <div>
          <p>{question}</p>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => setSelectedAnswer(option)}
              style={{ margin: "5px", background: selectedAnswer === option ? "lightblue" : "white" }}
            >
              {option}
            </button>
          ))}
          <br />
          <button onClick={submitQuiz}>Submit</button>
          <p>{message}</p>
        </div>
      ) : (
        <button onClick={fetchQuiz}>Start Quiz</button>
      )}
    </div>
  );
};

export default QuizComponent;
