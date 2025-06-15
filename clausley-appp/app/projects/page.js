'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const ProjectsPage = () => {
  const projects = [
    { id: 1, name: 'Clausely Compliance Engine', owner: 'Clausely', lastUpdated: '2 days ago', jurisdictions: ['EU', 'USA'], status: 'In Progress', tags: ['GDPR', 'AI Act'] },
    { id: 2, name: 'FinGuard AI', owner: 'NovaFinTech', lastUpdated: '5 days ago', jurisdictions: ['India'], status: 'Completed', tags: ['DPDP', 'Financial'] },
    { id: 3, name: 'MedComply', owner: 'BioBridge Labs', lastUpdated: '1 day ago', jurisdictions: ['USA'], status: 'In Progress', tags: ['HIPAA', 'AI Act'] },
    { id: 4, name: 'AgroComply Dashboard', owner: 'Clausely', lastUpdated: '10 days ago', jurisdictions: ['Africa'], status: 'Archived', tags: ['Agri', 'Privacy'] },
  ];

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          New Project
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-6">Manage all your compliance projects and track their progress.</p>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Filters & Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input type="text" placeholder="Search by name..." className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white" />
          <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
            <option>All Status</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>On Hold</option>
            <option>Archived</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
            <option>All Regions</option>
            <option>EU</option>
            <option>USA</option>
            <option>India</option>
            <option>Africa</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white">
            <option>Last Modified</option>
            <option>Name (A-Z)</option>
            <option>Name (Z-A)</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md dark:text-white">Grid View</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md dark:text-white">Table View</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">Export</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 relative">
            <div className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 cursor-pointer">...</div>
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Owner: {project.owner}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Last Updated: {project.lastUpdated}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.jurisdictions.map((jurisdiction) => (
                <span key={jurisdiction} className="text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
                  {jurisdiction}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-2 py-1 rounded-full ${project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-end space-x-2">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-blue-600 hover:underline">Export</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default ProjectsPage;