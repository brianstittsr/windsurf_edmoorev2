import React from 'react';

export const metadata = {
  title: 'Training Programs by Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Participate in workshops, courses, and training sessions led by Dr. Edmund Moore to enhance your financial knowledge and skills.',
};

export default function TrainingPage() {
  const trainingPrograms = [
    {
      id: 1,
      title: 'Financial Fundamentals',
      description: 'A comprehensive 6-week course covering the basics of personal finance, budgeting, saving, and investing.',
      format: 'Online Course',
      duration: '6 weeks',
      level: 'Beginner',
      price: '$299',
      image: '/placeholder-training.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Wealth Building Masterclass',
      description: 'An intensive program focused on advanced investment strategies, real estate, business ownership, and passive income.',
      format: 'Live Workshop',
      duration: '2 days',
      level: 'Advanced',
      price: '$799',
      image: '/placeholder-training.jpg',
      link: '#',
    },
    {
      id: 3,
      title: 'Debt Freedom Accelerator',
      description: 'Learn proven strategies to eliminate debt quickly while building a strong financial foundation for the future.',
      format: 'Online Course',
      duration: '4 weeks',
      level: 'Intermediate',
      price: '$249',
      image: '/placeholder-training.jpg',
      link: '#',
    },
    {
      id: 4,
      title: 'Legacy Planning Workshop',
      description: 'Create a comprehensive plan to build and preserve generational wealth for your family and community.',
      format: 'Live Workshop',
      duration: '1 day',
      level: 'Intermediate',
      price: '$499',
      image: '/placeholder-training.jpg',
      link: '#',
    },
    {
      id: 5,
      title: 'Financial Literacy for Families',
      description: 'A course designed for parents to learn how to teach children about money management and financial responsibility.',
      format: 'Online Course',
      duration: '4 weeks',
      level: 'Beginner',
      price: '$199',
      image: '/placeholder-training.jpg',
      link: '#',
    },
    {
      id: 6,
      title: 'Retirement Planning Intensive',
      description: 'Comprehensive strategies for planning and funding your retirement to ensure financial security in your later years.',
      format: 'Hybrid (Online & In-Person)',
      duration: '8 weeks',
      level: 'Intermediate',
      price: '$399',
      image: '/placeholder-training.jpg',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Training & Educational Programs</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Participate in workshops, courses, and training sessions led by Dr. Edmund Moore to enhance your 
          financial knowledge and develop the skills needed for long-term financial success.
        </p>
      </div>

      {/* Featured Program */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="bg-gray-300 w-full h-72 rounded flex items-center justify-center">
              <span className="text-gray-600">Wealth Building Masterclass</span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Featured Program</span>
            <h2 className="text-3xl font-bold mb-4">Wealth Building Masterclass</h2>
            <p className="text-lg text-gray-700 mb-6">
              Join Dr. Moore for this intensive 2-day workshop where you&apos;ll learn advanced strategies for building 
              sustainable wealth. This program covers investment diversification, real estate opportunities, 
              business ownership, and creating multiple streams of passive income.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-gray-600 text-sm">Format</span>
                <p className="font-medium">Live Workshop</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Duration</span>
                <p className="font-medium">2 Days (16 Hours)</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Level</span>
                <p className="font-medium">Advanced</p>
              </div>
              <div>
                <span className="text-gray-600 text-sm">Price</span>
                <p className="font-medium">$799</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Register Now
              </a>
              <a 
                href="#" 
                className="bg-transparent border border-blue-700 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Programs */}
      <div>
        <h2 className="text-3xl font-bold mb-8">All Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-300 w-full h-48 rounded mb-6 flex items-center justify-center">
                <span className="text-gray-600">{program.title}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div>
                  <span className="text-gray-500 text-sm">Format</span>
                  <p className="font-medium text-sm">{program.format}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Duration</span>
                  <p className="font-medium text-sm">{program.duration}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Level</span>
                  <p className="font-medium text-sm">{program.level}</p>
                </div>
                <div>
                  <span className="text-gray-500 text-sm">Price</span>
                  <p className="font-medium text-sm">{program.price}</p>
                </div>
              </div>
              <a 
                href={program.link} 
                className="block text-center bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Corporate Training */}
      <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Corporate Training Solutions</h2>
            <p className="text-lg mb-6">
              Dr. Moore offers customized financial literacy and wealth-building programs for organizations 
              of all sizes. Empower your employees with the knowledge and tools they need to achieve financial 
              wellness, reduce stress, and improve productivity.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Customized curriculum based on your organization&apos;s needs</li>
              <li>On-site or virtual training options</li>
              <li>Interactive workshops and engaging presentations</li>
              <li>Ongoing support and resources for participants</li>
              <li>Measurable outcomes and follow-up assessments</li>
            </ul>
            <a 
              href="#" 
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300 inline-block"
            >
              Request Corporate Training
            </a>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-gray-800 p-6 rounded-lg w-full max-w-xs">
              <h3 className="text-xl font-bold mb-4 text-center">Our Corporate Clients</h3>
              <ul className="space-y-3">
                <li className="bg-gray-700 py-2 px-4 rounded text-center">Fortune 500 Company</li>
                <li className="bg-gray-700 py-2 px-4 rounded text-center">Major Bank Name</li>
                <li className="bg-gray-700 py-2 px-4 rounded text-center">Tech Company Inc.</li>
                <li className="bg-gray-700 py-2 px-4 rounded text-center">Healthcare Organization</li>
                <li className="bg-gray-700 py-2 px-4 rounded text-center">Educational Institution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Training Approach */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Training Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Knowledge-Based</h3>
            <p className="text-gray-600 text-center">
              Our programs are built on solid financial principles and research-backed strategies that have been 
              proven effective in real-world applications.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Action-Oriented</h3>
            <p className="text-gray-600 text-center">
              Every program includes practical exercises, actionable steps, and implementation plans to ensure 
              participants can apply what they learn immediately.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">Community-Supported</h3>
            <p className="text-gray-600 text-center">
              Participants join a community of like-minded individuals for ongoing support, accountability, 
              and networking opportunities that extend beyond the program.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">MJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Michael Johnson</h4>
                <p className="text-gray-600 text-sm">Financial Fundamentals Graduate</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;Before taking Dr. Moore&apos;s Financial Fundamentals course, I was living paycheck to paycheck. 
              Now, I have a solid budget, an emergency fund, and I&apos;m consistently investing for my future. 
              This course changed my life!&quot;
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">SP</span>
              </div>
              <div>
                <h4 className="font-semibold">Sarah Parker</h4>
                <p className="text-gray-600 text-sm">Wealth Building Masterclass Attendee</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;The Wealth Building Masterclass was exactly what I needed to take my finances to the next level. 
              Dr. Moore&apos;s strategies for creating passive income have helped me develop two new income streams 
              that are generating an additional $3,000 per month!&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white p-12 rounded-lg text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Knowledge?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Join one of Dr. Moore&apos;s training programs today and gain the knowledge, skills, and confidence 
          needed to achieve your financial goals.
        </p>
        <a 
          href="#" 
          className="bg-white text-blue-700 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition duration-300 inline-block"
        >
          Browse All Programs
        </a>
      </div>
    </div>
  );
}
