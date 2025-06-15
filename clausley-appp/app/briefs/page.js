'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const BriefsPage = () => {
  const briefs = [
    { id: 1, title: 'Contract Review Brief - Q1 2023', date: '2023-03-15', status: 'Completed' },
    { id: 2, title: 'GDPR Compliance Analysis - Project Beta', date: '2023-06-01', status: 'In Progress' },
    { id: 3, title: 'Patent Application Summary - New Tech', date: '2023-09-20', status: 'Pending Review' },
    { id: 4, title: 'Litigation Support Document - Case 123', date: '2023-11-10', status: 'Completed' },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8 text-center">Legal Briefs</h1>
      <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Title</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
              <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {briefs.map((brief) => (
              <tr key={brief.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">{brief.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{brief.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${brief.status === 'Completed' ? 'bg-green-100 text-green-800' : brief.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}>
                    {brief.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-600">View</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
};

export default BriefsPage;