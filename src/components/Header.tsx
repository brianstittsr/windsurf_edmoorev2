"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-gray-900">Dr. Edmund Moore</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-900 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="text-gray-900 hover:text-blue-700 font-medium">
            About
          </Link>
          <Link href="/books" className="text-gray-900 hover:text-blue-700 font-medium">
            Books
          </Link>
          <Link href="/tools" className="text-gray-900 hover:text-blue-700 font-medium">
            Tools
          </Link>
          <Link href="/training" className="text-gray-900 hover:text-blue-700 font-medium">
            Training
          </Link>
          <Link href="/speaking" className="text-gray-900 hover:text-blue-700 font-medium">
            Speaking
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-700 font-medium">
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            <Link href="/about" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              About
            </Link>
            <Link href="/books" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              Books
            </Link>
            <Link href="/tools" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              Tools
            </Link>
            <Link href="/training" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              Training
            </Link>
            <Link href="/speaking" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              Speaking
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-700 py-2 font-medium" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
