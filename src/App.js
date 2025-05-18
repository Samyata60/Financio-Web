import React, { useState, useRef, useEffect } from 'react';
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
  const timeoutRef = useRef(null);

  const current = step < lessons.length ? lessons[step] : null;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleAnswer = (option) => {
    if (!current || selected !== null) return;

    setSelected(option);
    setFeedback(option === current.answer ? '✅ Correct! +10 XP' : '❌ Oops! Try the next one.');
    if (option === current.answer) {
      setScore(prev
