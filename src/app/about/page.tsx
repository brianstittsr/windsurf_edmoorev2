import React from 'react';


export const metadata = {
  title: 'About Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Learn about Dr. Edmund Moore\'s journey, philosophy, and mission to empower individuals through financial literacy.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-gray-300 w-full h-72 md:h-96 rounded flex items-center justify-center">
            <span className="text-gray-600">Dr. Edmund Moore Portrait</span>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-4xl font-bold mb-6">About Dr. Edmund Moore</h1>
          <p className="text-lg text-gray-700 mb-6">
            Dr. Edmund Moore is a renowned financial literacy expert, author, and speaker dedicated to empowering 
            individuals, families, and communities through knowledge, discipline, and legacy-building tools.
          </p>
          <p className="text-lg text-gray-700">
            With over two decades of experience in financial education, Dr. Moore has helped thousands of people 
            transform their financial futures and build lasting wealth.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          To empower individuals and families with the knowledge, tools, and strategies needed to achieve 
          financial freedom, build generational wealth, and create lasting legacies.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Philosophy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Knowledge is Power</h3>
            <p className="text-gray-700">
              Dr. Moore believes that financial education is the foundation of wealth building. By understanding 
              how money works, individuals can make informed decisions that lead to financial success.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Discipline Creates Wealth</h3>
            <p className="text-gray-700">
              Financial success requires consistent discipline and commitment. Dr. Moore teaches practical 
              strategies for developing the habits necessary for long-term wealth building.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Legacy Building</h3>
            <p className="text-gray-700">
              True wealth extends beyond money to include the values, knowledge, and opportunities we pass down 
              to future generations. Dr. Moore helps individuals create meaningful legacies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Community Empowerment</h3>
            <p className="text-gray-700">
              Financial literacy strengthens communities. Dr. Moore is committed to providing resources and 
              education that empower entire communities to achieve financial independence.
            </p>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Dr. Moore&apos;s Journey</h2>
        <div className="space-y-8">
          <p className="text-lg text-gray-700">
            Dr. Edmund Moore&apos;s passion for financial literacy began in his early twenties when he realized the 
            significant impact that financial knowledge—or lack thereof—had on individuals and families. After 
            witnessing the struggles many faced due to financial illiteracy, he committed himself to becoming 
            an expert in personal finance and wealth building.
          </p>
          <p className="text-lg text-gray-700">
            After completing his education, Dr. Moore spent several years working in the financial industry, 
            gaining valuable insights into how money works and how wealth is created. However, he soon realized 
            that his true calling was in education and empowerment.
          </p>
          <p className="text-lg text-gray-700">
            In 2005, he published his first book on financial literacy, which quickly became a bestseller. 
            Since then, he has authored several more books, developed practical financial tools, and created 
            training programs that have helped thousands of people transform their financial situations.
          </p>
          <p className="text-lg text-gray-700">
            Today, Dr. Moore travels the country speaking at conferences, conducting workshops, and consulting 
            with organizations committed to promoting financial literacy. His approach combines solid financial 
            principles with practical, actionable strategies that anyone can implement.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-900 text-white p-12 rounded-lg text-center mb-16">
        <blockquote className="text-2xl md:text-3xl italic font-medium max-w-3xl mx-auto">
          &quot;Financial freedom isn&apos;t about having all the money in the world; it&apos;s about having control over your 
          financial choices and creating opportunities for yourself and future generations.&quot;
          <footer className="text-lg mt-4 font-normal">— Dr. Edmund Moore</footer>
        </blockquote>
      </div>

      {/* Credentials Section */}
      <div>
        <h2 className="text-3xl font-bold mb-8">Credentials & Recognition</h2>
        <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
          <li>Ph.D. in Economics from [University Name]</li>
          <li>Certified Financial Educator</li>
          <li>Author of 5 bestselling books on financial literacy and wealth building</li>
          <li>Featured in [Major Publications/Media]</li>
          <li>Awarded the [Award Name] for contributions to financial education</li>
          <li>Has spoken at over 500 events nationwide</li>
          <li>Founder of the [Foundation/Organization Name] for Financial Literacy</li>
        </ul>
      </div>
    </div>
  );
}
