import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl text-center py-20 mx-auto space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
        Achieve <span className="text-primary">Financial Freedom</span>
      </h1>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        Dr. Edmund Moore&apos;s mission is to empower you with the tools, knowledge, and strategies to build lasting wealth and take control of your financial future.
      </p>
      <blockquote className="italic text-muted-foreground border-l-4 border-primary pl-4 text-left max-w-md mx-auto">
        &quot;Doing Nothing is an Option.&quot; – Dr. Edmund Moore
      </blockquote>
      <Button size="lg" className="rounded-full" asChild>
        <Link href="/tools">
          Try the Financial Freedom Calculator
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </section>
  );
}
