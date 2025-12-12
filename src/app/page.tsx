import React from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import { Calculator, DollarSign, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Calculator,
      title: 'Freedom Calculator',
      description: 'Personalize your path to financial independence with actionable steps and clear milestones.',
      href: '/tools',
    },
    {
      icon: DollarSign,
      title: 'Practical Tools',
      description: 'Budgeting, debt reduction, and investment tools designed for real results.',
      href: '/tools',
    },
    {
      icon: Users,
      title: 'Training & Community',
      description: 'Workshops, courses, and a supportive network to keep you motivated and accountable.',
      href: '/training',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center px-4">
        <Hero />
      </div>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* 30-Day Challenge Banner */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-16">
        <div className="bg-blue-700 rounded-lg p-8 md:p-12 text-white">
          <span className="bg-white text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
            Featured
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            30-Day Financial Freedom Challenge
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl">
            Transform your financial life in just 30 days. Start TODAY with Dr. Moore&apos;s proven daily action steps.
          </p>
          <Link 
            href="/challenge" 
            className="inline-flex items-center bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
          >
            Start Challenge Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Highlighted Features */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <feature.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link href={feature.href} className="text-blue-700 font-medium hover:underline inline-flex items-center">
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Journey Today</h2>
          <p className="text-lg text-gray-600 mb-6">
            Take the first step toward financial freedom with Dr. Moore&apos;s proven tools and educational resources.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition"
          >
            Contact Dr. Moore
          </Link>
        </div>
      </section>
    </main>
  );
}


