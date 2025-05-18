import React, { useState } from 'react';
import './App.css';

const lessons = [
  {
    title: 'What is Money?',
    content: 'Money is a medium of exchange that facilitates trade.',
    question: 'What is the main purpose of money?',
    options: ['Decoration', 'Exchange', 'Storage', 'Investment'],
    answer: 'Exchange'
  },
  {
    title: 'Income vs Expense',
    content: 'Income is money received, while expenses are money spent.',
    question: 'If you buy groceries, it is an?',
    options: ['Income', 'Expense', 'Saving', 'Tax'],
    answer: 'Expense'
  },
  {
    title: 'Savings',
    content: 'Savings is the portion of income not spent on consumption.',
    question: 'Which of the following is a saving?',
    options: ['Buying clothes', 'Paying rent', 'Fixed deposit', 'Dining out'],
    answer: 'Fixed deposit'
  }
];

function App() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  const current = step < lessons.length ? lessons[step] : null;

  const handleAnswer = (option) => {
    if (!current || selected) return;
    setSelected(option);
    if (option === current.answer) {
      setScore((prev) => prev + 10);
      setFeedback('✅ Correct! +10 XP');
    } else {
      setFeedback('❌ Oops! Try the next one.');
    }
    setTimeout(() => {
      setSelected(null);
      setFeedback('');
      setStep((prevStep) => prevStep + 1);
    }, 1000);
  };

  if (step >= lessons.length) {
    return (
      <div className="app-container">
        <h2 className="title">🎉 Lesson Complete!</h2>
        <p className="score">Total XP: {score}</p>
        <div className="celebration">🏆 Great job!</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="header">
        <span>Financio 💸</span>
        <span className="xp">XP: {score}</span>
      </div>
      {current && (
        <>
          <h2 className="title">📘 {current.title}</h2>
          <p className="content">{current.content}</p>
          <p className="question">
            <strong>{current.question}</strong>
          </p>
          <div className="options-grid">
            {current.options.map((opt) => {
              const isCorrect = selected === opt && opt === current.answer;
              const isWrong = selected === opt && opt !== current.answer;
              return (
                <button
                  key={opt}
                  className={`option-btn ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
                  onClick={() => handleAnswer(opt)}
                  disabled={!!selected}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </>
      )}
      {feedback && <div className="feedback">{feedback}</div>}
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${((step + 1) / lessons.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default App;
