"use client";

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/tools', label: 'Tools' },
    { href: '/training', label: 'Training' },
  ];

  const contactLinks = [
    { href: '/contact', label: 'Contact Us' },
    { href: '/speaking', label: 'Speaking Engagements' },
  ];

  const socialLinks = [
    { href: '#', icon: Facebook, label: 'Facebook' },
    { href: '#', icon: Twitter, label: 'Twitter' },
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Dr. Edmund Moore</h3>
            <p className="text-gray-400 mb-4">
              Empowering families, individuals, and communities through knowledge, discipline, and legacy-building tools.
            </p>
            <p className="italic text-gray-400">
              &quot;Doing Nothing is an Option.&quot;
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <nav className="flex flex-col gap-2">
              {contactLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-400 hover:text-white transition">
                  {link.label}
                </Link>
              ))}
              <a href="mailto:info@edmundmoore.com" className="text-gray-400 hover:text-white transition">
                info@edmundmoore.com
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Dr. Edmund Moore. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.label} 
                href={social.href} 
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
