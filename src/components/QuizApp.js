import React, { useState } from "react";

const QuizApp = ({ questions }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (current + 1 < questions.length) setCurrent(current + 1);
    else setShowResult(true);
  };

  if (showResult) return <h3>Bạn trả lời đúng {score}/{questions.length} câu.</h3>;

  return (
    <div>
      <h2>{questions[current].question}</h2>
      {questions[current].answers.map((a, idx) => (
        <button key={idx} onClick={() => handleAnswer(a.isCorrect)}>{a.text}</button>
      ))}
    </div>
  );
};

export default QuizApp;