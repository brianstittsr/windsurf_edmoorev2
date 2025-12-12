import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl text-center py-20 mx-auto">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
        Achieve <span className="text-blue-700">Financial Freedom</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Dr. Edmund Moore&apos;s mission is to empower you with the tools, knowledge, and strategies to build lasting wealth and take control of your financial future.
      </p>
      <blockquote className="italic text-gray-600 border-l-4 border-blue-700 pl-4 text-left max-w-md mx-auto mb-8">
        &quot;Doing Nothing is an Option.&quot; – Dr. Edmund Moore
      </blockquote>
      <Link 
        href="/tools" 
        className="inline-block bg-blue-700 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-800 transition"
      >
        Try the Financial Freedom Calculator
      </Link>
    </section>
  );
}
