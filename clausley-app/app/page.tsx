'use client'

import React from 'react'
import { Carousel } from '../components/Carousel.tsx'
import Header from '../components/Header.tsx'
// import LoginSignupCard from "@/components/LoginSignupCard";

interface LandingPageContentProps {
  images: string[];
}

const LandingPageContent: React.FC<LandingPageContentProps> = ({ images }) => (
  <main className="flex-grow flex items-center justify-center p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
      <div className="space-y-6">
        <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden aspect-w-16 aspect-h-9">
          <Carousel images={images} />
        </div>
        <h2 className="text-4xl font-bold">
          AI-First Legal <span className="text-blue-500">Compliance</span>
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Automate clause analysis, generate policies, and stay compliant across all jurisdictions with intelligent AI assistance.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="px-3 py-1 rounded-full bg-green-200 text-green-800 text-sm">GDPR Ready</span>
          <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-sm">AI Act Compliant</span>
          <span className="px-3 py-1 rounded-full bg-purple-200 text-purple-800 text-sm">Multi-Jurisdiction</span>
        </div>
      </div>
      {/* <LoginSignupCard /> */}
    </div>
  </main>
);

const Home: React.FC = () => {
  const images = [
    '/ss1.png',
    '/ss2.png',
    '/ss3.png',
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col">
      <Header />
      <LandingPageContent images={images} />
    </div>
  );
};

export default Home;