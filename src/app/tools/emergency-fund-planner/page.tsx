'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, DollarSign, Calendar, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Link from 'next/link';

export default function EmergencyFundPlannerPage() {
  const [monthlyExpenses, setMonthlyExpenses] = useState({
    housing: 0,
    utilities: 0,
    food: 0,
    transportation: 0,
    insurance: 0,
    healthcare: 0,
    debt: 0,
    other: 0,
  });
  
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [targetMonths, setTargetMonths] = useState(12);

  const totalMonthlyExpenses = Object.values(monthlyExpenses).reduce((sum, val) => sum + val, 0);
  const targetAmount = totalMonthlyExpenses * targetMonths;
  const remaining = Math.max(0, targetAmount - currentSavings);
  const progress = targetAmount > 0 ? (currentSavings / targetAmount) * 100 : 0;
  const monthsToGoal = monthlySavings > 0 ? Math.ceil(remaining / monthlySavings) : 0;

  const expenseData = [
    { name: 'Housing', value: monthlyExpenses.housing, color: '#3B82F6' },
    { name: 'Utilities', value: monthlyExpenses.utilities, color: '#10B981' },
    { name: 'Food', value: monthlyExpenses.food, color: '#F59E0B' },
    { name: 'Transportation', value: monthlyExpenses.transportation, color: '#EF4444' },
    { name: 'Insurance', value: monthlyExpenses.insurance, color: '#8B5CF6' },
    { name: 'Healthcare', value: monthlyExpenses.healthcare, color: '#EC4899' },
    { name: 'Debt', value: monthlyExpenses.debt, color: '#6366F1' },
    { name: 'Other', value: monthlyExpenses.other, color: '#14B8A6' },
  ].filter(item => item.value > 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getStatusColor = () => {
    if (progress >= 100) return 'text-green-600';
    if (progress >= 75) return 'text-blue-600';
    if (progress >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getStatusMessage = () => {
    if (progress >= 100) return 'Fully Funded! You have excellent financial security.';
    if (progress >= 75) return 'Almost there! You\'re building strong financial security.';
    if (progress >= 50) return 'Good progress! Keep building your emergency fund.';
    if (progress >= 25) return 'Getting started. Continue saving consistently.';
    return 'Start building your emergency fund today!';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Emergency Fund Planner
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a robust emergency fund following Dr. Moore's recommendation: save enough to cover 
            up to one year of expenses with high liquidity to avoid high-interest debt.
          </p>
        </div>

        {/* Book Principle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-6 mb-8 text-white"
        >
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Dr. Moore's Principle: Emergency Fund Priority</h3>
              <p className="opacity-90">
                "Establish a robust emergency fund capable of covering up to a year's worth of expenses. 
                This fund should prioritize liquidity to avoid reliance on high-interest debt in emergencies. 
                This is your financial foundation and first line of defense."
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Expenses</h2>
              
              <div className="space-y-4">
                {Object.entries(monthlyExpenses).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2 capitalize">
                      {key}
                    </label>
                    <input
                      type="number"
                      value={value || ''}
                      onChange={(e) => setMonthlyExpenses({
                        ...monthlyExpenses,
                        [key]: parseFloat(e.target.value) || 0
                      })}
                      placeholder="0"
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-gray-600 mb-2">Total Monthly Expenses</div>
                <div className="text-3xl font-bold text-gray-900">{formatCurrency(totalMonthlyExpenses)}</div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Emergency Savings
                  </label>
                  <input
                    type="number"
                    value={currentSavings || ''}
                    onChange={(e) => setCurrentSavings(parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Monthly Savings Amount
                  </label>
                  <input
                    type="number"
                    value={monthlySavings || ''}
                    onChange={(e) => setMonthlySavings(parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Target Coverage (Months): {targetMonths}
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    value={targetMonths}
                    onChange={(e) => setTargetMonths(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 months</span>
                    <span>12 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Status Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Target Amount</span>
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900">{formatCurrency(targetAmount)}</div>
                <div className="text-sm text-gray-500 mt-1">{targetMonths} months coverage</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 font-medium">Remaining</span>
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600">{formatCurrency(remaining)}</div>
                <div className="text-sm text-gray-500 mt-1">To reach goal</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl shadow-lg p-6 text-white"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Progress</span>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold">{progress.toFixed(1)}%</div>
                <div className="text-sm opacity-90 mt-1">
                  {monthsToGoal > 0 ? `${monthsToGoal} months to goal` : 'Goal reached!'}
                </div>
              </motion.div>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Fund Status</h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-semibold text-gray-700">Current: {formatCurrency(currentSavings)}</span>
                  <span className={`font-semibold ${getStatusColor()}`}>{progress.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-6">
                  <div
                    className={`h-6 rounded-full transition-all duration-500 ${
                      progress >= 100 ? 'bg-green-500' :
                      progress >= 75 ? 'bg-blue-500' :
                      progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>
              <div className={`flex items-center gap-2 ${getStatusColor()}`}>
                {progress >= 100 ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <AlertTriangle className="w-5 h-5" />
                )}
                <span className="font-semibold">{getStatusMessage()}</span>
              </div>
            </div>

            {/* Expense Breakdown */}
            {expenseData.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Expense Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {expenseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Savings Plan */}
            {monthlySavings > 0 && remaining > 0 && (
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Your Savings Plan</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span>
                      Saving <strong>{formatCurrency(monthlySavings)}</strong> per month
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    <span>
                      You'll reach your goal in approximately <strong>{monthsToGoal} months</strong>
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                    <span>
                      That's <strong>{((monthlySavings / totalMonthlyExpenses) * 100).toFixed(1)}%</strong> of your monthly expenses
                    </span>
                  </p>
                </div>
              </div>
            )}

            {/* Recommendations */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dr. Moore's Recommendations</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Prioritize Liquidity</h4>
                    <p className="text-gray-600">Keep your emergency fund in high-yield savings accounts or money market accounts for easy access.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automate Savings</h4>
                    <p className="text-gray-600">Set up automatic transfers to your emergency fund each payday to ensure consistent progress.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Avoid High-Interest Debt</h4>
                    <p className="text-gray-600">A fully-funded emergency fund prevents reliance on credit cards or loans during unexpected situations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-600 mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Start with 3 Months</h4>
                    <p className="text-gray-600">If 12 months seems overwhelming, start with a 3-month goal and gradually increase to a full year.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Start Building Your Financial Security Today</h3>
          <p className="text-lg opacity-90 mb-6">
            Your emergency fund is the foundation of financial freedom. Take action now to protect 
            yourself and your family from unexpected financial challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/financial-goal-tracker"
              className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Track This Goal
            </Link>
            <Link
              href="/books"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
            >
              Read the Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
