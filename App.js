import React, { useState } from "react";

const lessons = [
  {
    title: "What is Money?",
    content: "Money is a medium of exchange that facilitates trade.",
    question: "What is the main purpose of money?",
    options: ["Decoration", "Exchange", "Storage", "Investment"],
    answer: "Exchange",
  },
  {
    title: "Income vs Expense",
    content: "Income is money received, while expenses are money spent.",
    question: "If you buy groceries, it's an?",
    options: ["Income", "Expense", "Saving", "Tax"],
    answer: "Expense",
  },
  {
    title: "Savings",
    content: "Savings is the portion of income not spent on consumption.",
    question: "Which of the following is a saving?",
    options: ["Buying clothes", "Paying rent", "Fixed deposit", "Dining out"],
    answer: "Fixed deposit",
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const current = lessons[step];

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === current.answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelected(null);
      setStep(step + 1);
    }, 800);
  };

  if (step >= lessons.length) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>🎉 You've completed the lesson!</h2>
        <p>Your Score: {score} / {lessons.length}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>📘 {current.title}</h2>
      <p>{current.content}</p>
      <p><strong>{current.question}</strong></p>
      {current.options.map((opt) => (
        <button
          key={opt}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            backgroundColor:
              selected === opt
                ? opt === current.answer
                  ? "lightgreen"
                  : "salmon"
                : "#eee",
            border: "none",
            width: "100%",
          }}
          onClick={() => handleAnswer(opt)}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default App;
