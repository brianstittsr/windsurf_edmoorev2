import React from 'react';
import Link from 'next/link';
import Hero from './components/Hero';
import PhilosophySection from '@/components/PhilosophySection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, Users, ArrowRight, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: Calculator,
      title: 'Freedom Calculator',
      description: 'Personalize your path to financial independence with actionable steps and clear milestones.',
      href: '/tools',
      cta: 'Use Now',
    },
    {
      icon: DollarSign,
      title: 'Practical Tools',
      description: 'Budgeting, debt reduction, and investment tools designed for real results.',
      href: '/tools',
      cta: 'Explore Tools',
    },
    {
      icon: Users,
      title: 'Training & Community',
      description: 'Workshops, courses, and a supportive network to keep you motivated and accountable.',
      href: '/training',
      cta: 'See Training',
    },
  ];

  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center px-4">
        <Hero />
      </div>

      {/* Philosophy Section */}
      <PhilosophySection />

      {/* 30-Day Challenge Banner */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-12">
        <Card className="bg-gradient-to-r from-red-600 to-orange-600 border-0 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -mr-32 -mt-32" />
          <CardHeader className="relative z-10 pb-2">
            <Badge className="w-fit bg-yellow-400 text-yellow-900 hover:bg-yellow-400">
              <Zap className="h-3 w-3 mr-1" />
              TAKE ACTION NOW
            </Badge>
            <CardTitle className="text-3xl md:text-4xl font-bold text-white">
              30-Day Financial Freedom Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <CardDescription className="text-xl text-white/90 mb-6">
              Transform your financial life in just 30 days. Every day you wait costs you money.
              Start TODAY with Dr. Moore&apos;s proven daily action steps!
            </CardDescription>
            <Button size="lg" variant="secondary" className="font-bold" asChild>
              <Link href="/challenge">
                START CHALLENGE NOW
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Highlighted Features */}
      <section className="w-full max-w-6xl mx-auto px-4 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription>{feature.description}</CardDescription>
                <Button variant="link" asChild>
                  <Link href={feature.href}>
                    {feature.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full max-w-2xl mx-auto text-center px-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Take the first step toward financial freedom with Dr. Moore&apos;s proven tools and educational resources.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Dr. Moore</Link>
        </Button>
      </section>
    </main>
  );
}


