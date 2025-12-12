'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Clock, Trophy, Target, Zap, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface Challenge {
  day: number;
  title: string;
  description: string;
  action: string;
  category: string;
  estimatedTime: string;
}

const challenges: Challenge[] = [
  { day: 1, title: 'Calculate Your Net Worth', description: 'Know where you stand financially', action: 'List all assets and liabilities', category: 'Assessment', estimatedTime: '30 min' },
  { day: 2, title: 'Track Every Expense', description: 'Awareness is the first step', action: 'Record all spending for today', category: 'Awareness', estimatedTime: '15 min' },
  { day: 3, title: 'Create a Budget', description: 'Plan your money intentionally', action: 'Allocate income to categories', category: 'Planning', estimatedTime: '45 min' },
  { day: 4, title: 'Set Financial Goals', description: 'Define what you want to achieve', action: 'Write 3 short and 3 long-term goals', category: 'Planning', estimatedTime: '20 min' },
  { day: 5, title: 'Review Subscriptions', description: 'Cut unnecessary recurring costs', action: 'Cancel unused subscriptions', category: 'Optimization', estimatedTime: '30 min' },
  { day: 6, title: 'Start Emergency Fund', description: 'Begin building financial security', action: 'Save $50 in separate account', category: 'Saving', estimatedTime: '10 min' },
  { day: 7, title: 'Review Insurance', description: 'Ensure adequate protection', action: 'Check coverage and compare rates', category: 'Protection', estimatedTime: '40 min' },
  { day: 8, title: 'Automate Savings', description: 'Make saving effortless', action: 'Set up automatic transfers', category: 'Automation', estimatedTime: '15 min' },
  { day: 9, title: 'Check Credit Score', description: 'Know your credit health', action: 'Get free credit report', category: 'Assessment', estimatedTime: '20 min' },
  { day: 10, title: 'List All Debts', description: 'Face your debt reality', action: 'Document all debts with interest rates', category: 'Assessment', estimatedTime: '30 min' },
  { day: 11, title: 'Create Debt Payoff Plan', description: 'Strategic debt elimination', action: 'Prioritize high-interest debt', category: 'Planning', estimatedTime: '45 min' },
  { day: 12, title: 'Negotiate Bills', description: 'Reduce monthly expenses', action: 'Call providers for better rates', category: 'Optimization', estimatedTime: '60 min' },
  { day: 13, title: 'Meal Plan Week', description: 'Save on food costs', action: 'Plan meals and grocery list', category: 'Saving', estimatedTime: '30 min' },
  { day: 14, title: 'Review Retirement', description: 'Check retirement accounts', action: 'Review 401k/IRA contributions', category: 'Investment', estimatedTime: '30 min' },
  { day: 15, title: 'Increase Retirement', description: 'Boost future savings', action: 'Increase contribution by 1%', category: 'Investment', estimatedTime: '15 min' },
  { day: 16, title: 'Research Investments', description: 'Learn investment basics', action: 'Read about index funds and ETFs', category: 'Education', estimatedTime: '45 min' },
  { day: 17, title: 'Side Income Ideas', description: 'Explore earning opportunities', action: 'List 5 potential side hustles', category: 'Income', estimatedTime: '30 min' },
  { day: 18, title: 'Sell Unused Items', description: 'Declutter and earn', action: 'List items online for sale', category: 'Income', estimatedTime: '60 min' },
  { day: 19, title: 'Review Tax Strategy', description: 'Optimize tax efficiency', action: 'Check deductions and credits', category: 'Optimization', estimatedTime: '45 min' },
  { day: 20, title: 'Estate Planning Basics', description: 'Protect your legacy', action: 'Create or update will', category: 'Protection', estimatedTime: '60 min' },
  { day: 21, title: 'Financial Education', description: 'Invest in knowledge', action: 'Read one chapter of financial book', category: 'Education', estimatedTime: '30 min' },
  { day: 22, title: 'Review Progress', description: 'Celebrate achievements', action: 'Document wins and lessons', category: 'Reflection', estimatedTime: '20 min' },
  { day: 23, title: 'Optimize Banking', description: 'Maximize interest earnings', action: 'Compare high-yield savings accounts', category: 'Optimization', estimatedTime: '30 min' },
  { day: 24, title: 'Investment Account', description: 'Start investing journey', action: 'Open brokerage account', category: 'Investment', estimatedTime: '45 min' },
  { day: 25, title: 'Diversification Check', description: 'Review investment mix', action: 'Analyze portfolio allocation', category: 'Investment', estimatedTime: '30 min' },
  { day: 26, title: 'Financial Partner Talk', description: 'Align with spouse/partner', action: 'Discuss financial goals together', category: 'Communication', estimatedTime: '60 min' },
  { day: 27, title: 'Teach Kids Money', description: 'Pass financial wisdom', action: 'Have money conversation with children', category: 'Legacy', estimatedTime: '30 min' },
  { day: 28, title: 'Charitable Giving', description: 'Plan purposeful giving', action: 'Set charitable giving budget', category: 'Values', estimatedTime: '20 min' },
  { day: 29, title: 'Long-term Vision', description: 'Define your financial freedom', action: 'Write your 10-year financial vision', category: 'Planning', estimatedTime: '45 min' },
  { day: 30, title: 'Commit to Continue', description: 'Make it a lifestyle', action: 'Schedule monthly financial reviews', category: 'Commitment', estimatedTime: '30 min' },
];

export default function ChallengePage() {
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [startDate, setStartDate] = useState<string>('');

  useEffect(() => {
    const saved = localStorage.getItem('challengeProgress');
    const savedStart = localStorage.getItem('challengeStartDate');
    if (saved) setCompletedDays(JSON.parse(saved));
    if (savedStart) setStartDate(savedStart);
  }, []);

  useEffect(() => {
    localStorage.setItem('challengeProgress', JSON.stringify(completedDays));
  }, [completedDays]);

  const toggleDay = (day: number) => {
    if (completedDays.includes(day)) {
      setCompletedDays(completedDays.filter(d => d !== day));
    } else {
      setCompletedDays([...completedDays, day]);
    }
  };

  const startChallenge = () => {
    const today = new Date().toISOString().split('T')[0];
    setStartDate(today);
    localStorage.setItem('challengeStartDate', today);
    setCompletedDays([]);
  };

  const resetChallenge = () => {
    setCompletedDays([]);
    setStartDate('');
    localStorage.removeItem('challengeProgress');
    localStorage.removeItem('challengeStartDate');
  };

  const progress = (completedDays.length / challenges.length) * 100;
  const currentDay = startDate ? Math.min(
    Math.floor((new Date().getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) + 1,
    30
  ) : 0;

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Assessment': 'bg-blue-100 text-blue-700',
      'Awareness': 'bg-purple-100 text-purple-700',
      'Planning': 'bg-green-100 text-green-700',
      'Optimization': 'bg-yellow-100 text-yellow-700',
      'Saving': 'bg-emerald-100 text-emerald-700',
      'Protection': 'bg-red-100 text-red-700',
      'Automation': 'bg-indigo-100 text-indigo-700',
      'Investment': 'bg-orange-100 text-orange-700',
      'Education': 'bg-pink-100 text-pink-700',
      'Income': 'bg-teal-100 text-teal-700',
      'Reflection': 'bg-gray-100 text-gray-700',
      'Communication': 'bg-cyan-100 text-cyan-700',
      'Legacy': 'bg-violet-100 text-violet-700',
      'Values': 'bg-rose-100 text-rose-700',
      'Commitment': 'bg-lime-100 text-lime-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold mb-6"
          >
            <Zap className="w-5 h-5" />
            LIMITED TIME: START TODAY!
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            30-Day Financial Freedom Challenge
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your financial life in just 30 days. Take immediate action with Dr. Moore's 
            proven daily challenges. No more waiting—start building wealth TODAY!
          </p>
        </div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 mb-8 text-white"
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Every Day You Wait Costs You Money</h3>
                <p className="opacity-90">The best time to start was yesterday. The second best time is NOW.</p>
              </div>
            </div>
            {!startDate && (
              <button
                onClick={startChallenge}
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
              >
                START NOW →
              </button>
            )}
          </div>
        </motion.div>

        {/* Progress Section */}
        {startDate && (
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-medium">Current Day</span>
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600">{currentDay}</div>
              <div className="text-sm text-gray-500 mt-1">of 30 days</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-medium">Completed</span>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-green-600">{completedDays.length}</div>
              <div className="text-sm text-gray-500 mt-1">challenges done</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600 font-medium">Progress</span>
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-4xl font-bold text-purple-600">{progress.toFixed(0)}%</div>
              <div className="text-sm text-gray-500 mt-1">to completion</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl shadow-lg p-6 text-white"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Streak</span>
                <Trophy className="w-6 h-6" />
              </div>
              <div className="text-4xl font-bold">{completedDays.length}</div>
              <div className="text-sm opacity-90 mt-1">days strong!</div>
            </motion.div>
          </div>
        )}

        {/* Progress Bar */}
        {startDate && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-semibold text-gray-700">Challenge Progress</span>
              <span className="font-semibold text-blue-600">{progress.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Challenges List */}
        <div className="space-y-4">
          {challenges.map((challenge, index) => {
            const isCompleted = completedDays.includes(challenge.day);
            const isCurrent = currentDay === challenge.day && startDate;
            const isLocked = startDate && challenge.day > currentDay;

            return (
              <motion.div
                key={challenge.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                className={`bg-white rounded-xl shadow-lg p-6 ${
                  isCompleted ? 'border-2 border-green-500' : 
                  isCurrent ? 'border-2 border-blue-500' :
                  isLocked ? 'opacity-50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => !isLocked && toggleDay(challenge.day)}
                    disabled={isLocked}
                    className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition ${
                      isCompleted 
                        ? 'bg-green-500 text-white' 
                        : isCurrent
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    } ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : challenge.day}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {challenge.title}
                          {isCurrent && (
                            <span className="ml-3 text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                              TODAY
                            </span>
                          )}
                        </h3>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${getCategoryColor(challenge.category)}`}>
                        {challenge.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {challenge.estimatedTime}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <ChevronRight className="w-4 h-4 text-blue-600" />
                        <span className="font-semibold text-gray-900">Action Step:</span>
                      </div>
                      <p className="text-gray-700">{challenge.action}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {!startDate ? (
            <button
              onClick={startChallenge}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition"
            >
              START 30-DAY CHALLENGE NOW
            </button>
          ) : (
            <button
              onClick={resetChallenge}
              className="bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              Reset Challenge
            </button>
          )}
          <Link
            href="/books"
            className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold text-center hover:bg-blue-50 transition"
          >
            Get the Book
          </Link>
        </div>

        {/* Completion Celebration */}
        {completedDays.length === 30 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-12 text-center text-white"
          >
            <Trophy className="w-20 h-20 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">🎉 Congratulations!</h2>
            <p className="text-xl mb-6">
              You've completed the 30-Day Financial Freedom Challenge! 
              You're now on the path to lasting wealth and financial security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
              >
                View Your Dashboard
              </Link>
              <button
                onClick={resetChallenge}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition"
              >
                Start Again
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
