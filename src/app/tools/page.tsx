import React from 'react';

export const metadata = {
  title: 'Financial Tools by Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Access practical financial tools and resources designed by Dr. Edmund Moore to help you build wealth and secure your future.',
};

export default function ToolsPage() {
  const tools = [
    {
      id: 1,
      title: 'Budget Calculator',
      description: 'A comprehensive tool to help you create and manage your monthly budget, track expenses, and identify areas for improvement.',
      icon: 'calculator',
      link: '#',
      isPremium: false,
    },
    {
      id: 2,
      title: 'Debt Reduction Planner',
      description: 'Strategically plan your debt payoff journey with this interactive tool that helps you prioritize debts and save on interest.',
      icon: 'chart-line',
      link: '#',
      isPremium: false,
    },
    {
      id: 3,
      title: 'Retirement Calculator',
      description: 'Calculate how much you need to save for retirement and create a personalized plan to reach your retirement goals.',
      icon: 'piggy-bank',
      link: '#',
      isPremium: false,
    },
    {
      id: 4,
      title: 'Investment Portfolio Analyzer',
      description: 'Analyze your investment portfolio for diversification, risk assessment, and potential returns based on historical data.',
      icon: 'chart-pie',
      link: '#',
      isPremium: true,
    },
    {
      id: 5,
      title: 'Legacy Planning Toolkit',
      description: 'Comprehensive resources for creating a financial legacy plan, including estate planning documents and wealth transfer strategies.',
      icon: 'file-contract',
      link: '#',
      isPremium: true,
    },
    {
      id: 6,
      title: 'Financial Goal Tracker',
      description: 'Set, track, and achieve your financial goals with this interactive tool that helps you stay motivated and accountable.',
      icon: 'bullseye',
      link: '#',
      isPremium: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Financial Tools & Resources</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Access practical financial tools and resources designed by Dr. Edmund Moore to help you build wealth, 
          reduce debt, plan for retirement, and secure your financial future.
        </p>
      </div>

      {/* Featured Tool */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="bg-blue-700 text-white p-8 rounded-full w-48 h-48 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Featured Tool</span>
            <h2 className="text-3xl font-bold mb-4">Financial Freedom Calculator</h2>
            <p className="text-lg text-gray-700 mb-6">
              This comprehensive calculator helps you determine your path to financial freedom. Input your current 
              financial situation, goals, and timeline, and receive a personalized plan with actionable steps to 
              achieve financial independence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Try It Now
              </a>
              <a 
                href="#" 
                className="bg-transparent border border-blue-700 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
              >
                Watch Tutorial
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Tools */}
      <div>
        <h2 className="text-3xl font-bold mb-8">All Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <div key={tool.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  {tool.icon === 'calculator' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  )}
                  {tool.icon === 'chart-line' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )}
                  {tool.icon === 'piggy-bank' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {tool.icon === 'chart-pie' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  )}
                  {tool.icon === 'file-contract' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                  {tool.icon === 'bullseye' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="flex justify-between items-center">
                {tool.isPremium ? (
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">Premium</span>
                ) : (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Free</span>
                )}
                <a 
                  href={tool.link} 
                  className="text-blue-700 font-medium hover:underline"
                >
                  Access Tool →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Tools */}
      <div className="mt-16 bg-gray-900 text-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Premium Tools Package</h2>
            <p className="text-lg mb-6">
              Get access to all premium tools and resources, including personalized support and monthly updates, 
              with the Premium Tools Package. Designed for those serious about transforming their financial future.
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Unlimited access to all premium tools</li>
              <li>Monthly strategy sessions with certified financial coaches</li>
              <li>Priority customer support</li>
              <li>Early access to new tools and features</li>
              <li>Exclusive webinars and educational content</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300"
              >
                Get Premium Access
              </a>
              <a 
                href="#" 
                className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-gray-900 transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="bg-blue-800 p-6 rounded-lg text-center">
              <span className="text-xl font-bold">Premium Package</span>
              <div className="text-4xl font-bold my-4">$19.99<span className="text-lg font-normal">/month</span></div>
              <p className="text-blue-200 mb-4">or $199/year (save 17%)</p>
              <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium">Best Value</span>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">RJ</span>
              </div>
              <div>
                <h4 className="font-semibold">Robert Johnson</h4>
                <p className="text-gray-600 text-sm">Small Business Owner</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;The Budget Calculator helped me identify unnecessary expenses in my business that were eating into my profits. 
              I&apos;ve saved over $12,000 in the first year alone!&quot;
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">LM</span>
              </div>
              <div>
                <h4 className="font-semibold">Lisa Martinez</h4>
                <p className="text-gray-600 text-sm">Teacher</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;I was drowning in debt until I started using the Debt Reduction Planner. It gave me a clear path to becoming 
              debt-free, and I&apos;m proud to say I&apos;ll make my final payment next month!&quot;
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">DW</span>
              </div>
              <div>
                <h4 className="font-semibold">David Wilson</h4>
                <p className="text-gray-600 text-sm">Retired</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;The Retirement Calculator showed me that I wasn&apos;t saving enough for retirement. I adjusted my strategy, 
              and now I&apos;m on track to retire comfortably at 62 instead of 70.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white p-12 rounded-lg text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Financial Future?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Start using Dr. Moore&apos;s financial tools today and take the first step toward financial freedom and building lasting wealth.
        </p>
        <a 
          href="#" 
          className="bg-white text-blue-700 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition duration-300 inline-block"
        >
          Get Started for Free
        </a>
      </div>
    </div>
  );
}
