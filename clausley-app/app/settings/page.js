'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailUpdatesEnabled, setEmailUpdatesEnabled] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    console.log('Settings saved:', { notificationsEnabled, emailUpdatesEnabled });
    alert('Settings saved successfully!');
  };

  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8 text-center">Settings</h1>
      <form onSubmit={handleSaveSettings} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
          <div className="flex items-center justify-between mb-4">
            <label htmlFor="notifications" className="text-gray-700 dark:text-gray-300">Enable Notifications</label>
            <input
              type="checkbox"
              id="notifications"
              checked={notificationsEnabled}
              onChange={(e) => setNotificationsEnabled(e.target.checked)}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label htmlFor="email-updates" className="text-gray-700 dark:text-gray-300">Receive Email Updates</label>
            <input
              type="checkbox"
              id="email-updates"
              checked={emailUpdatesEnabled}
              onChange={(e) => setEmailUpdatesEnabled(e.target.checked)}
              className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
            <input
              type="text"
              id="username"
              defaultValue="john.doe"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              defaultValue="john.doe@example.com"
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled
            />
          </div>
          <button
            type="button"
            className="w-full p-3 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 transition duration-300"
          >
            Change Password
          </button>
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        >
          Save Settings
        </button>
      </form>
    </DashboardLayout>
  );
};

export default SettingsPage;