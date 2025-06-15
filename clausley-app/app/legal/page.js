'use client';

import React from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';

const LegalPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-8 text-center">Legal Information</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Welcome to Clausely. By accessing or using our service, you agree to be bound by these Terms of Service and all terms incorporated by reference. If you do not agree to all of these terms, do not use our service.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We reserve the right to change or modify these Terms at any time and in our sole discretion. If we make changes to these Terms, we will provide notice of such changes, such as by sending an email notification, providing notice through the Service, or updating the "Last Updated" date at the top of these Terms. Your continued use of the Service will confirm your acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Privacy Policy</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Your privacy is important to us. This Privacy Policy explains how Clausely collects, uses, and discloses information about you. This Privacy Policy applies to information we collect when you use our websites and other online products and services that link to this Privacy Policy (collectively, the "Service"), or when you otherwise interact with us.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the "Last Updated" date at the top of this policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you an email notification).
        </p>

        <h2 className="text-2xl font-semibold mb-4 mt-6">Disclaimer</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The information provided by Clausely on this website is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default LegalPage;