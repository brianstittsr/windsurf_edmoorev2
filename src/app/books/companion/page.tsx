'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Calculator, TrendingUp, Clock, Users, Target, ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Chapter {
  number: number;
  title: string;
  description: string;
  keyPrinciples: string[];
  relatedTools: {
    name: string;
    link: string;
    description: string;
  }[];
  icon: any;
}

const chapters: Chapter[] = [
  {
    number: 1,
    title: 'The Philosophy of Strategic Inaction',
    description: 'Discover why doing nothing is often the most powerful financial strategy and how to identify when patience beats action.',
    keyPrinciples: [
      'Strategic patience vs. procrastination',
      'The cost of constant activity',
      'When markets reward waiting',
      'Building conviction through observation',
    ],
    relatedTools: [
      {
        name: 'Philosophy Assessment Quiz',
        link: '/philosophy-quiz',
        description: 'Evaluate your current approach and alignment with strategic inaction principles',
      },
      {
        name: 'Strategic Decision Evaluator',
        link: '/tools/strategic-decision-evaluator',
        description: 'Determine when to act vs. when to wait for any financial decision',
      },
    ],
    icon: Clock,
  },
  {
    number: 2,
    title: 'The Patience Premium',
    description: 'Learn how compound interest and time create wealth, and why consistent patience outperforms market timing.',
    keyPrinciples: [
      'The mathematics of compound growth',
      'Time as your greatest asset',
      'The cost of market timing',
      'Automatic investing strategies',
    ],
    relatedTools: [
      {
        name: 'Investment Growth Forecaster',
        link: '/tools/investment-growth-forecaster',
        description: 'Visualize how patience and consistent contributions compound over time',
      },
    ],
    icon: TrendingUp,
  },
  {
    number: 3,
    title: 'Building Your Financial Foundation',
    description: 'Establish a clear picture of your current financial position and create a baseline for strategic planning.',
    keyPrinciples: [
      'Calculating true net worth',
      'Understanding asset vs. liability',
      'Identifying financial blind spots',
      'Setting realistic benchmarks',
    ],
    relatedTools: [
      {
        name: 'Net Worth Calculator',
        link: '/tools/net-worth-calculator',
        description: 'Track your assets and liabilities with visual breakdowns and insights',
      },
    ],
    icon: Calculator,
  },
  {
    number: 4,
    title: 'Decision Frameworks for Wealth',
    description: 'Master the art of financial decision-making using systematic frameworks that remove emotion and bias.',
    keyPrinciples: [
      'The action vs. patience matrix',
      'Evaluating urgency and impact',
      'Reversibility as a decision factor',
      'Information gathering strategies',
    ],
    relatedTools: [
      {
        name: 'Strategic Decision Evaluator',
        link: '/tools/strategic-decision-evaluator',
        description: 'Apply Dr. Moore\'s framework to your real financial decisions',
      },
    ],
    icon: Target,
  },
  {
    number: 5,
    title: 'Community and Accountability',
    description: 'Leverage the power of community support and accountability to stay committed to your long-term strategy.',
    keyPrinciples: [
      'Finding your financial tribe',
      'Accountability partnerships',
      'Learning from others\' journeys',
      'Celebrating milestones together',
    ],
    relatedTools: [],
    icon: Users,
  },
];

export default function BookCompanionPage() {
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full mb-6"
          >
            <Book className="w-6 h-6" />
            <span className="font-semibold">Digital Book Companion</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Freedom: Doing Nothing is an Option
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your reading experience with interactive tools and resources that bring 
            Dr. Moore&apos;s principles to life. Each chapter connects to practical applications 
            you can use immediately.
          </p>
        </div>

        {/* Book Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Book</h2>
              <p className="text-gray-700 mb-4">
                In a world obsessed with constant action and quick wins, Dr. Edmund Moore presents 
                a revolutionary approach: strategic inaction. This book challenges conventional 
                financial wisdom and demonstrates how patience, observation, and calculated waiting 
                can be your greatest competitive advantages.
              </p>
              <p className="text-gray-700 mb-6">
                Through real-world examples, scientific research, and practical frameworks, you&apos;ll 
                learn when to act decisively and when doing nothing is the optimal strategy.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Get the Book
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <Link
                  href="/philosophy-quiz"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Take the Quiz
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <Book className="w-32 h-32 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold">5 Chapters</p>
                <p className="text-gray-600 text-sm">Interactive Tools & Resources</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chapter Navigator */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Chapter-by-Chapter Guide</h2>
          <div className="space-y-6">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isExpanded = selectedChapter === chapter.number;
              
              return (
                <motion.div
                  key={chapter.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setSelectedChapter(isExpanded ? null : chapter.number)}
                    className="w-full p-6 flex items-center gap-6 hover:bg-gray-50 transition text-left"
                  >
                    <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm font-bold text-blue-600">Chapter {chapter.number}</span>
                        {chapter.relatedTools.length > 0 && (
                          <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold">
                            {chapter.relatedTools.length} Tool{chapter.relatedTools.length > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{chapter.title}</h3>
                      <p className="text-gray-600">{chapter.description}</p>
                    </div>
                    <ChevronRight className={`w-6 h-6 text-gray-400 transition-transform ${
                      isExpanded ? 'rotate-90' : ''
                    }`} />
                  </button>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t border-gray-200 p-6 bg-gray-50"
                    >
                      {/* Key Principles */}
                      <div className="mb-6">
                        <h4 className="font-bold text-gray-900 mb-3">Key Principles:</h4>
                        <ul className="space-y-2">
                          {chapter.keyPrinciples.map((principle, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{principle}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Related Tools */}
                      {chapter.relatedTools.length > 0 && (
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Interactive Tools:</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {chapter.relatedTools.map((tool, idx) => (
                              <Link
                                key={idx}
                                href={tool.link}
                                className="block p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition"
                              >
                                <div className="flex items-start justify-between mb-2">
                                  <h5 className="font-bold text-gray-900">{tool.name}</h5>
                                  <ExternalLink className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                </div>
                                <p className="text-sm text-gray-600">{tool.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Financial Approach?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Get the book and access all interactive tools to apply Dr. Moore&apos;s strategic 
            inaction philosophy to your financial life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/books"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Purchase Book
            </Link>
            <Link
              href="/tools"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Explore All Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
