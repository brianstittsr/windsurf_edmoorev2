import React from 'react';

export const metadata = {
  title: 'Speaking Engagements | Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Book Dr. Edmund Moore for keynote speeches, workshops, and panel discussions on financial literacy, wealth building, and economic empowerment.',
};

export default function SpeakingPage() {
  const speakingTopics = [
    {
      id: 1,
      title: 'Financial Freedom: Breaking the Paycheck-to-Paycheck Cycle',
      description: 'Learn practical strategies to escape living paycheck-to-paycheck and build a solid financial foundation.',
      icon: 'chart-line',
      audience: 'General Public, Corporate Employees',
      duration: '45-90 minutes',
    },
    {
      id: 2,
      title: 'Building Generational Wealth in Underserved Communities',
      description: 'Addressing the wealth gap and providing actionable steps for creating lasting financial legacies.',
      icon: 'building',
      audience: 'Community Organizations, Non-profits',
      duration: '60-120 minutes',
    },
    {
      id: 3,
      title: 'Financial Literacy for the Next Generation',
      description: 'How to teach children and young adults about money management, saving, and investing.',
      icon: 'graduation-cap',
      audience: 'Parents, Educators, Youth Organizations',
      duration: '45-90 minutes',
    },
    {
      id: 4,
      title: 'The Psychology of Money: Mindset Shifts for Financial Success',
      description: 'Understanding how beliefs and behaviors impact financial decisions and how to develop a wealth mindset.',
      icon: 'brain',
      audience: 'All Audiences',
      duration: '60 minutes',
    },
    {
      id: 5,
      title: 'Entrepreneurship as a Path to Financial Independence',
      description: 'Leveraging business ownership to create multiple income streams and build sustainable wealth.',
      icon: 'briefcase',
      audience: 'Entrepreneurs, Business Students',
      duration: '90-120 minutes',
    },
    {
      id: 6,
      title: 'Investing Strategies for Long-term Wealth',
      description: 'Practical approaches to investing in stocks, real estate, and alternative assets for lasting wealth.',
      icon: 'chart-pie',
      audience: 'Investors, Financial Professionals',
      duration: '60-90 minutes',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Financial Freedom Summit',
      date: 'June 15-16, 2023',
      location: 'Atlanta, GA',
      description: 'Keynote address on building generational wealth and breaking financial barriers.',
      link: '#',
    },
    {
      id: 2,
      title: 'Corporate Financial Wellness Workshop',
      date: 'July 8, 2023',
      location: 'Virtual Event',
      description: 'Interactive workshop for Fortune 500 company employees on personal finance strategies.',
      link: '#',
    },
    {
      id: 3,
      title: 'Community College Speaker Series',
      date: 'August 22, 2023',
      location: 'Chicago, IL',
      description: 'Speaking to students about financial literacy and early career financial planning.',
      link: '#',
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'TEDx Talk: The Future of Financial Literacy',
      date: 'November 12, 2022',
      location: 'New York, NY',
      videoLink: '#',
    },
    {
      id: 2,
      title: 'National Economic Empowerment Conference',
      date: 'September 5, 2022',
      location: 'Washington, DC',
      videoLink: '#',
    },
    {
      id: 3,
      title: 'University Business School Guest Lecture',
      date: 'March 18, 2022',
      location: 'Los Angeles, CA',
      videoLink: '#',
    },
    {
      id: 4,
      title: 'Financial Literacy Month Panel Discussion',
      date: 'April 15, 2022',
      location: 'Virtual Event',
      videoLink: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Speaking Engagements</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Dr. Edmund Moore is a dynamic and engaging speaker who delivers powerful messages on financial literacy, 
          wealth building, and economic empowerment to audiences worldwide.
        </p>
      </div>

      {/* Speaker Introduction */}
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="bg-gray-300 w-full h-96 rounded flex items-center justify-center">
            <span className="text-gray-600">Dr. Edmund Moore Speaking</span>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold mb-6">Meet Dr. Edmund Moore</h2>
          <p className="text-lg text-gray-700 mb-6">
            Dr. Moore is a renowned financial literacy advocate, bestselling author, and captivating speaker 
            with over 15 years of experience in empowering audiences with practical financial knowledge.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Having spoken at over 500 events across the country, including conferences, corporate events, 
            universities, and community organizations, Dr. Moore brings a unique blend of academic knowledge, 
            real-world experience, and inspirational storytelling to every engagement.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#booking" 
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
            >
              Book Dr. Moore
            </a>
            <a 
              href="#topics" 
              className="bg-transparent border border-blue-700 text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300"
            >
              Speaking Topics
            </a>
          </div>
        </div>
      </div>

      {/* Speaking Topics */}
      <div id="topics" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Popular Speaking Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakingTopics.map((topic) => (
            <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 text-blue-700 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  {topic.icon === 'chart-line' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  )}
                  {topic.icon === 'building' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )}
                  {topic.icon === 'graduation-cap' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  )}
                  {topic.icon === 'brain' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {topic.icon === 'briefcase' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {topic.icon === 'chart-pie' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                    </svg>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{topic.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{topic.description}</p>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">{topic.audience}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-sm">{topic.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Upcoming Speaking Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <div className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-700">{event.date}</span>
              </div>
              <div className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-700">{event.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a 
                href={event.link} 
                className="text-blue-700 font-medium hover:underline flex items-center"
              >
                Event Details
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Past Speaking Engagements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pastEvents.map((event) => (
            <div key={event.id} className="flex items-center bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold">{event.title}</h3>
                <div className="flex flex-wrap text-sm text-gray-600">
                  <span className="mr-4">{event.date}</span>
                  <span>{event.location}</span>
                </div>
              </div>
              <a 
                href={event.videoLink} 
                className="text-blue-700 hover:underline flex items-center text-sm"
              >
                Watch Video
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Event Organizers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">JW</span>
              </div>
            </div>
            <p className="text-gray-700 italic text-center mb-4">
              &quot;&quot;Dr. Moore was the highlight of our financial conference. His ability to connect with the audience 
and deliver complex financial concepts in an accessible way was remarkable.&quot;&quot;
            </p>
            <div className="text-center">
              <h4 className="font-semibold">Jennifer Williams</h4>
              <p className="text-gray-600 text-sm">Conference Director, Financial Freedom Summit</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">MT</span>
              </div>
            </div>
            <p className="text-gray-700 italic text-center mb-4">
              &quot;Our employees are still talking about Dr. Moore&apos;s workshop months later. The practical strategies 
he shared have made a real difference in how our team approaches personal finance.&quot;
            </p>
            <div className="text-center">
              <h4 className="font-semibold">Marcus Thompson</h4>
              <p className="text-gray-600 text-sm">HR Director, Fortune 500 Company</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <div className="bg-gray-300 w-16 h-16 rounded-full flex items-center justify-center">
                <span className="text-gray-600 text-xs">DR</span>
              </div>
            </div>
            <p className="text-gray-700 italic text-center mb-4">
              &quot;Dr. Moore&apos;s keynote address at our community event was inspiring and transformative. He didn&apos;t just 
talk about financial literacy; he provided a roadmap for our community to follow.&quot;
            </p>
            <div className="text-center">
              <h4 className="font-semibold">Dr. Rebecca Johnson</h4>
              <p className="text-gray-600 text-sm">Executive Director, Community Foundation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div id="booking" className="bg-blue-50 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Book Dr. Moore for Your Event</h2>
            <p className="text-lg text-gray-700 mb-6">
              Dr. Moore is available for keynote speeches, workshops, panel discussions, and corporate training 
              sessions. His engaging presentation style and deep expertise make him a perfect fit for:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
              <li>Conferences and summits</li>
              <li>Corporate events and employee training</li>
              <li>Educational institutions</li>
              <li>Community organizations</li>
              <li>Media appearances and interviews</li>
              <li>Virtual events and webinars</li>
            </ul>
            <p className="text-gray-700 mb-6">
              To inquire about Dr. Moore&apos;s availability, speaking fees, or to discuss a customized presentation 
for your audience, please complete the booking inquiry form.
            </p>
            <a 
              href="/contact" 
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300 inline-block"
            >
              Submit Booking Inquiry
            </a>
          </div>
          <div className="md:w-1/3 md:pl-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Speaking Packages</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-blue-700">Keynote Address</h4>
                  <p className="text-gray-600 text-sm">45-60 minute presentation with Q&A session</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Half-Day Workshop</h4>
                  <p className="text-gray-600 text-sm">3-4 hour interactive session with workbooks</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Full-Day Training</h4>
                  <p className="text-gray-600 text-sm">6-8 hour comprehensive program with materials</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700">Virtual Presentation</h4>
                  <p className="text-gray-600 text-sm">Online keynote or workshop for remote audiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
