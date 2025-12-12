'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp, DollarSign, Calendar, Percent, Info } from 'lucide-react';
import Link from 'next/link';

interface Scenario {
  name: string;
  color: string;
  initialInvestment: number;
  monthlyContribution: number;
  annualReturn: number;
  years: number;
}

export default function InvestmentGrowthForecasterPage() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [years, setYears] = useState(30);
  const [showComparison, setShowComparison] = useState(false);

  const calculateGrowth = (initial: number, monthly: number, rate: number, years: number) => {
    const data = [];
    const monthlyRate = rate / 100 / 12;
    let balance = initial;
    let totalContributions = initial;
    
    for (let year = 0; year <= years; year++) {
      const yearData: any = {
        year,
        balance: Math.round(balance),
        contributions: Math.round(totalContributions),
        earnings: Math.round(balance - totalContributions),
      };
      
      data.push(yearData);
      
      // Calculate next year
      if (year < years) {
        for (let month = 0; month < 12; month++) {
          balance = balance * (1 + monthlyRate) + monthly;
          totalContributions += monthly;
        }
      }
    }
    
    return data;
  };

  const mainScenario = useMemo(() => 
    calculateGrowth(initialInvestment, monthlyContribution, annualReturn, years),
    [initialInvestment, monthlyContribution, annualReturn, years]
  );

  // Comparison scenarios
  const noContributionsScenario = useMemo(() => 
    calculateGrowth(initialInvestment, 0, annualReturn, years),
    [initialInvestment, annualReturn, years]
  );

  const higherReturnScenario = useMemo(() => 
    calculateGrowth(initialInvestment, monthlyContribution, annualReturn + 2, years),
    [initialInvestment, monthlyContribution, annualReturn, years]
  );

  const finalBalance = mainScenario[mainScenario.length - 1].balance;
  const totalContributions = mainScenario[mainScenario.length - 1].contributions;
  const totalEarnings = finalBalance - totalContributions;
  const earningsPercentage = (totalEarnings / totalContributions) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const comparisonData = useMemo(() => {
    return mainScenario.map((item, index) => ({
      year: item.year,
      'Your Plan': item.balance,
      'No Monthly Contributions': noContributionsScenario[index]?.balance || 0,
      'Higher Return (+2%)': higherReturnScenario[index]?.balance || 0,
    }));
  }, [mainScenario, noContributionsScenario, higherReturnScenario]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Investment Growth Forecaster
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize the power of compound interest and strategic patience. See how consistent 
            contributions and time create wealth through the &quot;patience premium.&quot;
          </p>
        </div>

        {/* Philosophy Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 mb-8 text-white"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">The Patience Premium</h3>
              <p className="opacity-90">
                This tool demonstrates Dr. Moore&apos;s core principle: Strategic patience and consistent 
                action compound over time. The longer you wait, the more your money works for you. 
                Doing nothing (after setting up your plan) is often the optimal strategy.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Input Controls */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Investment Plan</h2>
              
              <div className="space-y-6">
                {/* Initial Investment */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4" />
                    Initial Investment
                  </label>
                  <input
                    type="number"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={initialInvestment}
                    onChange={(e) => setInitialInvestment(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Monthly Contribution */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Calendar className="w-4 h-4" />
                    Monthly Contribution
                  </label>
                  <input
                    type="number"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="50"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Annual Return */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Percent className="w-4 h-4" />
                    Expected Annual Return
                  </label>
                  <input
                    type="number"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    step="0.5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="0.5"
                    value={annualReturn}
                    onChange={(e) => setAnnualReturn(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Historical S&P 500 average: ~10%
                  </p>
                </div>

                {/* Time Horizon */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <TrendingUp className="w-4 h-4" />
                    Time Horizon (Years)
                  </label>
                  <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg font-semibold"
                  />
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                </div>

                {/* Comparison Toggle */}
                <div className="pt-4 border-t">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showComparison}
                      onChange={(e) => setShowComparison(e.target.checked)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-sm font-semibold text-gray-700">
                      Show Comparison Scenarios
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="text-sm text-gray-600 mb-2">Final Balance</div>
                <div className="text-3xl font-bold text-blue-600">{formatCurrency(finalBalance)}</div>
                <div className="text-xs text-gray-500 mt-2">After {years} years</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="text-sm text-gray-600 mb-2">Total Contributions</div>
                <div className="text-3xl font-bold text-gray-700">{formatCurrency(totalContributions)}</div>
                <div className="text-xs text-gray-500 mt-2">Your investment</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl shadow-lg p-6 text-white"
              >
                <div className="text-sm opacity-90 mb-2">Investment Earnings</div>
                <div className="text-3xl font-bold">{formatCurrency(totalEarnings)}</div>
                <div className="text-xs opacity-90 mt-2">+{earningsPercentage.toFixed(0)}% return</div>
              </motion.div>
            </div>

            {/* Main Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {showComparison ? 'Scenario Comparison' : 'Growth Projection'}
              </h3>
              <ResponsiveContainer width="100%" height={400}>
                {showComparison ? (
                  <LineChart data={comparisonData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="Your Plan" 
                      stroke="#3B82F6" 
                      strokeWidth={3}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="No Monthly Contributions" 
                      stroke="#EF4444" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="Higher Return (+2%)" 
                      stroke="#10B981" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                ) : (
                  <AreaChart data={mainScenario}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="year" 
                      label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip 
                      formatter={(value: number) => formatCurrency(value)}
                      labelFormatter={(label) => `Year ${label}`}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="contributions" 
                      stackId="1"
                      stroke="#6B7280" 
                      fill="#9CA3AF" 
                      name="Your Contributions"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="earnings" 
                      stackId="1"
                      stroke="#10B981" 
                      fill="#34D399" 
                      name="Investment Earnings"
                    />
                  </AreaChart>
                )}
              </ResponsiveContainer>
            </div>

            {/* Insights */}
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Insights</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">💰</span>
                  <span>
                    Your investment earnings ({formatCurrency(totalEarnings)}) represent{' '}
                    <strong>{((totalEarnings / finalBalance) * 100).toFixed(1)}%</strong> of your final balance.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">📈</span>
                  <span>
                    With consistent monthly contributions, your money grows to{' '}
                    <strong>{(finalBalance / totalContributions).toFixed(2)}x</strong> your total contributions.
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">⏰</span>
                  <span>
                    The longer you invest, the more compound interest works in your favor. 
                    {years >= 20 && ' Your time horizon allows significant compound growth!'}
                  </span>
                </p>
                {showComparison && (
                  <p className="flex items-start gap-2">
                    <span className="text-yellow-600 font-bold">🎯</span>
                    <span>
                      Monthly contributions add {formatCurrency(
                        mainScenario[mainScenario.length - 1].balance - 
                        noContributionsScenario[noContributionsScenario.length - 1].balance
                      )} more than a one-time investment alone.
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Strategic Patience Message */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Power of Strategic Patience</h3>
              <p className="text-lg opacity-90 mb-4">
                This projection demonstrates why &quot;doing nothing&quot; after setting up your investment 
                plan is often the best strategy. Frequent trading, market timing, and emotional decisions 
                typically reduce returns.
              </p>
              <p className="opacity-90">
                <strong>Dr. Moore&apos;s Advice:</strong> Set up automatic contributions, choose diversified 
                investments, and let time and compound interest do the heavy lifting. The patience premium 
                is real.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Wealth Strategy?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Learn more about strategic patience and long-term wealth building in Dr. Moore&apos;s book, 
            or explore other financial tools to optimize your strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Read the Book
            </Link>
            <Link
              href="/tools"
              className="inline-block bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Explore More Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
