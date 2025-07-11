import React from "react";

export default function Hero() {
  return (
    <section className="w-full max-w-3xl text-center py-20 mx-auto">
      <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-lg">
        Achieve <span className="text-yellow-500">Financial Freedom</span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-800 mb-8 font-medium">
        Dr. Edmund Moore&apos;s mission is to empower you with the tools, knowledge, and strategies to build lasting wealth and take control of your financial future.
      </p>
      <blockquote className="italic text-blue-700 border-l-4 border-blue-400 pl-4 mb-8">
        “Doing Nothing is an Option.” – Dr. Edmund Moore
      </blockquote>
      <a href="/tools" className="inline-block bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg shadow hover:bg-blue-800 transition mb-8">
        Try the Financial Freedom Calculator
      </a>
    </section>
  );
}
