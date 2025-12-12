"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

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
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Dr. Edmund Moore</h3>
            <p className="text-muted-foreground">
              Empowering families, individuals, and communities through knowledge, discipline, and legacy-building tools.
            </p>
            <p className="italic text-muted-foreground">
              &quot;Doing Nothing is an Option.&quot; – Dr. Edmund Moore
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Button key={link.href} variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <nav className="flex flex-col gap-2">
              {contactLinks.map((link) => (
                <Button key={link.href} variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
              <Button variant="link" className="h-auto p-0 justify-start text-muted-foreground hover:text-foreground" asChild>
                <a href="mailto:info@edmundmoore.com">
                  <Mail className="h-4 w-4 mr-2" />
                  info@edmundmoore.com
                </a>
              </Button>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Dr. Edmund Moore. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socialLinks.map((social) => (
              <Button key={social.label} variant="ghost" size="icon" asChild>
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
