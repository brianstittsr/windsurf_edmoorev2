'use client';

import React from 'react';
import { Pause, TrendingUp, Brain, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PhilosophySection() {
  const principles = [
    {
      icon: Pause,
      title: 'Strategic Patience',
      description: 'Sometimes the most powerful financial move is to wait and observe before acting.',
    },
    {
      icon: Brain,
      title: 'Informed Decisions',
      description: 'Make choices based on data and analysis, not emotion or pressure.',
    },
    {
      icon: Clock,
      title: 'Time Advantage',
      description: 'Compound growth and patience often outperform hasty action.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Focus',
      description: 'Build wealth through consistent, disciplined strategies over time.',
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Doing Nothing is an Option
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dr. Moore&apos;s revolutionary philosophy challenges conventional financial wisdom. 
            Learn when strategic inaction is more powerful than constant activity.
          </p>
        </div>

        {/* Visual Framework */}
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">
                When to Act vs. When to Wait
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Act Now:</p>
                    <p className="text-gray-600">High-interest debt, emergency fund gaps, time-sensitive opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Monitor & Prepare:</p>
                    <p className="text-gray-600">Market volatility, career transitions, major purchases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold">Strategic Patience:</p>
                    <p className="text-gray-600">Long-term investments, compound growth, market timing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                <div className="absolute inset-6 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <Pause className="w-12 h-12 text-blue-700 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-700">Strategic<br />Inaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-blue-700" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </div>
            );
          })}
        </div>

        {/* Key Quote */}
        <div className="bg-blue-700 rounded-lg p-8 md:p-12 text-white text-center mb-12">
          <blockquote className="text-xl md:text-2xl font-bold mb-4 italic">
            &quot;In a world obsessed with constant action, the courage to do nothing—strategically—can be your greatest competitive advantage.&quot;
          </blockquote>
          <p className="text-blue-200">— Dr. Edmund Moore</p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            Discover Your Financial Philosophy
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Take our Philosophy Assessment Quiz to understand how your current approach aligns 
            with strategic inaction principles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/philosophy-quiz"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition"
            >
              Take the Assessment
            </Link>
            <Link
              href="/books"
              className="inline-block bg-white text-blue-700 border border-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Read the Book
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
