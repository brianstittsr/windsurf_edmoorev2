'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Plus, Trash2, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface Asset {
  id: string;
  name: string;
  category: string;
  value: number;
}

interface Liability {
  id: string;
  name: string;
  category: string;
  value: number;
}

const ASSET_CATEGORIES = [
  'Cash & Savings',
  'Investments',
  'Retirement Accounts',
  'Real Estate',
  'Vehicles',
  'Other Assets',
];

const LIABILITY_CATEGORIES = [
  'Mortgage',
  'Auto Loans',
  'Student Loans',
  'Credit Cards',
  'Personal Loans',
  'Other Debt',
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

export default function NetWorthCalculatorPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [liabilities, setLiabilities] = useState<Liability[]>([]);
  const [newAsset, setNewAsset] = useState({ name: '', category: ASSET_CATEGORIES[0], value: '' });
  const [newLiability, setNewLiability] = useState({ name: '', category: LIABILITY_CATEGORIES[0], value: '' });

  // Load from localStorage on mount
  useEffect(() => {
    const savedAssets = localStorage.getItem('netWorthAssets');
    const savedLiabilities = localStorage.getItem('netWorthLiabilities');
    if (savedAssets) setAssets(JSON.parse(savedAssets));
    if (savedLiabilities) setLiabilities(JSON.parse(savedLiabilities));
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('netWorthAssets', JSON.stringify(assets));
  }, [assets]);

  useEffect(() => {
    localStorage.setItem('netWorthLiabilities', JSON.stringify(liabilities));
  }, [liabilities]);

  const addAsset = () => {
    if (newAsset.name && newAsset.value) {
      setAssets([
        ...assets,
        {
          id: Date.now().toString(),
          name: newAsset.name,
          category: newAsset.category,
          value: parseFloat(newAsset.value),
        },
      ]);
      setNewAsset({ name: '', category: ASSET_CATEGORIES[0], value: '' });
    }
  };

  const addLiability = () => {
    if (newLiability.name && newLiability.value) {
      setLiabilities([
        ...liabilities,
        {
          id: Date.now().toString(),
          name: newLiability.name,
          category: newLiability.category,
          value: parseFloat(newLiability.value),
        },
      ]);
      setNewLiability({ name: '', category: LIABILITY_CATEGORIES[0], value: '' });
    }
  };

  const removeAsset = (id: string) => {
    setAssets(assets.filter((a) => a.id !== id));
  };

  const removeLiability = (id: string) => {
    setLiabilities(liabilities.filter((l) => l.id !== id));
  };

  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  const assetsByCategory = ASSET_CATEGORIES.map((category) => ({
    name: category,
    value: assets.filter((a) => a.category === category).reduce((sum, a) => sum + a.value, 0),
  })).filter((item) => item.value > 0);

  const liabilitiesByCategory = LIABILITY_CATEGORIES.map((category) => ({
    name: category,
    value: liabilities.filter((l) => l.category === category).reduce((sum, l) => sum + l.value, 0),
  })).filter((item) => item.value > 0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Net Worth Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your net worth by tracking your assets and liabilities. Understanding your 
            financial position is the first step toward strategic wealth building.
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">Total Assets</span>
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-3xl font-bold text-green-600">{formatCurrency(totalAssets)}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600 font-medium">Total Liabilities</span>
              <TrendingDown className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-3xl font-bold text-red-600">{formatCurrency(totalLiabilities)}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`bg-gradient-to-br ${
              netWorth >= 0 ? 'from-blue-600 to-purple-600' : 'from-red-600 to-orange-600'
            } rounded-xl shadow-lg p-6 text-white`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Net Worth</span>
              <DollarSign className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold">{formatCurrency(netWorth)}</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Assets Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assets</h2>

            {/* Add Asset Form */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Add Asset</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Asset name (e.g., Savings Account)"
                  value={newAsset.name}
                  onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <select
                  value={newAsset.category}
                  onChange={(e) => setNewAsset({ ...newAsset, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {ASSET_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Value"
                    value={newAsset.value}
                    onChange={(e) => setNewAsset({ ...newAsset, value: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    onClick={addAsset}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Assets List */}
            <div className="space-y-2">
              {assets.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No assets added yet</p>
              ) : (
                assets.map((asset) => (
                  <div
                    key={asset.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">{asset.name}</div>
                      <div className="text-sm text-gray-600">{asset.category}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-green-600">{formatCurrency(asset.value)}</span>
                      <button
                        onClick={() => removeAsset(asset.id)}
                        className="text-red-600 hover:text-red-700 transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Liabilities Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Liabilities</h2>

            {/* Add Liability Form */}
            <div className="mb-6 p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Add Liability</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Liability name (e.g., Credit Card)"
                  value={newLiability.name}
                  onChange={(e) => setNewLiability({ ...newLiability, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <select
                  value={newLiability.category}
                  onChange={(e) => setNewLiability({ ...newLiability, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  {LIABILITY_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Value"
                    value={newLiability.value}
                    onChange={(e) => setNewLiability({ ...newLiability, value: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <button
                    onClick={addLiability}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add
                  </button>
                </div>
              </div>
            </div>

            {/* Liabilities List */}
            <div className="space-y-2">
              {liabilities.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No liabilities added yet</p>
              ) : (
                liabilities.map((liability) => (
                  <div
                    key={liability.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div>
                      <div className="font-semibold text-gray-900">{liability.name}</div>
                      <div className="text-sm text-gray-600">{liability.category}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-red-600">{formatCurrency(liability.value)}</span>
                      <button
                        onClick={() => removeLiability(liability.id)}
                        className="text-red-600 hover:text-red-700 transition"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Visualizations */}
        {(assetsByCategory.length > 0 || liabilitiesByCategory.length > 0) && (
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {assetsByCategory.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Assets by Category</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={assetsByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {assetsByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {liabilitiesByCategory.length > 0 && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Liabilities by Category</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={liabilitiesByCategory}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {liabilitiesByCategory.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value: number) => formatCurrency(value)} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        )}

        {/* Insights */}
        {(assets.length > 0 || liabilities.length > 0) && (
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Financial Insights</h3>
            <div className="space-y-3 text-gray-700">
              {netWorth >= 0 ? (
                <p>✅ Your net worth is positive at {formatCurrency(netWorth)}. Great work!</p>
              ) : (
                <p>⚠️ Your net worth is negative at {formatCurrency(netWorth)}. Focus on debt reduction.</p>
              )}
              {totalLiabilities > 0 && (
                <p>
                  💡 Your debt-to-asset ratio is {((totalLiabilities / totalAssets) * 100).toFixed(1)}%.
                  {totalLiabilities / totalAssets > 0.5
                    ? ' Consider prioritizing debt payoff.'
                    : ' This is a healthy ratio.'}
                </p>
              )}
              <p>
                📊 Track your net worth monthly to see your progress. Strategic patience and consistent 
                action will compound over time.
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Wealth Strategy?</h3>
          <p className="text-lg mb-6 opacity-90">
            Understanding your net worth is just the beginning. Explore more tools and learn 
            Dr. Moore&apos;s strategic approach to wealth building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore More Tools
            </Link>
            <Link
              href="/books"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Read the Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
