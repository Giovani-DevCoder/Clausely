'use client';

import React from 'react';
import Header from '../Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLayout = ({ children }) => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Projects', href: '/projects', icon: '📁' },
    { name: 'Region Selector', href: '/new/region', icon: '📍' },
    { name: 'Legal Briefs', href: '/legal-briefs', icon: '📄' },
    { name: 'Dataset Explorer', href: '/dataset-explorer', icon: '🔍' },
    { name: 'Agent Console', href: '/agent', icon: '🤖' },
    { name: 'Model Evaluation', href: '/model-evaluation', icon: '📈' },
    { name: 'Model & API Configuration', href: '/model-api-config', icon: '⚙️' },
    { name: 'TechDocs', href: '/tech-docs', icon: '📚' },
    { name: 'Settings', href: '/settings', icon: '🔧' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4 pt-6">
          <nav>
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <Link href={item.href} className={`flex items-center p-3 rounded-lg transition-colors ${pathname === item.href ? 'bg-blue-500 text-white' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
                    <span className="mr-4 text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 bg-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;