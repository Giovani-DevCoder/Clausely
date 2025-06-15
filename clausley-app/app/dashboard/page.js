'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-2">Compliance Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Monitor audit progress, dataset coverage, and legal compliance across jurisdictions</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Global Jurisdiction Coverage */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Global Jurisdiction Coverage</h2>
            <div className="flex justify-end mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Covered</span>
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300">Not Covered</span>
            </div>
            <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
              Backend maps analytics integration to be implemented
            </div>
            <div className="flex justify-around mt-4 text-center">
              <div>
                <p className="text-2xl font-bold text-blue-600">4</p>
                <p className="text-gray-500 dark:text-gray-400">Covered</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-600">12</p>
                <p className="text-gray-500 dark:text-gray-400">Partial</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">23</p>
                <p className="text-gray-500 dark:text-gray-400">Not Covered</p>
              </div>
            </div>
          </div>

          {/* Audit Progress */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Audit Progress</h2>
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle className="text-gray-200" strokeWidth="10" stroke="currentColor" fill="transparent" r="40" cx="50" cy="50"/>
                  <circle
                    className="text-blue-600 transition-all duration-500 ease-out"
                    strokeWidth="10"
                    strokeDasharray="251.2"
                    strokeDashoffset="60.288"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="40"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900 dark:text-white">68%</div>
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-green-600 dark:text-green-400"><span className="mr-2">✔</span> GDPR Compliance Review</li>
              <li className="flex items-center text-green-600 dark:text-green-400"><span className="mr-2">✔</span> Data Mapping Complete</li>
              <li className="flex items-center text-yellow-600 dark:text-yellow-400"><span className="mr-2">▲</span> Privacy Policy Update</li>
              <li className="flex items-center text-gray-500 dark:text-gray-400"><span className="mr-2">●</span> CCPA Assessment</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dataset Coverage */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Dataset Coverage</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700 dark:text-gray-300">Used Datasets</p>
              <p className="text-green-600 font-semibold">12</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-700 dark:text-gray-300">Missing Datasets</p>
              <p className="text-red-600 font-semibold">4</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-2">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">75% Coverage</p>
            <button className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
              <span className="mr-2">+</span> Add Dataset/doc
            </button>
          </div>

          {/* Recent Legal Updates */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center">
              Recent Legal Updates
              <a href="#" className="text-blue-600 hover:underline text-sm">View All</a>
            </h2>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start">
                  <span className="text-red-500 mr-2">●</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">EU AI Act Amendment</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">New provisions for high-risk AI systems require additional documentation</p>
                    <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">High Priority</span>
                  </div>
                  <span className="ml-auto text-gray-500 dark:text-gray-400 text-sm">2 days ago</span>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-yellow-500 mr-2">●</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">CCPA Regulation Update</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">California updates consent requirements for third-party data sharing</p>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">Medium Priority</span>
                  </div>
                  <span className="ml-auto text-gray-500 dark:text-gray-400 text-sm">1 week ago</span>
                </div>
              </li>
              <li>
                <div className="flex items-start">
                  <span className="text-green-500 mr-2">●</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">PIPEDA Guidelines</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">Updated guidance on cross-border data transfers published</p>
                    <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">Low Priority</span>
                  </div>
                  <span className="ml-auto text-gray-500 dark:text-gray-400 text-sm">2 weeks ago</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;