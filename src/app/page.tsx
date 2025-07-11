import React from 'react';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex flex-col items-center justify-center px-4">
      <Hero />

      {/* Highlighted Features */}
      <section className="w-full max-w-4xl grid md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <svg className="h-12 w-12 text-blue-700 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          <h3 className="text-xl font-bold mb-2 text-blue-900">Freedom Calculator</h3>
          <p className="text-gray-700">Personalize your path to financial independence with actionable steps and clear milestones.</p>
          <a href="/tools" className="mt-4 text-blue-700 font-semibold hover:underline">Use Now →</a>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <svg className="h-12 w-12 text-green-600 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <h3 className="text-xl font-bold mb-2 text-blue-900">Practical Tools</h3>
          <p className="text-gray-700">Budgeting, debt reduction, and investment tools designed for real results.</p>
          <a href="/tools" className="mt-4 text-blue-700 font-semibold hover:underline">Explore Tools →</a>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <svg className="h-12 w-12 text-yellow-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0zM7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857" /></svg>
          <h3 className="text-xl font-bold mb-2 text-blue-900">Training & Community</h3>
          <p className="text-gray-700">Workshops, courses, and a supportive network to keep you motivated and accountable.</p>
          <a href="/training" className="mt-4 text-blue-700 font-semibold hover:underline">See Training →</a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Start Your Journey Today</h2>
        <p className="text-lg text-gray-700 mb-6">
          Take the first step toward financial freedom with Dr. Moore&apos;s proven tools and educational resources.
        </p>
        <a href="/contact" className="inline-block bg-yellow-400 text-yellow-900 px-8 py-3 rounded-lg font-bold shadow hover:bg-yellow-300 transition text-lg">Contact Dr. Moore</a>
      </section>
    </main>
  );
}


