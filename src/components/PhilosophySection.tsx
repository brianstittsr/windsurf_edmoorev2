'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Pause, TrendingUp, Brain, Clock } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PhilosophySection() {
  const principles = [
    {
      icon: Pause,
      title: 'Strategic Patience',
      description: 'Sometimes the most powerful financial move is to wait and observe before acting.',
    },
    {
      icon: Brain,
      title: 'Informed Decisions',
      description: 'Make choices based on data and analysis, not emotion or pressure.',
    },
    {
      icon: Clock,
      title: 'Time Advantage',
      description: 'Compound growth and patience often outperform hasty action.',
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Focus',
      description: 'Build wealth through consistent, disciplined strategies over time.',
    },
  ];

  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Doing Nothing is an Option
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dr. Moore&apos;s revolutionary philosophy challenges conventional financial wisdom. 
            Learn when strategic inaction is more powerful than constant activity, and how 
            patience can be your greatest financial asset.
          </p>
        </motion.div>

        {/* Visual Framework */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-12">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">
                    When to Act vs. When to Wait
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-destructive mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Act Now:</p>
                        <p className="text-muted-foreground">High-interest debt, emergency fund gaps, time-sensitive opportunities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Monitor & Prepare:</p>
                        <p className="text-muted-foreground">Market volatility, career transitions, major purchases</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="font-semibold">Strategic Patience:</p>
                        <p className="text-muted-foreground">Long-term investments, compound growth, market timing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full"></div>
                    <div className="absolute inset-8 bg-background rounded-full shadow-lg flex items-center justify-center border">
                      <div className="text-center">
                        <Pause className="w-16 h-16 text-primary mx-auto mb-2" />
                        <p className="text-sm font-semibold">Strategic<br />Inaction</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Core Principles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{principle.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Key Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-primary text-primary-foreground mb-12">
            <CardContent className="p-8 md:p-12 text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-4 italic">
                &quot;In a world obsessed with constant action, the courage to do nothing—strategically—can be your greatest competitive advantage.&quot;
              </blockquote>
              <p className="text-lg opacity-90">— Dr. Edmund Moore</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Discover Your Financial Philosophy
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our Philosophy Assessment Quiz to understand how your current approach aligns 
            with strategic inaction principles and get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/philosophy-quiz">Take the Assessment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/books">Read the Book</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
