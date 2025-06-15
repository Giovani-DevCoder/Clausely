'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const FileUploadPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would upload these files to Supabase Storage
    console.log('Uploading files:', selectedFiles);
    alert('Files uploaded (simulated)!');
    router.push('/agent'); // Navigate to the next stage (Agent Console)
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-8">Upload Your Documents</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Select files to upload:</label>
            <input
              type="file"
              id="file-upload"
              multiple
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          {selectedFiles.length > 0 && (
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Selected Files:</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {selectedFiles.map((file, index) => (
                  <li key={index}>{file.name} ({Math.round(file.size / 1024)} KB)</li>
                ))}
              </ul>
            </div>
          )}

          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
            Supported types: Technical Design Doc (TDD), Architecture Doc, SRS, API Doc, Project Plan.
          </p>

          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
            disabled={selectedFiles.length === 0}
          >
            Upload and Continue
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default FileUploadPage;