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
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md p-4 pt-8">
        <div className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pl-4">Clausely</div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} className={`flex items-center p-3 rounded-lg ${pathname === item.href ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
                  <span className="mr-3 text-xl">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <Header />
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;