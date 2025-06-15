'use client';

'use client';

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Carousel } from '@/components/Carousel';
import Header from '../components/Header';

// 1. Reusable Badge Component
interface BadgeProps {
  text: string;
  color: 'green' | 'yellow' | 'blue' | 'purple';
}

const badgeColors = {
  green: 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200',
  yellow: 'bg-yellow-200 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200',
  blue: 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200',
  purple: 'bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200',
};

const Badge: React.FC<BadgeProps> = ({ text, color }) => (
  <span className={`px-4 py-2 rounded-full text-sm font-semibold ${badgeColors[color]}`}>
    {text}
  </span>
);

// 2. Main Landing Page Content Component
const LandingPageContent: React.FC<{ images: string[] }> = ({ images }) => {
  const router = useRouter();

  const handleGetStartedClick = () => {
    router.push('/dashboard');
  };

  return (
    <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
      {/* Image Section */}
      <div className="w-full max-w-6xl mx-auto mb-8">
        <Carousel images={images} />
      </div>

      {/* Hero Text Section */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
          AI-First Legal <span className="text-blue-600 dark:text-blue-500">Compliance</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400">
          Automate clause analysis, generate policies, and stay compliant across all jurisdictions with intelligent AI assistance.
        </p>
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <Badge text="GDPR Ready" color="green" />
          <Badge text="CCPA Ready" color="yellow" />
          <Badge text="AI Act Compliant" color="blue" />
          <Badge text="Multi-Jurisdiction" color="purple" />
        </div>
        <div className="pt-6">
          <button 
            onClick={handleGetStartedClick}
            className="px-8 py-4 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
            aria-label="Get Started with Clausely"
          >
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

// 3. Main Home Component
const Home: React.FC = () => {
  const images = [
    '/Screenshot 2025-06-14 170316.png',
    '/Screenshot 2025-06-14 170433.png',
    '/Screenshot 2025-06-14 180853.png',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-black text-gray-900 dark:text-white">
      <Header isLandingPage={true} />
      <LandingPageContent images={images} />
    </div>
  );
};

export default Home;