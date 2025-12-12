"use client";

import React from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Menu } from 'lucide-react';

const Header = () => {
  const t = useTranslations('nav');

  const navLinks = [
    { href: '/about', label: t('about') },
    { href: '/books', label: t('books') },
    { href: '/tools', label: t('tools') },
    { href: '/training', label: t('training') },
    { href: '/speaking', label: t('speaking') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Dr. Edmund Moore</span>
        </Link>

        <div className="flex items-center gap-4">
          {/* Language Switcher - Desktop */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Button key={link.href} variant="ghost" asChild>
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <Button key={link.href} variant="ghost" className="justify-start" asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </nav>
              <Separator className="my-4" />
              <div className="px-2">
                <LanguageSwitcher />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
