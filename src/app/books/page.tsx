import React from 'react';

export const metadata = {
  title: 'Books by Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Explore Dr. Edmund Moore\'s collection of books on financial literacy, wealth building, and personal development.',
};

export default function BooksPage() {
  const books = [
    {
      id: 1,
      title: 'Financial Freedom: A Step-by-Step Guide',
      description: 'A comprehensive guide to achieving financial independence through practical strategies and disciplined habits.',
      coverImage: '/placeholder-book.jpg',
      year: '2020',
      price: '$24.99',
      link: '#',
    },
    {
      id: 2,
      title: 'Building Generational Wealth',
      description: 'Learn how to create and preserve wealth that lasts for generations, ensuring a legacy for your family.',
      coverImage: '/placeholder-book.jpg',
      year: '2018',
      price: '$22.99',
      link: '#',
    },
    {
      id: 3,
      title: 'The Disciplined Investor',
      description: 'Master the mindset and habits required for successful long-term investing in any market condition.',
      coverImage: '/placeholder-book.jpg',
      year: '2016',
      price: '$19.99',
      link: '#',
    },
    {
      id: 4,
      title: 'Financial Literacy for Families',
      description: 'A practical guide for parents to teach children about money management and financial responsibility.',
      coverImage: '/placeholder-book.jpg',
      year: '2015',
      price: '$21.99',
      link: '#',
    },
    {
      id: 5,
      title: 'Doing Nothing is an Option',
      description: "Dr. Moore's philosophy on strategic inaction and when patience is the best financial strategy.",
      coverImage: '/placeholder-book.jpg',
      year: '2022',
      price: '$26.99',
      link: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Books by Dr. Edmund Moore</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Discover Dr. Moore&apos;s collection of books on financial literacy, wealth building, and personal development.
          Each book provides practical strategies and insights to help you achieve financial freedom.
        </p>
      </div>

      {/* Featured Book */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="bg-white p-2 rounded shadow-lg">
              <div className="bg-gray-300 w-64 h-80 rounded flex items-center justify-center">
                <span className="text-gray-600">Doing Nothing is an Option</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Featured Book</span>
            <h2 className="text-3xl font-bold mb-4">Doing Nothing is an Option</h2>
            <p className="text-lg text-gray-700 mb-6">
              In his latest bestseller, Dr. Moore challenges conventional wisdom by exploring when strategic inaction 
              is the most powerful financial move. Learn how patience, careful observation, and the courage to wait 
              can lead to better financial outcomes than constant activity.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="text-gray-700 font-medium">Published: 2022</span>
              <span className="text-gray-700 font-medium">Pages: 284</span>
              <span className="text-gray-700 font-medium">Price: $26.99</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Buy Now
              </a>
              <a 
                href="#" 
                className="bg-transparent border border-blue-700 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
              >
                Read Sample
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* All Books */}
      <div>
        <h2 className="text-3xl font-bold mb-8">All Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div key={book.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-gray-300 w-48 h-64 rounded flex items-center justify-center">
                  <span className="text-gray-600">{book.title}</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">{book.year}</span>
                <span className="text-blue-700 font-medium">{book.price}</span>
              </div>
              <a 
                href={book.link} 
                className="block text-center bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Reader Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">JD</span>
              </div>
              <div>
                <h4 className="font-semibold">John Doe</h4>
                <p className="text-gray-600 text-sm">Financial Advisor</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;Dr. Moore&apos;s &apos;Financial Freedom&apos; completely changed how I approach my personal finances. The strategies 
              are practical and have helped me pay off debt while building wealth.&quot;
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-gray-600 text-xs">JS</span>
              </div>
              <div>
                <h4 className="font-semibold">Jane Smith</h4>
                <p className="text-gray-600 text-sm">Small Business Owner</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              &quot;I&apos;ve read all of Dr. Moore&apos;s books, and each one provides valuable insights. &apos;Building Generational Wealth&apos; 
              helped me create a financial legacy plan for my family.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white p-12 rounded-lg text-center mt-16">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Dr. Moore&apos;s books provide the knowledge and strategies you need to achieve financial freedom and build lasting wealth.
        </p>
        <a 
          href="#" 
          className="bg-white text-blue-700 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition duration-300 inline-block"
        >
          Explore All Books
        </a>
      </div>
    </div>
  );
}
