'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, TrendingUp, Brain, Target, BarChart3, LogOut } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated
  if (status === 'unauthenticated') {
    router.push('/auth/signin');
    return null;
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const stats = [
    {
      icon: BarChart3,
      title: 'Net Worth',
      value: '$0',
      subtitle: 'Not calculated yet',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/tools/net-worth-calculator',
    },
    {
      icon: Brain,
      title: 'Philosophy Type',
      value: 'Not assessed',
      subtitle: 'Take the quiz',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/philosophy-quiz',
    },
    {
      icon: Target,
      title: 'Decisions Saved',
      value: '0',
      subtitle: 'No decisions yet',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/tools/strategic-decision-evaluator',
    },
    {
      icon: TrendingUp,
      title: 'Investment Scenarios',
      value: '0',
      subtitle: 'Create your first',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      link: '/tools/investment-growth-forecaster',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Welcome back, {session?.user?.name || 'User'}!
              </h1>
              <p className="text-gray-600 text-lg">
                Your personal financial dashboard
              </p>
            </div>
            <Link
              href="/api/auth/signout"
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Sign Out</span>
            </Link>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={stat.link}
                  className="block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className={`${stat.bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-600 mb-1">{stat.title}</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <p className="text-sm text-gray-500">{stat.subtitle}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/tools/net-worth-calculator"
              className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Calculate Net Worth</h3>
                <p className="text-sm text-gray-600">Track your financial position</p>
              </div>
            </Link>
            
            <Link
              href="/philosophy-quiz"
              className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <Brain className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Take Philosophy Quiz</h3>
                <p className="text-sm text-gray-600">Discover your financial approach</p>
              </div>
            </Link>
            
            <Link
              href="/tools/investment-growth-forecaster"
              className="flex items-center gap-4 p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
            >
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Forecast Growth</h3>
                <p className="text-sm text-gray-600">Visualize compound interest</p>
              </div>
            </Link>
          </div>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white"
        >
          <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
          <p className="text-lg opacity-90 mb-6">
            Welcome to your financial journey! Start by calculating your net worth, 
            then take the philosophy quiz to understand your approach. All your data 
            will be saved securely to your account.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/books/companion"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Book Companion
            </Link>
            <Link
              href="/tools"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              View All Tools
            </Link>
          </div>
        </motion.div>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{session?.user?.name}</h2>
              <p className="text-gray-600">{session?.user?.email}</p>
            </div>
          </div>
          <Link
            href="/dashboard/profile"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Edit Profile →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
