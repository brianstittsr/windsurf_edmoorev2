'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: 'action' | 'balanced' | 'patience';
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'When the stock market drops 10% in a week, what is your typical response?',
    options: [
      { text: 'Immediately sell to prevent further losses', value: 'action' },
      { text: 'Review my portfolio and consider rebalancing', value: 'balanced' },
      { text: 'Stay the course and view it as a buying opportunity', value: 'patience' },
    ],
  },
  {
    id: 2,
    question: 'You receive an unexpected $5,000. What do you do?',
    options: [
      { text: 'Invest it immediately in the hottest stock or crypto', value: 'action' },
      { text: 'Research options and make a decision within a week', value: 'balanced' },
      { text: 'Put it in savings while I carefully consider the best long-term use', value: 'patience' },
    ],
  },
  {
    id: 3,
    question: 'How do you approach major financial decisions?',
    options: [
      { text: 'I trust my gut and decide quickly', value: 'action' },
      { text: 'I gather information and consult with others before deciding', value: 'balanced' },
      { text: 'I take my time, analyze thoroughly, and wait for the right moment', value: 'patience' },
    ],
  },
  {
    id: 4,
    question: 'A friend suggests a "can\'t miss" investment opportunity. You:',
    options: [
      { text: 'Jump in quickly before the opportunity passes', value: 'action' },
      { text: 'Do some quick research and decide within 24 hours', value: 'balanced' },
      { text: 'Thoroughly investigate and likely pass on time-pressured opportunities', value: 'patience' },
    ],
  },
  {
    id: 5,
    question: 'How often do you check your investment accounts?',
    options: [
      { text: 'Daily or multiple times per day', value: 'action' },
      { text: 'Weekly or monthly', value: 'balanced' },
      { text: 'Quarterly or only when rebalancing', value: 'patience' },
    ],
  },
  {
    id: 6,
    question: 'Your approach to debt repayment is:',
    options: [
      { text: 'Pay minimums and invest extra money for higher returns', value: 'action' },
      { text: 'Balance debt payoff with some investing', value: 'balanced' },
      { text: 'Aggressively pay down high-interest debt first', value: 'patience' },
    ],
  },
  {
    id: 7,
    question: 'When everyone is talking about a hot investment trend, you:',
    options: [
      { text: 'Get excited and want to participate', value: 'action' },
      { text: 'Consider it but remain cautious', value: 'balanced' },
      { text: 'Become more skeptical and likely avoid it', value: 'patience' },
    ],
  },
];

export default function PhilosophyQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const counts = { action: 0, balanced: 0, patience: 0 };
    Object.values(answers).forEach((answer) => {
      counts[answer as keyof typeof counts]++;
    });
    return counts;
  };

  const getPersonality = () => {
    const results = calculateResults();
    const total = Object.values(results).reduce((a, b) => a + b, 0);
    
    if (results.patience >= 5) {
      return {
        type: 'Strategic Patience Master',
        description: 'You naturally embody Dr. Moore\'s "Doing Nothing is an Option" philosophy. You understand that patience and strategic inaction are powerful tools in wealth building.',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        recommendations: [
          'Read Chapter 3: "The Power of Strategic Waiting"',
          'Use the Investment Growth Forecaster to see your patience advantage',
          'Join our community of patient investors',
        ],
      };
    } else if (results.balanced >= 4) {
      return {
        type: 'Balanced Decision Maker',
        description: 'You have a good mix of action and patience. You could benefit from learning when strategic inaction provides the greatest advantage.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        recommendations: [
          'Read Chapter 1: "When to Act vs. When to Wait"',
          'Try the Strategic Decision Evaluator tool',
          'Learn about the "patience premium" in investing',
        ],
      };
    } else {
      return {
        type: 'Action-Oriented Achiever',
        description: 'You prefer quick action and decisive moves. While this can be valuable, learning when to embrace strategic patience could significantly improve your financial outcomes.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        recommendations: [
          'Start with Chapter 2: "The Cost of Constant Action"',
          'Use the Financial Stress Test Simulator',
          'Explore case studies of successful patient investors',
        ],
      };
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;

  if (showResults) {
    const personality = getPersonality();
    const results = calculateResults();

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Assessment Complete!
              </h1>
              <p className="text-gray-600">Here&apos;s what we learned about your financial philosophy</p>
            </div>

            <div className={`${personality.bgColor} rounded-xl p-8 mb-8`}>
              <h2 className={`text-2xl font-bold ${personality.color} mb-4`}>
                Your Profile: {personality.type}
              </h2>
              <p className="text-gray-700 text-lg mb-6">{personality.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">{results.action}</div>
                  <div className="text-sm text-gray-600">Action-Oriented</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{results.balanced}</div>
                  <div className="text-sm text-gray-600">Balanced</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{results.patience}</div>
                  <div className="text-sm text-gray-600">Patient</div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Next Steps:</h3>
              <ul className="space-y-3">
                {personality.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition"
              >
                Get the Book
              </Link>
              <Link
                href="/tools"
                className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-center hover:bg-blue-50 transition"
              >
                Explore Tools
              </Link>
              <button
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}
                className="inline-block bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
              >
                Retake Quiz
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Philosophy Assessment Quiz
          </h1>
          <p className="text-gray-600">
            Discover how your financial approach aligns with strategic inaction principles
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-blue-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
              {currentQ.question}
            </h2>

            <div className="space-y-4">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQ.id, option.value)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all ${
                    answers[currentQ.id] === option.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        answers[currentQ.id] === option.value
                          ? 'border-blue-600 bg-blue-600'
                          : 'border-gray-300'
                      }`}
                    >
                      {answers[currentQ.id] === option.value && (
                        <div className="w-3 h-3 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-700">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50 shadow'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition ${
              !isAnswered
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'See Results' : 'Next'}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
