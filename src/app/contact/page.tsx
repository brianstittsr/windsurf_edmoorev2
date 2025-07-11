import React from 'react';

export const metadata = {
  title: 'Contact Dr. Edmund Moore | Financial Literacy & Empowerment',
  description: 'Get in touch with Dr. Edmund Moore for speaking engagements, training programs, or general inquiries about financial literacy and empowerment.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Contact Dr. Edmund Moore</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Whether you&apos;re interested in booking a speaking engagement, enrolling in a training program, 
          or have general inquiries, we&apos;re here to help you get in touch with Dr. Moore.
        </p>
      </div>

      {/* Contact Form and Info */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Contact Form */}
        <div className="lg:w-2/3">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="inquiryType" className="block text-gray-700 font-medium mb-2">Inquiry Type</label>
                <select 
                  id="inquiryType" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an option</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="training">Training Program</option>
                  <option value="books">Books Inquiry</option>
                  <option value="tools">Financial Tools</option>
                  <option value="media">Media Request</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="flex items-center">
                  <input type="checkbox" className="h-5 w-5 text-blue-600" />
                  <span className="ml-2 text-gray-700">
                    I agree to receive email communications from Dr. Edmund Moore.
                  </span>
                </label>
              </div>
              <button 
                type="submit" 
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="lg:w-1/3">
          <div className="bg-blue-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-700">contact@edmundmoore.com</p>
                  <p className="text-gray-500 text-sm">For general inquiries</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                  <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office</h3>
                  <p className="text-gray-700">
                    123 Financial District<br />
                    Suite 456<br />
                    Atlanta, GA 30303
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-100 text-blue-700 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.441 16.892c-2.102.144-6.784.144-8.883 0-2.276-.156-2.541-1.27-2.558-4.892.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0 2.277.156 2.541 1.27 2.559 4.892-.018 3.629-.285 4.736-2.559 4.892zm-6.441-7.234l4.917 2.338-4.917 2.346v-4.684z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-700">
              Follow Dr. Edmund Moore on social media for daily financial tips, upcoming events, and inspirational content.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">How can I book Dr. Moore for a speaking engagement?</h3>
            <p className="text-gray-700">
              You can submit a booking inquiry through our contact form above. Please include details about your event, 
              including the date, location, audience size, and topic of interest. Our team will respond within 48 hours.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Does Dr. Moore offer virtual training sessions?</h3>
            <p className="text-gray-700">
              Yes, Dr. Moore offers both in-person and virtual training sessions. Virtual options include live webinars, 
              interactive workshops, and pre-recorded courses tailored to your organization&apos;s needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">How can I purchase Dr. Moore&apos;s books?</h3>
            <p className="text-gray-700">
              Dr. Moore&apos;s books are available through our website&apos;s Books section, as well as major online retailers 
              and select bookstores. Bulk orders for organizations are available at discounted rates.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Are Dr. Moore&apos;s financial tools suitable for beginners?</h3>
            <p className="text-gray-700">
              Absolutely! Dr. Moore&apos;s financial tools are designed for users at all levels. Many tools include 
              tutorials and guides to help beginners get started on their financial journey.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-700 text-white p-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to Dr. Moore&apos;s newsletter for financial tips, event announcements, and exclusive content.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-900"
          />
          <button 
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-yellow-400 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
