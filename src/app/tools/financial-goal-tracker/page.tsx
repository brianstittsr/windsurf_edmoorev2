'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Plus, Trash2, TrendingUp, Calendar, DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface Goal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
  deadline: string;
  category: string;
  priority: 'high' | 'medium' | 'low';
}

const CATEGORIES = [
  'Emergency Fund',
  'Retirement',
  'Home Purchase',
  'Education',
  'Debt Payoff',
  'Investment',
  'Vacation',
  'Other'
];

export default function FinancialGoalTrackerPage() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    targetAmount: '',
    currentAmount: '',
    deadline: '',
    category: CATEGORIES[0],
    priority: 'medium' as 'high' | 'medium' | 'low'
  });

  useEffect(() => {
    const saved = localStorage.getItem('financialGoals');
    if (saved) setGoals(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('financialGoals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (newGoal.name && newGoal.targetAmount) {
      setGoals([
        ...goals,
        {
          id: Date.now().toString(),
          name: newGoal.name,
          targetAmount: parseFloat(newGoal.targetAmount),
          currentAmount: parseFloat(newGoal.currentAmount) || 0,
          deadline: newGoal.deadline,
          category: newGoal.category,
          priority: newGoal.priority
        }
      ]);
      setNewGoal({
        name: '',
        targetAmount: '',
        currentAmount: '',
        deadline: '',
        category: CATEGORIES[0],
        priority: 'medium'
      });
      setShowAddForm(false);
    }
  };

  const updateProgress = (id: string, amount: number) => {
    setGoals(goals.map(goal => 
      goal.id === id 
        ? { ...goal, currentAmount: Math.min(amount, goal.targetAmount) }
        : goal
    ));
  };

  const deleteGoal = (id: string) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const getProgress = (goal: Goal) => {
    return (goal.currentAmount / goal.targetAmount) * 100;
  };

  const getDaysRemaining = (deadline: string) => {
    if (!deadline) return null;
    const days = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    return days;
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalCurrent = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const overallProgress = totalTarget > 0 ? (totalCurrent / totalTarget) * 100 : 0;
  const completedGoals = goals.filter(g => g.currentAmount >= g.targetAmount).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Goal Tracker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Set clear financial goals and track your progress. Dr. Moore emphasizes that strategic 
            planning with specific targets is essential for achieving financial freedom.
          </p>
        </div>

        {/* Book Principle Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white"
        >
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Dr. Moore's Principle: Strategic Goal Setting</h3>
              <p className="opacity-90">
                "Financial freedom requires a long-term vision spanning decades. Set clear goals, 
                maintain a budget, and document your progress. Save at least 15% of gross income 
                and invest in diversified portfolios for 6-8% annual returns."
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">Total Goals</span>
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-gray-900">{goals.length}</div>
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
            <div className="text-3xl font-bold text-green-600">{completedGoals}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">Total Target</span>
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">{formatCurrency(totalTarget)}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Overall Progress</span>
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold">{overallProgress.toFixed(0)}%</div>
          </motion.div>
        </div>

        {/* Add Goal Button */}
        {!showAddForm && (
          <div className="mb-8">
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Add New Goal
            </button>
          </div>
        )}

        {/* Add Goal Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">Add New Financial Goal</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Goal Name
                </label>
                <input
                  type="text"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                  placeholder="e.g., Emergency Fund"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Category
                </label>
                <select
                  value={newGoal.category}
                  onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Amount
                </label>
                <input
                  type="number"
                  value={newGoal.targetAmount}
                  onChange={(e) => setNewGoal({ ...newGoal, targetAmount: e.target.value })}
                  placeholder="10000"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Amount
                </label>
                <input
                  type="number"
                  value={newGoal.currentAmount}
                  onChange={(e) => setNewGoal({ ...newGoal, currentAmount: e.target.value })}
                  placeholder="0"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Target Date
                </label>
                <input
                  type="date"
                  value={newGoal.deadline}
                  onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Priority
                </label>
                <select
                  value={newGoal.priority}
                  onChange={(e) => setNewGoal({ ...newGoal, priority: e.target.value as any })}
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={addGoal}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Add Goal
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}

        {/* Goals List */}
        {goals.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">No Goals Yet</h3>
            <p className="text-gray-600 mb-6">
              Start by adding your first financial goal. Dr. Moore recommends beginning with 
              an emergency fund covering one year of expenses.
            </p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Add Your First Goal
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {goals.map((goal, index) => {
              const progress = getProgress(goal);
              const daysRemaining = getDaysRemaining(goal.deadline);
              const isComplete = progress >= 100;

              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl shadow-lg p-6 ${isComplete ? 'border-2 border-green-500' : ''}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{goal.name}</h3>
                        {isComplete && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            ✓ Completed
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          goal.priority === 'high' ? 'bg-red-100 text-red-700' :
                          goal.priority === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)} Priority
                        </span>
                      </div>
                      <p className="text-gray-600">{goal.category}</p>
                    </div>
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className="text-red-600 hover:text-red-700 transition"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Current</div>
                      <div className="text-2xl font-bold text-blue-600">{formatCurrency(goal.currentAmount)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Target</div>
                      <div className="text-2xl font-bold text-gray-900">{formatCurrency(goal.targetAmount)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Remaining</div>
                      <div className="text-2xl font-bold text-purple-600">
                        {formatCurrency(Math.max(0, goal.targetAmount - goal.currentAmount))}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-semibold text-gray-700">Progress</span>
                      <span className="font-semibold text-blue-600">{progress.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className={`h-4 rounded-full transition-all duration-500 ${
                          isComplete ? 'bg-green-500' : 'bg-blue-600'
                        }`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                  </div>

                  {daysRemaining !== null && (
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">
                        {daysRemaining > 0 
                          ? `${daysRemaining} days remaining` 
                          : daysRemaining === 0 
                          ? 'Due today' 
                          : `${Math.abs(daysRemaining)} days overdue`}
                      </span>
                    </div>
                  )}

                  {!isComplete && (
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Update amount"
                        className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            const input = e.target as HTMLInputElement;
                            updateProgress(goal.id, parseFloat(input.value) || 0);
                            input.value = '';
                          }
                        }}
                      />
                      <button
                        onClick={(e) => {
                          const input = (e.currentTarget.previousSibling as HTMLInputElement);
                          updateProgress(goal.id, parseFloat(input.value) || 0);
                          input.value = '';
                        }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Take Action Today</h3>
          <p className="text-lg opacity-90 mb-6">
            Dr. Moore emphasizes that financial freedom requires immediate action. Set your goals, 
            track your progress, and build the future you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Read the Book
            </Link>
            <Link
              href="/tools"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Explore More Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
